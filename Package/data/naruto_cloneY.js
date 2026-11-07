define({
  bmp: {
    file: [
      { "file(0-69)": "sprite/narutoY_0.png", w: 79, h: 79, row: 10, col: 7 },
      { "file(70-139)": "sprite/narutoY_2.png", w: 79, h: 79, row: 10, col: 7 },
      { "file(140-209)": "sprite/narutoY_0.png", w: 79, h: 79, row: 10, col: 7 },
      { "file(210-279)": "sprite/narutoY_2.png", w: 79, h: 79, row: 10, col: 7 }
    ],
    name: "CloneY",
    head: "sprite/naruto_clone_f.png",
    small: "sprite/naruto_s.png",
    walking_frame_rate: 3,
    walking_speed: 4,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 15,
    running_speedz: 3.3,
    heavy_walking_speed: 3,
    heavy_walking_speedz: 1.5,
    heavy_running_speed: 5,
    heavy_running_speedz: 0.8,
    jump_height: -16.299999,
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
    pic: 0, state: 0, wait: 3, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 60, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 58, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  3: { name: "standing",
    pic: 3, state: 0, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 57, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 53, y: 55, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 39, y: 666, w: 1, h: 1 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 48, y: 57, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 39, y: 666, w: 10, h: 1 },
      { kind: 0, x: 28, y: 15, w: 27, h: 65 }
    ]
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 59, weaponact: 22, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 39, y: 666, w: 10, h: 1 },
      { kind: 0, x: 28, y: 15, w: 27, h: 65 }
    ]
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 58, weaponact: 23, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 39, y: 666, w: 10, h: 1 },
      { kind: 0, x: 28, y: 15, w: 27, h: 65 }
    ]
  },
  9: { name: "running",
    pic: 20, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/003",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -999, weaponact: 25, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 25, y: 19, w: 38, h: 60 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  10: { name: "running",
    pic: 21, state: 2, wait: 4, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: -999, weaponact: 23, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 25, y: 19, w: 38, h: 60 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  11: { name: "running",
    pic: 22, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/004",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 56, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 25, y: 19, w: 38, h: 60 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  12: { name: "heavy_obj_walk",
    pic: 23, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 35, weaponact: 10, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 29, y: 15, w: 28, h: 64 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  13: { name: "heavy_obj_walk",
    pic: 24, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 35, weaponact: 10, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 29, y: 15, w: 28, h: 64 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  14: { name: "heavy_obj_walk",
    pic: 25, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 35, weaponact: 10, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 29, y: 15, w: 28, h: 64 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  15: { name: "heavy_obj_walk",
    pic: 26, state: 1, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 35, weaponact: 10, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 29, y: 15, w: 28, h: 64 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  16: { name: "heavy_obj_walk",
    pic: 23, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 35, weaponact: 10, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 29, y: 15, w: 28, h: 64 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  17: { name: "tree_jump",
    pic: 138, state: 3, wait: 1, next: 18, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  18: { name: "tree_jump",
    pic: 139, state: 3, wait: 1, next: 19, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 0, y: 82, action: 150, oid: 203 },
  },
  19: { name: "tree_jump",
    pic: 139, state: 2, wait: 5, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  20: { name: "normal_weapon_atck",
    pic: 92, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 22, w: 35, h: 57 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  25: { name: "normal_weapon_atck",
    pic: 92, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 22, w: 35, h: 57 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  30: { name: "jump_weapon_atck",
    pic: 97, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 666, w: 1, h: 1 }
  },
  35: { name: "run_weapon_atck",
    pic: 70, state: 3, wait: 3, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  40: { name: "dash_weapon_atck",
    pic: 97, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 666, w: 1, h: 1 }
  },
  45: { name: "light_weapon_thw",
    pic: 92, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 55, y: 29, weaponact: 100, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 22, w: 35, h: 57 },
      { kind: 0, x: 10, y: 40, w: 20, h: 13 },
      { kind: 0, x: 22, y: 60000, w: 40, h: 500 }
    ]
  },
  46: { name: "light_weapon_thw",
    pic: 93, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 60, y: 42, weaponact: 31, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 81, action: 214, oid: 203, facing: 0 },
    bdy: { kind: 0, x: 24, y: 22, w: 32, h: 57 }
  },
  47: { name: "light_weapon_thw",
    pic: 94, state: 15, wait: 1, next: 48, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 35, dvy: -4, dvz: 3, kind: 1, x: 100, y: 50, weaponact: 35, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 }
    ]
  },
  48: { name: "light_weapon_thw",
    pic: 95, state: 15, wait: 2, next: 49, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 25, y: 42, w: 35, h: 57 },
      { kind: 0, x: 10, y: 40, w: 20, h: 13 }
    ]
  },
  49: { name: "light_weapon_thw",
    pic: 96, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 263, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 25, y: 22, w: 35, h: 57 },
      { kind: 0, x: 10, y: 40, w: 20, h: 13 }
    ]
  },
  50: { name: "heavy_weapon_thw",
    pic: 37, state: 15, wait: 6, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 16, y: 52, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 28, y: 19, w: 30, h: 62 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  51: { name: "heavy_weapon_thw",
    pic: 29, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 18, dvy: -7, dvz: 2, kind: 1, x: 93, y: 57, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 8, y: 39, w: 61, h: 23 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 97, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 22, y: 10, w: 40, h: 52 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 98, state: 15, wait: 1, next: 54, dvx: 0, dvy: -2, dvz: 0, centerx: 35, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 34, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 35, y: 10, w: 36, h: 23 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 99, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 23, dvy: 8, dvz: 3, kind: 1, x: 67, y: 56, weaponact: 23, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 22, y: 15, w: 38, h: 38 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  55: { name: "kirby",
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: { kind: 2, x: 41, y: 39, fronthurtact: 55, backhurtact: 55 },
    bdy: { kind: 0, x: 26, y: 130000, w: 28, h: 500 }
  },
  60: { name: "punch",
    pic: 10, state: 3, wait: 1, next: 61, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 30, y: 18, w: 28, h: 60 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  61: { name: "punch",
    pic: 11, state: 3, wait: 1, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 81, action: 200, oid: 203, facing: 0 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  62: { name: "punch",
    pic: 12, state: 3, wait: 2, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  63: { name: "punch",
    pic: 13, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 49, y: 33, w: 30, h: 16, dvx: 2, bdefend: 16, injury: 20 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  65: { name: "punch",
    pic: 14, state: 3, wait: 1, next: 66, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1 },
    bdy: [
      { kind: 0, x: 27, y: 17, w: 31, h: 63 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  66: { name: "punch",
    pic: 15, state: 3, wait: 1, next: 67, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 81, action: 201, oid: 203, facing: 0 },
    bdy: [
      { kind: 0, x: 28, y: 17, w: 29, h: 63 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  67: { name: "punch",
    pic: 16, state: 3, wait: 2, next: 68, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: [
      { kind: 0, x: 28, y: 17, w: 29, h: 63 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  68: { name: "punch",
    pic: 17, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 45, y: 34, w: 33, h: 14, dvx: 2, bdefend: 16, injury: 20 },
    bdy: [
      { kind: 0, x: 28, y: 17, w: 29, h: 63 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  70: { name: "super_punch",
    pic: 37, state: 3, wait: 0, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/SNDDATA_1883",
    bdy: [
      { kind: 0, x: 22, y: 14, w: 30, h: 65 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  71: { name: "super_punch",
    pic: 38, state: 3, wait: 2, next: 72, dvx: 4, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 40, y: 21, w: 30, h: 43 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  72: { name: "super_punch",
    pic: 39, state: 3, wait: 2, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    itr: { kind: 0, x: 45, y: 34, w: 35, h: 14, dvx: 19, dvy: -7, fall: 70, arest: 15, bdefend: 60, injury: 60 },
    bdy: [
      { kind: 0, x: 31, y: 2, w: 27, h: 78 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  73: { name: "super_punch",
    pic: 29, state: 3, wait: 2, next: 74, dvx: 4, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 40, y: 21, w: 30, h: 43 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  74: { name: "super_punch",
    pic: 37, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 22, y: 14, w: 30, h: 65 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  80: { name: "jump_attack",
    pic: 97, state: 15, wait: 2, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 22, y: 10, w: 40, h: 52 }
  },
  81: { name: "jump_attack",
    pic: 98, state: 15, wait: 0, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 34, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 81, action: 214, oid: 203, facing: 0 },
    bdy: { kind: 0, x: 15, y: 18, w: 30, h: 43 }
  },
  82: { name: "jump_attack",
    pic: 98, state: 15, wait: 0, next: 83, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 34, attacking: 0, cover: 1 },
    opoint: { dvx: 23, dvy: 8, dvz: 0, kind: 1, x: 67, y: 56, action: 40, oid: 121, facing: 0 },
    bdy: { kind: 0, x: 15, y: 18, w: 30, h: 43 }
  },
  83: { name: "jump_attack",
    pic: 99, state: 15, wait: 19, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 22, y: 15, w: 38, h: 38 }
  },
  85: { name: "run_attack",
    pic: 37, state: 3, wait: 0, next: 70, dvx: 8, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 39, y: 666, w: 1, h: 1 },
      { kind: 0, x: 10, y: 36, w: 27, h: 15 }
    ]
  },
  86: { name: "run_attack",
    pic: 83, state: 3, wait: 0, next: 87, dvx: 6, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: [
      { kind: 0, x: 39, y: 666, w: 1, h: 1 },
      { kind: 0, x: 8, y: 51, w: 38, h: 27 }
    ]
  },
  87: { name: "run_attack",
    pic: 84, state: 3, wait: 0, next: 88, dvx: 5, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 19, y: 37, w: 61, h: 17, dvx: 10, fall: 70, arest: 15, bdefend: 16, injury: 50 },
    bdy: [
      { kind: 0, x: 18, y: 36, w: 39, h: 24 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  88: { name: "run_attack",
    pic: 85, state: 3, wait: 1, next: 89, dvx: 5, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 18, y: 36, w: 39, h: 24 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  89: { name: "run_attack",
    pic: 86, state: 3, wait: 1, next: 215, dvx: 4, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 18, y: 36, w: 39, h: 24 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  90: { name: "dash_attack",
    pic: 82, state: 15, wait: 3, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/SNDDATA_1860",
    bdy: [
      { kind: 0, x: 24, y: 18, w: 25, h: 55 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  91: { name: "dash_attack",
    pic: 83, state: 15, wait: 2, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    itr: { kind: 0, x: 27, y: 38, w: 53, h: 23, dvx: 12, fall: 70, arest: 20, bdefend: 60, injury: 70 },
    bdy: [
      { kind: 0, x: 7, y: 19, w: 37, h: 45 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  92: { name: "dash_attack",
    pic: 84, state: 15, wait: 6, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 27, y: 38, w: 53, h: 23, dvx: 12, fall: 70, arest: 20, bdefend: 60, injury: 70 },
    bdy: [
      { kind: 0, x: 7, y: 19, w: 37, h: 45 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  95: { name: "dash_defend",
    pic: 64, state: 7, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 21, y: -999, weaponact: 30, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 14, y: 19, w: 28, h: 36 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
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
    pic: 58, state: 6, wait: 2, next: 103, dvx: 12, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 280, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: -999, weaponact: 22, attacking: 0, cover: 0 },
  },
  103: { name: "rowing",
    pic: 59, state: 6, wait: 2, next: 104, dvx: 12, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 280, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: -999, weaponact: 31, attacking: 0, cover: 0 },
  },
  104: { name: "rowing",
    pic: 69, state: 6, wait: 2, next: 105, dvx: 12, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 280, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: -999, weaponact: 25, attacking: 0, cover: 0 },
  },
  105: { name: "rowing",
    pic: 49, state: 6, wait: 2, next: 219, dvx: 12, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 280, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 44, y: -999, weaponact: 22, attacking: 0, cover: 0 },
  },
  106: { name: "rowing",
    pic: 58, state: 6, wait: 2, next: 219, dvx: 12, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 280, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: -999, weaponact: 30, attacking: 0, cover: 0 },
  },
  107: { name: "rowing",
    pic: 59, state: 6, wait: 2, next: 219, dvx: 12, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 280, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: -999, weaponact: 25, attacking: 0, cover: 0 },
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
    pic: 10, state: 0, wait: 0, next: 60, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 24, y: 46, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 20, y: 19, w: 38, h: 60 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  111: { name: "defend",
    pic: 10, state: 0, wait: 0, next: 60, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 24, y: 46, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 16, y: 19, w: 42, h: 60 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  112: { name: "broken_defend",
    pic: 31, state: 8, wait: 0, next: 300, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 7, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1 },
    bdy: { kind: 0, x: 39, y: 666, w: 1, h: 1 }
  },
  113: { name: "broken_defend",
    pic: 31, state: 8, wait: 0, next: 300, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 4, y: -999, weaponact: 20, attacking: 0, cover: 0 },
    itr: { kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1 },
    bdy: { kind: 0, x: 39, y: 666, w: 1, h: 1 }
  },
  114: { name: "broken_defend",
    pic: 31, state: 8, wait: 2, next: 300, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: -999, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1 },
    bdy: { kind: 0, x: 39, y: 666, w: 1, h: 1 }
  },
  115: { name: "picking_light",
    pic: 60, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 76, weaponact: 24, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 24, y: 43, w: 33, h: 37 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  116: { name: "picking_heavy",
    pic: 60, state: 15, wait: 5, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 79, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 24, y: 43, w: 33, h: 37 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  117: { name: "picking_heavy",
    pic: 61, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 66, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 24, y: 43, w: 33, h: 37 },
      { kind: 0, x: 39, y: 666, w: 1, h: 1 }
    ]
  },
  120: { name: "catching",
    pic: 108, state: 9, wait: 0, next: 122, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/015",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  121: { name: "catching",
    pic: 50, state: 9, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 39, vaction: 130, aaction: 122, taction: -232, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  122: { name: "catching",
    pic: 109, state: 9, wait: 0, next: 123, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  123: { name: "catching",
    pic: 50, state: 9, wait: 0, next: 124, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/014",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 38, injury: 15, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  124: { name: "catching",
    pic: 52, state: 9, wait: 0, next: 125, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  125: { name: "catching",
    pic: 50, state: 9, wait: 0, next: 126, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/014",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 38, injury: 15, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  126: { name: "catching",
    pic: 52, state: 9, wait: 0, next: 127, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  127: { name: "catching",
    pic: 50, state: 9, wait: 0, next: 128, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/014",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 38, injury: 15, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  128: { name: "catching",
    pic: 52, state: 9, wait: 0, next: 260, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/014",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 38, injury: 15, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
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
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 47, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 21, y: 14, w: 29, h: 44, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: { kind: 0, x: 25, y: 25, w: 21, h: 20 }
  },
  181: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 36, weaponact: 21, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 15, y: 11, w: 42, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 35, y: 30, w: 27, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: { kind: 0, x: 22, y: 20, w: 24, h: 23 }
  },
  182: { name: "falling",
    pic: 32, state: 12, wait: 6, next: 300, dvx: -3, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 37, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 13, y: 18, w: 46, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: { kind: 0, x: 27, y: 22, w: 20, h: 18 }
  },
  183: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 33, weaponact: 33, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 32, y: 18, w: 33, h: 27, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 10, y: 38, w: 38, h: 21, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: { kind: 0, x: 22, y: 30, w: 27, h: 21 }
  },
  184: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 36, y: 74, weaponact: 32, attacking: 0, cover: 0 },
  },
  185: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 37, y: 64, weaponact: 31, attacking: 0, cover: 0 },
  },
  186: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 21, y: 45, weaponact: 34, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 22, y: 12, w: 36, h: 50, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: { kind: 0, x: 31, y: 24, w: 25, h: 23 }
  },
  187: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 23, y: 42, weaponact: 20, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 33, y: 6, w: 26, h: 46, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 26, y: 43, w: 21, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: { kind: 0, x: 28, y: 27, w: 24, h: 26 }
  },
  188: { name: "falling",
    pic: 32, state: 12, wait: 3, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 31, y: 42, weaponact: 22, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 14, y: 29, w: 58, h: 23, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: { kind: 0, x: 30, y: 31, w: 24, h: 21 }
  },
  189: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 31, y: 51, weaponact: 25, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 24, y: 27, w: 26, h: 28, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 37, y: 45, w: 31, h: 28, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: { kind: 0, x: 30, y: 39, w: 23, h: 21 }
  },
  190: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 31, y: 74, weaponact: 24, attacking: 0, cover: 0 },
  },
  191: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 67, weaponact: 25, attacking: 0, cover: 0 },
  },
  200: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 18, y: 45, weaponact: 20, attacking: 0, cover: 0 },
  },
  203: { name: "fire",
    pic: 18, state: 15, wait: 1, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 46, weaponact: 21, attacking: 0, cover: 0 },
  },
  204: { name: "fire",
    pic: 18, state: 15, wait: 1, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 46, weaponact: 21, attacking: 0, cover: 0 },
  },
  205: { name: "fire",
    pic: 19, state: 15, wait: 1, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 33, weaponact: 20, attacking: 0, cover: 0 },
  },
  206: { name: "fire",
    pic: 19, state: 15, wait: 1, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 33, weaponact: 20, attacking: 0, cover: 0 },
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
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: -999, weaponact: 20, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 33, y: 33, w: 20, h: 48 },
      { kind: 0, x: 39, y: 666, w: 10, h: 10 }
    ]
  },
  211: { name: "jump",
    pic: 61, state: 4, wait: 1, next: 212, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 17, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 15, y: 41, w: 48, h: 20 },
      { kind: 0, x: 39, y: 666, w: 10, h: 10 }
    ]
  },
  212: { name: "jump",
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 21, y: -999, weaponact: 20, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 31, y: 15, w: 21, h: 64 },
      { kind: 0, x: 39, y: 666, w: 10, h: 10 }
    ]
  },
  213: { name: "dash",
    pic: 63, state: 5, wait: 8, next: 216, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 39, weaponact: 25, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 46, y: 18, w: 22, h: 25 },
      { kind: 0, x: 39, y: 666, w: 10, h: 10 }
    ]
  },
  214: { name: "dash",
    pic: 64, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 34, y: 41, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 18, y: 14, w: 19, h: 27 },
      { kind: 0, x: 39, y: 666, w: 10, h: 10 }
    ]
  },
  215: { name: "crouch",
    pic: 60, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/012",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 25, y: 61, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 26, y: 40, w: 29, h: 38 },
      { kind: 0, x: 39, y: 666, w: 10, h: 10 }
    ]
  },
  216: { name: "dash",
    pic: 112, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 19, y: 34, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 42, y: 15, w: 24, h: 21 },
      { kind: 0, x: 39, y: 666, w: 10, h: 10 }
    ]
  },
  217: { name: "dash",
    pic: 113, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 37, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 18, y: 13, w: 29, h: 51 },
      { kind: 0, x: 39, y: 666, w: 10, h: 10 }
    ]
  },
  218: { name: "stop_running",
    pic: 37, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 25, y: 52, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 17, y: 25, w: 30, h: 55 },
      { kind: 0, x: 39, y: 666, w: 10, h: 10 }
    ]
  },
  219: { name: "crouch2",
    pic: 61, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/012",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 60, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 26, y: 36, w: 29, h: 44 },
      { kind: 0, x: 39, y: 666, w: 10, h: 10 }
    ]
  },
  220: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 47, y: 23, w: 23, h: 54 },
      { kind: 0, x: 29, y: 41, w: 20, h: 37 }
    ]
  },
  221: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 60, y: 48, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 46, y: 23, w: 21, h: 56 },
      { kind: 0, x: 30, y: 40, w: 17, h: 41 }
    ]
  },
  222: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 27, y: 58, weaponact: 20, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 11, y: 24, w: 39, h: 31 },
      { kind: 0, x: 25, y: 53, w: 40, h: 27 }
    ]
  },
  223: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 24, y: 58, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 12, y: 23, w: 40, h: 37 },
      { kind: 0, x: 27, y: 56, w: 36, h: 24 }
    ]
  },
  224: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 32, y: 53, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 32, y: 18, w: 28, h: 60 },
      { kind: 0, x: 52, y: 38, w: 20, h: 19 }
    ]
  },
  225: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 24, y: 53, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 18, w: 35, h: 63 }
  },
  226: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: 49, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: { kind: 0, x: 27, y: 22, w: 42, h: 58 }
  },
  227: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 60, y: 51, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: { kind: 0, x: 28, y: 24, w: 39, h: 57 }
  },
  228: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 61, y: 48, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: { kind: 0, x: 28, y: 23, w: 37, h: 58 }
  },
  229: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 61, y: 51, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: { kind: 0, x: 29, y: 26, w: 37, h: 53 }
  },
  230: { name: "lying",
    pic: 34, state: 14, wait: 10, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 74, weaponact: 32, attacking: 0, cover: 0 },
  },
  231: { name: "lying",
    pic: 34, state: 14, wait: 10, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 74, weaponact: 24, attacking: 0, cover: 0 },
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
  240: { name: "clone_spin",
    pic: 999, state: 15, wait: 0, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  241: { name: "clone_spin",
    pic: 999, state: 15, wait: 2, next: 242, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/061",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 70, action: 60, oid: 204, facing: 0 },
  },
  242: { name: "clone_spin",
    pic: 1, state: 15, wait: 3, next: 243, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  243: { name: "clone_spin",
    pic: 63, state: 15, wait: 1, next: 244, dvx: 15, dvy: -7, dvz: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 20, y: 33, w: 50, h: 20, dvx: 10, dvy: -5, fall: 70, vrest: 10, bdefend: 16, injury: 25 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  244: { name: "clone_spin",
    pic: 49, state: 15, wait: 0, next: 245, dvx: 45, dvy: 0, dvz: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 20, y: 15, w: 50, h: 60, dvx: 10, dvy: -5, fall: 70, vrest: 10, bdefend: 16, injury: 25 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  245: { name: "clone_spin",
    pic: 58, state: 15, wait: 0, next: 246, dvx: 45, dvy: 0, dvz: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 20, y: 15, w: 50, h: 60, dvx: 10, dvy: -5, fall: 70, vrest: 10, bdefend: 16, injury: 25 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  246: { name: "clone_spin",
    pic: 59, state: 15, wait: 0, next: 247, dvx: 45, dvy: 0, dvz: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 20, y: 15, w: 50, h: 60, dvx: 10, dvy: -5, fall: 70, vrest: 10, bdefend: 16, injury: 25 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  247: { name: "clone_spin",
    pic: 69, state: 15, wait: 0, next: 244, dvx: 45, dvy: 0, dvz: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 20, y: 15, w: 50, h: 60, dvx: 10, dvy: -5, fall: 70, vrest: 10, bdefend: 16, injury: 25 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  250: { name: "clone_throw",
    pic: 999, state: 15, wait: 0, next: 251, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  251: { name: "clone_throw",
    pic: 999, state: 15, wait: 2, next: 252, dvx: 0, dvy: -7, dvz: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/061",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 40, action: 60, oid: 204, facing: 0 },
  },
  252: { name: "clone_throw",
    pic: 123, state: 15, wait: 10, next: 253, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  253: { name: "clone_throw",
    pic: 124, state: 15, wait: 2, next: 254, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
  },
  254: { name: "clone_throw",
    pic: 125, state: 15, wait: 5, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  255: { name: "standing",
    pic: 0, state: 15, wait: 3, next: 256, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  256: { name: "standing",
    pic: 1, state: 15, wait: 3, next: 257, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  257: { name: "standing",
    pic: 2, state: 15, wait: 3, next: 258, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  258: { name: "standing",
    pic: 3, state: 15, wait: 3, next: 259, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  259: { name: "standing",
    pic: 0, state: 15, wait: 3, next: 260, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  260: { name: "standing",
    pic: 1, state: 15, wait: 3, next: 261, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  261: { name: "standing",
    pic: 2, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  275: { name: "sexy",
    pic: 78, state: 3, wait: 3, next: 276, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  276: { name: "sexy",
    pic: 79, state: 3, wait: 2, next: 277, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  277: { name: "sexy",
    pic: 79, state: 15, wait: 0, next: 278, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/061",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 70, action: 60, oid: 204, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  278: { name: "sexy",
    pic: 41, state: 15, wait: 20, next: 279, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 30, attacking: 0, cover: 1 },
  },
  279: { name: "sexy",
    pic: 41, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/061",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 70, action: 60, oid: 204, facing: 0 },
  },
  280: { name: "kick",
    pic: 87, state: 3, wait: 3, next: 283, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 22, y: 14, w: 30, h: 65 }
  },
  281: { name: "kick",
    pic: 88, state: 3, wait: 1, next: 282, dvx: 4, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 40, y: 21, w: 30, h: 43 },
      { kind: 0, x: 29, y: 57, w: 32, h: 23 }
    ]
  },
  282: { name: "kick",
    pic: 89, state: 3, wait: 3, next: 215, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 45, y: 34, w: 35, h: 14, dvx: 15, dvy: -15, fall: 100, arest: 15, bdefend: 100, injury: 60 },
    bdy: { kind: 0, x: 31, y: 2, w: 27, h: 78 }
  },
  283: { name: "kick",
    pic: 87, state: 3, wait: 0, next: 281, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 81, action: 217, oid: 203, facing: 0 },
    bdy: { kind: 0, x: 22, y: 14, w: 30, h: 65 }
  },
  285: { name: "rasenshuriken1",
    pic: 42, state: 3, wait: 2, next: 286, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  286: { name: "rasenshuriken1",
    pic: 43, state: 3, wait: 2, next: 287, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  287: { name: "rasenshuriken1",
    pic: 42, state: 3, wait: 2, next: 288, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  288: { name: "rasenshuriken1",
    pic: 43, state: 3, wait: 2, next: 289, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  289: { name: "rasenshuriken1",
    pic: 42, state: 3, wait: 2, next: 290, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  290: { name: "rasenshuriken1",
    pic: 43, state: 3, wait: 2, next: 291, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  291: { name: "rasenshuriken1",
    pic: 42, state: 3, wait: 2, next: 292, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  292: { name: "rasenshuriken1",
    pic: 43, state: 3, wait: 2, next: 293, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  293: { name: "rasenshuriken1",
    pic: 42, state: 3, wait: 2, next: 294, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  294: { name: "rasenshuriken1",
    pic: 43, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  295: { name: "rasenshuriken2",
    pic: 45, state: 3, wait: 2, next: 296, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  296: { name: "rasenshuriken2",
    pic: 44, state: 3, wait: 2, next: 297, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  297: { name: "rasenshuriken2",
    pic: 45, state: 3, wait: 2, next: 298, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  298: { name: "rasenshuriken2",
    pic: 44, state: 3, wait: 2, next: 299, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  299: { name: "rasenshuriken2",
    pic: 45, state: 3, wait: 2, next: 302, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  300: { name: "puff",
    pic: 200, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 70, action: 60, oid: 204, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  301: { name: "clone",
    pic: 999, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  302: { name: "rasenshuriken2",
    pic: 44, state: 3, wait: 2, next: 303, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  303: { name: "rasenshuriken2",
    pic: 45, state: 3, wait: 2, next: 304, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  304: { name: "rasenshuriken2",
    pic: 44, state: 3, wait: 2, next: 305, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  305: { name: "rasenshuriken2",
    pic: 45, state: 3, wait: 2, next: 306, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  306: { name: "rasenshuriken2",
    pic: 44, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  307: { name: "timer",
    pic: 999, state: 3, wait: 2, next: 308, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  308: { name: "timer",
    pic: 999, state: 3, wait: 2, next: 999, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 39, y: 666, w: 10, h: 10 }
  },
  309: { name: "kick",
    pic: 61, state: 3, wait: 12, next: 312, dvx: 0, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 22, y: 14, w: 30, h: 65 }
  },
  310: { name: "kick2",
    pic: 999, state: 15, wait: 0, next: 311, dvx: 0, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 45, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  311: { name: "kick2",
    pic: 999, state: 15, wait: 2, next: 309, dvx: 0, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 79, action: 60, oid: 204, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  312: { name: "kick",
    pic: 87, state: 3, wait: 1, next: 313, dvx: 0, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 22, y: 14, w: 30, h: 65 }
  },
  313: { name: "kick",
    pic: 88, state: 3, wait: 2, next: 314, dvx: 0, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 81, action: 217, oid: 203, facing: 0 },
    bdy: { kind: 0, x: 40, y: 21, w: 30, h: 43 }
  },
  314: { name: "kick",
    pic: 89, state: 3, wait: 5, next: 300, dvx: 0, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    itr: { kind: 0, x: 45, y: 34, w: 35, h: 14, dvx: 0, dvy: -15, fall: 100, arest: 15, bdefend: 100, injury: 10 },
    bdy: { kind: 0, x: 31, y: 2, w: 27, h: 78 }
  },
  320: { name: "sex",
    pic: 999, state: 15, wait: 0, next: 321, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  321: { name: "sex",
    pic: 999, state: 15, wait: 5, next: 322, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 79, action: 60, oid: 204, facing: 0 },
  },
  322: { name: "sex",
    pic: 0, state: 15, wait: 7, next: 323, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  323: { name: "sex",
    pic: 78, state: 15, wait: 3, next: 324, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  324: { name: "sex",
    pic: 79, state: 15, wait: 8, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 39, y: 666, w: 10, h: 1 }
    ]
  },
  330: { name: "shuriken",
    pic: 999, state: 15, wait: 0, next: 331, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  331: { name: "shuriken",
    pic: 999, state: 15, wait: 5, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 79, action: 60, oid: 204, facing: 0 },
    bdy: { kind: 0, x: -99999999999, y: 898977445, w: 100000000000000000000, h: 100 }
  },
  332: { name: "shuriken",
    pic: 0, state: 15, wait: 4, next: 333, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 0 },
  },
  333: { name: "shuriken",
    pic: 92, state: 3, wait: 1, next: 334, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 29, weaponact: 100, attacking: 0, cover: 1 },
  },
  334: { name: "shuriken",
    pic: 93, state: 3, wait: 1, next: 46, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 35, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 2, x: 51, y: 49, action: 20, oid: 121, facing: 0 },
  },
  390: { name: "injured_mp",
    pic: 30, state: 15, wait: 0, next: 397, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  397: { name: "injured",
    pic: 30, state: 3, wait: 1, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0 },
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0 },
  }
  }
});