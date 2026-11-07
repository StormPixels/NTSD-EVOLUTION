define({
  bmp: {
    file: [
      { "file(0-63)": "sprite/wzetsu.png", w: 200, h: 135, row: 4, col: 16 },
      { "file(64-95)": "sprite/wzetsu2.png", w: 200, h: 135, row: 4, col: 9 },
      { "file(96-139)": "sprite/wzetsu3.png", w: 401, h: 135, row: 2, col: 9 },
      { "file(140-148)": "sprite/kisame_3.png", w: 155, h: 95, row: 3, col: 3 }
    ],
    name: "Black_Zetsu",
    head: "sprite/bzetsu_f.png",
    small: "sprite/bzetsu_s.png",
    walking_frame_rate: 3,
    walking_speed: 4,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 15.5,
    running_speedz: 3.3,
    heavy_walking_speed: 3,
    heavy_walking_speedz: 1.5,
    heavy_running_speed: 5,
    heavy_running_speedz: 0.8,
    jump_height: -16.799999,
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
    pic: 0, state: 0, wait: 3, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 0, hit_Fa: 250, hit_Fj: 250, hit_Ua: 300, hit_ja: 270, hit_Da: 0, hit_Uj: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 0, hit_Fa: 250, hit_Fj: 250, hit_Ua: 300, hit_ja: 270, hit_Da: 0, hit_Uj: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 0, hit_Fa: 250, hit_Fj: 250, hit_Ua: 300, hit_ja: 270, hit_Da: 0, hit_Uj: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  3: { name: "standing",
    pic: 3, state: 0, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 0, hit_Fa: 250, hit_Fj: 250, hit_Ua: 300, hit_ja: 270, hit_Da: 0, hit_Uj: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 0, hit_Fa: 250, hit_Fj: 250, hit_Ua: 300, hit_ja: 270, hit_Da: 0, hit_Uj: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 100, y: 108, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 0, hit_Fa: 250, hit_Fj: 250, hit_Ua: 300, hit_ja: 270, hit_Da: 0, hit_Uj: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 100, y: 108, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 0, hit_Fa: 250, hit_Fj: 250, hit_Ua: 300, hit_ja: 270, hit_Da: 0, hit_Uj: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 100, y: 108, weaponact: 22, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 0, hit_Fa: 250, hit_Fj: 250, hit_Ua: 300, hit_ja: 270, hit_Da: 0, hit_Uj: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 100, y: 108, weaponact: 23, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  9: { name: "running",
    pic: 24, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/003",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 103, weaponact: 25, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  10: { name: "running",
    pic: 25, state: 2, wait: 4, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 103, weaponact: 23, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  11: { name: "running",
    pic: 26, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/004",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 103, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  12: { name: "heavy_obj_walk",
    pic: 120, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 37, y: 13, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 29, y: 15, w: 28, h: 64 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  13: { name: "heavy_obj_walk",
    pic: 121, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 13, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 29, y: 15, w: 28, h: 64 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  14: { name: "heavy_obj_walk",
    pic: 122, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 12, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 29, y: 15, w: 28, h: 64 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  15: { name: "heavy_obj_walk",
    pic: 123, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 12, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 29, y: 15, w: 28, h: 64 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  16: { name: "heavy_obj_run",
    pic: 120, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 37, y: 13, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 15, w: 28, h: 64 }
  },
  17: { name: "tree_jump",
    pic: 15, state: 3, wait: 1, next: 18, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  18: { name: "tree_jump",
    pic: 15, state: 3, wait: 1, next: 19, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 0, y: 82, action: 150, oid: 203 },
  },
  19: { name: "tree_jump",
    pic: 15, state: 2, wait: 5, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  20: { name: "normal_weapon_atck",
    pic: 27, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 110, y: 108, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  25: { name: "normal_weapon_atck",
    pic: 27, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 110, y: 108, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  30: { name: "jump_weapon_atck",
    pic: 124, state: 15, wait: 2, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 110, y: -999, weaponact: 22, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 22, y: 10, w: 40, h: 52 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  35: { name: "run_weapon_atck",
    pic: 27, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 110, y: 108, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  40: { name: "dash_weapon_atck",
    pic: 124, state: 15, wait: 2, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 110, y: -999, weaponact: 22, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 22, y: 10, w: 40, h: 52 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  45: { name: "light_weapon_thw",
    pic: 64, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 108, weaponact: 20, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  46: { name: "light_weapon_thw",
    pic: 65, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 100, weaponact: 31, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  47: { name: "light_weapon_thw",
    pic: 66, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 55, dvy: -4, dvz: 3, kind: 1, x: 90, y: 98, weaponact: 35, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  50: { name: "heavy_weapon_thw",
    pic: 64, state: 15, wait: 6, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 108, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  51: { name: "heavy_weapon_thw",
    pic: 8, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 50, dvy: -4, dvz: 2, kind: 1, x: 90, y: 98, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 31, state: 15, wait: 2, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: -999, weaponact: 22, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 106, w: 50, h: 60 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 66, state: 15, wait: 2, next: 54, dvx: 0, dvy: -2, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 91, weaponact: 34, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 106, w: 50, h: 60 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 65, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 23, dvy: 8, dvz: 3, kind: 1, x: 90, y: 96, weaponact: 23, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  60: { name: "punch",
    pic: 0, state: 3, wait: 0, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 2, x: 96, y: 106, w: 28, h: 43, vrest: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  61: { name: "punch",
    pic: 10, state: 3, wait: 1, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  62: { name: "punch",
    pic: 11, state: 3, wait: 1, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  63: { name: "punch",
    pic: 12, state: 3, wait: 1, next: 64, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    itr: { kind: 0, x: 106, y: 86, w: 55, h: 70, dvx: 11, dvy: -8, vrest: 25, bdefend: 100, fall: 100, injury: 50, effect: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  64: { name: "punch",
    pic: 13, state: 3, wait: 1, next: 66, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 106, y: 86, w: 55, h: 70, dvx: 11, dvy: -8, vrest: 25, bdefend: 100, fall: 100, injury: 50, effect: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  65: { name: "punch",
    pic: 0, state: 3, wait: 0, next: 61, dvx: 1, dvy: 0, dvz: 0, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  66: { name: "punch",
    pic: 14, state: 3, wait: 1, next: 67, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  67: { name: "punch",
    pic: 10, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  68: { name: "punch",
    pic: 12, state: 3, wait: 3, next: 69, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  69: { name: "punch",
    pic: 12, state: 3, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 90 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  70: { name: "super_punch",
    pic: 64, state: 3, wait: 0, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 68, h: 50 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  71: { name: "super_punch",
    pic: 64, state: 3, wait: 0, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 68, h: 50 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  72: { name: "super_punch",
    pic: 65, state: 3, wait: 0, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/054",
    itr: { kind: 0, x: 106, y: 86, w: 40, h: 40, dvx: 5, dvy: -8, fall: 70, arest: 15, bdefend: 100, injury: 60, effect: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 68, h: 50 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  73: { name: "super_punch",
    pic: 65, state: 3, wait: 0, next: 74, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 106, y: 86, w: 40, h: 40, dvx: 5, dvy: -8, fall: 60, arest: 15, bdefend: 100, injury: 60, effect: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 68, h: 50 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  74: { name: "super_punch",
    pic: 66, state: 3, wait: 6, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 68, h: 50 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  80: { name: "jump_attack",
    pic: 42, state: 3, wait: 1, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: [
      { kind: 0, x: 68, y: 86, w: 72, h: 50 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  81: { name: "jump_attack",
    pic: 43, state: 3, wait: 1, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 104, y: 45, w: 50, h: 48, dvx: 2, arest: 15, bdefend: 16, injury: 15, fall: 20, effect: 0 },
    bdy: [
      { kind: 0, x: 45, y: 20, w: 28, h: 27 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  82: { name: "jump_attack",
    pic: 44, state: 3, wait: 1, next: 83, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 20, y: 18, w: 34, h: 61 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  83: { name: "jump_attack",
    pic: 45, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 104, y: 45, w: 50, h: 48, dvx: 2, arest: 15, bdefend: 16, injury: 15, fall: 20, effect: 0 },
    bdy: [
      { kind: 0, x: 45, y: 20, w: 28, h: 27 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  85: { name: "run_attack",
    pic: 64, state: 3, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 19, y: 24, w: 35, h: 54 },
      { kind: 0, x: 10, y: 36, w: 27, h: 15 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  90: { name: "dash_attack",
    pic: 42, state: 15, wait: 1, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 24, y: 18, w: 25, h: 55 },
      { kind: 0, x: 13, y: 36, w: 52, h: 18 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  91: { name: "dash_attack",
    pic: 43, state: 15, wait: 1, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    itr: { kind: 0, x: 104, y: 45, w: 56, h: 48, dvx: 12, dvy: 2, fall: 100, arest: 20, bdefend: 100, injury: 70, effect: 1 },
    bdy: [
      { kind: 0, x: 7, y: 19, w: 37, h: 45 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  92: { name: "dash_attack",
    pic: 45, state: 15, wait: 8, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 7, y: 19, w: 37, h: 45 },
      { kind: 0, x: 22, y: 36, w: 50, h: 18 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  95: { name: "dash_defend",
    pic: 64, state: 7, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: -999, weaponact: 30, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 14, y: 19, w: 28, h: 36 },
      { kind: 0, x: 28, y: 37, w: 24, h: 34 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  100: { name: "rowing",
    pic: 34, state: 6, wait: 2, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 22, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  101: { name: "rowing",
    pic: 34, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  102: { name: "rowing",
    pic: 35, state: 6, wait: 0, next: 103, dvx: 550, dvy: 550, dvz: 550, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    mp: 75,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: 40, weaponact: 75, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 17, w: 43, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  103: { name: "rowing",
    pic: 999, state: 6, wait: 0, next: 104, dvx: 550, dvy: 550, dvz: 550, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: 40, weaponact: 75, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 17, w: 43, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  104: { name: "rowing",
    pic: 999, state: 3005, wait: 2, next: 105, dvx: 70, dvy: 550, dvz: 10, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -999, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  105: { name: "rowing",
    pic: 999, state: 15, wait: 0, next: 106, dvx: 550, dvy: 0, dvz: 550, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -999, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  106: { name: "rowing",
    pic: 35, state: 6, wait: 2, next: 999, dvx: 550, dvy: 0, dvz: 550, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -999, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  107: { name: "rowing",
    pic: 36, state: 6, wait: 1, next: 219, dvx: 0, dvy: 0, dvz: 3, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 25, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  108: { name: "rowing",
    pic: 36, state: 6, wait: 3, next: 109, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 22, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  109: { name: "rowing",
    pic: 36, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  110: { name: "defend",
    pic: 64, state: 7, wait: 10, next: 500, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 50 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  111: { name: "defend",
    pic: 64, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 105, y: 100, weaponact: 35, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 50 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  112: { name: "broken_defend",
    pic: 37, state: 8, wait: 0, next: 113, dvx: -2, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 1 },
    itr: { kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 50 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  113: { name: "broken_defend",
    pic: 37, state: 8, wait: 0, next: 114, dvx: -2, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 1 },
    itr: { kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 50 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  114: { name: "broken_defend",
    pic: 37, state: 8, wait: 2, next: 999, dvx: -2, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 1 },
    itr: { kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  115: { name: "picking_light",
    pic: 30, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 95, y: 125, weaponact: 24, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  116: { name: "picking_heavy",
    pic: 30, state: 15, wait: 5, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 100, y: 129, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  117: { name: "picking_heavy",
    pic: 30, state: 15, wait: 5, next: 50, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 100, y: 100, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  130: { name: "picked_caught",
    pic: 38, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 100, y: 90, fronthurtact: 132, backhurtact: 131 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 60 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
    ]
  },
  131: { name: "picked_caught",
    pic: 38, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 31, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 100, y: 90, fronthurtact: 132, backhurtact: 132 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 60 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
    ]
  },
  132: { name: "picked_caught",
    pic: 37, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 100, y: 90, fronthurtact: 131, backhurtact: 131 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 60 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
    ]
  },
  133: { name: "picked_caught",
    pic: 37, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 22, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 92, y: 91 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
  },
  134: { name: "picked_caught",
    pic: 38, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 96, y: 83 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
  },
  135: { name: "picked_caught",
    pic: 39, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 90, y: 77 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
  },
  136: { name: "picked_caught",
    pic: 40, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 33, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 86, y: 101 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
  },
  137: { name: "picked_caught",
    pic: 41, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 32, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 92, y: 123 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
    ]
  },
  138: { name: "picked_caught",
    pic: 40, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 31, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 93, y: 109 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
  },
  139: { name: "picked_caught",
    pic: 37, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 99, y: 91 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
  },
  140: { name: "picked_caught",
    pic: 38, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 95, y: 93 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
  },
  141: { name: "picked_caught",
    pic: 39, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 23, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 103, y: 95 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
  },
  142: { name: "picked_caught",
    pic: 40, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 26, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 105, y: 106 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
  },
  143: { name: "picked_caught",
    pic: 41, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 24, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 104, y: 121 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
  },
  144: { name: "picked_caught",
    pic: 40, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 25, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 101, y: 110 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
  },
  180: { name: "falling",
    pic: 37, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 21, y: 14, w: 29, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 20 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
    ]
  },
  181: { name: "falling",
    pic: 38, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 15, y: 11, w: 50, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 35, y: 30, w: 27, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 20 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
    ]
  },
  182: { name: "falling",
    pic: 39, state: 12, wait: 6, next: 0, dvx: -3, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 13, y: 18, w: 46, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 20 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
    ]
  },
  183: { name: "falling",
    pic: 40, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 33, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 32, y: 18, w: 33, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 10, y: 38, w: 50, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 20 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
    ]
  },
  184: { name: "falling",
    pic: 41, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 32, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
  },
  185: { name: "falling",
    pic: 40, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 31, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
  },
  186: { name: "falling",
    pic: 37, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 34, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 22, y: 12, w: 36, h: 180, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 20 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
    ]
  },
  187: { name: "falling",
    pic: 38, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 33, y: 6, w: 26, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 26, y: 43, w: 21, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 20 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
    ]
  },
  188: { name: "falling",
    pic: 39, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 22, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 14, y: 29, w: 58, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 20 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
    ]
  },
  189: { name: "falling",
    pic: 40, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 25, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 24, y: 27, w: 26, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 37, y: 45, w: 31, h: 60, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 20 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
    ]
  },
  190: { name: "falling",
    pic: 41, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 24, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
  },
  191: { name: "falling",
    pic: 40, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 25, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 10000 }
  },
  200: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 201, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  201: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -45,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  203: { name: "fire",
    pic: 59, state: 18, wait: 0, next: 204, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -2, dvy: -2, fall: 999, vrest: 10, bdefend: 16, injury: 30, effect: 20 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 20 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  204: { name: "fire",
    pic: 60, state: 18, wait: 0, next: 205, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -2, dvy: -2, fall: 999, vrest: 10, bdefend: 16, injury: 30, effect: 20 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 20 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  205: { name: "fire",
    pic: 59, state: 18, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -2, dvy: -2, fall: 999, vrest: 10, bdefend: 16, injury: 30, effect: 20 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 20 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  206: { name: "fire",
    pic: 60, state: 18, wait: 0, next: 205, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 999, vrest: 10, bdefend: 16, injury: 30, effect: 20 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 20 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  207: { name: "tired",
    pic: 61, state: 15, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 22, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 44, y: 28, w: 22, h: 37 },
      { kind: 0, x: 28, y: 47, w: 28, h: 35 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  210: { name: "jump",
    pic: 30, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 120, weaponact: 20, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 106, w: 50, h: 60 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  211: { name: "jump",
    pic: 30, state: 4, wait: 1, next: 212, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 120, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 106, w: 50, h: 60 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  212: { name: "jump",
    pic: 31, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 100, y: 80, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 56, w: 50, h: 60 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  213: { name: "dash",
    pic: 32, state: 5, wait: 8, next: 216, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 100, y: -999, weaponact: 25, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 56, w: 50, h: 60 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  214: { name: "dash",
    pic: 33, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 100, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 56, w: 50, h: 60 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  215: { name: "crouch",
    pic: 30, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/012",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 106, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  216: { name: "dash",
    pic: 31, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 56, w: 50, h: 60 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  217: { name: "dash",
    pic: 31, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: -999, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 56, w: 50, h: 60 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  218: { name: "stop_running",
    pic: 0, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  219: { name: "crouch2",
    pic: 30, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 129, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/012",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 106, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  220: { name: "injured",
    pic: 37, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 40 },
      { kind: 0, x: 76, y: 86, w: 50, h: 40 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  221: { name: "injured",
    pic: 37, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 40 },
      { kind: 0, x: 76, y: 86, w: 50, h: 40 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  222: { name: "injured",
    pic: 38, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 40 },
      { kind: 0, x: 76, y: 86, w: 50, h: 40 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  223: { name: "injured",
    pic: 38, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 40 },
      { kind: 0, x: 76, y: 86, w: 50, h: 40 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  224: { name: "injured",
    pic: 37, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 40 },
      { kind: 0, x: 76, y: 86, w: 50, h: 40 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  225: { name: "injured",
    pic: 37, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 40 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  226: { name: "injured",
    pic: 38, state: 16, wait: 1, next: 227, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 40 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  227: { name: "injured",
    pic: 38, state: 16, wait: 1, next: 228, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 40 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  228: { name: "injured",
    pic: 38, state: 16, wait: 1, next: 229, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 40 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  229: { name: "injured",
    pic: 38, state: 16, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 330,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 40 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  230: { name: "lying",
    pic: 41, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 350,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 0, x: 0, y: 30000, weaponact: 32, attacking: 0, w: 70, h: 1300, cover: 0 },
    bdy: { kind: 0, x: 40, y: 30000, w: 85, h: 1300 }
  },
  231: { name: "lying",
    pic: 41, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 350,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 50, weaponact: 24, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 40, y: 30000, w: 85, h: 1300 }
  },
  232: { name: "throw_lying_man",
    pic: 11, state: 9, wait: 0, next: 233, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 31, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 80, y: 33, action: 195, oid: 446, facing: 0 },
    cpoint: { kind: 1, x: 90, y: 83, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 1 },
    bdy: { kind: 0, x: 28, y: 19, w: 30, h: 130 }
  },
  233: { name: "throw_lying_man",
    pic: 11, state: 9, wait: 12, next: 234, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 25, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 90, y: 83, vaction: 181, throwvx: 13, throwvy: -7, throwvz: 3 },
    bdy: [
      { kind: 0, x: 8, y: 39, w: 61, h: 23 },
      { kind: 0, x: 19, y: 56, w: 30, h: 24 }
    ]
  },
  234: { name: "throw_lying_man",
    pic: 14, state: 9, wait: 7, next: 324, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 25, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 8, y: 39, w: 61, h: 23 },
      { kind: 0, x: 19, y: 56, w: 30, h: 24 }
    ]
  },
  235: { name: "replacement",
    pic: 37, state: 14, wait: 0, next: 236, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 45,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 90, y: 110, weaponact: 31, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  236: { name: "replacement",
    pic: 999, state: 15, wait: 2, next: 237, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 90, y: 110, weaponact: 31, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 98, y: 130, action: 60, oid: 410, facing: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  237: { name: "replacement",
    pic: 999, state: 3005, wait: 5, next: 238, dvx: 30, dvy: -4, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  238: { name: "replacement",
    pic: 30, state: 15, wait: 0, next: 999, dvx: -1, dvy: 12, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 90, y: 110, weaponact: 31, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 130, action: 60, oid: 204, facing: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  250: { name: "vines",
    pic: 100, state: 3, wait: 1, next: 251, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/bzetsu2",
    mp: 80,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  251: { name: "vines",
    pic: 101, state: 15, wait: 1, next: 252, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  252: { name: "vines",
    pic: 102, state: 15, wait: 1, next: 253, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  253: { name: "vines",
    pic: 103, state: 15, wait: 1, next: 254, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  254: { name: "vines",
    pic: 104, state: 15, wait: 1, next: 255, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  255: { name: "vines",
    pic: 105, state: 15, wait: 1, next: 256, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 106, y: 86, w: 70, h: 70, dvx: 11, dvy: -10, vrest: 25, bdefend: 100, fall: 100, injury: 90, effect: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  256: { name: "vines",
    pic: 106, state: 15, wait: 1, next: 257, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 106, y: 86, w: 100, h: 70, dvx: 11, dvy: -10, vrest: 25, bdefend: 100, fall: 100, injury: 90, effect: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  257: { name: "wvines",
    pic: 107, state: 15, wait: 1, next: 258, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 132, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 106, y: 86, w: 180, h: 70, dvx: 11, dvy: -10, vrest: 25, bdefend: 100, fall: 100, injury: 90, effect: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  258: { name: "vines",
    pic: 108, state: 15, wait: 1, next: 259, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 132, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 106, y: 86, w: 220, h: 70, dvx: 11, dvy: -10, vrest: 25, bdefend: 100, fall: 100, injury: 90, effect: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  259: { name: "vines",
    pic: 107, state: 15, wait: 0, next: 260, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 132, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 106, y: 86, w: 180, h: 70, dvx: 11, dvy: -8, vrest: 25, bdefend: 100, fall: 100, injury: 90, effect: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  260: { name: "vines",
    pic: 106, state: 15, wait: 0, next: 261, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 106, y: 86, w: 100, h: 70, dvx: 11, dvy: -8, vrest: 25, bdefend: 100, fall: 100, injury: 90, effect: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  261: { name: "vines",
    pic: 105, state: 15, wait: 0, next: 262, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 106, y: 86, w: 70, h: 70, dvx: 11, dvy: -8, vrest: 25, bdefend: 100, fall: 100, injury: 90, effect: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  262: { name: "vines",
    pic: 104, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  270: { name: "charge",
    pic: 27, state: 3, wait: 3, next: 271, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 31, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 4561234646, w: 9999999, h: 100 }
    ]
  },
  271: { name: "charge",
    pic: 28, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 2, x: 105, y: 90, action: 20, oid: 123, facing: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 4561234646, w: 9999999, h: 100 }
    ]
  },
  272: { name: "charge",
    pic: 29, state: 17, wait: 3, next: 273, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 274, hit_d: 274, hit_j: 274,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 100, y: 108, action: 4, oid: 203 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 4561234646, w: 9999999, h: 100 }
    ]
  },
  273: { name: "charge",
    pic: 29, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 274, hit_d: 274, hit_j: 274,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 4561234646, w: 9999999, h: 100 }
    ]
  },
  274: { name: "charge",
    pic: 27, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 100, dvy: -1, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 40, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 4561234646, w: 9999999, h: 100 }
    ]
  },
  275: { name: "water_prison",
    pic: 27, state: 3, wait: 1, next: 276, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 60,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  276: { name: "water_prison",
    pic: 28, state: 15, wait: 1, next: 277, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  277: { name: "water_prison",
    pic: 29, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 55, y: 140, action: 75, oid: 416, facing: 0 },
  },
  280: { name: "spikes",
    pic: 0, state: 15, wait: 1, next: 281, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 90,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 42, weaponact: 31, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  281: { name: "spikes",
    pic: 1, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 42, weaponact: 31, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 150, y: 137, action: 320, oid: 77, facing: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  282: { name: "sword",
    pic: 68, state: 15, wait: 20, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 8, x: -50000, y: -50100, w: 100079, h: 800, dvx: 21, injury: 0, zwidth: 300 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  284: { name: "shark",
    pic: 68, state: 15, wait: 0, next: 285, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 288, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  285: { name: "shark",
    pic: 30, state: 15, wait: 0, next: 286, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 288, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
  },
  286: { name: "shark",
    pic: 30, state: 15, wait: 2, next: 287, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 288, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 80, y: 145, action: 45, oid: 416, facing: 0 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  287: { name: "shark",
    pic: 30, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 288, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  288: { name: "shark",
    pic: 28, state: 15, wait: 2, next: 289, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 175,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  289: { name: "shark",
    pic: 29, state: 15, wait: 1, next: 287, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 80, y: 145, action: 45, oid: 416, facing: 20 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  290: { name: "clone",
    pic: 27, state: 3, wait: 3, next: 291, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 460,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  291: { name: "clone",
    pic: 28, state: 3, wait: 1, next: 292, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  292: { name: "clone",
    pic: 29, state: 15, wait: 3, next: 293, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  293: { name: "clone",
    pic: 28, state: 15, wait: 1, next: 294, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  294: { name: "clone",
    pic: 29, state: 15, wait: 3, next: 295, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 130 }
  },
  295: { name: "clone",
    pic: 29, state: 15, wait: 0, next: 296, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  296: { name: "clone",
    pic: 29, state: 3, wait: 15, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 295,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: 134, action: 350, oid: 5, facing: 0 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  297: { name: "water snake",
    pic: 47, state: 15, wait: 2, next: 298, dvx: 0, dvy: 0, dvz: 0, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  298: { name: "water snake",
    pic: 48, state: 15, wait: 2, next: 301, dvx: 0, dvy: 0, dvz: 0, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  300: { name: "disappear",
    pic: 46, state: 15, wait: 5, next: 297, dvx: 0, dvy: 0, dvz: 0, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  301: { name: "disappear",
    pic: 49, state: 15, wait: 2, next: 302, dvx: 0, dvy: 0, dvz: 0, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  302: { name: "disappear",
    pic: 50, state: 15, wait: 2, next: 311, dvx: 0, dvy: 0, dvz: 0, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  303: { name: "disappear",
    pic: 50, state: 15, wait: 1, next: 304, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 350,
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  304: { name: "disappear",
    pic: 49, state: 15, wait: 1, next: 305, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  305: { name: "disappear",
    pic: 48, state: 15, wait: 1, next: 306, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  306: { name: "disappear",
    pic: 47, state: 15, wait: 1, next: 307, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  307: { name: "disappear",
    pic: 46, state: 15, wait: 0, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  311: { name: "dis",
    pic: 51, state: 15, wait: 2, next: 312, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  312: { name: "ground",
    pic: 51, state: 15, wait: 0, next: 313, dvx: 0, dvy: -2, dvz: 0, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  313: { name: "ground",
    pic: 51, state: 4, wait: 2, next: 314, dvx: 2, dvy: 550, dvz: 1, centerx: 86, centery: 134, hit_a: 303, hit_d: 303, hit_j: 350,
    mp: -15,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  314: { name: "ground",
    pic: 51, state: 4, wait: 2, next: 313, dvx: 2, dvy: 550, dvz: 1, centerx: 86, centery: 134, hit_a: 303, hit_d: 303, hit_j: 350,
    mp: -7,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  320: { name: "dash",
    pic: 0, state: 15, wait: 1, next: 321, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 135,
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  321: { name: "dash",
    pic: 0, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 97, action: 213, oid: 222, facing: 0 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  322: { name: "dash",
    dvx: 0, dvy: 0, dvz: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: { kind: 1, x: 90, y: 83, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, injury: 5 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  323: { name: "dash",
    pic: 11, state: 15, wait: 1, next: 324, dvx: -1, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 106, y: 86, w: 75, h: 70, dvy: -20, vrest: 0, bdefend: 100, fall: 200, injury: 60, effect: 1 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  324: { name: "dash",
    pic: 14, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  325: { name: "dash",
    pic: 10, state: 15, wait: 1, next: 385, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: { kind: 1, x: 90, y: 83, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  326: { name: "combo3",
    pic: 29, state: 15, wait: 1, next: 327, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 45,
  },
  327: { name: "combo3",
    pic: 999, state: 15, wait: 0, next: 328, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 78, y: 150, action: 241, oid: 411, facing: 0 },
  },
  328: { name: "combo3",
    dvx: 0, dvy: 0, dvz: 0, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  329: { name: "combo3",
    pic: 999, state: 15, wait: 0, next: 380, dvx: 1, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  330: { name: "replacement",
    pic: 38, state: 14, wait: 0, next: 333, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 45,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -19, y: -15, weaponact: 0, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  333: { name: "replacement",
    pic: 52, state: 15, wait: 0, next: 335, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -19, y: -15, weaponact: 0, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  335: { name: "replacement",
    pic: 53, state: 15, wait: 0, next: 336, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -19, y: -15, weaponact: 0, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  336: { name: "replacement",
    pic: 54, state: 15, wait: 0, next: 338, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -19, y: -15, weaponact: 0, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  338: { name: "replacement",
    pic: 55, state: 15, wait: 3, next: 339, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -19, y: -15, weaponact: 0, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  339: { name: "replacement",
    pic: 56, state: 15, wait: 1, next: 340, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/019",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -19, y: -15, weaponact: 0, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 20, y: 27, w: 80, h: 56, dvx: 5, dvy: -10, bdefend: 16, injury: 50, effect: 0, fall: 70 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  340: { name: "replacement",
    pic: 57, state: 15, wait: 1, next: 341, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -19, y: -15, weaponact: 0, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 20, y: 27, w: 80, h: 56, dvx: 5, dvy: -10, bdefend: 16, injury: 50, effect: 0, fall: 70 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  341: { name: "replacement",
    pic: 58, state: 15, wait: 1, next: 342, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -19, y: -15, weaponact: 0, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 20, y: 27, w: 80, h: 56, dvx: 5, dvy: -10, bdefend: 16, injury: 50, effect: 0, fall: 70 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  342: { name: "replacement",
    pic: 999, state: 3005, wait: 0, next: 343, dvx: 200, dvy: -4, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -19, y: -999, weaponact: 0, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  343: { name: "replacement",
    pic: 38, state: 15, wait: 0, next: 999, dvx: -1, dvy: 12, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/061",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -19, y: -15, weaponact: 0, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 130, action: 60, oid: 204, facing: 0 },
    bdy: { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
  },
  350: { name: "split",
    pic: 67, state: 15, wait: 3, next: 351, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  351: { name: "split",
    pic: 68, state: 15, wait: 3, next: 352, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  352: { name: "split",
    pic: 69, state: 15, wait: 3, next: 353, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  353: { name: "split",
    pic: 70, state: 15, wait: 3, next: 354, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/062",
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  354: { name: "split",
    pic: 71, state: 15, wait: 3, next: 355, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  355: { name: "split",
    pic: 72, state: 15, wait: 3, next: 356, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  356: { name: "split",
    pic: 73, state: 15, wait: 3, next: 357, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  357: { name: "split",
    pic: 74, state: 15, wait: 3, next: 358, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  358: { name: "split",
    pic: 75, state: 15, wait: 2, next: 359, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 0, y: 1466852699, w: 9999999, h: 100 }
  },
  359: { name: "split",
    pic: 76, state: 15, wait: 2, next: 360, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 0, y: 1466852699, w: 9999999, h: 100 }
  },
  360: { name: "split",
    pic: 77, state: 15, wait: 0, next: 361, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 0, y: 1466852699, w: 9999999, h: 100 }
  },
  361: { name: "split",
    pic: 78, state: 15, wait: 0, next: 362, dvx: 550, dvy: 550, dvz: 550, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 0, y: 1466852699, w: 9999999, h: 100 }
  },
  362: { name: "split",
    pic: 999, state: 8086, wait: 1, next: 999, dvx: -20, dvy: -10, dvz: 550, centerx: 86, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 0, y: 1466852699, w: 9999999, h: 100 }
  },
  380: { name: "punch",
    pic: 15, state: 3, wait: 1, next: 381, dvx: 1, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 56, y: 86, w: 84, h: 70, dvx: 2, vrest: 0, bdefend: 100, fall: 100, injury: 25, effect: 1 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 50 }
  },
  381: { name: "punch",
    pic: 16, state: 3, wait: 1, next: 382, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 117, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    itr: { kind: 0, x: 56, y: 86, w: 84, h: 70, dvx: 2, vrest: 0, bdefend: 100, fall: 100, injury: 25, effect: 1 },
    bdy: { kind: 0, x: 76, y: 86, w: 48, h: 50 }
  },
  382: { name: "punch",
    pic: 17, state: 3, wait: 1, next: 383, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 117, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 56, y: 86, w: 84, h: 70, dvx: 2, vrest: 0, bdefend: 100, fall: 100, injury: 25, effect: 1 },
    bdy: { kind: 0, x: 76, y: 86, w: 48, h: 50 }
  },
  383: { name: "punch",
    pic: 18, state: 3, wait: 1, next: 384, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 117, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 56, y: 86, w: 84, h: 70, dvx: 2, vrest: 0, bdefend: 100, fall: 100, injury: 25, effect: 1 },
    bdy: { kind: 0, x: 76, y: 86, w: 48, h: 50 }
  },
  384: { name: "punch",
    pic: 18, state: 3, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 117, hit_a: 70, hit_d: -70, hit_j: 70,
    bdy: { kind: 0, x: 76, y: 86, w: 48, h: 50 }
  },
  385: { name: "dash",
    pic: 11, state: 15, wait: 1, next: 386, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: { kind: 1, x: 90, y: 83, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  386: { name: "dash",
    pic: 14, state: 15, wait: 4, next: 324, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 166, y: 86, w: 85, h: 70, dvy: -20, vrest: 0, bdefend: 100, fall: 200, injury: 60, effect: 1 },
    cpoint: { kind: 1, x: 90, y: 83, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451 },
    bdy: { kind: 0, x: 76, y: 86, w: 50, h: 130 }
  },
  390: { name: "injured_mp",
    pic: 30, state: 15, wait: 2, next: 391, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0 },
  },
  391: { name: "injured_mp",
    pic: 30, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -500,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0 },
  },
  392: { name: "catching2",
    pic: 999, state: 9, wait: 1, next: 393, dvx: 10, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 100, y: -60, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7 },
  },
  393: { name: "catching2",
    pic: 999, state: 9, wait: 1, next: 392, dvx: -20, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: { kind: 1, x: 70, y: -60, injury: 15, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7 },
  },
  394: { name: "catching2",
    pic: 999, state: 9, wait: 0, next: 395, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: { kind: 1, x: 100, y: -60, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7 },
  },
  395: { name: "catching2",
    pic: 999, state: 9, wait: 1, next: 392, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 79, action: 0, oid: 214, facing: 0 },
    cpoint: { kind: 1, x: 100, y: -60, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7 },
  },
  396: { name: "picked_caught2",
    pic: 999, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 41, y: 39, fronthurtact: 396, backhurtact: 396 },
  },
  397: { name: "injured",
    pic: 30, state: 3, wait: 1, next: 398, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 90, y: 110, weaponact: 35, attacking: 0, cover: 0 },
  },
  398: { name: "injured",
    pic: 999, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 81, action: 106, oid: 201, facing: 0 },
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 90, y: 110, weaponact: 21, attacking: 0, cover: 0 },
  },
  400: { name: "wave",
    pic: 27, state: 15, wait: 1, next: 401, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 172,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  401: { name: "water wave",
    pic: 28, state: 15, wait: 0, next: 402, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 10, y: 137, action: 400, oid: 77, facing: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  402: { name: "water snake",
    pic: 29, state: 15, wait: 0, next: 403, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 140, y: 137, action: 400, oid: 77, facing: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  403: { name: "water snake",
    pic: 29, state: 15, wait: 0, next: 404, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: 137, action: 400, oid: 77, facing: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  404: { name: "water snake",
    pic: 29, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 90, y: 110, weaponact: 30, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 180, y: 137, action: 400, oid: 77, facing: 0 },
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 130 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  },
  500: { name: "defend2",
    pic: 64, state: 6001, wait: 0, next: 501, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 110, hit_j: 0,
  },
  501: { name: "defendend",
    pic: 64, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 98, centery: 134, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 76, y: 86, w: 50, h: 50 },
      { kind: 0, x: 0, y: 8789645123, w: 9999999, h: 100 }
    ]
  }
  }
});