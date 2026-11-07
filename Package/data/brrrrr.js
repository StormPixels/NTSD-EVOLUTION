define({
  bmp: {
    file: [
      { "file(0-69)": "sprite/haku.png", w: 79, h: 79, row: 10, col: 7 },
      { "file(70-139)": "sprite/sakon2.png", w: 79, h: 79, row: 10, col: 7 },
      { "file(140-209)": "sprite/sakon.png", w: 79, h: 79, row: 10, col: 7 },
      { "file(210-279)": "sprite/sakon2.png", w: 79, h: 79, row: 10, col: 7 }
    ],
    name: "Haku",
    head: "sprite/haku_f.png",
    small: "sprite/haku_s.png",
    walking_frame_rate: 3,
    walking_speed: 4,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 18.5,
    running_speedz: 3.3,
    heavy_walking_speed: 3,
    heavy_walking_speedz: 1.5,
    heavy_running_speed: 5,
    heavy_running_speedz: 0.8,
    jump_height: -18.599999,
    jump_distance: 8,
    jump_distancez: 3,
    dash_height: -16.5,
    dash_distance: 15,
    dash_distancez: 3.75,
    rowing_height: -2,
    rowing_distance: 20
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 5, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_ja: 275, hit_Fj: 255, hit_Da: 245, hit_Dj: 340, hit_Uj: 260, hit_Ua: 325,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    itr: { kind: 8, x: -999, y: -9.999989842532146e+22, w: 999999, zwidth: 999, h: 900, dvx: 280 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 5, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_ja: 275, hit_Fj: 255, hit_Da: 245, hit_Dj: 340, hit_Uj: 260, hit_Ua: 325,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 60, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 5, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_ja: 275, hit_Fj: 255, hit_Da: 245, hit_Dj: 340, hit_Uj: 260, hit_Ua: 325,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  3: { name: "standing",
    pic: 3, state: 0, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_ja: 275, hit_Fj: 255, hit_Da: 245, hit_Dj: 340, hit_Uj: 260, hit_Ua: 325,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_ja: 275, hit_Fj: 255, hit_Da: 245, hit_Dj: 340, hit_Uj: 260, hit_Ua: 325,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    itr: [
      { kind: 0, x: 49, y: -99999898425321460, w: 20, h: 16, dvx: 2, bdefend: 16, injury: 15, fall: -1 },
      { kind: 8, x: -999, y: -9.999989842532146e+22, w: 999999, zwidth: 999, h: 900, dvx: 280 }
    ],
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_ja: 275, hit_Fj: 255, hit_Da: 245, hit_Dj: 340, hit_Uj: 260, hit_Ua: 325,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    itr: [
      { kind: 0, x: 49, y: -99999898425321460, w: 20, h: 16, dvx: 2, bdefend: 16, injury: 15, fall: -1 },
      { kind: 8, x: -999, y: -9.999989842532146e+22, w: 999999, zwidth: 999, h: 900, dvx: 280 }
    ],
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_ja: 275, hit_Fj: 255, hit_Da: 245, hit_Dj: 340, hit_Uj: 260, hit_Ua: 325,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 22, attacking: 0, cover: 0 },
    itr: [
      { kind: 0, x: 49, y: -99999898425321460, w: 20, h: 16, dvx: 2, bdefend: 16, injury: 15, fall: -1 },
      { kind: 8, x: -999, y: -9.999989842532146e+22, w: 999999, zwidth: 999, h: 900, dvx: 280 }
    ],
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 24, y: -999, weaponact: 23, attacking: 0, cover: 0 },
    itr: [
      { kind: 0, x: 49, y: -99999898425321460, w: 20, h: 16, dvx: 2, bdefend: 16, injury: 15, fall: -1 },
      { kind: 8, x: -999, y: -9.999989842532146e+22, w: 999999, zwidth: 999, h: 900, dvx: 280 }
    ],
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  9: { name: "running",
    pic: 20, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/003",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -999, weaponact: 25, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 19, w: 38, h: 60 }
  },
  10: { name: "running",
    pic: 21, state: 2, wait: 4, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: -999, weaponact: 23, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 19, w: 38, h: 60 }
  },
  11: { name: "running",
    pic: 22, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/004",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 56, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 19, w: 38, h: 60 }
  },
  12: { name: "heavy_obj_walk",
    pic: 23, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 23, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  13: { name: "heavy_obj_walk",
    pic: 24, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 23, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  14: { name: "heavy_obj_walk",
    pic: 25, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 22, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  15: { name: "heavy_obj_walk",
    pic: 26, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 44, y: 22, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  16: { name: "heavy_obj_run",
    pic: 125, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/003",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 28, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 15, w: 28, h: 64 }
  },
  17: { name: "heavy_obj_run",
    pic: 126, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 27, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 15, w: 28, h: 64 }
  },
  18: { name: "heavy_obj_run",
    pic: 127, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/004",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 28, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 15, w: 28, h: 64 }
  },
  19: { name: "heavy_stop_run",
    pic: 128, state: 15, wait: 7, next: 999, dvx: 2, dvy: 0, dvz: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 27, y: 28, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 15, w: 28, h: 64 }
  },
  20: { name: "normal_weapon_atck",
    pic: 23, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 22, w: 35, h: 57 },
      { kind: 0, x: 10, y: 40, w: 20, h: 13 }
    ]
  },
  25: { name: "normal_weapon_atck",
    pic: 23, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 22, w: 35, h: 57 },
      { kind: 0, x: 10, y: 40, w: 20, h: 13 }
    ]
  },
  30: { name: "jump_weapon_atck",
    pic: 54, state: 15, wait: 1, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 22, y: 10, w: 40, h: 52 }
  },
  35: { name: "run_weapon_atck",
    pic: 51, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 25, y: 22, w: 35, h: 57 }
  },
  40: { name: "dash_weapon_atck",
    pic: 54, state: 15, wait: 1, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 22, y: 10, w: 40, h: 52 }
  },
  45: { name: "light_weapon_thw",
    pic: 23, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 22, w: 35, h: 57 },
      { kind: 0, x: 10, y: 40, w: 20, h: 13 }
    ]
  },
  46: { name: "light_weapon_thw",
    pic: 24, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 20, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 24, y: 22, w: 32, h: 57 }
  },
  47: { name: "light_weapon_thw",
    pic: 25, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 55, dvy: -4, dvz: 3, kind: 1, x: 100, y: 50, weaponact: 35, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 }
    ]
  },
  50: { name: "heavy_weapon_thw",
    pic: 24, state: 15, wait: 6, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 16, y: 75, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 19, w: 30, h: 62 }
  },
  51: { name: "heavy_weapon_thw",
    pic: 25, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 65, dvy: -4, dvz: 2, kind: 1, x: 93, y: 57, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 8, y: 39, w: 61, h: 23 },
      { kind: 0, x: 19, y: 56, w: 30, h: 24 }
    ]
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 54, state: 15, wait: 1, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 22, y: 10, w: 40, h: 52 }
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 55, state: 15, wait: 1, next: 54, dvx: 0, dvy: -2, dvz: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 34, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 35, y: 10, w: 36, h: 23 }
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 56, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 23, dvy: 8, dvz: 3, kind: 1, x: 67, y: 56, weaponact: 23, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 22, y: 15, w: 38, h: 38 }
  },
  60: { name: "punch",
    pic: 67, state: 3, wait: 1, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 350,
    itr: { kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1 },
    bdy: { kind: 0, x: 30, y: 18, w: 28, h: 60 }
  },
  61: { name: "punch",
    pic: 13, state: 3, wait: 1, next: 62, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 350,
    sound: "2/028",
    itr: { kind: 0, x: 49, y: 43, w: 30, h: 16, dvx: 2, bdefend: 16, injury: 15, effect: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  62: { name: "punch",
    pic: 14, state: 3, wait: 0, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 350,
    itr: { kind: 3, x: 40, y: 753, w: 25, h: 65, catchingact: [394, 394], caughtact: [396, 396] },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  63: { name: "punch",
    pic: 15, state: 3, wait: 3, next: 64, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 350,
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  64: { name: "punch",
    pic: 15, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 66, hit_d: 0, hit_j: 350,
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  65: { name: "punch",
    pic: 67, state: 3, wait: 1, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 350,
    itr: { kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1 },
    bdy: { kind: 0, x: 30, y: 18, w: 28, h: 60 }
  },
  66: { name: "punch",
    pic: 10, state: 3, wait: 1, next: 67, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 350,
    sound: "2/029",
    itr: { kind: 0, x: 45, y: 44, w: 50, h: 14, dvx: 2, bdefend: 16, injury: 15, effect: 1 },
    bdy: { kind: 0, x: 28, y: 17, w: 29, h: 63 }
  },
  67: { name: "punch",
    pic: 11, state: 3, wait: 0, next: 68, dvx: 2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 350,
    bdy: { kind: 0, x: 28, y: 17, w: 29, h: 63 }
  },
  68: { name: "punch",
    pic: 12, state: 3, wait: 3, next: 69, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 350,
    bdy: { kind: 0, x: 28, y: 17, w: 29, h: 63 }
  },
  69: { name: "punch",
    pic: 12, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 85, hit_d: 0, hit_j: 350,
    bdy: { kind: 0, x: 28, y: 17, w: 29, h: 63 }
  },
  70: { name: "super_punch",
    pic: 26, state: 3, wait: 0, next: 86, dvx: 60, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 20, y: 43, w: 55, h: 16, dvx: -6, dvy: -7, vrest: 50, bdefend: 50, fall: 70, injury: 65, effect: 1 },
  },
  80: { name: "jump_attack",
    pic: 50, state: 3, wait: 1, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 35,
    bdy: { kind: 0, x: 20, y: 18, w: 34, h: 61 }
  },
  81: { name: "jump_attack",
    pic: 51, state: 3, wait: 0, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: { kind: 0, x: 20, y: 18, w: 34, h: 61 }
  },
  82: { name: "jump_attack",
    pic: 51, state: 3, wait: 0, next: 83, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 45, dvy: 30, dvz: 0, kind: 1, x: 20, y: 20, action: 50, oid: 515, facing: 0 },
    bdy: { kind: 0, x: 20, y: 18, w: 34, h: 61 }
  },
  83: { name: "jump_attack",
    pic: 52, state: 3, wait: 25, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 20, y: 18, w: 34, h: 61 }
  },
  85: { name: "run_attack",
    pic: 26, state: 3, wait: 0, next: 86, dvx: 60, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 20, y: 43, w: 55, h: 16, dvx: -6, dvy: -7, vrest: 50, bdefend: 50, fall: 70, injury: 65, effect: 1 },
  },
  86: { name: "run_attack",
    pic: 27, state: 3, wait: 0, next: 87, dvx: 60, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    itr: { kind: 0, x: 20, y: 43, w: 55, h: 16, dvx: -6, dvy: -7, vrest: 50, bdefend: 50, fall: 70, injury: 65, effect: 1 },
  },
  87: { name: "run_attack",
    pic: 28, state: 3, wait: 0, next: 88, dvx: 60, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    itr: { kind: 0, x: 20, y: 43, w: 55, h: 16, dvx: -6, dvy: -7, bdefend: 50, vrest: 50, fall: 70, injury: 65, effect: 1 },
  },
  88: { name: "run_attack",
    pic: 29, state: 3, wait: 0, next: 89, dvx: 550, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 19, y: 24, w: 35, h: 54 }
  },
  89: { name: "run_attack",
    pic: 35, state: 3, wait: 10, next: 999, dvx: 550, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 19, y: 24, w: 35, h: 54 }
  },
  90: { name: "dash_attack",
    pic: 50, state: 3, wait: 1, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 20, y: 18, w: 34, h: 61 }
  },
  91: { name: "dash_attack",
    pic: 44, state: 15, wait: 1, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 7, y: 19, w: 37, h: 45 }
  },
  92: { name: "dash_attack",
    pic: 45, state: 15, wait: 2, next: 93, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    itr: { kind: 0, x: 27, y: 38, w: 53, h: 23, dvx: 12, fall: 70, arest: 20, bdefend: 60, injury: 70 },
    bdy: { kind: 0, x: 7, y: 19, w: 37, h: 45 }
  },
  93: { name: "dash_attack",
    pic: 46, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 7, y: 19, w: 37, h: 45 }
  },
  95: { name: "dash_defend",
    pic: 64, state: 7, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 21, y: -999, weaponact: 30, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 14, y: 19, w: 28, h: 36 }
  },
  100: { name: "rowing",
    pic: 65, state: 6, wait: 2, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: -999, weaponact: 22, attacking: 0, cover: 0 },
  },
  101: { name: "rowing",
    pic: 65, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 53, y: -999, weaponact: 21, attacking: 0, cover: 0 },
  },
  102: { name: "rowing",
    pic: 41, state: 6, wait: 0, next: 103, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    mp: 75,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 17, w: 43, h: 62 }
  },
  103: { name: "rowing",
    pic: 999, state: 6, wait: 0, next: 104, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 17, w: 43, h: 62 }
  },
  104: { name: "rowing",
    pic: 999, state: 3005, wait: 2, next: 105, dvx: 70, dvy: 550, dvz: 10, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -999, weaponact: 75, attacking: 0, cover: 0 },
  },
  105: { name: "rowing",
    pic: 999, state: 15, wait: 0, next: 106, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -999, weaponact: 75, attacking: 0, cover: 0 },
  },
  106: { name: "rowing",
    pic: 41, state: 6, wait: 2, next: 999, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -999, weaponact: 75, attacking: 0, cover: 0 },
  },
  108: { name: "rowing",
    pic: 66, state: 6, wait: 3, next: 109, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: -999, weaponact: 22, attacking: 0, cover: 0 },
  },
  109: { name: "rowing",
    pic: 66, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 53, y: -999, weaponact: 21, attacking: 0, cover: 0 },
  },
  110: { name: "defend",
    pic: 40, state: 7, wait: 10, next: 500, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 16, y: 19, w: 42, h: 60 }
  },
  111: { name: "defend",
    pic: 40, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 36, y: -999, weaponact: 35, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 16, y: 19, w: 42, h: 60 }
  },
  112: { name: "broken_defend",
    pic: 31, state: 8, wait: 0, next: 113, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 7, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1 },
    bdy: { kind: 0, x: 5, y: 17, w: 64, h: 65 }
  },
  113: { name: "broken_defend",
    pic: 31, state: 8, wait: 0, next: 114, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 4, y: -999, weaponact: 20, attacking: 0, cover: 0 },
    itr: { kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1 },
    bdy: { kind: 0, x: 5, y: 17, w: 64, h: 65 }
  },
  114: { name: "broken_defend",
    pic: 31, state: 8, wait: 2, next: 999, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: -999, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1 },
    bdy: { kind: 0, x: 5, y: 17, w: 64, h: 65 }
  },
  115: { name: "picking_light",
    pic: 60, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 76, weaponact: 24, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 43, w: 33, h: 37 }
  },
  116: { name: "picking_heavy",
    pic: 60, state: 15, wait: 5, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 79, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 43, w: 33, h: 37 }
  },
  117: { name: "picking_heavy",
    pic: 61, state: 15, wait: 5, next: 50, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 66, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 43, w: 33, h: 37 }
  },
  120: { name: "catching",
    pic: 82, state: 9, wait: 2, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/015",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 57, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  121: { name: "catching",
    pic: 82, state: 9, wait: 5, next: 122, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 57, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  122: { name: "catching",
    pic: 82, state: 9, wait: 2, next: 123, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 123, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 57, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  123: { name: "catching",
    pic: 83, state: 9, wait: 3, next: 124, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/014",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 56, y: 40, weaponact: 35, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 55, y: 60, action: 73, oid: 206, facing: 0 },
    cpoint: { kind: 1, x: 57, y: 39, injury: 15, vaction: 132, cover: 1, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  124: { name: "catching",
    pic: 82, state: 9, wait: 2, next: 125, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 123, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 57, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  125: { name: "catching",
    pic: 83, state: 9, wait: 3, next: 126, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/014",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 56, y: 40, weaponact: 35, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 55, y: 60, action: 73, oid: 206, facing: 0 },
    cpoint: { kind: 1, x: 57, y: 39, injury: 15, vaction: 132, cover: 1, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  126: { name: "catching",
    pic: 82, state: 9, wait: 2, next: 127, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 123, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 57, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 1 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  127: { name: "catching",
    pic: 83, state: 9, wait: 3, next: 232, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/014",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 56, y: 40, weaponact: 35, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 55, y: 60, action: 73, oid: 206, facing: 0 },
    cpoint: { kind: 1, x: 57, y: 39, injury: 15, vaction: 132, cover: 1, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  130: { name: "picked_caught",
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 31, y: 56, weaponact: 30, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 41, y: 39, fronthurtact: 132, backhurtact: 131 },
    bdy: { kind: 0, x: 26, y: 14, w: 28, h: 66 }
  },
  131: { name: "picked_caught",
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 54, weaponact: 31, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 41, y: 39, fronthurtact: 132, backhurtact: 132 },
    bdy: { kind: 0, x: 26, y: 14, w: 28, h: 66 }
  },
  132: { name: "picked_caught",
    pic: 30, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 30, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 41, y: 39, fronthurtact: 131, backhurtact: 131 },
    bdy: { kind: 0, x: 26, y: 14, w: 28, h: 66 }
  },
  133: { name: "picked_caught",
    pic: 30, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 46, weaponact: 22, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 33, y: 36 },
  },
  134: { name: "picked_caught",
    pic: 31, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 36, weaponact: 21, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 37, y: 28 },
  },
  135: { name: "picked_caught",
    pic: 32, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 39, weaponact: 21, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 31, y: 22 },
  },
  136: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 24, y: 32, weaponact: 33, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 27, y: 46 },
  },
  137: { name: "picked_caught",
    pic: 34, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 75, weaponact: 32, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 33, y: 68 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  138: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 64, weaponact: 31, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 34, y: 54 },
  },
  139: { name: "picked_caught",
    pic: 30, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 22, y: 47, weaponact: 35, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 40, y: 36 },
  },
  140: { name: "picked_caught",
    pic: 31, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 23, y: 43, weaponact: 20, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 36, y: 38 },
  },
  141: { name: "picked_caught",
    pic: 32, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 43, weaponact: 23, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 44, y: 40 },
  },
  142: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 50, weaponact: 26, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 46, y: 51 },
  },
  143: { name: "picked_caught",
    pic: 34, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 74, weaponact: 24, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 45, y: 66 },
  },
  144: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 67, weaponact: 25, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 42, y: 55 },
  },
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 47, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 21, y: 14, w: 29, h: 44, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: { kind: 0, x: 25, y: 25, w: 21, h: 20 }
  },
  181: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 36, weaponact: 21, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 15, y: 11, w: 42, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 35, y: 30, w: 27, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: { kind: 0, x: 22, y: 20, w: 24, h: 23 }
  },
  182: { name: "falling",
    pic: 32, state: 12, wait: 6, next: 0, dvx: -3, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 37, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 13, y: 18, w: 46, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: { kind: 0, x: 27, y: 22, w: 20, h: 18 }
  },
  183: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 33, weaponact: 33, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 32, y: 18, w: 33, h: 27, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 10, y: 38, w: 38, h: 21, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: { kind: 0, x: 22, y: 30, w: 27, h: 21 }
  },
  184: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 36, y: 74, weaponact: 32, attacking: 0, cover: 0 },
  },
  185: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 37, y: 64, weaponact: 31, attacking: 0, cover: 0 },
  },
  186: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 21, y: 45, weaponact: 34, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 22, y: 12, w: 36, h: 50, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: { kind: 0, x: 31, y: 24, w: 25, h: 23 }
  },
  187: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 23, y: 42, weaponact: 20, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 33, y: 6, w: 26, h: 46, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 26, y: 43, w: 21, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: { kind: 0, x: 28, y: 27, w: 24, h: 26 }
  },
  188: { name: "falling",
    pic: 32, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 31, y: 42, weaponact: 22, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 14, y: 29, w: 58, h: 23, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: { kind: 0, x: 30, y: 31, w: 24, h: 21 }
  },
  189: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 31, y: 51, weaponact: 25, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 24, y: 27, w: 26, h: 28, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 37, y: 45, w: 31, h: 28, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: { kind: 0, x: 30, y: 39, w: 23, h: 21 }
  },
  190: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 31, y: 74, weaponact: 24, attacking: 0, cover: 0 },
  },
  191: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 67, weaponact: 25, attacking: 0, cover: 0 },
  },
  200: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 201, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 18, y: 45, weaponact: 20, attacking: 0, cover: 0 },
  },
  201: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -45,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 18, y: 44, weaponact: 20, attacking: 0, cover: 0 },
  },
  203: { name: "fire",
    pic: 18, state: 18, wait: 3, next: 204, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 46, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -2, dvy: -2, fall: 30, vrest: 10, bdefend: 16, injury: 30, effect: 20 },
    bdy: { kind: 0, x: 22, y: 35, w: 26, h: 19 }
  },
  204: { name: "fire",
    pic: 19, state: 18, wait: 5, next: 205, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 46, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 22, y: 35, w: 26, h: 19 }
  },
  205: { name: "fire",
    pic: 18, state: 18, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 33, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 22, y: 35, w: 26, h: 19 }
  },
  206: { name: "fire",
    pic: 19, state: 18, wait: 0, next: 205, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 33, weaponact: 20, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 999, vrest: 10, bdefend: 16, injury: 30, effect: 20 },
    bdy: { kind: 0, x: 22, y: 35, w: 26, h: 19 }
  },
  207: { name: "tired",
    pic: 61, state: 15, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 64, weaponact: 22, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 44, y: 28, w: 22, h: 37 },
      { kind: 0, x: 28, y: 47, w: 28, h: 35 }
    ]
  },
  210: { name: "jump",
    pic: 60, state: 4, wait: 2, next: 211, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 60, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 33, y: 33, w: 20, h: 48 }
  },
  211: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 212, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 17, y: 54, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 15, y: 41, w: 48, h: 20 }
  },
  212: { name: "jump",
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 288,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 21, y: 34, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 31, y: 15, w: 21, h: 64 }
  },
  213: { name: "dash",
    pic: 63, state: 5, wait: 8, next: 216, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 24, y: 45, weaponact: 25, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 46, y: 18, w: 22, h: 25 },
      { kind: 0, x: 13, y: 54, w: 18, h: 17 }
    ]
  },
  214: { name: "dash",
    pic: 64, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 19, y: 38, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 18, y: 14, w: 19, h: 27 }
  },
  215: { name: "crouch",
    pic: 60, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/012",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 25, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 26, y: 40, w: 29, h: 38 }
  },
  216: { name: "dash",
    pic: 63, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 80, hit_d: 0, hit_j: 288,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 19, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 42, y: 15, w: 24, h: 21 }
  },
  217: { name: "dash",
    pic: 64, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 80, hit_d: 0, hit_j: 288,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 35, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 18, y: 13, w: 29, h: 51 }
  },
  218: { name: "stop_running",
    pic: 60, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 25, y: -999, weaponact: 35, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 45, y: 47, w: 16, h: 32 }
  },
  219: { name: "crouch2",
    pic: 61, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/012",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 26, y: 36, w: 29, h: 44 }
  },
  220: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 265,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 47, y: 23, w: 23, h: 54 },
      { kind: 0, x: 29, y: 41, w: 20, h: 37 }
    ]
  },
  221: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 265,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 60, y: 48, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 46, y: 23, w: 21, h: 56 },
      { kind: 0, x: 30, y: 40, w: 17, h: 41 }
    ]
  },
  222: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 265,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 27, y: 58, weaponact: 20, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 11, y: 24, w: 39, h: 31 },
      { kind: 0, x: 25, y: 53, w: 40, h: 27 }
    ]
  },
  223: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 265,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 24, y: 58, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 12, y: 23, w: 40, h: 37 },
      { kind: 0, x: 27, y: 56, w: 36, h: 24 }
    ]
  },
  224: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 225, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 79, hit_a: 0, hit_d: 0, hit_j: 265,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 32, y: 53, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 32, y: 18, w: 28, h: 60 },
      { kind: 0, x: 52, y: 38, w: 20, h: 19 }
    ]
  },
  225: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 265,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 24, y: 53, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 18, w: 35, h: 63 }
  },
  226: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 227, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 265,
    sound: "2/hak5",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: 49, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: { kind: 0, x: 27, y: 22, w: 42, h: 58 }
  },
  227: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 228, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 265,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 60, y: 51, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: { kind: 0, x: 28, y: 24, w: 39, h: 57 }
  },
  228: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 229, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 265,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 61, y: 48, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: { kind: 0, x: 28, y: 23, w: 37, h: 58 }
  },
  229: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 265,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 61, y: 51, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: { kind: 0, x: 29, y: 26, w: 37, h: 53 }
  },
  230: { name: "lying",
    pic: 34, state: 2240400, wait: 30, next: 403, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 74, weaponact: 32, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 30000, w: 79, h: 500 }
  },
  231: { name: "lying",
    pic: 34, state: 2240400, wait: 30, next: 403, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 74, weaponact: 24, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 30000, w: 79, h: 500 }
  },
  232: { name: "throw_lying_man",
    pic: 84, state: 9, wait: 2, next: 233, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: 26, weaponact: 31, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 57, y: 0, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 1 },
    bdy: { kind: 0, x: 28, y: 19, w: 30, h: 62 }
  },
  233: { name: "throw_lying_man",
    pic: 84, state: 9, wait: 1, next: 234, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/006",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 49, weaponact: 25, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 35, action: 73, oid: 206, facing: 0 },
    cpoint: { kind: 1, x: 57, y: -10, vaction: 181, throwvx: 2, throwvy: -15, throwvz: 0, throwinjury: 30 },
    bdy: { kind: 0, x: 19, y: 56, w: 30, h: 24 }
  },
  234: { name: "throw_lying_man",
    pic: 85, state: 9, wait: 10, next: 235, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 49, weaponact: 25, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 19, y: 56, w: 30, h: 24 }
  },
  235: { name: "throw_lying_man",
    pic: 86, state: 15, wait: 1, next: 236, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 49, weaponact: -888, attacking: 0, cover: 0 },
  },
  236: { name: "throw_lying_man",
    pic: 87, state: 15, wait: 1, next: 237, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 49, weaponact: -888, attacking: 0, cover: 0 },
  },
  237: { name: "throw_lying_man",
    pic: 88, state: 15, wait: 1, next: 238, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 49, weaponact: -888, attacking: 0, cover: 0 },
  },
  238: { name: "throw_lying_man",
    pic: 89, state: 15, wait: 1, next: 239, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 49, weaponact: -888, attacking: 0, cover: 0 },
  },
  239: { name: "throw_lying_man",
    pic: 90, state: 15, wait: 1, next: 247, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 49, weaponact: -888, attacking: 0, cover: 0 },
  },
  240: { name: "needle",
    pic: 23, state: 15, wait: 1, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 25,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 20, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  241: { name: "needle",
    pic: 24, state: 15, wait: 0, next: 242, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 20, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  242: { name: "needle",
    pic: 24, state: 15, wait: 0, next: 243, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 60, dvy: 0, dvz: 0, kind: 1, x: 39, y: 45, action: 40, oid: 515 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  243: { name: "needle",
    pic: 25, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 20, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  245: { name: "water",
    pic: 67, state: 15, wait: 0, next: 249, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/hak2",
    mp: 110,
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  246: { name: "water",
    pic: 68, state: 15, wait: 0, next: 247, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  247: { name: "water",
    pic: 69, state: 15, wait: 0, next: 248, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  248: { name: "water",
    pic: 59, state: 15, wait: 0, next: 249, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  249: { name: "water",
    pic: 68, state: 15, wait: 0, next: 250, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 150, y: 80, action: 50, oid: 516 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  250: { name: "water",
    pic: 69, state: 15, wait: 0, next: 251, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  251: { name: "water",
    pic: 68, state: 15, wait: 15, next: 999, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  255: { name: "needle2",
    pic: 40, state: 15, wait: 1, next: 256, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 95,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 20, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  256: { name: "needle2",
    pic: 43, state: 15, wait: 1, next: 257, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/069",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 55, dvy: 0, dvz: 0, kind: 1, x: 15, y: 40, action: 40, oid: 515, facing: 30 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  257: { name: "needle2",
    pic: 44, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 20, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  258: { name: "walking",
    pic: 6, state: 1, wait: 0, next: 259, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 259, hit_d: 0, hit_j: 259,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 22, attacking: 0, cover: 0 },
    itr: [
      { kind: 0, x: 49, y: -99999898425321460, w: 20, h: 16, dvx: 2, bdefend: 16, injury: 15, fall: -1 },
      { kind: 8, x: -999, y: -9.999989842532146e+22, w: 999999, zwidth: 999, h: 900, dvx: 280 }
    ],
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  259: { name: "walking",
    pic: 6, state: 1, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 259, hit_d: 0, hit_j: 259,
    sound: "2/hak1",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 22, attacking: 0, cover: 0 },
    itr: [
      { kind: 0, x: 49, y: -99999898425321460, w: 20, h: 16, dvx: 2, bdefend: 16, injury: 15, fall: -1 },
      { kind: 8, x: -999, y: -9.999989842532146e+22, w: 999999, zwidth: 999, h: 900, dvx: 280 }
    ],
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  260: { name: "mirror1",
    pic: 67, state: 15, wait: 0, next: 261, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 170,
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  261: { name: "mirror1",
    pic: 68, state: 15, wait: 0, next: 262, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  262: { name: "mirror1",
    pic: 69, state: 15, wait: 1, next: 263, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 80, y: 80, action: 70, oid: 516 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  263: { name: "mirror1",
    pic: 69, state: 15, wait: 2, next: 274, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  264: { name: "walking",
    pic: 5, state: 1, wait: 0, next: 258, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 258, hit_d: 0, hit_j: 258,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    itr: [
      { kind: 0, x: 49, y: -99999898425321460, w: 20, h: 16, dvx: 2, bdefend: 16, injury: 15, fall: -1 },
      { kind: 8, x: -999, y: -9.999989842532146e+22, w: 999999, zwidth: 999, h: 900, dvx: 280 }
    ],
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  265: { name: "replace",
    pic: 48, state: 15, wait: 0, next: 266, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  266: { name: "replace",
    pic: 48, state: 15, wait: 14, next: 267, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 80, action: 60, oid: 516 },
  },
  267: { name: "replace",
    pic: 999, state: 15, wait: 3, next: 268, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  268: { name: "replacement",
    pic: 999, state: 3005, wait: 5, next: 269, dvx: 30, dvy: -4, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  269: { name: "replacement",
    pic: 41, state: 15, wait: 1, next: 999, dvx: 550, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  270: { name: "mirror1",
    pic: 68, state: 15, wait: 0, next: 271, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 170,
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  271: { name: "mirror1",
    pic: 69, state: 15, wait: 1, next: 274, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -250, y: 80, action: 70, oid: 516 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  272: { name: "mirror1",
    pic: 68, state: 15, wait: 0, next: 273, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 170,
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  273: { name: "mirror1",
    pic: 69, state: 15, wait: 1, next: 274, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 400, y: 80, action: 70, oid: 516 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  274: { name: "mirror1",
    pic: 5, state: 1, wait: 0, next: 264, dvx: 12, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  275: { name: "charge",
    pic: 67, state: 3, wait: 3, next: 276, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  276: { name: "charge",
    pic: 68, state: 17, wait: 3, next: 277, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 79, y: 2, weaponact: 20, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 2, x: 42, y: 51, action: 20, oid: 123, facing: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  277: { name: "charge",
    pic: 68, state: 17, wait: 3, next: 278, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 370, hit_d: 279, hit_j: 279,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 12, weaponact: 20, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 4, oid: 203 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  278: { name: "charge",
    pic: 68, state: 17, wait: 3, next: 277, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 370, hit_d: 279, hit_j: 279,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 30, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  279: { name: "charge",
    pic: 67, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 100, dvy: -1, dvz: 0, kind: 1, x: 39, y: 30, weaponact: 1000, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 }
    ]
  },
  280: { name: "in_mirror",
    pic: 999, state: 15, wait: 0, next: 281, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/053",
    wpoint: { dvx: 100, dvy: -1, dvz: 0, kind: 3, x: 39, y: 30, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 },
      { kind: 0, x: 25, y: 26, w: 37, h: 53 }
    ]
  },
  281: { name: "in_mirror",
    pic: 53, state: 14, wait: 9999, next: 281, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 85, hit_a: 305, hit_d: 282, hit_j: 315, hit_ja: 283,
    bdy: [
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 },
      { kind: 0, x: 25, y: 26, w: 37, h: 53 }
    ]
  },
  282: { name: "in_mirror",
    dvx: 0, dvy: 0, dvz: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 },
      { kind: 0, x: 25, y: 26, w: 37, h: 53 }
    ]
  },
  283: { name: "out",
    pic: 62, state: 15, wait: 3, next: 999, dvx: 3, dvy: -4, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  285: { name: "in_mirror_atk",
    pic: 57, state: 15, wait: 1, next: 286, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  286: { name: "in_mirror_atk",
    pic: 58, state: 15, wait: 1, next: 287, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  287: { name: "in_mirror_atk",
    pic: 49, state: 15, wait: 1, next: 291, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 305, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  288: { name: "jump_attack2",
    pic: 41, state: 4, wait: 0, next: 289, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    mp: 20,
  },
  289: { name: "jump_attack2",
    pic: 41, state: 4, wait: 1, next: 290, dvx: 0, dvy: -10, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  290: { name: "jump_attack2",
    pic: 62, state: 4, wait: 1, next: 290, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 80, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  291: { name: "in_mirror_atk",
    pic: 54, state: 15, wait: 1, next: 292, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  292: { name: "in_mirror_atk",
    pic: 55, state: 15, wait: 1, next: 293, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    opoint: { dvx: 65, dvy: 0, dvz: 0, kind: 1, x: 20, y: 45, action: 40, oid: 515 },
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  293: { name: "in_mirror_atk",
    pic: 56, state: 15, wait: 5, next: 294, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  294: { name: "in_mirror_atk",
    pic: 49, state: 15, wait: 1, next: 295, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  295: { name: "in_mirror_atk",
    pic: 58, state: 15, wait: 1, next: 296, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  296: { name: "in_mirror_atk",
    pic: 57, state: 15, wait: 1, next: 281, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
  },
  300: { name: "in_mirror_atk",
    pic: 53, state: 18, wait: 2, next: 281, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 8, x: -9999, y: -9.999989842532146e+22, w: 99999999, zwidth: 999, h: 900, dvx: 280 },
      { kind: 0, x: 200, y: -99999898425321460, w: 99999999, zwidth: 999, vrest: 20, h: 16, injury: 0, fall: -999 }
    ],
    bdy: { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
  },
  305: { name: "in_mirror_atk",
    pic: 45, state: 15, wait: 3, next: 308, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 283,
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  306: { name: "in_mirror_atk",
    pic: 46, state: 15, wait: 1, next: 307, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    mp: -60,
    opoint: { dvx: 65, dvy: 0, dvz: 0, kind: 1, x: 20, y: 45, action: 40, oid: 515, facing: 30 },
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  307: { name: "in_mirror_atk",
    pic: 47, state: 15, wait: 5, next: 294, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  308: { name: "in_mirror_atk",
    pic: 45, state: 15, wait: 1, next: 306, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 283,
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  310: { name: "air",
    pic: 61, state: 3, wait: 1, next: 311, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 20, y: 18, w: 34, h: 61 }
  },
  311: { name: "air",
    pic: 50, state: 3, wait: 3, next: 312, dvx: -6, dvy: -7, dvz: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 20, y: 18, w: 34, h: 61 }
  },
  312: { name: "air",
    pic: 51, state: 3, wait: 1, next: 313, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    opoint: { dvx: 45, dvy: 30, dvz: 0, kind: 1, x: 20, y: 25, action: 50, oid: 515, facing: 90 },
    bdy: { kind: 0, x: 20, y: 18, w: 34, h: 61 }
  },
  313: { name: "air",
    pic: 51, state: 3, wait: 50, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 20, y: 18, w: 34, h: 61 }
  },
  315: { name: "in_mirror_atk",
    pic: 57, state: 15, wait: 0, next: 316, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  316: { name: "in_mirror_atk",
    pic: 58, state: 15, wait: 0, next: 317, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -30,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  317: { name: "in_mirror_atk",
    pic: 49, state: 15, wait: 0, next: 318, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 305, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  318: { name: "mirror_atk_dash",
    pic: 26, state: 15, wait: 1, next: 319, dvx: 50, dvy: 550, dvz: 5, centerx: 39, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    itr: [
      { kind: 0, x: 20, y: 43, w: 55, h: 16, zwidth: 25, dvx: -6, dvy: -7, bdefend: 50, vrest: 50, fall: 70, injury: 75, effect: 1 },
      { kind: 0, x: 49, y: -99999898425321460, w: 20, h: 16, zwidth: 35, bdefend: 16, injury: 15, fall: -1 },
      { kind: 8, x: -999, y: -9.999989842532146e+22, w: 999999, zwidth: 999, h: 900, dvx: 280 }
    ],
    bdy: [
      { kind: 0, x: 25, y: 19, w: 38, h: 60 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  319: { name: "mirror_atk_dash",
    pic: 27, state: 15, wait: 1, next: 320, dvx: 50, dvy: 550, dvz: 5, centerx: 39, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    itr: [
      { kind: 0, x: 20, y: 43, w: 55, h: 16, zwidth: 25, dvx: -6, dvy: -7, bdefend: 50, vrest: 50, fall: 70, injury: 75, effect: 1 },
      { kind: 0, x: 49, y: -99999898425321460, w: 20, h: 16, zwidth: 35, bdefend: 16, injury: 15, fall: -1 },
      { kind: 8, x: -999, y: -9.999989842532146e+22, w: 999999, zwidth: 999, h: 900, dvx: 280 }
    ],
    bdy: [
      { kind: 0, x: 25, y: 19, w: 38, h: 60 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  320: { name: "mirror_atk_dash",
    pic: 27, state: 15, wait: 1, next: 321, dvx: 50, dvy: 550, dvz: 5, centerx: 39, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    itr: [
      { kind: 0, x: 20, y: 43, w: 55, h: 16, zwidth: 25, dvx: -6, dvy: -7, bdefend: 50, vrest: 50, fall: 70, injury: 75, effect: 1 },
      { kind: 0, x: 49, y: -99999898425321460, w: 20, h: 16, zwidth: 35, bdefend: 16, injury: 15, fall: -1 },
      { kind: 8, x: -999, y: -9.999989842532146e+22, w: 999999, zwidth: 999, h: 900, dvx: 280 }
    ],
    bdy: [
      { kind: 0, x: 25, y: 19, w: 38, h: 60 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  321: { name: "run_attack",
    pic: 999, state: 3, wait: 0, next: 322, dvx: 60, dvy: 0, dvz: 5, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    itr: [
      { kind: 0, x: 20, y: 43, w: 55, h: 16, zwidth: 25, dvx: -6, dvy: -7, bdefend: 50, vrest: 50, fall: 70, injury: 75, effect: 1 },
      { kind: 0, x: 49, y: -99999898425321660, w: 20, h: 500, zwidth: 35, bdefend: 16, injury: 15, fall: -1 },
      { kind: 8, x: -999, y: -9.999989842532146e+22, w: 999999, zwidth: 999, h: 900, dvx: 280 }
    ],
    bdy: [
      { kind: 0, x: 25, y: 19, w: 38, h: 60 },
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 }
    ]
  },
  322: { name: "run_attack",
    pic: 999, state: 3, wait: 2, next: 323, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    itr: [
      { kind: 0, x: 49, y: -99999898425321660, w: 20, h: 500, zwidth: 35, bdefend: 16, injury: 15, fall: -1 },
      { kind: 8, x: -999, y: -9.999989842532146e+22, w: 999999, zwidth: 999, h: 900, dvx: 280 }
    ],
    bdy: [
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 },
      { kind: 0, x: 20, y: 18, w: 34, h: 61 }
    ]
  },
  323: { name: "run_attack",
    pic: 35, state: 3, wait: 10, next: 999, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    itr: [
      { kind: 0, x: 49, y: -99999898425321660, w: 20, h: 500, zwidth: 35, bdefend: 16, injury: 15, fall: -1 },
      { kind: 8, x: -999, y: -9.999989842532146e+22, w: 999999, zwidth: 999, h: 900, dvx: 280 }
    ],
    bdy: [
      { kind: 0, x: 34, y: -99999898425321460, w: 33, h: 88 },
      { kind: 0, x: 20, y: 18, w: 34, h: 61 }
    ]
  },
  325: { name: "ice",
    pic: 67, state: 15, wait: 0, next: 326, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 125,
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  326: { name: "ice",
    pic: 68, state: 15, wait: 0, next: 327, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  327: { name: "ice",
    pic: 69, state: 15, wait: 0, next: 328, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  328: { name: "ice",
    pic: 59, state: 15, wait: 0, next: 329, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  329: { name: "ice",
    pic: 68, state: 15, wait: 0, next: 330, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 85, action: 75, oid: 516 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  330: { name: "ice",
    pic: 69, state: 15, wait: 0, next: 331, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  331: { name: "ice",
    pic: 68, state: 15, wait: 0, next: 332, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 140, y: 85, action: 75, oid: 516 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  332: { name: "ice",
    pic: 69, state: 15, wait: 0, next: 333, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  333: { name: "ice",
    pic: 59, state: 15, wait: 0, next: 334, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 190, y: 85, action: 75, oid: 516 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  334: { name: "ice",
    pic: 68, state: 15, wait: 0, next: 335, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  335: { name: "ice",
    pic: 69, state: 15, wait: 0, next: 336, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 240, y: 85, action: 75, oid: 516 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  336: { name: "ice",
    pic: 68, state: 15, wait: 10, next: 999, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  340: { name: "ice_field",
    pic: 67, state: 15, wait: 1, next: 341, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 140,
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  341: { name: "ice_field",
    pic: 60, state: 15, wait: 1, next: 342, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  342: { name: "ice_field",
    pic: 61, state: 15, wait: 0, next: 343, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  343: { name: "ice_field",
    pic: 61, state: 15, wait: 0, next: 344, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  344: { name: "ice_field",
    pic: 61, state: 15, wait: 0, next: 345, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 189, y: 85, action: 91, oid: 516, facing: 50 },
  },
  345: { name: "ice_field",
    pic: 61, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -70, y: 85, action: 91, oid: 516, facing: 51 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  350: { name: "grab",
    pic: 20, state: 15, wait: 3, next: 351, dvx: 35, dvy: 0, dvz: 6, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    mp: 175,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 3, x: 40, y: 16, w: 50, h: 65, catchingact: [352, 352], caughtact: [130, 130] },
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  351: { name: "grab",
    pic: 20, state: 15, wait: 3, next: 999, dvx: -1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 3, x: 40, y: 16, w: 50, h: 65, catchingact: [352, 352], caughtact: [130, 130] },
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  352: { name: "catching",
    pic: 60, state: 9, wait: 1, next: 353, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/015",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 57, y: 49, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 0 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  353: { name: "catching",
    pic: 61, state: 9, wait: 1, next: 354, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 57, y: 49, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7, cover: 0 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  354: { name: "catching",
    pic: 61, state: 9, wait: 0, next: 355, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/072",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 75, action: 80, oid: 516 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  355: { name: "catching",
    pic: 61, state: 9, wait: 0, next: 356, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 180, y: 80, action: 70, oid: 516 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  356: { name: "catching",
    pic: 61, state: 9, wait: 2, next: 360, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 17, y: 45, weaponact: 35, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -130, y: 80, action: 70, oid: 516 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  357: { name: "catching",
    pic: 999, state: 9, wait: 1, next: 358, dvx: -105, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  358: { name: "catching",
    pic: 999, state: 9, wait: 0, next: 359, dvx: 1, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  359: { name: "mirror1",
    pic: 5, state: 1, wait: 0, next: 264, dvx: 10, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  360: { name: "catching",
    pic: 999, state: 9, wait: 0, next: 357, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: 90, action: 241, oid: 411, facing: 0 },
  },
  370: { name: "skin",
    pic: 67, state: 15, wait: 6, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 371,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  371: { name: "skin",
    pic: 67, state: 15, wait: 0, next: 372, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  372: { name: "skin",
    pic: 67, state: 15, wait: 0, next: 373, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 0, action: 210, oid: 446, facing: 0 },
  },
  373: { name: "skin",
    pic: 67, state: 15, wait: 0, next: 374, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  374: { name: "trans",
    pic: 999, state: 8075, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/hak4",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  390: { name: "injured_mp",
    pic: 30, state: 15, wait: 2, next: 391, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0 },
  },
  391: { name: "injured_mp",
    pic: 30, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -500,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0 },
  },
  392: { name: "catching2",
    pic: 999, state: 9, wait: 1, next: 393, dvx: 10, dvy: 0, dvz: 0, centerx: 38, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 100, y: -60, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7 },
  },
  393: { name: "catching2",
    pic: 999, state: 9, wait: 1, next: 392, dvx: -20, dvy: 0, dvz: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: { kind: 1, x: 70, y: -60, injury: 15, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7 },
  },
  394: { name: "catching2",
    pic: 999, state: 9, wait: 0, next: 395, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: { kind: 1, x: 100, y: -60, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7 },
  },
  395: { name: "catching2",
    pic: 999, state: 9, wait: 1, next: 392, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 79, action: 0, oid: 214, facing: 0 },
    cpoint: { kind: 1, x: 100, y: -60, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7 },
  },
  396: { name: "picked_caught2",
    pic: 999, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 31, y: 56, weaponact: 30, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 41, y: 39, fronthurtact: 396, backhurtact: 396 },
  },
  397: { name: "injured",
    pic: 30, state: 3, wait: 1, next: 398, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0 },
  },
  398: { name: "injured",
    pic: 999, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 81, action: 12, oid: 201, facing: 0 },
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0 },
  },
  400: { name: "lying",
    pic: 34, state: 15, wait: 20, next: 401, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 74, weaponact: 32, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999 },
      { kind: 0, x: 0, y: 30000, w: 79, h: 500 }
    ]
  },
  401: { name: "lying",
    pic: 36, state: 15, wait: 3, next: 402, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 83, action: 282, oid: 411, facing: 0 },
  },
  402: { name: "lying",
    pic: 36, state: 15, wait: 2, next: 374, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  403: { name: "lying",
    pic: 34, state: 14, wait: 1, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 75,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 74, weaponact: 32, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: -666, y: -964844262763489800000, w: 666666, h: 999 },
      { kind: 0, x: 0, y: 30000, w: 79, h: 500 }
    ]
  },
  500: { name: "defend2",
    pic: 40, state: 6001, wait: 0, next: 501, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 110, hit_j: 0,
  },
  501: { name: "defendend",
    pic: 40, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 16, y: 19, w: 42, h: 60 }
  }
  }
});