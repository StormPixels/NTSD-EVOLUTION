

/** a LF2 character
 */

define(['LF/livingobject', 'LF/global', 'core/combodec', 'core/util', 'LF/util'],
  function (livingobject, Global, Fcombodec, Futil, util) {
    const GC = Global.gameplay
    const CHARGE_MP_RATE = 3 // mp yang didapat tiap TU selama charging (state 17)

    const states =
    {
      generic: function (event, K) {
        const $ = this
        switch (event) {
          case 'frame':
            // health reduce
            if ($.frame.D.mp) {
              if ($.data.frame[$.frame.PN].next === $.frame.N) {  // if this frame is transited by next of previous frame
                if ($.frame.D.mp < 0) {
                  if (!$.match.F6_mode) {
                    $.health.mp += $.frame.D.mp
                  }
                  $.health.mp_usage -= $.frame.D.mp
                  if ($.health.mp < 0) {
                    $.health.mp = 0
                    $.trans.frame($.frame.D.hit_d)
                  }
                }
              } else {
                const dmp = $.frame.D.mp % 1000
                const dhp = Math.floor($.frame.D.mp / 1000) * 10
                if (!$.match.F6_mode) {
                  $.health.mp -= dmp
                }
                $.health.mp_usage += dmp
                $.injury(dhp)
              }
            }
            // [Neora] state 2xxxyyy (states.inc): frame ini butuh MP sejumlah xxx,
            // kalau MP gak cukup, langsung dialihkan ke frame yyy (gagal pakai jurus)
            if ($.frame.D.state >= 2000000 && $.frame.D.state <= 2999999) {
              const v2 = $.frame.D.state - 2000000
              const mpCost = Math.floor(v2 / 1000)
              const failFrame = v2 % 1000
              console.log('[STATE2xxxyyy] mpCost=' + mpCost + ' failFrame=' + failFrame + ' mp_sekarang=' + $.health.mp)
              if ($.health.mp < mpCost) {
                console.log('[STATE2xxxyyy] MP KURANG, redirect ke frame ' + failFrame)
                $.trans.set_next(failFrame, 0)
                $.trans.set_wait(0, 0)
              }
            }
            // [Neora] state 3xxxyyy (states.inc / time.inc): TimeStop.
            // format: 3.000.000 + chance*10000 + type*1000 + duration
            // chance=0 berarti selalu kena (100%); type 0/2=semua kecuali pemicu, type 1=semua kecuali tim pemicu
            if ($.frame.D.state >= 3000000 && $.frame.D.state <= 3999999) {
              const v3 = $.frame.D.state - 3000000
              const chance = Math.floor(v3 / 10000)
              const rest = v3 % 10000
              const tsType = Math.floor(rest / 1000)
              const duration = rest % 1000
              console.log('[STATE3xxxyyy] chance=' + chance + '% type=' + tsType + ' duration=' + duration)
              if (chance === 0 || Math.random() * 100 < chance) {
                console.log('[STATE3xxxyyy] TimeStop AKTIF')
                $.match.timestop_trigger($, tsType, duration)
              } else {
                console.log('[STATE3xxxyyy] roll gagal, TimeStop GAK aktif')
              }
            }
            $.opoint()
            break
          case 'TU':
            switch (true) {
              case ($.counter.disappear_count < 0): // dismiss
                break
              case ($.counter.disappear_count >= 0 && $.counter.disappear_count < GC.effect.disappear.shadow_blink): // body disappear
                $.counter.disappear_count += 1
                break
              case ($.counter.disappear_count >= GC.effect.disappear.shadow_blink && $.counter.disappear_count < GC.effect.disappear.body_blink): // shadow blink
                $.counter.disappear_count += 1
                if (Math.floor($.counter.disappear_count / 2) % 2 == 0) {
                  $.shadow.show()
                } else {
                  $.shadow.hide()
                }
                break
              case ($.counter.disappear_count == GC.effect.disappear.body_blink): // body blink
                $.counter.disappear_count += 1
                $.effect.blink = true
                $.effect.timein = 0
                $.effect.timeout = 30
                $.shadow.show()
                $.sp.show()
                $.effect.super = false
                break
              case ($.counter.disappear_count > GC.effect.disappear.body_blink): // initialize and dismiss
                $.counter.disappear_count = -1
                break
            }
            switch (true) {
              case ($.counter.dead_blink_count < 0):
                break
              case ($.counter.dead_blink_count == 0):
                $.effect.blink = true
                $.counter.dead_blink_count += 1
                break
              case ($.counter.dead_blink_count > 0 && $.counter.dead_blink_count < 30):
                $.counter.dead_blink_count += 1
                break
              case ($.counter.dead_blink_count >= 30):
                $.effect.blink = false
                $.sp.hide()
                $.shadow.hide()
                $.counter.dead_blink_count = -1
                $.match.destroy_object($)
                break
            }
            if ($.state_update('post_interaction')) {
              ; // do nothing
            } else {
              $.post_interaction()
            }

            var ps = $.ps
            if (ps.y === 0 && ps.vy === 0 && $.frame.N === 212 && $.frame.PN !== 211) {
              $.trans.frame(999)
            } else if (ps.y === 0 && ps.vy > 0) // fell onto ground
            {
              var result = $.state_update('fell_onto_ground')
              if (result) {
                $.trans.frame(result, 15)
              } else {
                // console.log(ps.vx, util.lookup_abs(GC.friction.fell,ps.vx));
                ps.vy = 0 // set to zero
                $.mech.linear_friction(
                  util.lookup_abs(GC.friction.fell, ps.vx),
                  util.lookup_abs(GC.friction.fell, ps.vz)
                )
              }
            } else if (ps.y + ps.vy >= 0 && ps.vy > 0) // predict falling onto the ground
            {
              var result = $.state_update('fall_onto_ground')
              if (result) {
                $.trans.frame(result, 15)
              } else {
                if ($.state() === 13) { // frozen
                  ; // do nothing
                } else if ($.frame.N === 212) { // jumping
                  $.trans.frame(215, 15) // crouch
                } else {
                  $.trans.frame(219, 15) // crouch2
                }
              }
            }

            // health recover
            // http://lf2.wikia.com/wiki/Health_and_mana
            if ($.match.time.t % 12 === 0) {
              if ($.health.hp >= 0 && $.health.hp < $.health.hp_bound) {
                $.health.hp++
              }
            }

            var heal_speed = 8
            if ($.health.hp >= 0 && $.effect.heal && $.effect.heal > 0) {
              if ($.match.time.t % 8 === 0) {
                if ($.health.hp + heal_speed <= $.health.hp_bound) {
                  $.health.hp += heal_speed
                }
                $.effect.heal -= heal_speed
              }
            }

            if ($.match.time.t % 3 === 0) {
              if ($.health.mp < $.health.mp_full) {
                $.health.mp += 1 + Math.floor(($.health.hp_full - ($.health.hp < $.health.hp_full ? $.health.hp : $.health.hp_full)) / 100)
              }
            }
            // recovery
            if ($.health.fall > 0) { $.health.fall += GC.recover.fall }
            if ($.health.bdefend > 0) { $.health.bdefend += GC.recover.bdefend }
            // combo buffer
            $.combo_buffer.timeout--
            if ($.combo_buffer.timeout === 0) {
              switch ($.combo_buffer.combo) {
                case 'def': case 'jump': case 'att': case 'left-left': case 'right-right':
                  $.combo_buffer.combo = null
                  break
                // other combo is not cleared
              }
            }
            break
          case 'transit':
            // dynamics: position, friction, gravity
            $.mech.dynamics() // any further change in position will not be updated on screen until next TU
            $.wpoint() // my holding weapon following my change
            break
          case 'combo':
            switch (K) {
              case 'left': case 'right':
              case 'left-left': case 'right-right':
                break
              default:
                // here is where D>A, D>J... etc handled
                if (K == 'DJA' && $.transform_character && $.transform_character.is_rudolf_transform) {
                  $.id_update('revert_transform')
                }
                var tag = Global.combo_tag[K]
                if (tag && $.frame.D[tag]) {
                  if (!$.id_update('generic_combo', K, tag)) {
                    var dir = Global.combo_dir[K]
                    if (dir) {
                      $.switch_dir(dir)
                    }
                    $.trans.frame($.frame.D[tag], 11)
                    return 1
                  }
                }
            }
            break
          case 'post_combo': // after state specific processing
            $.pre_interaction()
            break
          case 'state_exit':
            switch ($.combo_buffer.combo) {
              case 'left-left': case 'right-right':
                // cannot transfer across states
                $.combo_buffer.combo = null
                break
            }
            break
        }
      },

      // state specific processing to different events

      0: function (event, K) // standing
      {
        const $ = this
        switch (event) {
          case 'frame':
            if ($.hold.obj && $.hold.obj.type === 'heavyweapon') {
              $.trans.frame(12)
            }
            // BUG FIX 3: idle animation looping too fast when frame data has wait=0/1.
            // Apply a minimum wait of 3 TU for the idle/standing animation cycle
            // so it doesn't flicker or loop faster than intended.
            $.trans.set_wait(Math.max(($.frame.D.wait || 0), 3), 99)
            break

          case 'TU':
            // BUG FIX 2: when truly idle (no directional input), zero out residual
            // vx/vz so the character doesn't drift/walk forward on its own.
            // This handles leftover velocity from previous walk/run states.
            if ($.con) {
              var _idleDx = !!$.con.state.left !== !!$.con.state.right
              var _idleDz = !!$.con.state.up !== !!$.con.state.down
              if (!_idleDx) { $.ps.vx = 0 }
              if (!_idleDz) { $.ps.vz = 0 }
            }
            break

          case 'combo':
            switch (K) {
              case 'left': case 'right': case 'up': case 'down':
              case 'jump': case null:
                // BUG FIX 1: guard against uninitialized con.state at game start.
                // If con.state keys are undefined, (undefined !== undefined) === false,
                // so this is safe — but (undefined !== 0) === true which was the old bug
                // when one key was set and the other was not yet initialized.
                // Coerce to boolean first to guarantee correct dx/dz evaluation.
                var _ls = !!$.con.state.left
                var _rs = !!$.con.state.right
                var _us = !!$.con.state.up
                var _ds = !!$.con.state.down
                var dx = _ls !== _rs
                var dz = _us !== _ds
                if (dx || dz) {
                  // apply movement
                  if ($.hold.obj && $.hold.obj.type === 'heavyweapon') {
                    if (dx) { $.ps.vx = $.dirh() * ($.data.bmp.heavy_walking_speed) }
                    $.ps.vz = $.dirv() * ($.data.bmp.heavy_walking_speedz)
                  } else {
                    if (K !== 'jump') {
                      $.trans.frame(5, 5)
                    }
                    if (dx) {
                      $.ps.vx = $.dirh() * ($.data.bmp.walking_speed)
                    }
                    $.ps.vz = $.dirv() * ($.data.bmp.walking_speedz)
                  }
                }
                break
            }
            switch (K) {
              case 'left-left': case 'right-right':
                if ($.hold.obj && $.hold.obj.type === 'heavyweapon') {
                  $.trans.frame(16, 10)
                } else {
                  $.trans.frame(9, 10)
                }
                return 1
              case 'def':
                if ($.hold.obj && $.hold.obj.type === 'heavyweapon') {
                  return 1
                }
                $.trans.frame(110, 10)
                return 1
              case 'jump':
                if ($.hold.obj && $.hold.obj.type === 'heavyweapon') {
                  if (!$.proper('heavy_weapon_jump')) {
                    return 1
                  } else {
                    $.trans.frame($.proper('heavy_weapon_jump'), 10)
                    return 1
                  }
                }
                $.trans.frame(210, 10)
                return 1
              case 'att':
                if ($.hold.obj) {
                  var dx = $.con.state.left !== $.con.state.right
                  if ($.hold.obj.type === 'heavyweapon') {
                    $.trans.frame(50, 10) // throw heavy weapon
                    return 1
                  } else if ($.proper($.hold.obj.id, 'just_throw')) {
                    $.trans.frame(45, 10) // throw light weapon
                    return 1
                  } else if (dx && $.proper($.hold.obj.id, 'stand_throw')) {
                    $.trans.frame(45, 10) // throw weapon
                    return 1
                  } else if ($.proper($.hold.obj.id, 'attackable')) // light weapon attack
                  {
                    // [fix] kalau senjata punya attack_frame custom (mis. Rasengan: 255),
                    // pakai itu - jangan selalu ke frame generic 20/25 (yang cuma cocok
                    // buat senjata ringan biasa/generic swing).
                    const custom_attack_frame = $.proper($.hold.obj.id, 'attack_frame')
                    $.trans.frame(custom_attack_frame || ($.match.random() < 0.5 ? 20 : 25), 10)
                    return 1
                  }
                }
                //
                var vol = $.mech.volume(Futil.make_array($.data.frame[72].itr || $.data.frame[73].itr)[0]) // super punch frames
                var hit = $.scene.query(vol, $, { tag: 'itr:6', not_team: $.team })
                for (const t in hit) {  // if someone is in my hitting scoope who has itr kind:6
                  $.trans.frame(70, 10) // I 'll use super punch!
                  return 1
                }
                //
                $.trans.frame($.match.random() < 0.5 ? 60 : 65, 10)
                return 1
            }
            break
        }
      },

      1: function (event, K) // walking
      {
        const $ = this

        let dx = 0; let dz = 0
        if ($.con.state.left) { dx -= 1 }
        if ($.con.state.right) { dx += 1 }
        if ($.con.state.up) { dz -= 1 }
        if ($.con.state.down) { dz += 1 }
        switch (event) {
          case 'frame':
            if ($.hold.obj && $.hold.obj.type === 'heavyweapon') {
              if (dx || dz) {
                $.frame_ani_oscillate(12, 15)
              } else {
                $.trans.set_next($.frame.N)
              }
            } else {
              $.frame_ani_oscillate(5, 8)
            }
            $.trans.set_wait($.data.bmp.walking_frame_rate - 1)
            break

          case 'TU':
            // apply movement
            var xfactor = 1 - ($.dirv() ? 1 : 0) * (2 / 7) // reduce x speed if moving diagonally
            if ($.hold.obj && $.hold.obj.type === 'heavyweapon') {
              if (dx) $.ps.vx = xfactor * $.dirh() * ($.data.bmp.heavy_walking_speed)
              $.ps.vz = $.dirv() * ($.data.bmp.heavy_walking_speedz)
            } else {
              if (dx) $.ps.vx = xfactor * $.dirh() * ($.data.bmp.walking_speed)
              $.ps.vz = $.dirv() * ($.data.bmp.walking_speedz)
              if (!dx && !dz && $.trans.next() !== 999) {
                $.trans.set_next(999) // go back to standing
                $.trans.set_wait(1, 1, 2)
              }
            }
            break

          case 'state_entry':
            $.trans.set_wait(0)
            break

          case 'combo':
            if (dx !== 0 && dx !== $.dirh()) { $.switch_dir($.ps.dir === 'right' ? 'left' : 'right') } // toogle dir
            if (!dx && !dz && !$.statemem.released) {
              $.statemem.released = true
              $.mech.unit_friction()
            }
            // walking same as standing, except null combo
            if (K) { return $.states['0'].call($, event, K) }
            break
        }
      },

      2: function (event, K) // running, heavy_obj_run
      {
        const $ = this
        switch (event) {
          case 'frame':
            if ($.hold.obj && $.hold.obj.type === 'heavyweapon') {
              $.frame_ani_oscillate(16, 18)
            } else {
              $.frame_ani_oscillate(9, 11)
            }
            $.trans.set_wait($.data.bmp.running_frame_rate)
          // no break here

          case 'TU':
            // to maintain the velocity against friction
            var xfactor = 1 - ($.dirv() ? 1 : 0) * (1 / 7) // reduce x speed if moving diagonally
            if ($.hold.obj && $.hold.obj.type === 'heavyweapon') {
              $.ps.vx = xfactor * $.dirh() * $.data.bmp.heavy_running_speed
              $.ps.vz = $.dirv() * $.data.bmp.heavy_running_speedz
            } else {
              $.ps.vx = xfactor * $.dirh() * $.data.bmp.running_speed
              $.ps.vz = $.dirv() * $.data.bmp.running_speedz
            }
            break

          case 'combo':
            switch (K) {
              case 'left': case 'right': case 'left-left': case 'right-right':
                if (K.split('-')[0] !== $.ps.dir) {
                  if ($.hold.obj && $.hold.obj.type === 'heavyweapon') {
                    $.trans.frame(19, 10)
                  } else {
                    $.trans.frame(218, 10)
                  }
                  return 1
                }
                break

              case 'def':
                if ($.hold.obj && $.hold.obj.type === 'heavyweapon') {
                  return 1
                }
                $.trans.frame(102, 10)
                return 1

              case 'jump':
                if ($.hold.obj && $.hold.obj.type === 'heavyweapon') {
                  if (!$.proper('heavy_weapon_dash')) {
                    return 1
                  } else {
                    $.trans.frame($.proper('heavy_weapon_dash'), 10)
                    return 1
                  }
                }
                $.trans.frame(213, 10)
                return 1

              case 'att':
                if ($.hold.obj) {
                  if ($.hold.obj.type === 'heavyweapon') {
                    $.trans.frame(50, 10) // throw heavy weapon
                    return 1
                  } else {
                    const dx = $.con.state.left !== $.con.state.right
                    if (dx && $.proper($.hold.obj.id, 'run_throw')) {
                      $.trans.frame(45, 10) // throw light weapon
                      return 1
                    } else if ($.proper($.hold.obj.id, 'attackable')) {
                      $.trans.frame(35, 10) // light weapon attack
                      return 1
                    }
                  }
                }
                $.trans.frame(85, 10)
                return 1
            }
            break
        }
      },

      3: function (event, K) // punch, jump_attack, run_attack, ...
      {
        const $ = this
        switch (event) {
          case 'frame':
            if ($.frame.D.next === 999 && $.ps.y < 0) {
              $.trans.set_next(212) // back to jump
            }
            if ($.frame.N === 253) {
              $.id_update('state3_fly_crash')
            }
            $.id_update('state3_frame')
            break
          case 'hit_stop':
            return $.id_update('state3_hit_stop')
          case 'frame_force':
            return $.id_update('state3_frame_force')
          case 'TU':
            if ($.frame.D.itr) {
              for (let index in $.frame.D.itr) {
                if (($.frame.D.itr[index].kind == 10 ||
                  $.frame.D.itr[index].kind == 11) &&
                  $.match.time.t % 2 === 0) {
                  for (let I in $.scene.live) {
                    let target = $.scene.live[I]
                    let z_diff = Math.abs(target.ps.z - $.ps.z)
                    let x_diff = Math.abs(target.ps.x - $.ps.x)
                    if (x_diff * x_diff + 4 * z_diff * z_diff < (150 * 150)) { // Oval equation (obj inside affected area?)
                      if (target.uid != $.uid) {
                        if (target.ps.y < 0 || // floating
                          target.type == 'character' || // target is character
                          (target.ps.y >= 0 && $.match.random() < 0.15)) // random select living obj
                        {
                          if (target.type == 'character' && target.hold) { // drop weapon when being lift
                            target.drop_weapon(0, 0)
                          }
                          const ITR = Futil.make_array($.data.frame[251].itr || $.data.frame[251].itr)[0]
                          const vol = $.mech.volume(Futil.make_array($.data.frame[251].itr || $.data.frame[251].itr)[0])
                          if (target.attacked(target.hit(ITR, $, { x: $.ps.x, y: $.ps.y, z: $.ps.z }, vol))) { // hit you!
                            target.itr_arest_update(ITR)
                          }
                        }
                      }
                    }
                  }
                  break
                }
              }
            }
            break
        }
      },

      4: function (event, K) // jump
      {
        const $ = this
        switch (event) {
          case 'frame':
            $.statemem.frameTU = true
            if ($.frame.PN === 80 || $.frame.PN === 81) { // after jump attack
              $.statemem.attlock = 2
            }
            break

          case 'TU':
            if ($.statemem.frameTU) {
              $.statemem.frameTU = false
              if ($.frame.N === 212 && $.frame.PN === 211) { // start jumping
                var dx = 0
                if ($.con.state.left) { dx -= 1 }
                if ($.con.state.right) { dx += 1 }
                $.ps.vx = dx * ($.data.bmp.jump_distance - 1)
                $.ps.vz = $.dirv() * ($.data.bmp.jump_distancez - 1)
                $.ps.vy = $.data.bmp.jump_height // upward force
              }
            }
            if ($.statemem.attlock) {
              $.statemem.attlock--
            }
            break

          case 'combo':
            if ((K === 'att' || $.con.state.att) && !$.statemem.attlock) {
              // a transition to jump_attack can only happen after entering frame 212
              if ($.frame.N === 212) {
                if ($.hold.obj) {
                  var dx = $.con.state.left !== $.con.state.right
                  if (dx && $.proper($.hold.obj.id, 'jump_throw')) {
                    $.trans.frame(52, 10) // sky light weapon throw
                  } else if ($.proper($.hold.obj.id, 'attackable')) {
                    $.trans.frame(30, 10) // light weapon attack
                  }
                } else {
                  $.trans.frame(80, 10) // jump attack
                }
                return 1 // key consumed
              }
            }
            // [Neora] state 4 (jump, air_fly, air raikiri) sekarang bisa di-steer
            // kiri/kanan terus-menerus selama masih di udara di state ini — gak dibatasin
            // ke frame tertentu lagi. Pola sama kayak steering di state 5 (dash).
            if (K === 'left' || K === 'right') {
              $.switch_dir(K)
              $.ps.vx = $.dirh() * $.data.bmp.walking_speed
              return 1 // key consumed
            }
            break
        }
      },

      5: function (event, K) // dash
      {
        const $ = this
        switch (event) {
          case 'state_entry':
            if (($.frame.PN >= 9 && $.frame.PN <= 11) || // if previous is running
              ($.frame.PN === 215)) // or crouch
            {
              $.ps.vx = $.dirh() * ($.data.bmp.dash_distance - 1) * ($.frame.N === 213 ? 1 : -1)
              $.ps.vz = $.dirv() * ($.data.bmp.dash_distancez - 1)
              $.ps.vy = $.data.bmp.dash_height
            }
            break

          case 'combo':
            if (K === 'att' || $.con.state.att) {
              if ($.proper('dash_backattack') || // back attack
                $.dirh() === ($.ps.vx > 0 ? 1 : -1)) // if not turning back
              {
                if ($.hold.obj && $.proper($.hold.obj.id, 'attackable')) { // light weapon attack
                  $.trans.frame(40, 10)
                } else {
                  $.trans.frame(90, 10)
                }
                $.allow_switch_dir = false
                if (K === 'att') {
                  return 1
                }
              }
            }
            if (K === 'left' || K === 'right') {
              if (K != $.ps.dir) {
                if ($.dirh() == ($.ps.vx > 0 ? 1 : -1)) { // turn back
                  if ($.frame.N === 213) $.trans.frame(214, 0)
                  if ($.frame.N === 216) $.trans.frame(217, 0)
                  $.switch_dir(K)
                } else {  // turn to front
                  if ($.frame.N === 214) $.trans.frame(213, 0)
                  if ($.frame.N === 217) $.trans.frame(216, 0)
                  $.switch_dir(K)
                }
                return 1
              }
            }
            break
        }
      },

      6: function (event, K) // rowing
      {
        const $ = this
        switch (event) {
          case 'TU':
            if ($.frame.N === 100 || $.frame.N === 108) {
              $.ps.vy = 0
            }
            break

          case 'frame':
            if ($.frame.N === 100 || $.frame.N === 108) {
              $.trans.set_wait(1)
            }
            break

          case 'fall_onto_ground':
            if ($.frame.N === 101 || $.frame.N === 109) {
              return 215
            }
            break
        }
      },

      7: function (event, K) // defending
      {
        const $ = this
        switch (event) {
          case 'frame':
            if ($.frame.N === 111) {
              $.trans.inc_wait(4)
            }
            break
        }
      },

      8: function (event, K) // broken defend
      {
        const $ = this
        switch (event) {
          case 'frame_force':
          case 'TU_force':
            // nasty fix: to compensate that frame_force is applied with respecting to facing direction
            if ($.frame.D.dvx) {
              if (($.ps.vx > 0 ? 1 : -1) !== $.dirh()) {
                const avx = $.ps.vx > 0 ? $.ps.vx : -$.ps.vx
                const dirx = 2 * ($.ps.vx > 0 ? 1 : -1)
                if ($.ps.y < 0 || avx < $.frame.D.dvx) {
                  $.ps.vx = dirx * $.frame.D.dvx
                }
                if ($.frame.D.dvx < 0) {
                  $.ps.vx = $.ps.vx - dirx
                }
              }
            }
            break
        }
      },

      9: function (event, K) // catching, throw lying man
      {
        const $ = this
        switch (event) {
          case 'state_entry':
            $.statemem.stateTU = true
            $.statemem.counter = 43
            $.statemem.attacks = 0
            // [fix] reset counter tekan Attack selama nangkep pakai Rasengan
            $.statemem.rasengan_att_count = 0
            // BUG FIX: stop movement when catch starts so catcher doesn't walk through/past target
            $.ps.vx = 0
            $.ps.vz = 0
            // [fix] reset warisan cpoint - jangan sampai kebawa dari catch sebelumnya
            $._last_cpoint = null
            break

          case 'state_exit':
            $.catching = null
            $.ps.zz = 0
            $._last_cpoint = null
            break

          case 'frame':
            switch ($.frame.N) {
              case 123: // a successful attack
                $.statemem.attacks++
                $.statemem.counter += 3
                $.trans.inc_wait(1)
                break
              case 233: case 234:
                $.trans.inc_wait(-1)
                break
              case 240: // it means from frame 121 jump to 235 for Rudolf => performing transform
                $.id_update('rudolf_transform')
                break
            }
            {
              const cp = $.get_cpoint()
              if ($.catching && cp) {
                $.catching.caught_b(
                  $.mech.make_point(cp),
                  cp,
                  $.ps.dir,
                  $.dirv()
                )
              }
            }
            break

          case 'TU':
            if ($.catching &&
              $.caught_cpointkind() === 1 &&
              $.catching.caught_cpointkind() === 2) { // really catching you
              // BUG FIX: keep catcher velocity zeroed every TU while catching
              // prevents physics from continuing to push catcher forward past the target
              $.ps.vx = 0
              $.ps.vz = 0
              if ($.statemem.stateTU) {
                $.statemem.stateTU = false
                /** the immediate `TU` after `state`. the reason for this is a synchronization issue,
                  i.e. it must be waited until both catcher and catchee transited to the second frame
                  and it is not known at the point of `frame` event, due to different scheduling.
                 */

                // injury
                const cp = $.get_cpoint()
                if (cp.injury) {
                  if ($.attacked($.catching.hit(cp, $, { x: $.ps.x, y: $.ps.y, z: $.ps.z }, null))) {
                    $.trans.inc_wait(1, 10, 99) // lock until frame transition
                  }
                }

                // cover
                let cover = GC.default.cpoint.cover
                if (cp.cover !== undefined) {
                  cover = cp.cover
                }

                if (cover === 0 || cover === 10) {
                  $.ps.zz = 1
                } else {
                  $.ps.zz = -1
                }

                if (cp.dircontrol === 1) {
                  if ($.con.state.left) { $.switch_dir('left') }
                  if ($.con.state.right) { $.switch_dir('right') }
                }
              }
            }
            break // TU

          case 'post_combo':
            if ($.catching) {
              $.statemem.counter--
            }
            if ($.statemem.counter <= 0) {
              if (!($.frame.N === 122 && $.statemem.attacks === 4)) // let it finish the 5th punch
              {
                if ($.frame.N === 121 || $.frame.N === 122) {
                  $.catching.caught_release()
                  $.trans.frame(999, 15)
                }
              }
            }
            break

          case 'combo':
            switch (K) {
              case 'att':
                {
                  // [fix] hitung penekanan Attack selama nangkep pakai Rasengan
                  // (dipegang di tangan, id 434) - dipakai buat trigger transform
                  // Naruto -> Kyubi lewat id_updates[2]
                  if ($.hold.obj && $.hold.obj.id === 434) {
                    $.id_update('rasengan_extra_att', K)
                  }
                  const cp = $.get_cpoint()
                  if (cp && (cp.taction || cp.aaction)) {
                    const dx = $.con.state.left !== $.con.state.right
                    const dy = $.con.state.up !== $.con.state.down
                    if ((dx || dy) && cp.taction) {
                      const tac = cp.taction
                      if (tac < 0) {  // turn myself around
                        $.switch_dir($.ps.dir === 'right' ? 'left' : 'right') // toogle dir
                        $.trans.frame(-tac, 10)
                      } else {
                        $.trans.frame(tac, 10)
                      }
                      $.statemem.counter += 10
                    } else if (cp.aaction) {
                      $.trans.frame(cp.aaction, 10)
                    }
                    const nextframe = $.data.frame[$.trans.next()]
                    $.catching.caught_throw(nextframe.cpoint, $.dirv())
                  }
                }
                return 1 // always return true so that `att` is not re-fired next frame
              case 'jump':
                if ($.frame.N === 121) {
                  const cp = $.get_cpoint()
                  if (cp && cp.jaction) {
                    $.trans.frame(cp.jaction, 10)
                    return 1
                  }
                }
                break
            }
            break
        }
      },

      10: function (event, K) // being caught
      {
        const $ = this
        switch (event) {
          case 'state_exit':
            $.catching = null
            $.caught_b_holdpoint = null
            $.caught_b_cpoint = null
            $.caught_b_adir = null
            $.caught_b_vdir = null
            $.caught_throwz = null
            $._last_cpoint = null
            break

          case 'frame':
            $.statemem.frameTU = true
            $.trans.set_wait(99, 10, 99) // lock until frame transition
            break

          case 'TU':
            if ($.frame.N === 135) {
              // to be lifted against gravity
              $.ps.vy = 0
            }

            if ($.caught_cpointkind() === 2 &&
              $.catching && $.catching.caught_cpointkind() === 1) { // really being caught
              if ($.statemem.frameTU) {
                $.statemem.frameTU = false // the immediate `TU` after `frame`

                const holdpoint = $.caught_b_holdpoint
                const cpoint = $.caught_b_cpoint
                const adir = $.caught_b_adir

                if (cpoint.vaction) {
                  $.trans.frame(cpoint.vaction, 22)
                }

                if (cpoint.throwvx) { // I am being thrown!
                  const dvx = cpoint.throwvx; const dvy = cpoint.throwvy; let dvz = cpoint.throwvz
                  if (dvx) $.ps.vx = (adir === 'right' ? 1 : -1) * dvx
                  if (dvy) $.ps.vy = dvy
                  if (dvz === GC.unspecified) dvz = 0
                  if (dvz) $.ps.vz = dvz
                  if ($.caught_throwz !== null && $.caught_throwz !== undefined) {
                    $.ps.vz *= $.caught_throwz
                  } else {
                    $.ps.vz *= $.caught_b_vdir
                  }

                  if (cpoint.throwinjury !== GC.unspecified) {
                    $.caught_throwinjury = cpoint.throwinjury
                  } else {
                    $.caught_throwinjury = GC.default.itr.throw_injury
                  }

                  // impulse
                  $.mech.set_pos(
                    $.ps.x + $.ps.vx * 1,
                    $.ps.y + $.ps.vy * 2,
                    $.ps.z + $.ps.vz)
                } else {
                  if (cpoint.dircontrol === undefined) {
                    if (cpoint.cover && cpoint.cover >= 10) {
                      $.switch_dir(adir) // follow dir of catcher
                    } else { // default cpoint cover
                      $.switch_dir(adir === 'left' ? 'right' : 'left') // face the catcher
                    }
                  }
                  $.mech.coincideXY(holdpoint, $.mech.make_point($.get_cpoint()))
                }
              }
            } else {
              if ($.catching) {
                $.trans.frame(212, 10)
              }
            }
            break
        }
      },

      11: function (event, K) // injured
      {
        const $ = this
        switch (event) {
          case 'state_entry':
            $.trans.inc_wait(0, 20) // set lock only
            break
          case 'frame':
            switch ($.frame.N) {
              case 221: case 223: case 225:
                $.trans.set_next(999)
                break
              case 220: case 222: case 224: case 226:
                // $.trans.inc_wait(0, 20, 99); //lock until frame transition
                break
            }
            break
        }
      },

      12: function (event, K) // falling
      {
        const $ = this
        switch (event) {
          case 'frame':
            if ($.effect.dvy <= 0) {
              switch ($.frame.N) {
                case 180:
                  $.trans.set_next(181)
                  $.trans.set_wait(util.lookup_abs(GC.fall.wait180, $.effect.dvy))
                  break
                case 181:
                  // console.log('y:'+$.ps.y+', vy:'+$.ps.vy+', vx:'+$.ps.vx);
                  $.trans.set_next(182)
                  var vy = $.ps.vy > 0 ? $.ps.vy : -$.ps.vy
                  if ($.ps.vy == 0) {
                    $.ps.vy = 5*($.ps.vy>0?1:-1); //magic number
                    vy = 5*($.ps.vy>0?1:-1); //magic number
                  }
                  if (vy >= 0 && vy <= 4) {
                    $.trans.set_wait(2)
                  } else if (vy > 4 && vy < 7) {
                    $.trans.set_wait(3)
                  } else if (vy >= 7) {
                    $.trans.set_wait(4)
                  }
                  break
                case 182:
                  $.trans.set_next(183)
                  break                
                case 186:
                  if ($.ps.vy == 0) {
                    $.ps.vy = 5*($.ps.vy>0?1:-1); //magic number
                    vy = 5*($.ps.vy>0?1:-1); //magic number
                  }
                  $.trans.set_next(187)
                  break
                case 187:
                  $.trans.set_next(188)
                  break
                case 188:
                  $.trans.set_next(189)
                  break
              }
            } else {
              switch ($.frame.N) {
                case 180:
                  $.trans.set_next(185)
                  $.trans.set_wait(1)
                  break
                case 186:
                  $.trans.set_next(191)
                  break
              }
            }
            break

          case 'fell_onto_ground':
          case 'fall_onto_ground':
            if ($.caught_throwinjury > 0) {
              $.injury($.caught_throwinjury)
              $.caught_throwinjury = null
            }
            var ps = $.ps
            $.match.sound.play('2/016')
            // console.log('speed:'+$.mech.speed()+', vx:'+ps.vx+', vy:'+ps.vy);
            if ($.mech.speed() > GC.character.bounceup.limit.xy ||
              ps.vy > GC.character.bounceup.limit.y) {
              $.mech.linear_friction(
                util.lookup_abs(GC.character.bounceup.absorb, ps.vx),
                util.lookup_abs(GC.character.bounceup.absorb, ps.vz)
              )
              ps.vy = -GC.character.bounceup.y
              if ($.frame.N >= 203 && $.frame.N <= 206) {
                return 185
              }
              if ($.frame.N >= 180 && $.frame.N <= 185) {
                return 185
              }
              if ($.frame.N >= 186 && $.frame.N <= 191) {
                return 191
              }
            } else {
              if ($.frame.N >= 203 && $.frame.N <= 206) {
                return 230 // next frame
              }
              if ($.frame.N >= 180 && $.frame.N <= 185) {
                return 230
              }
              if ($.frame.N >= 186 && $.frame.N <= 191) {
                return 231
              }
            }
            break

          case 'combo':
            if ($.frame.N === 182 || $.frame.N === 188) {
              if (K === 'jump') {
                if ($.health.fall < GC.fall.KO && $.health.hp > 0) {
                  if ($.frame.N === 182) {
                    $.trans.frame(100)
                  } else {
                    $.trans.frame(108)
                  }
                  if ($.ps.vx) {
                    $.ps.vx = 5 * ($.ps.vx > 0 ? 1 : -1) // magic number
                  }
                  if ($.ps.vy == 0) {
                    $.ps.vy = 5 * ($.ps.vy > 0 ? 1 : -1) //magic number
                  }
                  if ($.ps.vz) {
                    $.ps.vz = 2 * ($.ps.vz > 0 ? 1 : -1) // magic number
                  }
                  return 1
                }
              }
            }
            return 1 // always return true so that `jump` is not re-fired next frame
        }
      },

      13: function (event, K) // frozen
      {
        const $ = this
        switch (event) {
          case 'state_exit':
            $.brokeneffect_create(212)
            break
        }
      },

      14: function (event, K) // lying
      {
        const $ = this
        switch (event) {
          case 'state_entry':
            $.health.fall = 0
            $.health.bdefend = 0
            if ($.health.hp <= 0) {
              $.die()
              if ($.is_npc) {
                $.counter.dead_blink_count = 0
              }
            }
            break
          case 'state_exit':
            $.effect.timein = 0
            $.effect.timeout = 30
            $.effect.blink = true
            $.effect.super = true
            break
        }
      },

      15: function (event, K) // stop_running, crouch, crouch2, dash_attack, light_weapon_thw, heavy_weapon_thw, heavy_stop_run, sky_lgt_wp_thw
      {
        const $ = this
        switch (event) {
          case 'frame':
            switch ($.frame.N) {
              case 19: // heavy_stop_run
                if ($.hold.obj && $.hold.obj.type === 'heavyweapon') {
                  $.trans.set_next(12)
                }
                break
              case 215:
                $.trans.inc_wait(-1)
                break
              case 219: // crouch
                if (!$.id_update('state15_crouch')) {
                  switch ($.frame.PN) // previous frame number
                  {
                    case 105: // after rowing
                      $.mech.unit_friction()
                      break
                    case 216: // after dash
                    case 90: case 91: case 92: // dash attack
                      $.trans.inc_wait(-1)
                      break
                  }
                }
                break
              case 54: // sky_lgt_wp_thw
                if ($.frame.D.next === 999 && $.ps.y < 0) {
                  $.trans.set_next(212) // back to jump
                }
                break
              case 257:
                $.id_update('state1280_disappear')
                break
            }
            break

          case 'TU': {
            // [Neora port] Custom running state (mis: run4tk / four_tails lari)
            // Ciri: dvx > 0 dan bukan special value 550
            // Kalau pemain tekan arah berlawanan → langsung switch dir, lanjut lari ke arah itu
            const dvx = $.frame.D.dvx
            if ($.con && dvx && dvx !== 550 && dvx > 0) {
              const pressingLeft  = $.con.state.left
              const pressingRight = $.con.state.right
              const facingRight   = $.ps.dir === 'right'
              if (pressingLeft && facingRight) {
                $.switch_dir('left')
              } else if (pressingRight && !facingRight) {
                $.switch_dir('right')
              }
            }
            break
          }

          case 'combo':
            if ($.frame.N === 215) // only after jumping
            {
              if (K === 'def') {
                $.trans.frame(102, 10)
                return 1
              }
              if (K === 'jump') {
                let dx = 0
                if ($.con.state.left) { dx -= 1 }
                if ($.con.state.right) { dx += 1 }
                if (dx) {
                  $.trans.frame(213, 10)
                  $.switch_dir(dx === 1 ? 'right' : 'left')
                } else if ($.ps.vx === 0) {
                  $.trans.inc_wait(2, 10, 99) // lock until frame transition
                  $.trans.set_next(210, 10)
                } else if (($.ps.vx > 0 ? 1 : -1) === $.dirh()) {
                  $.trans.frame(213, 10)
                } else {
                  $.trans.frame(214, 10)
                }
                return 1
              }
            }
            break
        }
      },

      16: function (event, K) // injured 2 (dance of pain)
      {
        const $ = this
        switch (event) {
        }
      },

      17: function (event, K) // charge mp
      {
        const $ = this
        switch (event) {
          case 'TU':
            // diam di tempat selama charging, gak boleh kegeser
            $.ps.vx = 0
            $.ps.vz = 0
            // nambah mp tiap tick, lebih cepat dari regen pasif biasa
            if ($.health.mp < $.health.mp_full) {
              $.health.mp = Math.min($.health.mp_full, $.health.mp + CHARGE_MP_RATE)
            }
            break

          case 'combo':
            // input apapun (gerak/lompat/serang/dll) membatalkan charge -> ke frame ending (999)
            if (K) {
              $.trans.frame(999, 10)
              return 1
            }
            break
        }
      },

      18: function (event, K) // burning
      {
        const $ = this
        switch (event) {
          case 'frame':
            $.brokeneffect_create(302, 1)
            break
          case 'fall_onto_ground':
            $.brokeneffect_create(302)
          case 'fell_onto_ground':
            return $.states['12'].call($, event, K)
            break
        }
      },

      19: function (event, K) // firen specific
      {
        const $ = this
        switch (event) {
          case 'TU':
            $.ps.vz = $.dirv() * ($.data.bmp.running_speedz)
            break
        }
      },

      301: function (event, K) // deep specific
      {
        const $ = this
        switch (event) {
          case 'frame_force':
            if ($.frame.N !== 290) {
              return 1 // disable pre update of force
            }
            break
          case 'TU':
            $.ps.vz = $.dirv() * ($.data.bmp.walking_speedz)
            break
          case 'hit_stop':
            $.effect_stuck(1, 2) // not stuck immediately but next frame (timein=1)
            $.trans.inc_wait(1)
            return 1
        }
      },

      400: function (event, K) // teleport to the nearest enemy
      {
        const $ = this
        switch (event) {
          case 'frame':
            var targets = $.match.scene.query(null, $, {
              not_team: $.team,
              type: 'character',
              sort: 'distance'
            })
            if (targets.length) {
              const en = targets[0]
              $.ps.x = en.ps.x - 120 * ($.dirh())
              $.ps.y = 0
              $.ps.z = en.ps.z
            }
            break
        }
      },

      401: function (event, K) // teleport to the furthest teammate
      {
        const $ = this
        switch (event) {
          case 'frame':
            var targets = $.match.scene.query(null, $, {
              team: $.team,
              type: 'character',
              sort: 'distance'
            })
            targets.reverse()
            if (targets.length) {
              const en = targets[0]
              $.ps.x = en.ps.x + 60 * ($.dirh())
              $.ps.y = 0
              $.ps.z = en.ps.z
            }
            break
        }
      },

      501: function (event)
      {
        const $ = this
        switch (event) {
          case 'frame':
            switch ($.frame.N) {
              case 298:
                if ($.trans.next() === 999) {
                  $.id_update('rudolf_transform')
                }
                break
            }
        }
      },

      1700: function (event, K) // heal
      {
        const $ = this
        switch (event) {
          case 'frame':
            $.effect.heal = GC.effect.heal_max
            break
        }
      },

      x: function (event, K) {
        const $ = this
        switch (event) {
        }
      }
    }

    // state 8XXX = transform to character id (state - 8000)
    // [fix] otomatis untuk SEMUA state 8000-8999 via Proxy, tidak perlu
    // didaftarkan manual per id lagi (dulu: transform_state_ids = [10, 58, 70, 71, 52])
    const transform_state_re = /^8\d{3}$/
    const transform_state_cache = {}

    function make_transform_state (target_id) {
      return function (event) {
        const $ = this
        if (event === 'frame') {
          $.match.transform_panel($.uid)
          const spec = {
            dir: $.ps.dir,
            health: $.health,
            stat: $.stat,
            replace_from: $,
          }
          // [fix] Kyubi (id 52) mulai dari frame default (0), sama seperti
          // transform lain - tidak ada override frame khusus.
          $.match.create_transform_character({
            name: 'transform',
            id: target_id,
            controller: $.con,
            team: $.team,
            pos: { x: $.ps.x, y: $.ps.y, z: $.ps.z },
            spec: spec
          })
        }
      }
    }

    function get_transform_state (prop) {
      if (!transform_state_cache[prop]) {
        const target_id = parseInt(prop, 10) - 8000
        transform_state_cache[prop] = make_transform_state(target_id)
      }
      return transform_state_cache[prop]
    }

    const states_proxy_handler = {
      get (target, prop, receiver) {
        if (prop in target) { return Reflect.get(target, prop, receiver) }
        if (typeof prop === 'string' && transform_state_re.test(prop)) {
          return get_transform_state(prop)
        }
        return undefined
      },
      has (target, prop) {
        if (prop in target) { return true }
        return typeof prop === 'string' && transform_state_re.test(prop)
      }
    }

    const id_updates = // nasty fix (es)
    {
      default: function (event, K, tag) {
        switch (event) {
          case 'revert_transform':
            const $ = this
            $.transform_character.is_rudolf_transform = false
            $.match.create_object($.transform_character.opoint, $)
            $.match.transform_panel($.uid)
            $.match.create_transform_character({
              name: 'transform',
              id: 5,
              controller: $.con,
              team: $.team,
              pos: { x: $.ps.x, y: $.ps.y, z: $.ps.z },
              spec: {                
                dir: $.ps.dir,
                health: $.health,
                stat: $.stat,
                transform_character: $.transform_character,
                replace_from: $,
              }
            })
            break
        }
      },
      1: function (event, K, tag) // deep
      {
        const $ = this
        switch (event) {
          case 'state3_frame':
            switch ($.frame.N) {
              case 267:
                $.ps.vy += 1
                return 1
            }
            break
          case 'state15_crouch':
            if ($.frame.PN >= 267 && $.frame.PN <= 272) {
              $.trans.inc_wait(-1)
            }
            break
          case 'generic_combo':
            if (tag === 'hit_Fj') {
              if (K === 'D>J' || K === 'D>AJ') {
                $.switch_dir('right')
              } else {
                $.switch_dir('left')
              }
            }
            break
        }
      },
      2: function (event, K) // naruto - transform jadi Kyubi
      // sekarang ditangani otomatis lewat generic state 8052 (lihat blok
      // "state 8XXX = transform to character id" di atas), dipicu oleh
      // rangkaian frame kyubii (375-388) di naruto.js saat frame mencapai 388.
      {
        const $ = this
        switch (event) {
        }
      },
      5: function (event) // Rudolf
      {
        const $ = this
        switch (event) {
          case 'state3_frame':
            if ($.frame.N >= 273 && $.frame.N <= 276) {
              $.ps.vy = -6.8
            }
            break
          case ('rudolf_transform'):
            if ($.catching) {
              $.transform_character = {
                id:  $.catching.id, // create_characters
                uid: $.catching.uid, // panel
                opoint: { // smoke
                  kind: 1, x: 41, y: 70, action: 70, dvx: 0, dvy: 0, oid: 204, facing: 0
                },
                is_rudolf_transform: true,
              }
            }
            if (!$.transform_character) {
              break
            }
            $.match.transform_panel($.uid, $.transform_character.uid)
            $.match.create_transform_character({
              name: 'transform',
              id: $.transform_character.id,
              controller: $.con,
              team: $.team,
              pos: { x: $.ps.x, y: $.ps.y, z: $.ps.z },
              spec: {
                dir: $.ps.dir,
                health: $.health,
                stat: $.stat,
                transform_character: $.transform_character,
                replace_from: $,
              }
            })
            break
          case 'state1280_disappear':
            if ($.frame.N === 257) { // next: 1280
              $.sp.hide()
              $.shadow.hide()
              $.effect.super = true
              $.counter.disappear_count = 0
            }
            break
        }
      },
      6: function (event, K, tag) // Louis
      {
        const $ = this
        switch (event) {
          case 'generic_combo':
            if (tag === 'hit_ja') // FIX ME: disable transform
            {
              return 1
            }
            break
        }
      },
      10: function (event)
      {
        const $ = this
        switch (event) {
          case 'state3_fly_crash':
            $.trans.set_wait(0)
            break
        }
      },
      11: function (event) // davis
      {
        const $ = this
        switch (event) {
          case 'state3_hit_stop':
            switch ($.frame.N) {
              // to fix many_punch
              case 271: case 276: case 280:
                $.effect_stuck(1, 2) // not stuck immediately but next frame (timein=1)
                $.trans.inc_wait(1)
                return 1
              case 273:
                $.effect_stuck(0, 2)
                return 1
            }
            break
          case 'state3_frame_force':
            switch ($.frame.N) {
              // to fix many_punch
              case 275: case 278: case 279:
                return 1 // disable pre update of force
            }
            break
        }
      }
    }

    const states_switch_dir = // whether to allow switch dir in each state
    {
      0: true,
      1: true,
      2: false,
      3: false,
      4: true,
      5: false,
      6: false,
      7: true,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
      13: false,
      14: false,
      15: false,
      16: false
    }

    // inherit livingobject
    function character(config, data, thisID) {
      /* (function ()
      { //a small benchmark for make_array efficiency,
        //for deep and davis,
        //>>time to make_array of 1105 frames:15; x=33720
        //>>time to make_array of 1070 frames:15; x=29960
        var sta=new Date();
        var ccc=0;
        var x=0;
        var tags={'itr':'itr','bdy':'bdy'};
        for (var m=0; m<5; m++)
        for (var j in data.frame)
        {
          ccc++;
          for (var l in tags)
          {
            var obj = Futil.make_array(data.frame[j][l]);
            for (var k=0; k<obj.length; k++)
              x+=obj[k].x;
          }
        }
        var fin=new Date();
        console.log('time to make_array of '+ccc+' frames of '+data.bmp.name+':'+(fin-sta)+'; x='+x);
      }()); */

      const $ = this
      // chain constructor
      livingobject.call(this, config, data, thisID)
      if (typeof id_updates[$.id] === 'function') {
        $.id_update = id_updates[$.id]
      } else {
        $.id_update = id_updates.default
      }
      $.mech.floor_xbound = true
      $.con = config.controller
      $.combo_buffer =
      {
        combo: null,
        timeout: 0
      }
      if ($.con) {
        function combo_event(kobj) {
          const K = kobj.name
          switch (K) {
            case 'left': case 'right':
              if ($.allow_switch_dir) {
                $.switch_dir(K)
              }
          }
          if ($.combo_buffer.timeout === GC.combo.timeout &&
            priority[K] < priority[$.combo_buffer.combo]) { // combo clash in same frame, higher priority wins
          } else {
            $.combo_buffer.combo = K
            $.combo_buffer.timeout = GC.combo.timeout
          }
        }
        const dec_con = // combo detector
        {
          clear_on_combo: true,
          callback: combo_event // callback function when combo detected
        }
        let combo_list = [
          { name: 'left', seq: ['left'], clear_on_combo: false },
          { name: 'right', seq: ['right'], clear_on_combo: false },
          { name: 'up', seq: ['up'], clear_on_combo: false },
          { name: 'down', seq: ['down'], clear_on_combo: false },
          { name: 'def', seq: ['def'], clear_on_combo: false },
          { name: 'jump', seq: ['jump'], clear_on_combo: false },
          { name: 'att', seq: ['att'], clear_on_combo: false },
          { name: 'left-left', seq: ['left', 'left'], maxtime: 9 },
          { name: 'right-right', seq: ['right', 'right'], maxtime: 9 },
          { name: 'jump-att', seq: ['jump', 'att'], maxtime: 0, clear_on_combo: false }
          // plus those defined in Global.combo_list
          // priority grows downward
        ]
        combo_list = combo_list.concat(Global.combo_list)
        $.combodec = new Fcombodec($.con, dec_con, combo_list)
        var priority = {}
        for (let i = 0; i < combo_list.length; i++) {
          priority[combo_list[i].name] = i
        }
      }
      $.hold =
      {
        obj: null // holding weapon
      }
      $.health.bdefend = 0
      $.health.fall = 0
      $.health.hp = $.health.hp_full = $.health.hp_bound = $.proper('hp') || GC.default.health.hp_full
      $.health.hp_lost = 0
      $.health.mp_full = GC.default.health.mp_full
      $.health.mp = GC.default.health.mp_start
      $.health.mp_usage = 0
      $.health.mp_lost = 0 // [Neora port] tracks MP drained via extended itr effects (4xxx/7xxx/8xxx)
      $.stat =
      {
        attack: 0,
        picking: 0,
        kill: 0
      }
      $.counter = 
      {
        disappear_count : -1,
        dead_blink_count : -1,
      }
      $.transform_character = null
      $.trans.frame = function (next, au) {
        if (next === 0 || next === 999) {
          this.set_next(next, au)
          this.set_wait(0, au)
          return
        }
        const nextF = $.data.frame[next]
        if (!nextF) { return }
        // check if mp is enough
        let dmp = 0
        if (nextF.mp > 0) {
          dmp = nextF.mp % 1000
        }
        if ($.health.mp - dmp >= 0) {
          this.set_next(next, au)
          this.set_wait(0, au)
        }
      }
      $.setup()
    }
    character.prototype = new livingobject()
    character.prototype.constructor = character
    character.prototype.type = 'character'
    const states_proxy = new Proxy(states, states_proxy_handler)
    character.prototype.states = states_proxy
    livingobject.register_states('character', states_proxy) // [Neora] daftar ke fallback registry
    character.prototype.states_switch_dir = states_switch_dir

    character.prototype.destroy = function () {
      const $ = this
      livingobject.prototype.destroy.call(this)
      // (handled by manager.js) remove combo listener to controller
    }

    // to emit a combo event
    character.prototype.combo_update = function () {
      /** different from `state_update`, current state receive the combo event first,
        and only if it returned falsy result, the combo event is passed to the generic state.
        if the combo event is not consumed, it is stored in state memory,
        resulting in 1 combo event being emited every frame until it is being handled or
        overridden by a new combo event.
        a combo event is emitted even when there is no combo, in such case `K=null`
        */

      const $ = this
      let K = $.combo_buffer.combo
      if (!K) { K = null }
      if ($.combo_buffer.combo === 'jump-att') { K = 'jump' }

      // [fix] samakan dengan state_update: state 15 yang itr-nya masih punya
      // catchingact/caughtact diperlakukan seperti state 9 (lanjutan combo
      // catching, bukan state 15 biasa)
      let effective_state = $.frame.D.state
      if (effective_state === 15) {
        const itr_list = Futil.make_array($.frame.D.itr)
        for (const i in itr_list) {
          if (itr_list[i] && (itr_list[i].catchingact || itr_list[i].caughtact)) {
            effective_state = 9
            break
          }
        }
      }

      const tar1 = $.states[effective_state]
      if (tar1) { var res1 = tar1.call($, 'combo', K) }
      const tar2 = $.states.generic
      if (!res1) { if (tar2) { var res2 = tar2.call($, 'combo', K) } }
      if (tar1) { tar1.call($, 'post_combo') }
      if (tar2) { tar2.call($, 'post_combo') }
      if ($.combo_buffer.combo === 'jump-att') {
        if (res1 || res2) {
          $.combo_buffer.combo = 'att' // degrade
        }
      } else {
        if (res1 || res2 || // do not store if returned true
          K === 'left' || K === 'right' || K === 'up' || K === 'down') { // dir combos are not persistent
          $.combo_buffer.combo = null
        }
      }
    }

    // [Neora] ITR kind 8 family (itrkind.inc): teleport + optional heal, type-gated variants
    function itr_kind8_match (kind) {
      if (kind === 8) return { typeFilter: null, axis: 0 }
      if (kind === undefined || kind < 800 || kind > 876) return null
      const group = Math.floor((kind - 800) / 10) // 0..7
      const axis = kind % 10
      if (axis > 6) return null
      const typeMap = [0, 1, 2, 3, 4, 5, 6, [1, 2, 4, 6]]
      return { typeFilter: typeMap[group], axis }
    }
    // mapping numeric type NTSD -> string type F.LF (dikonfirmasi Zero untuk 0-3, 4/5/6 belum pasti)
    const typeNumberMap = {
      character: 0,
      lightweapon: 1,
      heavyweapon: 2,
      specialattack: 3
      // type 4, 5, 6 belum dikonfirmasi (kemungkinan drink dkk) - tambahin di sini kalau udah pasti
    }

    /**
      @protocol caller hits callee
      @param ITR the itr object in data
      @param att reference of attacker
      @param attps position of attacker
      @param rect the hit rectangle where visual effects should appear
     */
    character.prototype.hit = function (ITR, att, attps, rect) {
      const $ = this
      if (!$.itr_vrest_test(att.uid)) {
        if (GC.debug_hit_range) {
          console.log('[VREST-BLOCK] ' + $.data.bmp.name + ' kena tolak hit dari uid=' + att.uid +
            ' | sisa vrest=' + $.itr.vrest[att.uid] + ' | itr.injury=' + ITR.injury + ' itr.vrest=' + ITR.vrest)
        }
        return false
      }
      if (GC.debug_hit_range) {
        console.log('[VREST-OK] ' + $.data.bmp.name + ' KENA hit dari uid=' + att.uid +
          ' | itr.injury=' + ITR.injury + ' itr.vrest=' + ITR.vrest)
      }

      // [Neora] BDY kind 1000-4999 (bodies.inc: weNeedMoarBodies): kalau bdy TARGET yang
      // kena hit punya kind di range ini, target langsung "direkrut" (tim-nya diganti
      // ikut attacker) + dipaksa pindah ke frame tertentu (kind - group*1000). Ini soal
      // bdy TARGET, bukan itr attacker, jadi dicek paling awal sebelum switch ITR.kind
      // manapun. Kind 1000/2000 ada syarat tambahan (dari assembly): target harus
      // type 'character' dan team-nya bukan 5 - kalau gak kepenuhi, bdy ini dilewatin
      // dan hit diproses normal (fallthrough ke bawah).
      const bdyList = Futil.make_array($.frame.D.bdy)
      for (const i in bdyList) {
        const bk = bdyList[i] && bdyList[i].kind
        if (bk === undefined || bk <= 999 || bk > 4999) { continue }
        const group = Math.floor(bk / 1000) // 1..4
        if ((group === 1 || group === 2) && !($.type === 'character' && $.team !== 5)) {
          continue // syarat gak kepenuhi -> bdy ini dilewatin, coba bdy lain / lanjut hit normal
        }
        $.team = att.team
        $.trans.set_next(bk - group * 1000, 41)
        $.trans.set_wait(0, 41)
        // [Neora] kind 1000/3000 juga ngasih efek "shake" ke attacker+target di versi
        // asli - belum diimplementasi di sini karena butuh dukungan rendering/sprite
        // yang belum ada di file ini.
        return true
      }

      let accepthit = false
      let defended = false
      let ef_dvx = 0; let ef_dvy = 0; let inj = 0
      if ($.state() === 10) // being caught
      {
        if ($.catching.caught_cpointhurtable()) {
          accepthit = true
          fall()
        }
        if ($.catching.caught_cpointhurtable() === 0 && $.catching !== att) { // I am unhurtable as defined by catcher,
          // and I am hit by attacker other than catcher
        } else {
          accepthit = true
          inj += Math.abs(ITR.injury)
          if (ITR.injury > 0) {
            $.effect_create(0, GC.effect.duration)
            let tar
            if (ITR.vaction) {
              tar = ITR.vaction
            } else {
              tar = (attps.x > $.ps.x) === ($.ps.dir === 'right') ? $.get_cpoint().fronthurtact : $.get_cpoint().backhurtact
            }
            $.trans.frame(tar, 20)
          }
        }
      } else if ($.state() === 14) {
        // lying
      } else if ($.state() === 19 && att.state() === 3000) {
        return false // firerun
      } else if ($.state() >= 9000 && $.state() <= 9799) {
        // [Neora] state 9XXX (states.inc): kalau lagi di frame ini dan kena hit,
        // langsung pindah ke frame (state-9000) alih-alih animasi 'kena pukul' normal.
        // Damage tetap kena seperti biasa, cuma frame reaksinya yang di-override.
        console.log('[STATE9xxx] kena hit di state ' + $.state() + ', redirect ke frame ' + ($.state() - 9000))
        accepthit = true
        inj = ITR.injury || 0
        $.trans.set_next($.state() - 9000, 20)
        $.trans.set_wait(0, 20)
      } else if (ITR.kind === undefined || // default
        ITR.kind === 0 || // normal
        ITR.kind === 4 || // falling
        ITR.kind === 9) // reflective shield
      {
        accepthit = true
        const compen = $.ps.y === 0 ? 1 : 0 // magic compensation
        const attdir = att.ps.vx === 0 ? att.dirh() : (att.ps.vx > 0 ? 1 : -1)
        ef_dvx = ITR.dvx ? attdir * (ITR.dvx - compen) : 0
        ef_dvy = ITR.dvy ? ITR.dvy : 0
        const effectnum = ITR.effect !== undefined ? ITR.effect : GC.default.effect.num

        if ($.state() === 13 && effectnum === 30) { // frozen characters are immune to effect 30 'weak ice'
          return false
        }

        if (($.state() === 18 || $.state() === 19) && (effectnum === 20 || effectnum === 21)) { // burning and firerun characters are immune to effect 20/21 'weak fire'
          return false
        }

        if ($.state() === 7 && // defend
          (attps.x > $.ps.x) === ($.ps.dir === 'right')) // attacked in front
        {
          if (ITR.injury) { inj += GC.defend.injury.factor * ITR.injury }
          if (ITR.bdefend) { $.health.bdefend += ITR.bdefend }
          if ($.health.bdefend > GC.defend.break_limit) { // broken defence
            $.trans.frame(112, 20)
          } else {  // an effective defence
            $.trans.frame(111, 20)
          }
          if (ef_dvx) { ef_dvx += (ef_dvx > 0 ? -1 : 1) * util.lookup_abs(GC.defend.absorb, ef_dvx) }
          ef_dvy = 0
          if ($.health.hp - inj <= 0) {
            falldown()
          } else {
            defended = true
          }
        } else {
          if ($.hold.obj && $.hold.obj.type === 'heavyweapon') {
            $.drop_weapon(0, 0)
          }
          if (ITR.injury) { inj += ITR.injury } // injury
          $.health.bdefend = 45 // lose defend ability immediately
          fall()
        }

        // effect
        let vanish = GC.effect.duration - 1
        switch ($.trans.next()) {
          case 111: vanish = 3; break
          case 112: vanish = 4; break
        }
        // [Neora port] effect codes >=1000 are extended HP/MP/transform effects (itreff.inc)
        // they must NOT go through effect_create (which sets effect.stuck=true and freezes the object)
        if (!$.itr_effect_extended(effectnum, att)) {
          $.effect_create(effectnum, vanish, ef_dvx, ef_dvy)
          posteffect(effectnum)
        }
      } else if (ITR.kind === 10 || ITR.kind === 11) {
        $.flute_force()
        if ($.state() === 12) {
          inj = ITR.injury * 2
          accepthit = true
        }
      } else if (ITR.kind === 15) {
        $.whirlwind_force(rect)
      } else if (ITR.kind === 16) {
        $.trans.frame(200, 38)
        inj = ITR.injury
        accepthit = true
      } else if (ITR.kind === 1000) {
        // [Neora] IK-1000 (itrkind.inc): conditional teleport. Reuses existing itr fields:
        // dvx=HP cost, dvy=MP cost, x/y/z=destination (-1=unchanged), injury=target frame (required)
        const hpCost = ITR.dvx || 0
        const mpCost = ITR.dvy || 0
        console.log('[IK1000] dicoba, hpCost=' + hpCost + ' mpCost=' + mpCost + ' hp_sekarang=' + $.health.hp + ' mp_sekarang=' + $.health.mp)
        if ($.health.hp >= hpCost && $.health.mp >= mpCost) {
          $.health.hp -= hpCost
          $.health.mp -= mpCost
          if (ITR.x !== undefined && ITR.x > -1) { $.ps.x = ITR.x }
          if (ITR.y !== undefined && ITR.y > -1) { $.ps.y = -ITR.y }
          if (ITR.z !== undefined && ITR.z > -1) { $.ps.z = ITR.z }
          if (ITR.injury !== undefined && ITR.injury > -1) {
            if ($.data.frame[ITR.injury]) {
              $.trans.set_next(ITR.injury, 40)
              $.trans.set_wait(0, 40)
              accepthit = true
              console.log('[IK1000] SUKSES -> teleport ke x=' + $.ps.x + ' y=' + $.ps.y + ' z=' + $.ps.z + ' frame=' + ITR.injury)
            } else {
              console.log('[IK1000] GAGAL - frame tujuan ' + ITR.injury + ' gak ada di data.frame karakter ini')
            }
          } else {
            console.log('[IK1000] field injury (target frame) gak diisi, HP/MP kepotong tapi gak ada efek lain')
          }
          // [Neora quirk, dipertahankan apa adanya] kalau `injury` (target frame) gak diisi,
          // HP/MP tetap kepotong tapi gak ada efek lain. Pastikan data selalu isi field ini.
        } else {
          console.log('[IK1000] GAGAL - HP/MP gak cukup')
        }
      } else if (itr_kind8_match(ITR.kind)) {
        // [Neora] ITR kind 8 family (itrkind.inc): teleport + heal opsional, digate per item-type
        const k8 = itr_kind8_match(ITR.kind)
        const myTypeNum = typeNumberMap[$.type]
        const typeOK = k8.typeFilter === null ||
          (Array.isArray(k8.typeFilter) ? k8.typeFilter.includes(myTypeNum) : myTypeNum === k8.typeFilter)
        console.log('[IK8] kind=' + ITR.kind + ' axis=' + k8.axis + ' typeFilter=' + JSON.stringify(k8.typeFilter) + ' target.type=' + $.type + '(' + myTypeNum + ') typeOK=' + typeOK)
        if (typeOK) {
          accepthit = true
          if (ITR.injury > 0) { $.heal(ITR.injury) } // injury dobel jadi heal amount di kind 8 family
          const dvx = ITR.dvx || 0
          switch (k8.axis) {
            case 0: $.ps.vx = dvx; if (ITR.x !== undefined) { $.ps.x = ITR.x }; break
            case 1: $.ps.vx = dvx; if (ITR.x !== undefined) { $.ps.x = ITR.x }; if (ITR.y !== undefined) { $.ps.y = ITR.y }; break
            case 2: $.ps.vx = dvx; if (ITR.y !== undefined) { $.ps.y = ITR.y }; break
            case 3: if (ITR.x !== undefined) { $.ps.x = ITR.x }; break
            case 4: if (ITR.x !== undefined) { $.ps.x = ITR.x }; if (ITR.y !== undefined) { $.ps.y = ITR.y }; break
            case 5: if (ITR.y !== undefined) { $.ps.y = ITR.y }; break
            case 6: $.ps.vx = dvx; break // dvx-only, tanpa ubah posisi
          }
          if (k8.axis !== 6 && ITR.z !== undefined) { $.ps.z = ITR.z }
          console.log('[IK8] SUKSES -> x=' + $.ps.x + ' y=' + $.ps.y + ' z=' + $.ps.z + ' hp=' + $.health.hp)
        }
      }
      function fall() {
        if (ITR.fall !== undefined) {
          $.health.fall += ITR.fall
        } else {
          $.health.fall += GC.default.fall.value
        }
        const fall = $.health.fall
        if ($.state() == 13) {
          falldown()
        } else if ($.ps.y < 0 || $.ps.vy < 0) {
          falldown()
        } else if ($.health.hp - inj <= 0) {
          falldown()
        } else if (fall > 0 && fall <= 20) {
          $.trans.frame(220, 20)
        } else if (fall > 20 && fall <= 30) {
          $.trans.frame(222, 20)
        } else if (fall > 30 && fall <= 40) {
          $.trans.frame(224, 20)
        } else if (fall > 40 && fall <= 60) {
          $.trans.frame(226, 20)
        } else if (GC.fall.KO < fall) {
          falldown()
        }
      }
      function falldown() {
        if (ITR.dvy === undefined) { ef_dvy = GC.default.fall.dvy }
        $.health.fall = 0
        $.ps.vy = 0
        const front = (attps.x > $.ps.x) === ($.ps.dir === 'right') // attacked in front
        if (front && ITR.dvx < 0 && ITR.bdefend >= 60) {
          $.trans.frame(186, 21)
        } else if (front) {
          $.trans.frame(180, 21)
        } else if (!front) {
          $.trans.frame(186, 21)
        }
      }
      function posteffect(effectnum) {
        if (defended) {
          switch (effectnum) {
            case 0: // normal hit
            case 1: // blood
              $.match.sound.play('2/002')
              break
          }
          return
        }
        switch (effectnum) {
          case 0: // normal hit
          case 1: // blood
            switch ($.trans.next()) {
              case 180: case 186:
                $.drop_weapon(ef_dvx, ef_dvy)
                break
            }
            $.visualeffect_create(effectnum, rect, (attps.x < $.ps.x), ($.health.fall > 0 ? 0 : 1), true)
            break
          case 2: // fire
          case 21:
          case 22:
          case 23:
            $.drop_weapon(ef_dvx, ef_dvy)
          case 20:
            $.trans.frame(203, 36)
            $.match.sound.play('2/070')
            break
          case 3: case 30: // ice
            $.drop_weapon(ef_dvx, ef_dvy)
            if ($.state() !== 13) {
              $.trans.frame(200, 38)
            } else {
              $.trans.frame(182, 21)
            }
            if ($.state() === 13) {
              $.match.sound.play('2/066')
            } else {
              $.match.sound.play('2/065')
            }
            break
          case 4:
            $.drop_weapon(ef_dvx, ef_dvy)
            break
        }
      }

      if (accepthit) {
        $.itr.attacker = att
        $.itr_vrest_update(att.uid, ITR)
      }
      $.injury(inj)
      if (accepthit) { return inj } else { return false }
    }
    // [Neora port] itreff.inc — extended itr effect codes 1000-9999
    // encodes both type (thousands digit) and magnitude (remainder) in one number.
    // returns true if handled (caller should then skip normal effect_create/posteffect).
    character.prototype.itr_effect_extended = function (effectnum, att) {
      const $ = this
      if (effectnum < 1000) return false

      const amount = effectnum % 1000
      const range = Math.floor(effectnum / 1000)

      switch (range) {
        case 1: // drain target HP
          $.health.hp = Math.max(0, $.health.hp - amount)
          $.health.hp_lost += amount
          break
        case 2: // heal target HP, only if target is an actual character (not item/weapon)
          if ($.type === 'character') { $.health.hp += amount }
          break
        case 3: // heal target HP, no type-gate
          $.health.hp += amount
          break
        case 4: // drain target MP
          $.health.mp = Math.max(0, $.health.mp - amount)
          $.health.mp_lost += amount
          break
        case 5: // restore target MP, only if target is an actual character
          if ($.type === 'character') { $.health.mp += amount }
          break
        case 6: // restore target MP, no type-gate
          $.health.mp += amount
          break
        case 7: // drain attacker's own MP (self cost), only if attacker is an actual character
          if (att.type === 'character') {
            att.health.mp = Math.max(0, att.health.mp - amount)
            att.health.mp_lost += amount
          }
          break
        case 8: // transfer MP: attacker pays, target receives
          if (att.type === 'character') {
            att.health.mp = Math.max(0, att.health.mp - amount)
            att.health.mp_lost += amount
            $.health.mp += amount
          }
          break
        case 9: // force attacker into a new frame/state (self-transform on hit)
          // au=40: above the highest documented authority tier (38: ice), so this
          // always wins, matching the native code's unconditional memory overwrite.
          if (att.type === 'character') {
            att.trans.set_next(amount, 40)
            att.trans.set_wait(0, 40)
          }
          break
      }
      return true
    }
    character.prototype.injury = function (inj) {
      const $ = this
      $.health.hp -= inj
      $.health.hp_lost += inj
      $.health.hp_bound -= Math.ceil(inj * 1 / 3)
      if ($.is_npc && $.itr.attacker) {
        $.itr.attacker.offset_attack(inj)
      }
    }
    character.prototype.heal = function (amount) {
      this.effect.heal = amount
      return true
    }
    character.prototype.attacked = function (inj) {
      if (inj === true) { return true } else if (inj > 0) {
        if (this.is_npc && this.parent) {
          this.parent.stat.attack += inj
        } else {
          this.stat.attack += inj
        }
        return true
      }
    }
    character.prototype.offset_attack = function (inj) {
      this.stat.attack -= inj
    }
    character.prototype.killed = function () {
      if (this.is_npc) {
        this.parent.stat.kill++
      } else {
        this.stat.kill++
      }
    }
    character.prototype.die = function () {
      if (!this.is_npc) {
        this.itr.attacker.killed()
      }
    }

    // pre interaction is based on `itr` of next frame
    character.prototype.pre_interaction = function () {
      const $ = this
      const ITR_LIST = Futil.make_array($.trans.next_frame_D().itr)

      for (const i in ITR_LIST) {
        const ITR = ITR_LIST[i] // the itr tag in data
        // first check for what I have got into intersect with
        const vol = $.mech.volume(ITR)
        vol.zwidth = 0
        const hit = $.scene.query(vol, $, { tag: 'body' })

        switch (ITR.kind) {
          case 1: // catch
          case 3: // super catch
            for (var t in hit) {
              if (hit[t].team !== $.team) // only catch other teams
              {
                if (hit[t].type === 'character') // only catch characters
                {
                  if ((ITR.kind === 1 && hit[t].state() === 16) || // you are in dance of pain
                    (ITR.kind === 3)) // super catch
                  {
                    if (!$.itr.arest) {
                      const dir = hit[t].caught_a(ITR, $, { x: $.ps.x, y: $.ps.y, z: $.ps.z })
                      if (dir) {
                        $.itr_arest_update(ITR)
                        if (dir === 'front') {
                          $.trans.frame(ITR.catchingact[0], 10)
                        } else {
                          $.trans.frame(ITR.catchingact[1], 10)
                        }
                        $.catching = hit[t]
                        // BUG FIX: stop catcher movement immediately on successful catch
                        // so skill/animation plays at correct position in front of target,
                        // not behind them due to residual forward velocity
                        $.ps.vx = 0
                        $.ps.vz = 0
                        break
                      }
                    }
                  }
                }
              }
            }
            break

          case 7: // pick weapon easy
            if (!$.con.state.att) {
              break // only if att key is down
            }
          case 2: // pick weapon
            if (!$.hold.obj) {
              for (var t in hit) {
                if (!(ITR.kind === 7 && hit[t].type === 'heavyweapon')) // kind 7 cannot pick up heavy weapon
                {
                  if (hit[t].type === 'lightweapon' || hit[t].type === 'heavyweapon') {
                    if (hit[t].pick($)) {
                      $.stat.picking++
                      $.itr_arest_update(ITR)
                      if (ITR.kind === 2) {
                        if (hit[t].type === 'lightweapon') {
                          $.trans.frame(115, 10)
                        } else if (hit[t].type === 'heavyweapon') {
                          $.trans.frame(116, 10)
                        }
                      }
                      $.hold.obj = hit[t]
                      break
                    }
                  }
                }
              }
            }
            break
        }
      }
    }

    // post interaction is based on `itr` of current frame
    character.prototype.post_interaction = function () {
      const $ = this
      const ITR_LIST = Futil.make_array($.frame.D.itr)

      // TODO
      /* 某葉: 基本上會以先填入的itr為優先， 但在範圍重複、同effect的情況下的2組itr，
      攻擊時，會隨機指定其中一個itr的效果。
      （在範圍有部份重複或是完全重複的部份才有隨機效果。） */

      for (const i in ITR_LIST) {
        const ITR = ITR_LIST[i] // the itr tag in data
        // first check for what I have got into intersect with
        const vol = $.mech.volume(ITR)
        vol.zwidth = 0
        const hit = $.scene.query(vol, $, { tag: 'body' })

        switch (ITR.kind) {
          case 0: // normal attack
          case 4: // falling
            for (const t in hit) {
              let canhit = true
              // [fix] cek "tidak boleh serang sesama tim" sebelumnya cuma ada di
              // effect 0/1, jadi serangan dengan effect lain (mis. shuriken/kunai
              // milik bunshin/NPC) bisa lolos dan kena pemanggil atau sesama
              // bunshin dari pemanggil yang sama (mereka satu tim). Sekarang
              // dicek duluan di sini supaya berlaku untuk SEMUA effect di kind
              // 0/4 - kind ini memang khusus serangan, jadi friendly-fire harus
              // selalu dicegah terlepas dari effect number-nya.
              if (hit[t].type === 'character' && hit[t].team === $.team) {
                canhit = false
              }
              switch (ITR.effect) {
                case 0: case 1:
                  break
                case 4:
                  if (!(hit[t].type !== 'character' && hit[t].state() === 3000)) { // reflect all specialattacks with state: 3000, has no influence on other characters
                    canhit = false
                  }
                  break
                case 21: case 22: // burning
                  if ($.state() === 18 && hit[t].team === $.team) { // cannot burn teammates
                    canhit = false
                  }
                case 20:
                  if (hit[t].type !== 'character') {
                    canhit = false
                  }
                  break
              }
              if (ITR.kind === 4) {
                if ($.itr.attacker.uid === hit[t].uid || // does not hit who blown you away
                  ($.itr.attacker.parent && $.itr.attacker.parent.uid === hit[t].uid) || // specialattack
                  ($.itr.attacker.hold && $.itr.attacker.hold.pre && $.itr.attacker.hold.pre.uid === hit[t].uid)) { // weapon
                  canhit = false
                }
              }
              if (canhit) {
                if (!$.itr.arest) {
                  if ($.attacked(hit[t].hit(ITR, $, { x: $.ps.x, y: $.ps.y, z: $.ps.z }, vol))) { // hit you!
                    $.itr_arest_update(ITR)
                    // stalls
                    if ($.state_update('hit_stop')) {
                      ; // do nothing
                    } else {
                      switch ($.frame.N) {
                        case 86: case 87: case 91:
                          $.effect_stuck(0, 2)
                          $.trans.inc_wait(1)
                          break
                        default:
                          $.effect_stuck(0, GC.default.itr.hit_stop)
                      }
                    }

                    // attack one enemy only
                    if (ITR.arest) { break }
                  }
                }
              }
            }
            break
        }
      }
    }

    character.prototype.wpoint = function () {
      const $ = this
      if ($.hold.obj) {
        // [fix] kalau senjata yang dipegang sudah dihancurkan (mis. ikut lenyap
        // bareng bunshin/owner-nya), bersihkan referensinya dan jangan panggil
        // .act() lagi - ini penyebab crash "Cannot read properties of null
        // (reading 'switch_img')" karena sp senjata itu sudah di-destroy.
        if ($.hold.obj.removed) {
          $.hold.obj = null
          return
        }
        if ($.frame.D.wpoint) {
          if ($.frame.D.wpoint.kind === 1) {
            const act = $.hold.obj.act($, $.frame.D.wpoint, $.mech.make_point($.frame.D.wpoint))
            if (act.thrown) {
              $.hold.obj = null
            }
            if (act.hit !== null && act.hit !== undefined) {
              $.itr_arest_update(act)
              // stalls
              $.trans.inc_wait(GC.default.itr.hit_stop, 10)
            }
          } else if ($.frame.D.wpoint.kind === 3) {
            $.drop_weapon()
          }
        }
      }
    }

    character.prototype.opoint = function () {
      const $ = this
      if ($.frame.D.opoint) {
        if ($.frame.D.opoint.oid === 5) { // create characters
          let players = [];
          const number_of_character = Math.floor(Math.abs($.frame.D.opoint.facing) / 10);
          for (let i = 0; i < number_of_character; i++) {
            players.push({
              name: '+man',
              controller: { type: 'AIscript', id: 4 },
              type: 'computer',
              id: $.id,
              team: $.team,
              pos: {x: $.ps.x + 20*(-1*i), y: $.ps.y, z: $.ps.z},
              spec: {
                is_npc: true,
                health: {
                  hp: 20,
                  hp_full: 20,
                  hp_bound: 20,
                  mp: 100,
                  mp_full: 100,
                },
                parent: $,
              },
              
            });
          }
          if (players.length > 0) {
            $.match.create_non_player_characters(players);
          }
          return;
        }
        const ops = Futil.make_array($.frame.D.opoint)
        for (const i in ops) {
          if (Math.abs(ops[i].facing) > 10) {
            $.match.create_multiple_objects(ops[i], $, Math.floor(ops[i].facing / 10), ops[i].dvz || 3)
          } else {
            $.match.create_object(ops[i], $)
          }
        }
      }
    }

    character.prototype.hold_weapon = function (wea) {
      const $ = this
      $.hold.obj = wea
    }

    character.prototype.drop_weapon = function (dvx, dvy) {
      const $ = this
      if ($.hold.obj) {
        $.hold.obj.drop(dvx, dvy)
        $.hold.obj = null
      }
    }

    /** inter-living objects protocol: catch & throw
      for details see http://f-lf2.blogspot.hk/2013/01/inter-living-object-interactions.html
     */
    character.prototype.caught_a = function (ITR, att, attps) { // this is called when the catcher has an ITR with kind: 1 or 3
      const $ = this
      if ((ITR.kind === 1 && $.state() === 16) || // I am in dance of pain
        (ITR.kind === 3)) // that is a super catch
      {
        if ((attps.x > $.ps.x) === ($.ps.dir === 'right')) {
          $.trans.frame(ITR.caughtact[0], 22)
        } else {
          $.trans.frame(ITR.caughtact[1], 22)
        }
        $.health.fall = 0
        $.catching = att
        $.itr.attacker = att
        $.drop_weapon()
        return (attps.x > $.ps.x) === ($.ps.dir === 'right') ? 'front' : 'back'
      }
    }
    character.prototype.caught_b = function (holdpoint, cpoint, adir, vdir) { // this is called when the catcher has a cpoint with kind: 1
      const $ = this
      $.caught_b_holdpoint = holdpoint
      $.caught_b_cpoint = cpoint
      $.caught_b_adir = adir
      $.caught_b_vdir = vdir
      // store this info and process it at TU
    }
    character.prototype.get_cpoint = function () { // [fix] kalau frame sekarang gak punya cpoint, warisi cpoint dari frame terakhir yang punya (dalam rangkaian catching yang sama)
      const $ = this
      if ($.frame.D.cpoint) {
        $._last_cpoint = $.frame.D.cpoint
      }
      return $.frame.D.cpoint || $._last_cpoint || null
    }
    character.prototype.caught_cpointkind = function () {
      const $ = this
      const cp = $.get_cpoint()
      return cp ? cp.kind : 0
    }
    character.prototype.caught_cpointhurtable = function () {
      const $ = this
      const cp = $.get_cpoint()
      if (cp && cp.hurtable !== undefined) {
        return cp.hurtable
      } else {
        return GC.default.cpoint.hurtable
      }
    }
    character.prototype.caught_throw = function (cpoint, vdir) {  // I am being thrown
      const $ = this
      if (cpoint.vaction !== undefined) {
        $.trans.frame(cpoint.vaction, 22)
      } else {
        $.trans.frame(GC.default.cpoint.vaction, 22)
      }
      $.caught_throwz = vdir
    }
    character.prototype.caught_release = function () {
      const $ = this
      $.catching = 0
      $.trans.frame(181, 22)
      $.effect.dvx = 3 // magic number
      $.effect.dvy = -3
      $.effect.timein = -1
      $.effect.timeout = 0
    }

    // [Neora] expose id_updates table biar type lain (mis. specialattack shadow dari opoint
    // oid tipe character) bisa pakai dispatch table yang sama, karena quirk-nya nempel ke
    // character id, bukan ke instance type character doang.
    character.id_updates = id_updates

    return character
  })

