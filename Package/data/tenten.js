define({
  bmp: {
    file: [
      { "file(0-69)": "sprite/ten_ten_0.png", w: 79, h: 79, row: 10, col: 7 },
      { "file(70-139)": "sprite/temari_2.png", w: 79, h: 79, row: 10, col: 7 },
      { "file(140-200)": "sprite/ten_ten_3.png", w: 311, h: 95, row: 1, col: 7 }
    ],
    name: "Ten_Ten",
    head: "sprite/ten_ten_f.png",
    small: "sprite/ten_ten_s.png",
    walking_frame_rate: 3,
    walking_speed: 4,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 16.2,
    running_speedz: 3.3,
    heavy_walking_speed: 3,
    heavy_walking_speedz: 1.5,
    heavy_running_speed: 5,
    heavy_running_speedz: 0.8,
    jump_height: -18.299999,
    jump_distance: 8,
    jump_distancez: 3,
    dash_height: -13,
    dash_distance: 15,
    dash_distancez: 3.75,
    rowing_height: -2,
    rowing_distance: 20
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 4, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Ua: 245, hit_ja: 270, hit_Da: 250, hit_Fj: 275, hit_Uj: 295, hit_Dj: 315,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 28, y: 50, weaponact: 33, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 4, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Ua: 245, hit_ja: 270, hit_Da: 250, hit_Fj: 275, hit_Uj: 295, hit_Dj: 315,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 50, weaponact: 33, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 4, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Ua: 245, hit_ja: 270, hit_Da: 250, hit_Fj: 275, hit_Uj: 295, hit_Dj: 315,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 50, weaponact: 33, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  3: { name: "standing",
    pic: 3, state: 0, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Ua: 245, hit_ja: 270, hit_Da: 250, hit_Fj: 275, hit_Uj: 295, hit_Dj: 315,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 27, y: 50, weaponact: 33, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Ua: 245, hit_ja: 270, hit_Da: 250, hit_Fj: 275, hit_Uj: 295, hit_Dj: 315,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: 48, weaponact: 22, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Ua: 245, hit_ja: 270, hit_Da: 250, hit_Fj: 275, hit_Uj: 295, hit_Dj: 315,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 50, weaponact: 23, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Ua: 245, hit_ja: 270, hit_Da: 250, hit_Fj: 275, hit_Uj: 295, hit_Dj: 315,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 36, y: 55, weaponact: 25, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Ua: 245, hit_ja: 270, hit_Da: 250, hit_Fj: 275, hit_Uj: 295, hit_Dj: 315,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 50, weaponact: 25, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  9: { name: "running",
    pic: 20, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/003",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 50, weaponact: 23, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 19, w: 38, h: 60 }
  },
  10: { name: "running",
    pic: 21, state: 2, wait: 4, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 49, y: 50, weaponact: 22, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 19, w: 38, h: 60 }
  },
  11: { name: "running",
    pic: 22, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/004",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: 53, weaponact: 23, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 19, w: 38, h: 60 }
  },
  12: { name: "heavy_obj_walk",
    pic: 100, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 26, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 15, w: 28, h: 64 }
  },
  13: { name: "heavy_obj_walk",
    pic: 101, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 26, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 15, w: 28, h: 64 }
  },
  14: { name: "heavy_obj_walk",
    pic: 102, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 27, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 15, w: 28, h: 64 }
  },
  15: { name: "heavy_obj_walk",
    pic: 103, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 44, y: 27, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 15, w: 28, h: 64 }
  },
  16: { name: "heavy_obj_run",
    pic: 100, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 26, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 15, w: 28, h: 64 }
  },
  17: { name: "tree_jump",
    pic: 59, state: 3, wait: 0, next: 18, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  18: { name: "tree_jump",
    pic: 59, state: 3, wait: 0, next: 19, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 0, y: 82, action: 150, oid: 203 },
  },
  19: { name: "tree_jump",
    pic: 59, state: 2, wait: 5, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  20: { name: "normal_weapon_atck",
    pic: 53, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 25, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 22, w: 35, h: 57 },
      { kind: 0, x: 10, y: 40, w: 20, h: 13 }
    ]
  },
  25: { name: "normal_weapon_atck",
    pic: 53, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 25, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 22, w: 35, h: 57 },
      { kind: 0, x: 10, y: 40, w: 20, h: 13 }
    ]
  },
  30: { name: "jump_weapon_atck",
    pic: 27, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 22, y: 10, w: 40, h: 52 }
  },
  35: { name: "run_weapon_atck",
    pic: 53, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 25, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 22, w: 35, h: 57 },
      { kind: 0, x: 10, y: 40, w: 20, h: 13 }
    ]
  },
  40: { name: "dash_weapon_atck",
    pic: 27, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 22, y: 10, w: 40, h: 52 }
  },
  41: { name: "dash_weapon_atck",
    pic: 91, state: 3, wait: 7, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 37, y: 69, weaponact: 25, attacking: 4, cover: 0 },
    bdy: { kind: 0, x: 8, y: 32, w: 33, h: 45 }
  },
  45: { name: "light_weapon_thw",
    pic: 53, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 25, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 22, w: 35, h: 57 },
      { kind: 0, x: 10, y: 40, w: 20, h: 13 }
    ]
  },
  46: { name: "light_weapon_thw",
    pic: 54, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/2121",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 60, y: 42, weaponact: 31, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 45, y: 37, w: 40, h: 14, dvx: 20, dvy: -5, bdefend: 100, injury: 35, effect: 1 },
    bdy: { kind: 0, x: 24, y: 22, w: 32, h: 57 }
  },
  47: { name: "light_weapon_thw",
    pic: 55, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 55, dvy: -4, dvz: 3, kind: 1, x: 100, y: 50, weaponact: 35, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 10, y: 38, w: 54, h: 21 }
  },
  50: { name: "heavy_weapon_thw",
    pic: 14, state: 15, wait: 6, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 16, y: 52, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 19, w: 30, h: 62 }
  },
  51: { name: "heavy_weapon_thw",
    pic: 16, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 25, dvy: -4, dvz: 2, kind: 1, x: 93, y: 57, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 8, y: 39, w: 61, h: 23 }
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 27, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 49, y: 27, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 22, y: 10, w: 40, h: 52 }
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 28, state: 15, wait: 1, next: 54, dvx: 0, dvy: -2, dvz: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    wpoint: { dvx: 23, dvy: 8, dvz: 3, kind: 1, x: 55, y: 35, weaponact: 23, attacking: 0, cover: 0 },
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 29, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 23, dvy: 8, dvz: 3, kind: 1, x: 67, y: 56, weaponact: 23, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 22, y: 15, w: 38, h: 38 },
      { kind: 0, x: 3, y: 37, w: 34, h: 26 }
    ]
  },
  55: { name: "kirby",
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: { kind: 2, x: 41, y: 39, fronthurtact: 55, backhurtact: 55 },
    bdy: { kind: 0, x: 26, y: 150000, w: 28, h: 500 }
  },
  60: { name: "punch",
    pic: 10, state: 3, wait: 1, next: 61, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/2096",
    itr: { kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1 },
    bdy: [
      { kind: 0, x: 30, y: 18, w: 28, h: 60 },
      { kind: 0, x: 23, y: 35, w: 37, h: 24 }
    ]
  },
  61: { name: "punch",
    pic: 11, state: 3, wait: 1, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 300,
    sound: "2/007",
    itr: { kind: 0, x: 53, y: 35, w: 30, h: 16, dvx: 2, bdefend: 16, injury: 15, effect: 1 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  62: { name: "punch",
    pic: 12, state: 3, wait: 2, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 300,
    itr: { kind: 3, x: 40, y: 753, w: 25, h: 65, catchingact: [394, 394], caughtact: [396, 396] },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 },
      { kind: 0, x: 45, y: 753, w: 32, h: 11 }
    ]
  },
  63: { name: "punch",
    pic: 13, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 300,
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  65: { name: "punch",
    pic: 14, state: 3, wait: 1, next: 66, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/2098",
    itr: { kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 27, y: 17, w: 31, h: 63 }
    ]
  },
  66: { name: "punch",
    pic: 15, state: 3, wait: 1, next: 67, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 300,
    bdy: [
      { kind: 0, x: 28, y: 17, w: 29, h: 63 },
      { kind: 0, x: 45, y: 37, w: 32, h: 11 }
    ]
  },
  67: { name: "punch",
    pic: 16, state: 3, wait: 2, next: 68, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 300,
    sound: "2/007",
    itr: { kind: 0, x: 45, y: 37, w: 33, h: 14, dvx: 2, bdefend: 16, injury: 15 },
    bdy: [
      { kind: 0, x: 28, y: 17, w: 29, h: 63 },
      { kind: 0, x: 45, y: 37, w: 32, h: 11 }
    ]
  },
  68: { name: "punch",
    pic: 17, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 300,
    itr: { kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1 },
    bdy: [
      { kind: 0, x: 28, y: 17, w: 29, h: 63 },
      { kind: 0, x: 45, y: 37, w: 32, h: 11 }
    ]
  },
  70: { name: "super_punch",
    pic: 53, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 25, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 22, w: 35, h: 57 },
      { kind: 0, x: 10, y: 40, w: 20, h: 13 }
    ]
  },
  80: { name: "jump_attack",
    pic: 27, state: 15, wait: 6, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 22, y: 10, w: 40, h: 52 }
  },
  81: { name: "jump_attack",
    pic: 28, state: 15, wait: 1, next: 82, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    mp: -35,
    opoint: { dvx: 23, dvy: 8, dvz: 0, kind: 1, x: 55, y: 35, action: 40, oid: 120, facing: 0 },
    bdy: [
      { kind: 0, x: 35, y: 10, w: 36, h: 23 },
      { kind: 0, x: 15, y: 18, w: 30, h: 43 }
    ]
  },
  82: { name: "jump_attack",
    pic: 29, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 22, y: 15, w: 38, h: 38 },
      { kind: 0, x: 3, y: 37, w: 34, h: 26 }
    ]
  },
  85: { name: "run_attack",
    pic: 53, state: 3, wait: 0, next: 86, dvx: 8, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 75,
    bdy: [
      { kind: 0, x: 19, y: 24, w: 35, h: 54 },
      { kind: 0, x: 10, y: 36, w: 27, h: 15 }
    ]
  },
  86: { name: "run_attack",
    pic: 53, state: 15, wait: 0, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 25, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 2, x: 25, y: 45, action: 20, oid: 120, facing: 0 },
    bdy: { kind: 0, x: 25, y: 22, w: 35, h: 57 }
  },
  90: { name: "dash_attack",
    pic: 27, state: 15, wait: 6, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 22, y: 10, w: 40, h: 52 }
  },
  95: { name: "dash_defend",
    pic: 64, state: 7, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 21, y: -999, weaponact: 30, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 14, y: 19, w: 28, h: 36 },
      { kind: 0, x: 28, y: 37, w: 24, h: 34 }
    ]
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
    pic: 35, state: 6, wait: 0, next: 103, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 35, state: 6, wait: 2, next: 999, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 27, y: 54, weaponact: 32, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 16, y: 19, w: 42, h: 60 }
  },
  112: { name: "broken_defend",
    pic: 31, state: 8, wait: 0, next: 113, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 27, y: 54, weaponact: 32, attacking: 0, cover: 0 },
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
    pic: 61, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 66, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 43, w: 33, h: 37 }
  },
  130: { name: "picked_caught",
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 31, y: 56, weaponact: 30, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 41, y: 39, fronthurtact: 132, backhurtact: 131 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  131: { name: "picked_caught",
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 54, weaponact: 31, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 41, y: 39, fronthurtact: 132, backhurtact: 132 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  132: { name: "picked_caught",
    pic: 30, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 30, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 41, y: 39, fronthurtact: 131, backhurtact: 131 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
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
  145: { name: "lovushka",
    pic: 1, state: 15, wait: 0, next: 146, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 70,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 50, weaponact: 33, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  146: { name: "lovushka",
    pic: 14, state: 15, wait: 1, next: 147, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 50, weaponact: 33, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: 25, action: 41, oid: 206, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  147: { name: "lovushka",
    pic: 60, state: 15, wait: 0, next: 148, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 50, weaponact: 33, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  148: { name: "lovushka",
    pic: 61, state: 15, wait: 1, next: 149, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 50, weaponact: 33, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: 79, action: 78, oid: 225, facing: 0 },
  },
  149: { name: "lovushka",
    pic: 64, state: 3, wait: 1, next: 150, dvx: -11, dvy: -6, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 50, weaponact: 33, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  150: { name: "lovushka",
    pic: 64, state: 3, wait: 3, next: 217, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 50, weaponact: 33, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/2114",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 47, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 21, y: 14, w: 29, h: 44, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: [
      { kind: 0, x: 25, y: 25, w: 21, h: 20 },
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 }
    ]
  },
  181: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 36, weaponact: 21, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 15, y: 11, w: 42, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 35, y: 30, w: 27, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: [
      { kind: 0, x: 22, y: 20, w: 24, h: 23 },
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 }
    ]
  },
  182: { name: "falling",
    pic: 32, state: 12, wait: 6, next: 0, dvx: -3, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 37, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 13, y: 18, w: 46, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: [
      { kind: 0, x: 27, y: 22, w: 20, h: 18 },
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 }
    ]
  },
  183: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 33, weaponact: 33, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 32, y: 18, w: 33, h: 27, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 10, y: 38, w: 38, h: 21, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: [
      { kind: 0, x: 22, y: 30, w: 27, h: 21 },
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 }
    ]
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
    bdy: [
      { kind: 0, x: 31, y: 24, w: 25, h: 23 },
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 }
    ]
  },
  187: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 23, y: 42, weaponact: 20, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 33, y: 6, w: 26, h: 46, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 26, y: 43, w: 21, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: [
      { kind: 0, x: 28, y: 27, w: 24, h: 26 },
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 }
    ]
  },
  188: { name: "falling",
    pic: 32, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 31, y: 42, weaponact: 22, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 14, y: 29, w: 58, h: 23, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: [
      { kind: 0, x: 30, y: 31, w: 24, h: 21 },
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 }
    ]
  },
  189: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 31, y: 51, weaponact: 25, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 24, y: 27, w: 26, h: 28, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 37, y: 45, w: 31, h: 28, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: [
      { kind: 0, x: 30, y: 39, w: 23, h: 21 },
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 }
    ]
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
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 64, weaponact: 23, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 33, y: 33, w: 20, h: 48 }
  },
  211: { name: "jump",
    pic: 61, state: 4, wait: 1, next: 212, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 72, weaponact: 24, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 15, y: 41, w: 48, h: 20 }
  },
  212: { name: "jump",
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 22, y: 31, weaponact: 26, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 31, y: 15, w: 21, h: 64 }
  },
  213: { name: "dash",
    pic: 63, state: 5, wait: 8, next: 216, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 29, y: 33, weaponact: 31, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 46, y: 18, w: 22, h: 25 },
      { kind: 0, x: 28, y: 29, w: 21, h: 33 }
    ]
  },
  214: { name: "dash",
    pic: 64, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 32, weaponact: 23, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 18, y: 14, w: 19, h: 27 }
  },
  215: { name: "crouch",
    pic: 60, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/012",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 64, weaponact: 23, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 26, y: 40, w: 29, h: 38 }
  },
  216: { name: "dash",
    pic: 62, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 27, y: 33, weaponact: 25, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 42, y: 15, w: 24, h: 21 }
  },
  217: { name: "dash",
    pic: 62, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 27, y: 33, weaponact: 25, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 18, y: 13, w: 29, h: 51 }
  },
  218: { name: "stop_running",
    pic: 60, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 37, y: 63, weaponact: 23, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 17, y: 25, w: 30, h: 55 },
      { kind: 0, x: 45, y: 47, w: 16, h: 32 }
    ]
  },
  219: { name: "crouch2",
    pic: 61, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/012",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 26, y: 36, w: 29, h: 44 }
  },
  220: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    sound: "2/2113",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 47, y: 23, w: 23, h: 54 },
      { kind: 0, x: 29, y: 41, w: 20, h: 37 }
    ]
  },
  221: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 60, y: 48, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 46, y: 23, w: 21, h: 56 },
      { kind: 0, x: 30, y: 40, w: 17, h: 41 }
    ]
  },
  222: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    sound: "2/2117",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 27, y: 58, weaponact: 20, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 11, y: 24, w: 39, h: 31 },
      { kind: 0, x: 25, y: 53, w: 40, h: 27 }
    ]
  },
  223: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 24, y: 58, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 12, y: 23, w: 40, h: 37 }
  },
  224: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 225, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 32, y: 53, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 32, y: 18, w: 28, h: 60 },
      { kind: 0, x: 52, y: 38, w: 20, h: 19 }
    ]
  },
  225: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 24, y: 53, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 18, w: 35, h: 63 }
  },
  226: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 227, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: 49, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: { kind: 0, x: 27, y: 22, w: 42, h: 58 }
  },
  227: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 228, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 60, y: 51, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: { kind: 0, x: 28, y: 24, w: 39, h: 57 }
  },
  228: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 229, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 61, y: 48, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: { kind: 0, x: 28, y: 23, w: 37, h: 58 }
  },
  229: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 61, y: 51, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: { kind: 0, x: 29, y: 26, w: 37, h: 53 }
  },
  230: { name: "lying",
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 74, weaponact: 32, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 30000, w: 79, h: 500 }
  },
  231: { name: "lying",
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 74, weaponact: 24, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 30000, w: 79, h: 500 }
  },
  232: { name: "throw_lying_man",
    pic: 37, state: 9, wait: 7, next: 233, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: 26, weaponact: 31, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 28, y: 9, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 1 },
    bdy: { kind: 0, x: 28, y: 19, w: 30, h: 62 }
  },
  233: { name: "throw_lying_man",
    pic: 39, state: 9, wait: 1, next: 234, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 49, weaponact: 25, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 72, y: 53, vaction: 181, throwvx: 13, throwvy: -7, throwvz: 3, throwinjury: 30 },
    bdy: [
      { kind: 0, x: 8, y: 39, w: 61, h: 23 },
      { kind: 0, x: 19, y: 56, w: 30, h: 24 }
    ]
  },
  234: { name: "throw_lying_man",
    pic: 29, state: 9, wait: 10, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 49, weaponact: 25, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 8, y: 39, w: 61, h: 23 },
      { kind: 0, x: 19, y: 56, w: 30, h: 24 }
    ]
  },
  235: { name: "replacement",
    pic: 30, state: 14, wait: 0, next: 236, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 45,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0 },
  },
  236: { name: "replacement",
    pic: 30, state: 15, wait: 2, next: 237, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 70, action: 150, oid: 204, facing: 0 },
  },
  237: { name: "replacement",
    pic: 999, state: 3005, wait: 5, next: 238, dvx: 30, dvy: -4, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  238: { name: "replacement",
    pic: 30, state: 15, wait: 0, next: 999, dvx: -1, dvy: 12, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 70, action: 60, oid: 204, facing: 0 },
  },
  240: { name: "shuriken",
    pic: 50, state: 15, wait: 4, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 100,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  241: { name: "shuriken",
    pic: 51, state: 15, wait: 2, next: 242, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/2095",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 30, dvy: -4, dvz: 0, kind: 1, x: 30, y: 51, action: 40, oid: 121, facing: 50 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  242: { name: "shuriken",
    pic: 52, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  244: { name: "demon_shuriken",
    pic: 56, state: 15, wait: 3, next: 246, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 200,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  245: { name: "demon_shuriken",
    pic: 58, state: 15, wait: 2, next: 244, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 200,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  246: { name: "demon_shuriken",
    pic: 56, state: 15, wait: 1, next: 247, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/061",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 25, y: 23, action: 41, oid: 206, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  247: { name: "demon_shuriken",
    pic: 57, state: 15, wait: 3, next: 248, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  248: { name: "demon_shuriken",
    pic: 54, state: 15, wait: 1, next: 249, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/2100",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 30, dvy: -4, dvz: 0, kind: 1, x: 80, y: 51, action: 40, oid: 124, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  249: { name: "demon_shuriken",
    pic: 55, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  250: { name: "weap_spikes",
    pic: 41, state: 15, wait: 1, next: 251, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 110,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  251: { name: "weap_spikes",
    pic: 42, state: 15, wait: 1, next: 252, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  252: { name: "weap_spikes",
    pic: 43, state: 15, wait: 1, next: 253, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  253: { name: "weap_spikes",
    pic: 43, state: 15, wait: 0, next: 254, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: 23, action: 41, oid: 206, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  254: { name: "weap_spikes",
    pic: 43, state: 15, wait: 0, next: 255, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 30, action: 41, oid: 206, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  255: { name: "weap_spikes",
    pic: 43, state: 15, wait: 0, next: 256, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 25, action: 41, oid: 206, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  256: { name: "weap_spikes",
    pic: 44, state: 15, wait: 6, next: 257, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  257: { name: "weap_spikes",
    pic: 45, state: 15, wait: 2, next: 258, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  258: { name: "weap_spikes",
    pic: 46, state: 15, wait: 1, next: 259, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  259: { name: "weap_spikes",
    pic: 15, state: 15, wait: 1, next: 260, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 20, dvy: 0, dvz: 0, kind: 1, x: 70, y: 33, action: 70, oid: 225, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  260: { name: "weap_spikes",
    pic: 47, state: 15, wait: 1, next: 261, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  261: { name: "weap_spikes",
    pic: 48, state: 15, wait: 1, next: 262, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  262: { name: "weap_spikes",
    pic: 31, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  270: { name: "charge",
    pic: 37, state: 3, wait: 3, next: 271, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/2106",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  271: { name: "charge",
    pic: 36, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 79, y: 2, weaponact: 20, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 2, x: 42, y: 51, action: 20, oid: 123, facing: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  272: { name: "charge",
    pic: 36, state: 17, wait: 3, next: 273, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 274, hit_d: 274, hit_j: 274,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 12, weaponact: 20, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 45, action: 4, oid: 203 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  273: { name: "charge",
    pic: 36, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 274, hit_d: 274, hit_j: 274,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 30, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  274: { name: "charge",
    pic: 36, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 100, dvy: -1, dvz: 0, kind: 1, x: 39, y: 30, weaponact: 1000, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 26, y: 55, w: 32, h: 26 }
  },
  275: { name: "weap_ball",
    pic: 50, state: 15, wait: 0, next: 276, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 100,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  276: { name: "weap_ball",
    pic: 67, state: 15, wait: 0, next: 277, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/061",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: 25, action: 41, oid: 206, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  277: { name: "weap_ball",
    pic: 67, state: 15, wait: 0, next: 278, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 25, action: 41, oid: 206, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  278: { name: "weap_ball",
    pic: 67, state: 15, wait: 0, next: 279, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 25, action: 41, oid: 206, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  279: { name: "weap_ball",
    pic: 68, state: 15, wait: 1, next: 280, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  280: { name: "weap_ball",
    pic: 140, state: 15, wait: 1, next: 281, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 70, y: 45, w: 50, h: 16, dvx: 5, dvy: -15, fall: 100, vrest: 10, bdefend: 100, injury: 100, effect: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  281: { name: "weap_ball",
    pic: 141, state: 15, wait: 1, next: 282, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 100, y: 45, w: 50, h: 16, dvx: 5, dvy: -15, fall: 100, vrest: 10, bdefend: 100, injury: 100, effect: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  282: { name: "weap_ball",
    pic: 142, state: 15, wait: 1, next: 283, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 150, y: 45, w: 70, h: 16, dvx: 5, dvy: -15, fall: 100, vrest: 10, bdefend: 100, injury: 100, effect: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  283: { name: "weap_ball",
    pic: 143, state: 15, wait: 1, next: 284, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 240, y: 45, w: 60, h: 16, dvx: 5, dvy: -15, fall: 100, vrest: 10, bdefend: 100, injury: 100, effect: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  284: { name: "weap_ball",
    pic: 144, state: 15, wait: 1, next: 285, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 260, y: 45, w: 60, h: 16, dvx: 5, dvy: -15, fall: 100, vrest: 10, bdefend: 100, injury: 100, effect: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  285: { name: "weap_ball",
    pic: 143, state: 15, wait: 1, next: 286, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  286: { name: "weap_ball",
    pic: 142, state: 15, wait: 1, next: 287, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  287: { name: "weap_ball",
    pic: 141, state: 15, wait: 1, next: 288, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  288: { name: "weap_ball",
    pic: 145, state: 15, wait: 1, next: 289, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  289: { name: "weap_ball",
    pic: 67, state: 15, wait: 3, next: 290, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  290: { name: "weap_ball",
    pic: 67, state: 15, wait: 0, next: 291, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/061",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: 25, action: 41, oid: 206, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  291: { name: "weap_ball",
    pic: 67, state: 15, wait: 0, next: 292, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 25, action: 41, oid: 206, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  292: { name: "weap_ball",
    pic: 67, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 25, action: 41, oid: 206, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  295: { name: "massive_weap",
    pic: 38, state: 15, wait: 2, next: 296, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 375,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  296: { name: "massive_weap",
    pic: 39, state: 15, wait: 2, next: 297, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: 79, action: 50, oid: 419, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  297: { name: "massive_weap",
    pic: 49, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  300: { name: "shuriken_mass",
    pic: 50, state: 15, wait: 0, next: 301, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 60,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  301: { name: "shuriken_mass",
    pic: 51, state: 15, wait: 0, next: 302, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 85, action: 75, oid: 203, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  302: { name: "shuriken_mass",
    pic: 52, state: 15, wait: 0, next: 303, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  303: { name: "shuriken_mass",
    pic: 53, state: 15, wait: 0, next: 304, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -10,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  304: { name: "shuriken_mass",
    pic: 54, state: 15, wait: 0, next: 305, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 80, action: 75, oid: 203, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  305: { name: "shuriken_mass",
    pic: 55, state: 15, wait: 0, next: 306, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  306: { name: "shuriken_mass",
    pic: 23, state: 15, wait: 0, next: 307, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -10,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  307: { name: "shuriken_mass",
    pic: 24, state: 15, wait: 0, next: 308, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 77, action: 75, oid: 203, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  308: { name: "shuriken_mass",
    pic: 25, state: 15, wait: 0, next: 309, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  309: { name: "shuriken_mass",
    pic: 14, state: 15, wait: 0, next: 310, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 300,
    mp: -10,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  310: { name: "shuriken_mass",
    pic: 15, state: 15, wait: 0, next: 311, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 300,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 87, action: 75, oid: 203, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  311: { name: "shuriken_mass",
    pic: 16, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 300,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  315: { name: "huge_spike",
    pic: 90, state: 15, wait: 1, next: 316, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    mp: 150,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  316: { name: "huge_spike",
    pic: 91, state: 15, wait: 1, next: 317, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  317: { name: "huge_spike",
    pic: 92, state: 15, wait: 1, next: 318, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  318: { name: "huge_spike",
    pic: 93, state: 15, wait: 1, next: 319, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  319: { name: "huge_spike",
    pic: 94, state: 15, wait: 1, next: 320, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -30, action: 57, oid: 407, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  320: { name: "huge_spike",
    pic: 95, state: 15, wait: 1, next: 321, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: -5, dvz: 0, kind: 1, x: 5, y: 0, action: 155, oid: 229, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  321: { name: "huge_spike",
    pic: 96, state: 15, wait: 1, next: 322, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  322: { name: "huge_spike",
    pic: 97, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
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
  500: { name: "defend2",
    pic: 40, state: 6001, wait: 0, next: 501, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 110, hit_j: 0,
  },
  501: { name: "defendend",
    pic: 40, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 16, y: 19, w: 42, h: 60 }
  }
  }
});