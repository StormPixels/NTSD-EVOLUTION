/** serves the same as data.txt or (deep_chop.dat in earlier versions)
 */
/**
type:
character			id from 0~99
lightweapon			id from 100~149
heavyweapon			id from 150~199
specialattack		id from 200~299
baseball
miscell (Criminal, etc, broken_weapon)
drink (Milk and beer)
effects (blood,fire)	id from 300~349 (extended standard)
 */
// extended standard
//
// CATATAN: dependency tiap karakter sudah dipindah ke depends.js
// supaya file ini lebih ringkas dan rapi. Lihat LF/depends.js

define({

  object:
  [

    // ===== Characters =====

    { id: 52, name: 'Kyubi', type: 'character', file: 'data/kyubi.js', pic: 'sprite/kyubi_f.png' },
    { id: 61, name: 'Sasuke_cs2', type: 'character', file: 'data/sasuke_cs2.js', pic: 'sprite/sasuke_cs2_f.png' },
    { id: 33, name: 'Naruto_clone', type: 'character', file: 'data/naruto_clone.js', pic: 'sprite/naruto_clone_f.png', AI: 4, hidden: true },
    { id: 2, name: 'naruto', type: 'character', file: 'data/naruto.js', pic: 'sprite/naruto_f.png', AI: 4 },
    { id: 3, name: 'Kakashi', type: 'character', file: 'data/kakashi.js', pic: 'sprite/kakashi_f.png', AI: 4 },
    { id: 85, name: 'Sai', type: 'character', file: 'data/sai.js', pic: 'sprite/sai_f.png' },
    { id: 9, name: 'Itachi', type: 'character', file: 'data/itachi.js', pic: 'sprite/itachi_f.png' },
    /*{ id: 58, name: 'Deidara_bird', type: 'character', file: 'data/deidara_bird.js', pic: 'sprite/deidara_bird_f.png' },
    { id: 71, name: 'Deidarao_bird', type: 'character', file: 'data/deidaraO_bird.js', pic: 'sprite/deidara_birdO_f.png' },
    { id: 51, name: 'Sasori', type: 'character', file: 'data/sasori.js', pic: 'sprite/sasori_f.png' },
    { id: 56, name: 'Reaper', type: 'character', file: 'data/reaper.js', pic: 'sprite/reaper_f.png' },
    { id: 57, name: 'Nckakuzu', type: 'character', file: 'data/nckakuzu.js', pic: 'sprite/nckakuzu_f.png' },
    { id: 39, name: 'Sand_creature', type: 'character', file: 'data/sand_creature.js', pic: 'sprite/sand_f.png' },
    { id: 37, name: 'Jiroubou', type: 'character', file: 'data/jiroubou.js', pic: 'sprite/jiroubou_f.png' },
    { id: 65, name: 'Tayuya', type: 'character', file: 'data/tayuya.js', pic: 'sprite/tayuya_f.png' },
    { id: 64, name: 'Sakon', type: 'character', file: 'data/sakon.js', pic: 'sprite/sakon_f.png' },
    { id: 63, name: 'Kidomaru', type: 'character', file: 'data/kidomaru.js', pic: 'sprite/kidomaru_f.png' },
    { id: 41, name: 'Spike', type: 'character', file: 'data/spike.js', pic: 'sprite/kimimarocs2_f.png' },
    { id: 73, name: 'Naruto_cloneo', type: 'character', file: 'data/naruto_cloneO.js', pic: 'sprite/naruto_cloneO_f.png', AI: 4, hidden: true },
    { id: 84, name: 'Naruto_cloney', type: 'character', file: 'data/naruto_cloneY.js', pic: 'sprite/naruto_cloneY_f.png', AI: 4 },
    { id: 53, name: 'Puppet_chyio', type: 'character', file: 'data/puppet_chyio.js', pic: 'sprite/puppetc_f.png' },
    { id: 55, name: 'Puppet_sasori', type: 'character', file: 'data/puppet_sasori.js', pic: 'sprite/puppets_f.png' },
    { id: 32, name: 'Hunter', type: 'character', file: 'data/hunter.js', pic: 'sprite/hunter_f.png' },
    // { id: 62, name: 'Sound_nin3', type: 'character', file: 'data/sound_nin3.js', pic: 'sprite/sound_nin_f.png' },
    // { id: 31, name: 'Sound_nin2', type: 'character', file: 'data/sound_nin2.js', pic: 'sprite/sound_nin_f.png' },
    // { id: 30, name: 'Sound_nin', type: 'character', file: 'data/sound_nin.js', pic: 'sprite/sound_nin_f.png' },
    { id: 77, name: 'Zetsus', type: 'character', file: 'data/zetsus.js', pic: 'sprite/wzetsu_f.png' },
    { id: 42, name: 'Itachio', type: 'character', file: 'data/itachiO.js', pic: 'sprite/itachiO_f.png' },
    { id: 72, name: 'Narutoo', type: 'character', file: 'data/narutoO.js', pic: 'sprite/narutoO_f.png', AI: 4 },
    { id: 22, name: 'Narutoy', type: 'character', file: 'data/narutoY.js', pic: 'sprite/narutoY_f.png', AI: 4 },
    { id: 11, name: 'Sasuke', type: 'character', file: 'data/sasuke.js', pic: 'sprite/sasuke_f.png' },
    { id: 40, name: 'Sasukeo', type: 'character', file: 'data/sasukeO.js', pic: 'sprite/sasukeO_f.png' },
    { id: 5, name: 'Sasukey', type: 'character', file: 'data/sasukeY.js', pic: 'sprite/sasukeY_f.png' },
    { id: 1, name: 'Sakura', type: 'character', file: 'data/sakura.js', pic: 'sprite/sakura_f.png' },
    { id: 60, name: 'Yamato', type: 'character', file: 'data/yamato.js', pic: 'sprite/yamato_f.png' },
    { id: 23, name: 'Asuma', type: 'character', file: 'data/asuma.js', pic: 'sprite/asuma_f.png' },
    { id: 7, name: 'Rock_lee', type: 'character', file: 'data/rock_lee.js', pic: 'sprite/lee_f.png' },
    { id: 18, name: 'Neji', type: 'character', file: 'data/neji.js', pic: 'sprite/neji_f.png' },
    { id: 88, name: 'Tenten', type: 'character', file: 'data/tenten.js', pic: 'sprite/ten_ten_f.png' },
    { id: 82, name: 'Shikamaru', type: 'character', file: 'data/shikamaru.js', pic: 'sprite/shikamaru_f.png' },
    { id: 12, name: 'Kiba', type: 'character', file: 'data/kiba.js', pic: 'sprite/kiba_f.png' },
    { id: 83, name: 'Shino', type: 'character', file: 'data/shino.js', pic: 'sprite/shino_f.png' },
    { id: 16, name: 'Gaara', type: 'character', file: 'data/gaara.js', pic: 'sprite/gaara_f.png' },
    { id: 66, name: 'Temari', type: 'character', file: 'data/temari.js', pic: 'sprite/temari_f.png' },
    { id: 14, name: 'Kankuro', type: 'character', file: 'data/kankuro.js', pic: 'sprite/kankuro_f.png' },
    { id: 74, name: 'Chiyo', type: 'character', file: 'data/chiyo.js', pic: 'sprite/chiyo_f.png' },
    { id: 6, name: 'Hsasori', type: 'character', file: 'data/Hsasori.js', pic: 'sprite/Hsasori_f.png' },
    { id: 81, name: 'Sasoris', type: 'character', file: 'data/sasoriS.js', pic: 'sprite/sasori_unc_f.png' },
    { id: 10, name: 'Deidara', type: 'character', file: 'data/deidara.js', pic: 'sprite/deidara_f.png' },
    { id: 70, name: 'Deidarao', type: 'character', file: 'data/deidaraO.js', pic: 'sprite/deidaraO_f.png' },
    { id: 17, name: 'Kisame', type: 'character', file: 'data/kisame.js', pic: 'sprite/kisame_f.png' },
    { id: 79, name: 'Kisames', type: 'character', file: 'data/kisameS.js', pic: 'sprite/kisameS_f.png' },
    { id: 80, name: 'Kisames2', type: 'character', file: 'data/kisameS2.js', pic: 'sprite/kisameS2_f.png' },
    { id: 24, name: 'Hidan', type: 'character', file: 'data/hidan.js', pic: 'sprite/hidan_f.png' },
    { id: 25, name: 'Kakuzu', type: 'character', file: 'data/kakuzu.js', pic: 'sprite/kakuzu_f.png' },
    { id: 76, name: 'Zetsu', type: 'character', file: 'data/zetsu.js', pic: 'sprite/zetsu_f.png' },
    { id: 87, name: 'Wzetsu', type: 'character', file: 'data/wzetsu.js', pic: 'sprite/wzetsu_f.png' },
    { id: 86, name: 'Bzetsu', type: 'character', file: 'data/bzetsu.js', pic: 'sprite/bzetsu_f.png' },
    { id: 90, name: 'Bzetsu2', type: 'character', file: 'data/bzetsu2.js', pic: 'sprite/bzetsu2_f.png' },
    { id: 27, name: 'Pein', type: 'character', file: 'data/pein.js', pic: 'sprite/pein_f.png' },
    { id: 4, name: 'Peino', type: 'character', file: 'data/peinO.js', pic: 'sprite/peinO_f.png' },
    { id: 91, name: 'Peino2', type: 'character', file: 'data/peinO2.js', pic: 'sprite/peinO2_f.png' },
    { id: 0, name: 'Tobi', type: 'character', file: 'data/tobi.js', pic: 'sprite/tobi_f.png' },
    { id: 67, name: 'Obito', type: 'character', file: 'data/obito.js', pic: 'sprite/obito_f.png' },
    { id: 13, name: 'Speedy', type: 'character', file: 'data/speedy.js', pic: 'sprite/minato_f.png' },
    { id: 21, name: 'Jiraiya', type: 'character', file: 'data/jiraiya.js', pic: 'sprite/jiraiya_f.png' },
    { id: 43, name: 'Tsunade', type: 'character', file: 'data/tsunade.js', pic: 'sprite/tsunade_f.png' },
    { id: 20, name: 'Orochimaru', type: 'character', file: 'data/orochimaru.js', pic: 'sprite/orochimaru_f.png' },
    { id: 78, name: 'Kabuto', type: 'character', file: 'data/kabuto.js', pic: 'sprite/kabuto_f.png' },
    // { id: 29, name: 'Sound4', type: 'character', file: 'data/sound4.js', pic: 'sprite/sound4_f.png' },
    { id: 26, name: 'Zabuza', type: 'character', file: 'data/zabuza.js', pic: 'sprite/zabuza_f.png' },
    { id: 28, name: 'Brrrrr', type: 'character', file: 'data/brrrrr.js', pic: 'sprite/haku_f.png' },
    { id: 75, name: 'Haku', type: 'character', file: 'data/haku.js', pic: 'sprite/hakuO_f.png' },
    { id: 19, name: 'Danzo', type: 'character', file: 'data/danzo.js', pic: 'sprite/danzo_f.png' },
    { id: 89, name: 'Danzo2', type: 'character', file: 'data/danzo2.js', pic: 'sprite/danzo2_f.png' },
    { id: 15, name: 'Killerbee', type: 'character', file: 'data/killerbee.js', pic: 'sprite/bee_f.png' },
    { id: 68, name: 'Hachibi', type: 'character', file: 'data/hachibi.js', pic: 'sprite/hachibi_f.png' },
    { id: 8, name: 'Madara', type: 'character', file: 'data/madara.js', pic: 'sprite/madara_f.png' },
    { id: 69, name: 'Hashirama', type: 'character', file: 'data/hashirama.js', pic: 'sprite/hashirama_f.png' },*/

    // ===== Special Attacks =====

    { id: 230, type: 'specialattack', file: 'data/satt/karasu.js' },
    { id: 200, type: 'specialattack', file: 'data/satt/sakura_ball.js' },
    { id: 201, type: 'specialattack', file: 'data/satt/death.js' },
    { id: 203, type: 'specialattack', file: 'data/satt/charge.js' },
    { id: 204, type: 'specialattack', file: 'data/satt/wind.js' },
    { id: 205, type: 'specialattack', file: 'data/satt/poison.js' },
    { id: 206, type: 'specialattack', file: 'data/satt/clay_bird2.js' },
    { id: 207, type: 'specialattack', file: 'data/satt/ink.js' },
    { id: 208, type: 'specialattack', file: 'data/satt/sword.js' },
    { id: 209, type: 'specialattack', file: 'data/satt/area.js' },
    { id: 210, type: 'specialattack', file: 'data/satt/katon_ball.js' },
    { id: 211, type: 'specialattack', file: 'data/satt/firen_flame.js' },
    { id: 212, type: 'specialattack', file: 'data/satt/freeze_column.js' },
    { id: 213, type: 'specialattack', file: 'data/satt/puppet.js' },
    { id: 214, type: 'specialattack', file: 'data/satt/flash.js' },
    { id: 215, type: 'specialattack', file: 'data/satt/frog.js' },
    { id: 216, type: 'specialattack', file: 'data/satt/doggy.js' },
    { id: 219, type: 'specialattack', file: 'data/satt/jan_chaseh.js' },
    { id: 220, type: 'specialattack', file: 'data/satt/crow_2.js' },
    { id: 221, type: 'specialattack', file: 'data/satt/big_boom.js' },
    { id: 222, type: 'specialattack', file: 'data/satt/ironsand.js' },
    { id: 223, type: 'specialattack', file: 'data/satt/mega_ex.js' },
    { id: 224, type: 'specialattack', file: 'data/satt/snake.js' },
    { id: 225, type: 'specialattack', file: 'data/satt/clay_bird.js' },
    { id: 226, type: 'specialattack', file: 'data/satt/coffin.js' },
    { id: 228, type: 'specialattack', file: 'data/satt/bugs.js' },
    { id: 229, type: 'specialattack', file: 'data/satt/rasenshuriken.js' },
    { id: 231, type: 'specialattack', file: 'data/satt/sanshouo.js' },
    { id: 235, type: 'specialattack', file: 'data/satt/criminal2.js' },
    { id: 236, type: 'specialattack', file: 'data/satt/nagato.js' },
    { id: 237, type: 'specialattack', file: 'data/satt/lhound.js' },
    { id: 238, type: 'specialattack', file: 'data/satt/katon_tobi.js' },
    { id: 239, type: 'specialattack', file: 'data/satt/swamp.js' },
    { id: 240, type: 'specialattack', file: 'data/satt/mangekyou.js' },
    { id: 241, type: 'specialattack', file: 'data/satt/amaterasu.js' },
    { id: 401, type: 'specialattack', file: 'data/satt/summon.js' },
    { id: 400, type: 'specialattack', file: 'data/satt/dragon.js' },
    { id: 417, type: 'specialattack', file: 'data/satt/tree.js' },
    { id: 407, type: 'specialattack', file: 'data/satt/clay_worm.js' },
    { id: 408, type: 'specialattack', file: 'data/satt/katon_big.js' },
    { id: 409, type: 'specialattack', file: 'data/satt/katon_madara.js' },
    { id: 410, type: 'specialattack', file: 'data/satt/sand_shield.js' },
    { id: 411, type: 'specialattack', file: 'data/satt/sand.js' },
    { id: 412, type: 'specialattack', file: 'data/satt/sand_2.js' },
    { id: 413, type: 'specialattack', file: 'data/satt/sand_blast.js' },
    { id: 416, type: 'specialattack', file: 'data/satt/water.js' },
    { id: 418, type: 'specialattack', file: 'data/satt/mother_puppet.js' },
    { id: 419, type: 'specialattack', file: 'data/satt/chiyo_kunais.js' },
    { id: 420, type: 'specialattack', file: 'data/satt/father_puppet.js' },
    { id: 421, type: 'specialattack', file: 'data/satt/bugs2.js' },
    { id: 433, type: 'specialattack', file: 'data/satt/itachi_kunai.js' },
    { id: 435, type: 'specialattack', file: 'data/satt/drunken.js' },
    { id: 436, type: 'specialattack', file: 'data/satt/wave.js' },
    { id: 438, type: 'specialattack', file: 'data/satt/spider.js' },
    { id: 439, type: 'specialattack', file: 'data/satt/monster.js' },
    { id: 440, type: 'specialattack', file: 'data/satt/chidori.js' },
    { id: 441, type: 'specialattack', file: 'data/satt/wood.js' },
    { id: 446, type: 'specialattack', file: 'data/satt/4TK_ball.js' },
    { id: 450, type: 'specialattack', file: 'data/satt/air_creature.js' },
    { id: 454, type: 'specialattack', file: 'data/satt/zab.js' },
    { id: 455, type: 'specialattack', file: 'data/satt/meteor.js' },
    { id: 451, type: 'specialattack', file: 'data/satt/thunder_creature.js' },
    { id: 452, type: 'specialattack', file: 'data/satt/fire_creature.js' },
    { id: 453, type: 'specialattack', file: 'data/satt/earth_creature.js' },
    { id: 462, type: 'specialattack', file: 'data/satt/shadow.js' },
    { id: 463, type: 'specialattack', file: 'data/satt/shadow_2.js' },
    { id: 464, type: 'specialattack', file: 'data/satt/shadow_3.js' },
    { id: 499, type: 'specialattack', file: 'data/satt/nckakuzuarm.js' },
    { id: 510, type: 'specialattack', file: 'data/satt/100_puppets.js' },
    { id: 511, type: 'specialattack', file: 'data/satt/100_puppets_b.js' },
    { id: 512, type: 'specialattack', file: 'data/satt/100_puppets_c.js' },
    { id: 513, type: 'specialattack', file: 'data/satt/lee_counter.js' },
    { id: 514, type: 'specialattack', file: 'data/satt/katon_kakuzu.js' },
    { id: 516, type: 'specialattack', file: 'data/satt/mirror.js' },
    { id: 517, type: 'specialattack', file: 'data/satt/b_timer.js' },
    { id: 519, type: 'specialattack', file: 'data/satt/akamaru.js' },
    { id: 520, type: 'specialattack', file: 'data/satt/gaara_cloud.js' },
    { id: 522, type: 'specialattack', file: 'data/satt/killerbee_effect.js' },
    { id: 523, type: 'specialattack', file: 'data/satt/kb_counter.js' },
    { id: 524, type: 'specialattack', file: 'data/satt/susanoo.js' },
    { id: 525, type: 'specialattack', file: 'data/satt/sharingan.js' },
    { id: 527, type: 'specialattack', file: 'data/satt/beast.js' },
    { id: 9033, type: 'specialattack', file: 'data/satt/rendan.js' },

    // [Neora] BG-triggered effect, dipanggil match.prototype.spawn_bg_effects()
    // lewat field `bg_effects` di bgdata (bg/Training/bg.js), bukan spawn dari attack
    { id: 530, type: 'specialattack', file: 'bg/rain/eff.js' },
    { id: 531, type: 'specialattack', file: 'data/type6/plat.js' },


    // ===== Light Weapons =====

    { id: 120, type: 'lightweapon', file: 'data/type1/weapon4.js' },
    { id: 500, type: 'lightweapon', file: 'data/type1/heart.js' },
    { id: 501, type: 'lightweapon', file: 'data/type1/heart2.js' },
    { id: 502, type: 'lightweapon', file: 'data/type1/heart3.js' },
    { id: 503, type: 'lightweapon', file: 'data/type1/blood.js' },
    { id: 504, type: 'lightweapon', file: 'data/type1/blood2.js' },
    { id: 505, type: 'lightweapon', file: 'data/type1/blood3.js' },
    { id: 506, type: 'lightweapon', file: 'data/type1/heart0.js' },
    { id: 509, type: 'lightweapon', file: 'data/type1/samehada.js' },
    { id: 434, type: 'lightweapon', file: 'data/type1/rasengan_ball.js' },
    { id: 437, type: 'lightweapon', file: 'data/type1/chakra.js' },
    { id: 442, type: 'lightweapon', file: 'data/type1/gate.js' },
    { id: 444, type: 'lightweapon', file: 'data/type1/byakugan.js' },
    { id: 445, type: 'lightweapon', file: 'data/type1/shield.js' },
    { id: 447, type: 'lightweapon', file: 'data/type1/die.js' },
    { id: 448, type: 'lightweapon', file: 'data/type1/flash_weap.js' },
    { id: 449, type: 'lightweapon', file: 'data/type1/jiroubou_rock.js' },
    { id: 456, type: 'lightweapon', file: 'data/type1/chakra2.js' },
    { id: 507, type: 'lightweapon', file: 'data/type1/air_creature_die.js' },
    { id: 100, type: 'lightweapon', file: 'data/type4/weapon6.js' },
    { id: 101, type: 'lightweapon', file: 'data/type4/weapon2.js' },
    { id: 121, type: 'lightweapon', file: 'data/type4/weapon5.js' },
    { id: 124, type: 'lightweapon', file: 'data/type4/weapon9.js' },
    { id: 422, type: 'lightweapon', file: 'data/type4/ex_ball.js' },
    { id: 515, type: 'lightweapon', file: 'data/type4/needle.js' },
    { id: 521, type: 'lightweapon', file: 'data/type4/weapon12.js' },
    // { id: 122, type: 'lightweapon', file: 'data/type6/weapon3.js' },
    // { id: 123, type: 'lightweapon', file: 'data/type6/weapon8.js' },
    // { id: 100, type: 'lightweapon', file: 'data/weapon0.js' }, // stick
    // { id: 101, type: 'lightweapon', file: 'data/weapon2.js' }, // hoe
    { id: 213, type: 'lightweapon', file: 'data/weapon7.js' },

    // ===== Heavy Weapons =====

    { id: 507, type: 'heavyweapon', file: 'data/type2/weapon1.js' },
    { id: 217, type: 'heavyweapon', file: 'data/type2/weapon10.js' },
    { id: 218, type: 'heavyweapon', file: 'data/type2/weapon11.js' },
    { id: 508, type: 'heavyweapon', file: 'data/type2/log.js' },
    // { id: 150, type: 'heavyweapon', file: 'data/weapon1.js' }, // stone
    // { id: 151, type: 'heavyweapon', file: 'data/weapon3.js' }, // wooden_box

    // ===== Effects =====

    { id: 300, type: 'effect', file: 'data/effect0.js' }, // blast
    { id: 301, type: 'effect', file: 'data/effect1.js' }, // blood

    // ===== Misc =====

    { id: 320, type: 'broken', file: 'data/broken.js' },
    
  ],

  AI:
  [
    { id: 1, file: 'AI/Crusher.js', name: 'CRUSHER 1.0' },
    { id: 2, file: 'AI/Challangar.js', name: 'CHALLANGAR 1.0' },
    { id: 3, file: 'AI/dumbass.js', name: 'dumbass', },
    { id: 4, file: 'AI/Ninja.js', name: 'Ninja', hidden: true },
    { id: 5, file: 'AI/training.js', name: 'doll' },
  ],

  background:
  [
    // { id: 0, name: 'AkatsukiCave', file: 'bg/AkatsukiCave/bg.js' },
    // { id: 1, name: 'AkatsukiCaveII', file: 'bg/AkatsukiCaveII/bg.js' },
    // { id: 2, name: 'Desert', file: 'bg/desert/bg.js' },
    // { id: 3, name: 'Gate', file: 'bg/Gate/bg.js' },
    // { id: 4, name: 'RedMoon', file: 'bg/RedMoon/bg.js' },
    // { id: 5, name: 'Valley', file: 'bg/Valley/bg.js' },
    // { id: 6, name: 'ValleyII', file: 'bg/ValleyII/bg.js' },
    //{ id: 7, name: 'ValleyRuins', file: 'bg/ValleyRuins/bg.js' },
    // { id: 8, name: 'Forest', file: 'bg/Forest/bg.js' },
    // { id: 9, name: 'AkatsukiCave', file: 'bg/AkatsukiCave/bg.js' },
    // { id: 10, name: 'RamenPlace', file: 'bg/RamenPlace/bg.js' },
    // { id: 11, name: 'Springs', file: 'bg/Springs/bg.js' },
    // { id: 12, name: 'Academy', file: 'bg/Academy/bg.js' },
    // { id: 13, name: 'CastleRoof', file: 'bg/CastleRoof/bg.js' },
    // { id: 14, name: 'Valley', file: 'bg/Valley/bg.js' },
    // { id: 15, name: 'Grassland', file: 'bg/Grassland/bg.js' },
       { id: 16, name: 'Valley', file: 'bg/valley/bg.js' },
       { id: 12, name: 'Amegakure', file: 'bg/ame/bg.js' },
       { id: 13, name: 'Training', file: 'bg/Training/bg.js'},
  ],

  sound:
  [
    { id: 1, file: 'sound/soundpack.js' },
  ],

  UI: { file: 'UI/UI.js' },

  properties: { file: 'data/properties.js' },

  file_editing: {},

  config: ['id: 100~199 drop weapon'],

  icon: 'sprite/icon.png'
});
