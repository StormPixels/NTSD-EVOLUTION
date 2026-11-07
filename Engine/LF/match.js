/*\
 * match
 * a match hosts a game.
 * a match is a generalization above game modes (e.g. VSmode, stagemode, battlemode)
\*/

define(['core/util', 'core/controller', 'LF/sprite-select',
  'LF/network', 'LF/factories', 'LF/scene', 'LF/background', 'LF/AI', 'third_party/random', 'LF/util',
  'LF/global'],
  function (Futil, Fcontroller, Fsprite,
    network, factory, Scene, Background, AI, Random, util,
    Global) {
    const GA = Global.application
    /*\
     * match
     [ class ]
     |  config =
     |  {
     |  manager,//the game manager
     |  state,  //the state machine handling various events in a match
     |  package //the content package
     |  }
    \*/
    function match(config) {
      const $ = this
      $.manager = config.manager
      $.state = config.state
      $.data = config.package.data
      $.sound = config.manager.sound
      $.spec = $.data.properties.data
      $.time
    }

    match.prototype.create = function (setting) {
      const $ = this
      let object_ids = []
      const AI_ids = []
      for (var i = 0; i < setting.player.length; i++) {
        // (lazy) now load all characters and associated data files
        object_ids.push(setting.player[i].id)
        object_ids = object_ids.concat(Futil.extract_array(util.select_from($.data.object, { id: setting.player[i].id }).pack, 'id').id)
        for (index in $.data.object) {
          if ($.data.object[index].id == setting.player[i].id && $.data.object[index].AI) {
            AI_ids.push($.data.object[index].AI)
          }
        }
        if (setting.player[i].controller.type === 'AIscript') {
          AI_ids.push(setting.player[i].controller.id)
        }
      }
      if (!setting.set) { setting.set = {} }

      $.gameover_state = false
      $.randomseed = $.new_randomseed()
      $.create_scenegraph()
      $.control = $.create_controller(setting.control)
      $.functionkey_control = setting.control
      if ($.functionkey_control &&
        $.functionkey_control.restart) {
        $.functionkey_control.restart()
      }
      if ($.manager.panel_layer) {
        $.panel = []
        for (var i = 0; i < 8; i++) $.panel[i] = {}
      }
      $.overlay_message('loading')
      $.tasks = [] // pending tasks
      $.AIscript = []
      if ($.manager.summary) {
        $.manager.summary.hide()
      }
      $.manager.canvas.render()

      let already = false
      this.data.load({
        object: object_ids,
        background: setting.background ? [setting.background.id] : [],
        AI: AI_ids
      }, function () {  // when all necessary data files are loaded
        $.create_background(setting.background)
        $.create_effects()
        if (setting.player) {
          $.create_characters(setting.player, {pane: true})
        }
        if (setting.set.weapon) {
          $.drop_weapons(setting.set.weapon)
        }

        Fsprite.masterconfig_set('onready', onready)
        setTimeout(function () { onready() }, 8000) // assume it is ready after 8 seconds
      })
      function onready() {
        if (!already) { // all loading finished
          already = true
          if ($.manager.overlay_mess) {
            $.manager.overlay_mess.hide()
          }
          if (setting.set.demo_mode) {
            $.demo_mode = true
            $.overlay_message('demo')
          }
          $.create_timer()
        }
      }
    }

    match.prototype.destroy = function () {
      const $ = this
      $.time.paused = true
      $.destroyed = true
      network.clearInterval($.time.timer)

      // destroy all objects
      $.for_all('destroy')
      $.background.destroy()
      if ($.panel) {
        for (let i = 0; i < $.panel.length; i++) {
          if ($.panel[i].hp) {
            $.panel[i].hp.remove()
            $.panel[i].hp_bound.remove()
            $.panel[i].mp.remove()
            $.panel[i].mp_bound.remove()
            $.panel[i].spic.remove()
          }
        }
      }
    }

    match.prototype.log = function (mes) {
      console.log(this.time.t + ': ' + mes)
    }

    match.prototype.create_non_player_characters = function (players) {
      const $ = this
      $.tasks.push({
        task: 'create_non_player_characters',
        players,
      })
    }

    match.prototype.create_transform_character = function (player) {
      const $ = this
      $.tasks.push({
        task: 'create_transform_character',
        player,
      })
    }
    
    match.prototype.create_multiple_objects = function (opoint, parent, number, vz) {
      const $ = this
      $.tasks.push({
        task: 'create_multiple_objects',
        number: number,
        // [fix] kalau parent adalah specialattack (mis. Wind turunan dari Wind
        // lain), pakai parent MILIK specialattack itu - yang berkat fix yang
        // sama diterapkan di setiap hop, sudah pasti mengarah ke karakter ASLI,
        // bukan specialattack perantara. Tanpa ini, objek yang di-spawn (mis.
        // bunshin) akan punya .parent = specialattack yang gak punya .stat ->
        // crash "Cannot read properties of undefined (reading 'attack')" di
        // character.attacked().
        parent: (parent.type === 'specialattack' && parent.parent) ? parent.parent : parent,
        opoint: opoint,
        // [fix] pakai owner_team (tim asli) kalau parent-nya specialattack yg
        // punya field itu - mencegah anak opoint (mis. bunshin) ikut ketuker tim
        // gara-gara parent-nya sempat kena efek pantulan/deflect (lihat
        // specialattack.js: "$.team = att.team"). Karakter biasa tidak punya
        // owner_team, jadi otomatis fallback ke .team seperti biasa.
        team: parent.owner_team !== undefined ? parent.owner_team : parent.team,
        pos: parent.mech.make_point(opoint),
        z: parent.ps.z,
        dir: parent.ps.dir,
        dvz: parent.dirv() * 2,
        vz: vz
      })
    }

    match.prototype.create_object = function (opoint, parent) {
      const $ = this
      $.tasks.push({
        task: 'create_object',
        // [fix] sama seperti create_multiple_objects di atas
        parent: (parent.type === 'specialattack' && parent.parent) ? parent.parent : parent,
        opoint: opoint,
        team: parent.owner_team !== undefined ? parent.owner_team : parent.team,
        pos: parent.mech.make_point(opoint),
        z: parent.ps.z,
        dir: parent.ps.dir,
        dvz: parent.dirv() * 2
      })
    }

    match.prototype.destroy_object = function (obj) {
      const $ = this
      $.tasks.push({
        task: 'destroy_object',
        obj: obj
      })
    }

    // all methods below are considered private

    match.prototype.create_scenegraph = function () {
      const $ = this
      $.scene = new Scene()
      for (const objecttype in factory) {
        $[objecttype] = {}
      }
    }

    match.prototype.create_timer = function () {
      const $ = this
      $.time =
      {
        t: 0,
        paused: false,
        timer: null,
        $fps: util.div('fps')
      }
      if (!$.time.$fps) $.calculate_fps = function () { }
      $.time.timer = network.setInterval(function () { return $.frame() }, 1000 / Global.gameplay.framerate)
    }

    match.prototype.frame = function () {
      const $ = this
      if ($.control) { $.control.fetch() }
      if (!$.time.paused || $.time.paused === 'F2') {
        for (const i in $.character) {
          $.character[i].con.fetch()
          $.character[i].combodec.frame()
        }
        if ($.destroyed) {
          return
        }
        $.TU_trans()
        if ($.time.t === 0) {
          $.match_event('start')
        }
        $.time.t++
        $.manager.canvas.render()
        $.calculate_fps()

        if ($.time.paused === 'F2') {
          $.time.paused = true
        }
      } else {
        if ($.time.$fps) {
          $.time.$fps.value = 'paused'
        }
      }
      return $.game_state()
    }

    match.prototype.game_state = function () {
      const $ = this
      const d = {}
      d.time = $.time.t
      for (const i in $.character) {
        const c = $.character[i]
        d[i] = [c.ps.x, c.ps.y, c.ps.z, c.health.hp, c.health.mp]
      }
      return d
    }

    match.prototype.TU_trans = function () {
      const $ = this
      $.emit_event('transit')
      $.process_tasks()
      $.emit_event('TU')
      $.resolve_platforms() // [Neora] one-way platform collision (bdyp)
      $.background.TU()
      $.sound.TU()
      $.show_hp()
      $.check_gameover()
      const AI_frameskip = 3 // AI script runs at a lower framerate, and is still very reactive
      if ($.time.t % AI_frameskip === 0) {
        for (let i = 0; i < $.AIscript.length; i++) {
          $.AIscript[i].TU()
        }
      }
    }

    // [Neora] one-way platform (bdyp): tembus dari kiri/kanan/bawah, solid kalau dipijak dari atas.
    // Perilakunya disamain persis sama lantai asli: ada friksi (mechanics.js, blok "only when on
    // the ground") dan trigger animasi landing (character.js, blok "predict falling onto ground")
    // begitu pertama kali nyentuh permukaan. Dijalanin sekali per tick, setelah semua object
    // selesai update fisiknya (emit_event('TU')).
    match.prototype.resolve_platforms = function () {
      const $ = this
      const GC = Global.gameplay
      // 1. kumpulin semua bdyp aktif tick ini dari semua object (biasanya specialattack/BG-effect)
      const platforms = []
      for (const objecttype in factory) {
        for (const i in $[objecttype]) {
          const owner = $[objecttype][i]
          if (!owner || owner.removed || !owner.frame || !owner.frame.D || !owner.frame.D.bdyp) { continue }
          const list = Futil.make_array(owner.frame.D.bdyp)
          list.forEach(function (b, bi) {
            platforms.push({
              id: owner.uid + ':' + bi, // [fix] identity stabil, bukan reference object (yang selalu baru tiap tick)
              x1: owner.ps.x + b.x,
              x2: owner.ps.x + b.x + b.w,
              y: owner.ps.y + b.y, // level permukaan atas platform, ini yang jadi "solid"
              z1: owner.ps.z + b.z,
              z2: owner.ps.z + b.z + b.zw
            })
          })
        }
      }
      if (platforms.length === 0) { return }

      // 2. cek tiap character
      for (const i in $.character) {
        const obj = $.character[i]
        if (!obj || obj.removed) { continue }
        if (obj.ps.prev_y === undefined) { obj.ps.prev_y = obj.ps.y; continue } // tick pertama, belum ada history

        const falling = obj.ps.vy >= 0 // konvensi: y=0 lantai, y<0 di udara, vy>=0 = turun/diem
        const PLATFORM_LEAVE_THRESHOLD = 10 // [Neora] toleransi wobble kecil (attack/recoil) biar gak dianggep lompat beneran
        let onPlat = null
        for (let p = 0; p < platforms.length; p++) {
          const P = platforms[p]
          const overlapX = obj.ps.x >= P.x1 && obj.ps.x <= P.x2
          const overlapZ = obj.ps.z >= P.z1 && obj.ps.z <= P.z2
          if (!overlapX || !overlapZ) { continue }
          // "masih di area platform" (buat TRACKING doang) -> posisi based, biar wobble
          // kecil (attack/recoil) gak dianggep lepas dan gak retrigger landing-frame
          const stillNearSurface = obj.ps.on_platform === P.id && obj.ps.y >= P.y - PLATFORM_LEAVE_THRESHOLD
          const crossedFromAbove = falling && obj.ps.prev_y <= P.y && obj.ps.y >= P.y // baru aja mendarat
          if (stillNearSurface || crossedFromAbove) {
            onPlat = P
            break
          }
        }

        if (onPlat) {
          const justLanded = obj.ps.on_platform !== onPlat.id // [fix] bandingin id, bukan reference
          obj.ps.on_platform = onPlat.id // tracking tetep di-update walau gak di-clamp tick ini

          // [fix] CLAMP fisik (y/vy) cuma dijalanin kalau vy>=0 (lagi turun/diem). Kalau
          // vy<0 (lagi didorong naik -- entah jump asli atau recoil kecil attack), JANGAN
          // di-clamp sama sekali tick ini, biarin fisika aslinya jalan bebas. Ini yang
          // sebelumnya bikin jump ke-cancel paksa (vy langsung di-nolin walau baru aja
          // ditekan tombol jump).
          if (obj.ps.vy >= 0) {
            obj.ps.y = onPlat.y
            obj.ps.vy = 0
            // sync ulang posisi visual sprite, soalnya sp.set_x_y udah kepanggil duluan di
            // dynamics() pake y yang belum di-clamp punya kita
            obj.ps.sy = obj.ps.y - obj.frame.D.centery
            obj.mech.project()

            // [Neora] friksi identik lantai asli
            if (obj.ps.vx) { obj.ps.vx += (obj.ps.vx > 0 ? -1 : 1) * obj.ps.fric }
            if (obj.ps.vz) { obj.ps.vz += (obj.ps.vz > 0 ? -1 : 1) * obj.ps.fric }
            if (obj.ps.vx !== 0 && obj.ps.vx > -GC.min_speed && obj.ps.vx < GC.min_speed) { obj.ps.vx = 0 }
            if (obj.ps.vz !== 0 && obj.ps.vz > -GC.min_speed && obj.ps.vz < GC.min_speed) { obj.ps.vz = 0 }

            // [Neora] replikasi character.js: frame 212 dipakai juga sebagai sinyal
            // "balik ke idle" (auto-resolve ke frame 999 -> next_frame_D nganggep itu
            // reset ke frame 0). Di lantai asli ini dicek pake y===0; di platform kita
            // pake onPlat.y. Dijalanin TIAP TICK (bukan cuma pas justLanded), soalnya
            // attack yang berakhir natural lewat frame 212 bisa kejadian kapan aja,
            // gak cuma pas momen landing.
            if (obj.ps.y === onPlat.y && obj.ps.vy === 0 && obj.frame.N === 212 && obj.frame.PN !== 211) {
              obj.trans.frame(999)
            }

            if (justLanded) {
              // cuma paksa transisi ke frame landing kalau emang lagi di frame jump
              // generik (212, konsisten sama pengecekan yang sama di character.js). Kalau
              // karakter lagi di frame lain (attack di udara, dash, dll), JANGAN diapa-apain.
              const result = obj.state_update && obj.state_update('fall_onto_ground')
              if (result) {
                obj.trans.frame(result, 15)
              } else if (obj.frame.N === 212) { // jumping generik
                obj.trans.frame(215, 15) // crouch (landing dari jump)
              }
            }
          }
        } else {
          obj.ps.on_platform = null
        }

        obj.ps.prev_y = obj.ps.y
      }
    }

    match.prototype.match_event = function (E) {
      const $ = this
      if ($.state && $.state.event) $.state.event.call(this, E)
    }

    match.prototype.emit_event = function (E) {
      const $ = this
      $.match_event(E)
      $.for_all(E)
    }

    match.prototype.for_all = function (oper) {
      const $ = this
      for (const objecttype in factory) {
        for (const i in $[objecttype]) {
          $[objecttype][i][oper]()
        }
      }
    }

    // [Neora] states.inc 3xxxyyy: bekukan semua object selama `duration` tick.
    // type 0/2 = semua kecuali `source`. type 1 = semua kecuali tim `source`.
    match.prototype.timestop_trigger = function (source, type, duration) {
      const $ = this
      console.log('[TimeStop] dipicu oleh uid=' + source.uid + ' type=' + type + ' duration=' + duration)
      let count = 0
      for (const objecttype in factory) {
        for (const i in $[objecttype]) {
          const obj = $[objecttype][i]
          if (obj === source) { continue } // pemicu TimeStop kebal
          if (type === 1 && obj.team === source.team) { continue } // tim pemicu kebal (type 1)
          obj.timestop = duration
          count++
        }
      }
      console.log('[TimeStop] ' + count + ' object dibekukan')
    }

    match.prototype.process_tasks = function () {
      const $ = this
      for (let i = 0; i < $.tasks.length; i++) {
        $.process_task($.tasks[i])
      }
      $.tasks.length = 0
    }
    match.prototype.process_task = function (T) {
      const $ = this
      switch (T.task) {
        case 'create_object':
          if (T.opoint.oid) {
            const OBJ = util.select_from($.data.object, { id: T.opoint.oid })
            if (!OBJ) {
              console.error('Object', T.opoint.oid, 'not exists')
              break
            }
            if (OBJ.type === 'character') {
              // [Neora] Opoint ke oid tipe karakter dgn AI (mis. Naruto_clone id:33, AI:4) SEKARANG
              // TIDAK langsung jadi NPC saat spawn. Dia jadi specialattack dulu (sama seperti
              // shadow biasa) supaya kena gravitasi/fisika opoint normal (bisa jatuh, mantul,
              // dilempar) — baru berubah jadi NPC penuh (AI aktif, bisa nyerang balik) begitu
              // dia MENDARAT DI GROUND atau KENA MUSUH. Lihat specialattack.js: pending_bunshin
              // + become_bunshin().
              const shadow = new factory.specialattack({ match: $, team: T.team }, OBJ.data, T.opoint.oid)
              shadow.parent = T.parent
              shadow.init(T)
              if (OBJ.AI) {
                // paksa gravity nyala: default specialattack utk oid ini mass=0 (bukan
                // projectile terdaftar di GC.specialattack_projectiles) — tanpa ini dia
                // gak akan pernah "landing" jadi ground-check di atas gak akan pernah kena.
                if (!shadow.mech.mass) {
                  shadow.mech.mass = Global.gameplay.default.machanics.mass
                }
                shadow.pending_bunshin = {
                  name: OBJ.name || '+clone',
                  AI: OBJ.AI,
                  id: T.opoint.oid,
                  team: T.team,
                  parent: T.parent,
                  bmp: OBJ.data.bmp,
                }
              }
              const suid = $.scene.add(shadow)
              $.specialattack[suid] = shadow
              break
            }
            const config = { match: $, team: T.team }
            var obj = new factory[OBJ.type](config, OBJ.data, T.opoint.oid)
            obj.parent = T.parent
            obj.init(T)
            var uid = $.scene.add(obj)
            $[obj.type][uid] = obj
            // [fix] opoint kind:2 = senjata harus langsung dipasang ke tangan
            // pemanggil (mis. Rasengan, kunai bundle), bukan cuma di-spawn lepas
            // di dunia. Tanpa ini, hold.obj tetap null sehingga wpoint() tidak
            // pernah memanggil weapon.act() -> jatuh ke kombo pukulan default.
            if (T.opoint.kind === 2 && T.parent && typeof T.parent.hold_weapon === 'function') {
              T.parent.hold_weapon(obj)
            }
          }
          break
        case 'create_multiple_objects':
          let vz_array = []
          let max_number = 0
          max_number = Math.floor(T.number / 2)
          if (T.number % 2 == 1) { // calculate array of vz for ajusting ninja star or arrow's z coord
            for (let temp1 = -1 * max_number; temp1 <= max_number; temp1++) {
              vz_array.push(temp1 * T.vz)
            }
          } else {
            for (let temp1 = -1 * max_number; temp1 <= max_number; temp1++) {
              if (temp1 != 0) {
                vz_array.push(temp1 * T.vz)
              }
            }
          }
          for (vz of vz_array) {
            if (T.opoint.oid) {
              const OBJ = util.select_from($.data.object, { id: T.opoint.oid })
              if (!OBJ) {
                console.error('Object', T.opoint.oid, 'not exists')
                break
              }
              if (OBJ.type === 'character') {
                const shadow2 = new factory.specialattack({ match: $, team: T.team }, OBJ.data, T.opoint.oid)
                shadow2.parent = T.parent
                shadow2.init(T)
                shadow2.ps.vz = vz
                if (T.dir === 'left') { shadow2.ps.vx += Math.abs(vz) }
                else { shadow2.ps.vx -= Math.abs(vz) }
                if (OBJ.AI) {
                  if (!shadow2.mech.mass) {
                    shadow2.mech.mass = Global.gameplay.default.machanics.mass
                  }
                  shadow2.pending_bunshin = {
                    name: OBJ.name || '+clone',
                    AI: OBJ.AI,
                    id: T.opoint.oid,
                    team: T.team,
                    parent: T.parent,
                    bmp: OBJ.data.bmp,
                  }
                }
                const suid2 = $.scene.add(shadow2)
                $.specialattack[suid2] = shadow2
                continue
              }
              const config = { match: $, team: T.team }
              var obj = new factory[OBJ.type](config, OBJ.data, T.opoint.oid)
              obj.parent = T.parent
              obj.init(T)
              obj.ps.vz = vz
              if (T.dir === 'left') {
                obj.ps.vx += Math.abs(vz)
              } else {
                obj.ps.vx -= Math.abs(vz)
              }
              var uid = $.scene.add(obj)
              $[obj.type][uid] = obj
              // [fix] sama seperti create_object di atas: kind:2 = auto-equip ke tangan
              if (T.opoint.kind === 2 && T.parent && typeof T.parent.hold_weapon === 'function') {
                T.parent.hold_weapon(obj)
              }
            }
          }
          break
        case 'create_non_player_characters':
          $.create_characters(T.players, { pane: false })
          break
        case 'create_transform_character':
          $.create_characters([T.player], { replace: true })
          break
        case 'destroy_object':
          var obj = T.obj
          obj.destroy()
          var uid = $.scene.remove(obj)
          delete $[obj.type][uid]
          break
      }
    }

    match.prototype.calculate_fps = function () {
      const $ = this
      const mul = 10
      if ($.time.t % mul === 0) {
        const ot = $.time.time
        $.time.time = new Date().getTime()
        const diff = $.time.time - ot
        $.time.$fps.value = Math.round(1000 / diff * mul) + 'fps'
      }
    }
    
    match.prototype.transform_panel = function (from_uid, to_uid) {
      const $ = this
      // ==========panel==========
      let from_index = -1
      let to_index = -1
      for (index in $.panel) {
        if (from_uid) {
          if ($.panel[index].uid === from_uid) {
            from_index = index
          }
        }
        if (to_uid) {
          if ($.panel[index].uid === to_uid) {
            to_index = index
          }
        }
      }
      if (from_index == -1) { return }
      if (to_index != -1) {
        $.panel[from_index].spic.temp_img = {0: $.panel[from_index].spic.img[0]}
        $.panel[from_index].spic.img[0] = $.panel[to_index].spic.img[0]
      } else if ($.panel[from_index].spic.temp_img) {
        // [fix] cuma revert kalau memang pernah di-swap sebelumnya (temp_img ada).
        // Sebelumnya ini selalu jalan walau temp_img belum pernah di-set (kasus transform
        // generik kayak Deidara yang manggil transform_panel dengan 1 argumen saja),
        // hasilnya spic.img jadi undefined dan bikin render loop panel crash untuk SEMUA karakter.
        $.panel[from_index].spic.img = $.panel[from_index].spic.temp_img
      }
    }

    match.prototype.create_characters = function (players, option) {
      const $ = this
      const char_config =
      {
        match: $,
        controller: null,
        team: 0
      }
      for (let i = 0; i < players.length; i++) {
        var player = players[i]
        var player_obj = util.select_from($.data.object, { id: player.id })
        // Guard: jika data tidak ada di registry, pinjam dari karakter aktif dengan id sama
        if (!player_obj || !player_obj.data) {
          for (const _uid in $.character) {
            if ($.character[_uid].id === player.id) {
              player_obj = { id: player.id, type: 'character', data: $.character[_uid].data, pack: $.character[_uid].pack || [] }
              break
            }
          }
        }
        if (!player_obj || !player_obj.data) {
          console.error('create_characters: data tidak ditemukan untuk id', player.id)
          continue
        }
        var pdata = player_obj.data
        if (player_obj.pack) { preload_pack_images(player_obj) }
        if (option && option.replace && player.controller && player.controller.child) {
          player.controller.child.length = 0
        }
        const controller = setup_controller(player)
        // create character
        const char = new factory.character(char_config, pdata, player.id)
        if (controller.type === 'AIcontroller') {
          const _AIobj = util.select_from($.data.AI, { id: player.controller.id })
          if (_AIobj && _AIobj.data) {
            $.AIscript.push(new _AIobj.data(char, $, controller))
          } else {
            const _fallback = util.select_from($.data.AI, { id: 4 })
            if (_fallback && _fallback.data) {
              $.AIscript.push(new _fallback.data(char, $, controller))
            }
          }
        }
        // spec
        if (player.spec) {
          for (let I in player.spec) { // assign each spec into character
            assign_character_spec(char, player.spec, I)
          }
        }
        // outside spec
        // positioning
        if (player.pos) {
          char.set_pos(player.pos.x, player.pos.y, player.pos.z)
        } else {
          const pos = $.background.get_pos($.random(), $.random())
          char.set_pos(pos.x, pos.y, pos.z)
        }
        // [fix] opoint spawn sebelumnya selalu default hadap 'right' karena player.dir gak pernah dibaca/diterapkan
        if (player.dir && player.dir !== char.ps.dir) {
          char.switch_dir(player.dir)
        }
        // option
        var uid
        if (option.replace) {
          uid = $.scene.replace(player.spec.replace_from, char)
          char.uid = uid
          player.spec.replace_from.destroy()
        } else {
          uid = $.scene.add(char)
        }

        $.character[uid] = char
        // pane
        if ($.panel && option.pane) {
          create_pane(i)
        }
      }
      function preload_pack_images(char) {
        for (let j = 0; j < char.pack.length; j++) {
          const obj = char.pack[j].data
          if (obj.bmp && obj.bmp.file) {
            for (let k = 0; k < obj.bmp.file.length; k++) {
              const file = obj.bmp.file[k]
              for (const m in file) {
                if (typeof file[m] === 'string' && m.indexOf('file') === 0) {
                  Fsprite.preload_image(file[m])
                }
              }
            }
          }
        }
      }
      function setup_controller(player) {
        let controller
        switch (player.controller.type) {
          case 'AIscript':
            controller = new AI.controller()
            break
          default:
            controller = player.controller
            controller.child.push($)
        }
        char_config.controller = controller
        char_config.team = player.team
        controller.sync = true
        return controller
      }
      function create_pane(i) {
        const X = $.data.UI.data.panel.pane_width * (i % 8)
        const Y = $.data.UI.data.panel.pane_height * Math.floor(i / 8)
        // tampilkan background panel slot ini
        if ($.manager.panels && $.manager.panels[i]) {
          $.manager.panels[i].set_alpha(1)
        }
        const spic = new Fsprite({
          canvas: $.manager.panel_layer,
          img: pdata.bmp.small,
          xy: { x: X + $.data.UI.data.panel.x, y: Y + $.data.UI.data.panel.y },
          wh: 'fit'
        })
        $.panel[i].uid = uid
        $.panel[i].name = player.name
        $.panel[i].spic = spic
        $.panel[i].hp_bound = new Fsprite({ canvas: $.manager.panel_layer })
        $.panel[i].hp_bound.set_x_y(X + $.data.UI.data.panel.hpx, Y + $.data.UI.data.panel.hpy)
        $.panel[i].hp_bound.set_w_h($.data.UI.data.panel.hpw, $.data.UI.data.panel.hph)
        $.panel[i].hp_bound.set_bgcolor($.data.UI.data.panel.hp_dark)
        $.panel[i].hp = new Fsprite({ canvas: $.manager.panel_layer })
        $.panel[i].hp.set_x_y(X + $.data.UI.data.panel.hpx, Y + $.data.UI.data.panel.hpy)
        $.panel[i].hp.set_w_h($.data.UI.data.panel.hpw, $.data.UI.data.panel.hph)
        $.panel[i].hp.set_bgcolor($.data.UI.data.panel.hp_bright)
        $.panel[i].mp_bound = new Fsprite({ canvas: $.manager.panel_layer })
        $.panel[i].mp_bound.set_x_y(X + $.data.UI.data.panel.mpx, Y + $.data.UI.data.panel.mpy)
        $.panel[i].mp_bound.set_w_h($.data.UI.data.panel.mpw, $.data.UI.data.panel.mph)
        $.panel[i].mp_bound.set_bgcolor($.data.UI.data.panel.mp_dark)
        $.panel[i].mp = new Fsprite({ canvas: $.manager.panel_layer })
        $.panel[i].mp.set_x_y(X + $.data.UI.data.panel.mpx, Y + $.data.UI.data.panel.mpy)
        $.panel[i].mp.set_w_h($.data.UI.data.panel.mpw, $.data.UI.data.panel.mph)
        $.panel[i].mp.set_bgcolor($.data.UI.data.panel.mp_bright)
      }
      function assign_character_spec(char, spec, index) {
        switch (index) {
          case 'is_npc':
            char.is_npc = spec[index]
            break
          case 'health':
            for (var I in spec[index]) {
              char.health[I] = spec[index][I]
            }
            break
          case 'dir':
            char.switch_dir(spec[index])
            break
          case 'stat':
            for (var J in spec[index]) {
              char.stat[J] = spec[index][J]
            }
            break
          case 'parent':
            char.parent = spec[index]
            break
          case 'transform_character':
            if (!char.transform_character) {
              char.transform_character = {}
            }
            for (var L in spec[index]) {
              char.transform_character[L] = spec[index][L]
            }
            break
        }
      }
    }

    match.prototype.show_hp = function () {
      const $ = this
      if ($.panel) {
        for (let i = 0; i < $.panel.length; i++) {
          if ($.panel[i].uid !== undefined) {
            const ch = $.character[$.panel[i].uid]
            let hp = Math.floor(ch.health.hp / ch.health.hp_full * $.data.UI.data.panel.hpw)
            hp_bound = Math.floor(ch.health.hp_bound / ch.health.hp_full * $.data.UI.data.panel.hpw)
            if (hp < 0) { hp = 0 }
            if (hp_bound < 0) { hp_bound = 0 }
            $.panel[i].hp.set_w(hp)
            $.panel[i].hp_bound.set_w(hp_bound)
            $.panel[i].mp.set_w(Math.floor(ch.health.mp / ch.health.mp_full * $.data.UI.data.panel.mpw))
            if (ch.effect.heal && ch.effect.heal > 0 && $.time.t % 3 == 0) {
              $.panel[i].hp.set_bgcolor($.data.UI.data.panel.hp_light)
            } else {
              $.panel[i].hp.set_bgcolor($.data.UI.data.panel.hp_bright)
            }
          }
        }
      }
    }

    match.prototype.check_gameover = function () {
      const $ = this
      const teams = {}
      if (!$.panel) {
        return
      }
      for (let i = 0; i < $.panel.length; i++) {
        if ($.panel[i].uid !== undefined) {
          const ch = $.character[$.panel[i].uid]
          if (ch.health.hp > 0) {
            teams[ch.team] = true
          }
        }
      }
      if (Object.keys(teams).length < 2) {
        if (!$.gameover_state) {
          $.gameover_state = $.time.t
        } else {
          if ($.time.t == $.gameover_state + 30) {
            $.gameover()
          }
        }
      } else {
        if ($.gameover_state) {
          $.gameover_state = false
          $.gameover()
        }
      }
    }

    match.prototype.gameover = function () {
      const $ = this
      if ($.gameover_state) {
        const info = []
        const teams = {}
        for (var i = 0; i < $.panel.length; i++) {
          if ($.panel[i].uid !== undefined) {
            var ch = $.character[$.panel[i].uid]
            if (ch.health.hp > 0) {
              teams[ch.team] = true
            }
          }
        }
        for (var i = 0; i < $.panel.length; i++) {
          if ($.panel[i].uid !== undefined) {
            var ch = $.character[$.panel[i].uid]
            const alive = ch.health.hp > 0
            const win = teams[ch.team]
            // [ Icon, Name, Kill, Attack, HP Lost, MP Usage, Picking, Status ]
            info.push([ch.data.bmp.small, $.panel[i].name, ch.stat.kill, ch.stat.attack, ch.health.hp_lost, ch.health.mp_usage, ch.stat.picking, (win ? 'Win' : 'Lose') + ' (' + (alive ? 'Alive' : 'Dead') + ')'])
          }
        }
        $.manager.summary.set_info(info)
        const dur = $.time.t / Global.gameplay.framerate
        $.manager.summary.set_time(new Date(dur * 1000).toISOString().substr(14, 5))
        $.manager.summary.show()
        $.manager.sound.play('2/m_end')
      } else {
        $.manager.summary.hide()
      }
    }

    match.prototype.key = function (K, down) {
      const $ = this
      if ($.gameover_state) {
        if (down) {
          if ($.time.t > $.gameover_state + 60) {
            if (K === 'att' || K === 'jump') {
              $.F4()
            }
          }
        }
      }
    }

    match.prototype.create_effects = function (config) {
      const $ = this
      const effects = Futil.extract_array(util.selectA_from($.data.object, { type: 'effect' }), ['data', 'id'])
      const broken = util.select_from($.data.object, { type: 'broken' })
      $.broken_list = Futil.group_elements(broken.data.broken_list, 'id')
      $.visualeffect = $.effect[0] = new factory.effect({ match: $, stage: $.stage }, effects.data, effects.id)
      $.brokeneffect = $.effect[1] = new factory.effect({ match: $, stage: $.stage, broken_list: $.broken_list }, broken.data, broken.id)
    }

    match.prototype.drop_weapons = function (setup) {
      const $ = this
      const num = 5
      const weapon_list =
        util.selectA_from($.data.object, function (o) {
          return o.id >= 100 && o.id < 200
        })
      for (let i = 0; i < num; i++) {
        const O = $.background.get_pos($.random(), $.random())
        O.y = -800
        $.create_weapon(weapon_list[Math.floor(weapon_list.length * $.random())].id, O)
      }
    }

    match.prototype.destroy_weapons = function () {
      const $ = this
      for (var i in $.lightweapon) {
        $.lightweapon[i].health.hp = 0
      }
      for (var i in $.heavyweapon) {
        $.heavyweapon[i].health.hp = 0
      }
    }

    match.prototype.create_weapon = function (id, pos) {
      const $ = this
      const weapon = id < 150 ? 'lightweapon' : 'heavyweapon'
      const wea_config =
      {
        match: $
      }
      const object = util.select_from($.data.object, { id: id })
      const wea = new factory[weapon](wea_config, object.data, object.id)
      wea.set_pos(pos.x, pos.y, pos.z)
      const uid = $.scene.add(wea)
      $[weapon][uid] = wea
    }

    match.prototype.create_background = function (bg) {
      const $ = this
      if (bg) {
        const bgdata = util.select_from($.data.background, { id: bg.id }).data
        $.background = new Background({
          layers: $.manager.background_layer,
          scrollbar: $.manager.gameplay,
          camerachase: { character: $.character },
          onscroll: function () { $.manager.canvas.render() }
        }, bgdata, bg.id)
        $.stage = $.background.floor
        $.spawn_bg_effects(bgdata) // [Neora] spawn entity permanen kalau BG ini punya bg_effects
      } else {
        $.background = new Background(null) // create an empty background
        $.stage = $.manager.canvas
      }
    }

    // [Neora] spawn entity independen (bukan attack/opoint) begitu BG tertentu dipilih,
    // misal training_effect.js/training_effect2.js buat BG training. Didaftarin lewat
    // field `bg_effects: [oid, ...]` di data BG (data.js), object-nya sendiri didaftar
    // biasa di $.data.object (biasanya type: 'specialattack').
    match.prototype.spawn_bg_effects = function (bgdata) {
      const $ = this
      if (!bgdata.bg_effects) { return }
      bgdata.bg_effects.forEach(function (oid) {
        const OBJ = util.select_from($.data.object, { id: oid })
        if (!OBJ) {
          console.error('[BGEffect] object', oid, 'not exists di $.data.object')
          return
        }
        // [Neora] guard: kalau file data object ini gagal ke-load/parse (mis. syntax error),
        // OBJ.data bisa undefined -> jangan crash seluruh create_background, skip aja + warning.
        if (!OBJ.data) {
          console.error('[BGEffect] object', oid, 'gagal di-load (OBJ.data undefined, cek file JS-nya ada syntax error atau belum ke-load)')
          return
        }
        const config = { match: $, team: -1 }
        const obj = new factory[OBJ.type](config, OBJ.data, oid)
        // [Neora] spawn di tengah kedalaman panggung (rata2 zboundary), bukan di ujung
        // ekstrem zboundary[0] -> biar bdyp/collision-nya kepake di area yang wajar dilewatin karakter
        // [Neora] spawn_x/spawn_y/spawn_z opsional di data object (misal plat.js) -> defaultnya
        // tetep sama kayak sebelumnya (tengah panggung secara X & Z, ground di Y) kalau gak diisi.
        const defaultX = $.background.width / 2
        const defaultZ = ($.background.zboundary[0] + $.background.zboundary[1]) / 2
        const spawnX = OBJ.data.spawn_x !== undefined ? OBJ.data.spawn_x : defaultX
        const spawnY = OBJ.data.spawn_y !== undefined ? OBJ.data.spawn_y : 0
        const spawnZ = OBJ.data.spawn_z !== undefined ? OBJ.data.spawn_z : defaultZ
        obj.set_pos(spawnX, spawnY, spawnZ)
        obj.setup()
        const uid = $.scene.add(obj)
        $[obj.type][uid] = obj
      })
    }

    match.prototype.F4 = function () {
      const $ = this
      $.destroy()
      $.manager.match_end()
    }

    match.prototype.F7 = function () {
      const $ = this
      for (const i in $.character) {
        const ch = $.character[i]
        ch.health.hp = ch.health.hp_full = ch.health.hp_bound = ch.proper('hp') || Global.gameplay.default.health.hp_full
        ch.health.mp = ch.health.mp_full
      }
    }

    match.prototype.new_randomseed = function () {
      const rand = new Random()
      rand.seed(this.manager.random())
      return rand
    }

    match.prototype.random = function () {
      return this.randomseed.next()
    }

    match.prototype.overlay_message = function (mess) {
      const $ = this
      if ($.manager.overlay_mess) {
        $.manager.overlay_mess.show()
        const item = $.data.UI.data.message_overlay[mess]
        $.manager.overlay_mess.set_img_x_y(-item[0], -item[1])
        $.manager.overlay_mess.set_w_h(item[2], item[3])
      }
    }

    match.prototype.create_controller = function (funcon) {
      const $ = this
      function show_pause() {
        if (!$) return
        if ($.time.paused) {
          $.overlay_message('pause')
        }
      }
      if (funcon) {
        funcon.sync = true
        funcon.child.push({
          key: function (I, down) {
            const opaused = $.time.paused // original pause state
            if (down) {
              switch (I) {
                case 'F1':
                  if (!$.time.paused) { $.time.paused = true } else { $.time.paused = false }
                  break

                case 'F2':
                  $.time.paused = 'F2'
                  break

                case 'esc':
                case 'F4':
                  $.F4()
                  break

                case 'F6':
                  if (!$.F6_mode) { $.F6_mode = true } else { $.F6_mode = false }
                  break

                case 'F7':
                  $.F7()
                  break

                case 'F8':
                  $.drop_weapons()
                  break

                case 'F9':
                  $.destroy_weapons()
                  break
              }
              if ((I === 'F1' || I === 'F2') && $.time.paused) {
                $.manager.overlay_mess.hide()
                setTimeout(show_pause, 4) // so that the 'pause' message blinks
              } else if (!$.time.paused) {
                $.manager.overlay_mess.hide()
              }
              if (opaused !== $.time.paused) {  // state change
                if ($.time.paused) {
                  if (funcon.paused) {
                    funcon.paused(true)
                  }
                } else {
                  if (funcon.paused) {
                    funcon.paused(false)
                  }
                }
              }
            }
          }
        })
        return funcon
      }
    }

    match.prototype.get_living_object = function () {
      const $ = this
      var temp = {}
      for (a in $.scene.live) {
        if ($.scene.live[a].health.hp > 0) {
          if ($.scene.live[a].type == 'character') {
            if ($.scene.live[a].counter.disappear_count == -1) {
              temp[a] = $.scene.live[a]
            }
          } else {
            temp[a] = $.scene.live[a]
          }
        }
      }
      return temp
    }

    return match
  })
