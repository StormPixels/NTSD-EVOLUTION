define({
  bmp: {
    file: [
      { "file(0-69)": "sprite/chiyo.png", w: 79, h: 79, row: 10, col: 7 },
      { "file(70-139)": "sprite/chiyo2.png", w: 79, h: 79, row: 10, col: 7 }
    ],
    name: "Chiyo",
    head: "sprite/chiyo_f.png",
    small: "sprite/chiyo_s.png",
    walking_frame_rate: 3,
    walking_speed: 4,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 17,
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
    rowing_distance: 30
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 3, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 348, hit_Ua: 254, hit_Fa: 243, hit_Dj: 340, hit_Da: 275, hit_ja: 290, hit_Uj: 147,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 52, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 348, hit_Ua: 254, hit_Fa: 243, hit_Dj: 340, hit_Da: 275, hit_ja: 290, hit_Uj: 147,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 34, y: 51, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 348, hit_Ua: 254, hit_Fa: 243, hit_Dj: 340, hit_Da: 275, hit_ja: 290, hit_Uj: 147,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 31, y: 52, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  3: { name: "standing",
    pic: 3, state: 0, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 348, hit_Ua: 254, hit_Fa: 243, hit_Dj: 340, hit_Da: 275, hit_ja: 290, hit_Uj: 147,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 51, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 348, hit_Ua: 254, hit_Fa: 243, hit_Dj: 340, hit_Da: 275, hit_ja: 290, hit_Uj: 147,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 36, y: 62, weaponact: 23, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 28, y: 15, w: 27, h: 65 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 348, hit_Ua: 254, hit_Fa: 243, hit_Dj: 340, hit_Da: 275, hit_ja: 290, hit_Uj: 147,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 58, weaponact: 23, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 28, y: 15, w: 27, h: 65 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 348, hit_Ua: 254, hit_Fa: 243, hit_Dj: 340, hit_Da: 275, hit_ja: 290, hit_Uj: 147,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: 59, weaponact: 23, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 28, y: 15, w: 27, h: 65 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 348, hit_Ua: 254, hit_Fa: 243, hit_Dj: 340, hit_Da: 275, hit_ja: 290, hit_Uj: 147,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 62, weaponact: 23, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 28, y: 15, w: 27, h: 65 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  9: { name: "running",
    pic: 20, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/003",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 55, y: 53, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 25, y: 19, w: 38, h: 60 },
      { kind: 0, x: 0, y: 3000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  10: { name: "running",
    pic: 21, state: 2, wait: 4, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 44, y: 58, weaponact: 22, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 25, y: 19, w: 38, h: 60 },
      { kind: 0, x: 0, y: 3000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  11: { name: "running",
    pic: 22, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/004",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 48, y: 55, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 25, y: 19, w: 38, h: 60 },
      { kind: 0, x: 0, y: 3000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  12: { name: "heavy_obj_walk",
    pic: 23, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 80, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 29, y: 15, w: 28, h: 64 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  13: { name: "heavy_obj_walk",
    pic: 24, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 79, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 29, y: 15, w: 28, h: 64 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  14: { name: "heavy_obj_walk",
    pic: 25, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 78, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 29, y: 15, w: 28, h: 64 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  15: { name: "heavy_obj_walk",
    pic: 26, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 79, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 29, y: 15, w: 28, h: 64 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  16: { name: "heavy_obj_run",
    pic: 23, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 80, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 29, y: 15, w: 28, h: 64 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  17: { name: "tree_jump",
    pic: 68, state: 3, wait: 1, next: 18, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  18: { name: "tree_jump",
    pic: 68, state: 3, wait: 1, next: 19, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 0, y: 82, action: 150, oid: 203 },
  },
  19: { name: "tree_jump",
    pic: 68, state: 2, wait: 5, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  20: { name: "normal_weapon_atck",
    pic: 50, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 40, w: 20, h: 13 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  25: { name: "normal_weapon_atck",
    pic: 50, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 22, w: 35, h: 57 },
      { kind: 0, x: 10, y: 40, w: 20, h: 13 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  30: { name: "jump_weapon_atck",
    pic: 41, state: 15, wait: 1, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 22, y: 10, w: 40, h: 52 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  35: { name: "run_weapon_atck",
    pic: 50, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 40, w: 20, h: 13 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  40: { name: "dash_weapon_atck",
    pic: 41, state: 15, wait: 1, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 22, y: 10, w: 40, h: 52 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  45: { name: "light_weapon_thw",
    pic: 50, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 40, w: 20, h: 13 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  46: { name: "light_weapon_thw",
    pic: 15, state: 15, wait: 0, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 60, y: 42, weaponact: 31, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 24, y: 22, w: 32, h: 57 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  47: { name: "light_weapon_thw",
    pic: 16, state: 15, wait: 0, next: 48, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 55, dvy: -4, dvz: 3, kind: 1, x: 100, y: 65, weaponact: 35, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  48: { name: "light_weapon_thw",
    pic: 17, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  50: { name: "heavy_weapon_thw",
    pic: 70, state: 15, wait: 1, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 62, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 28, y: 19, w: 30, h: 62 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  51: { name: "heavy_weapon_thw",
    pic: 73, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 55, dvy: -4, dvz: 3, kind: 1, x: 66, y: 62, weaponact: 10, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 8, y: 39, w: 61, h: 23 },
      { kind: 0, x: 19, y: 56, w: 30, h: 24 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 41, state: 15, wait: 1, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 22, y: 10, w: 40, h: 52 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 42, state: 15, wait: 0, next: 54, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 34, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 35, y: 10, w: 36, h: 23 },
      { kind: 0, x: 15, y: 18, w: 30, h: 43 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 42, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 23, dvy: 8, dvz: 3, kind: 1, x: 67, y: 56, weaponact: 23, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 22, y: 15, w: 38, h: 38 },
      { kind: 0, x: 3, y: 37, w: 34, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  55: { name: "weapon_drink",
    pic: 67, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 22, w: 35, h: 57 },
      { kind: 0, x: 10, y: 40, w: 20, h: 13 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  60: { name: "punch",
    pic: 10, state: 3, wait: 1, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 260, hit_j: 300,
    itr: { kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1 },
    bdy: [
      { kind: 0, x: 23, y: 35, w: 37, h: 24 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 7000, w: 80, h: 500 }
    ]
  },
  61: { name: "punch",
    pic: 11, state: 3, wait: 1, next: 62, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 260, hit_j: 300,
    sound: "2/007",
    itr: { kind: 3, x: 40, y: 753, w: 25, h: 65, catchingact: [394, 394], caughtact: [396, 396] },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 7000, w: 80, h: 500 }
    ]
  },
  62: { name: "punch",
    pic: 12, state: 3, wait: 1, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 260, hit_j: 300,
    itr: { kind: 0, x: 53, y: 27, w: 30, h: 16, dvx: 2, fall: 20, bdefend: 16, injury: 25 },
    bdy: [
      { kind: 0, x: 51, y: 34, w: 26, h: 16 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  63: { name: "punch",
    pic: 13, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 260, hit_j: 300,
    bdy: [
      { kind: 0, x: 51, y: 34, w: 26, h: 16 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  65: { name: "punch",
    pic: 14, state: 3, wait: 1, next: 66, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 260, hit_j: 300,
    itr: { kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 7000, w: 80, h: 500 }
    ]
  },
  66: { name: "punch",
    pic: 15, state: 3, wait: 1, next: 67, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 260, hit_j: 300,
    itr: { kind: 3, x: 40, y: 753, w: 25, h: 65, catchingact: [394, 394], caughtact: [396, 396] },
    bdy: [
      { kind: 0, x: 45, y: 37, w: 32, h: 11 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 7000, w: 80, h: 500 }
    ]
  },
  67: { name: "punch",
    pic: 16, state: 3, wait: 1, next: 68, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 260, hit_j: 300,
    sound: "2/007",
    itr: { kind: 0, x: 50, y: 30, w: 33, h: 14, dvx: 2, fall: 20, bdefend: 16, injury: 25 },
    bdy: [
      { kind: 0, x: 45, y: 37, w: 32, h: 11 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  68: { name: "punch",
    pic: 17, state: 3, wait: 2, next: 69, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 260, hit_j: 300,
    bdy: [
      { kind: 0, x: 28, y: 17, w: 29, h: 63 },
      { kind: 0, x: 45, y: 37, w: 32, h: 11 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  69: { name: "punch",
    pic: 13, state: 3, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 260, hit_j: 300,
    bdy: [
      { kind: 0, x: 28, y: 17, w: 29, h: 63 },
      { kind: 0, x: 45, y: 37, w: 32, h: 11 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  70: { name: "super_punch",
    pic: 54, state: 3, wait: 3, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 22, y: 14, w: 30, h: 65 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 9000, w: 80, h: 500 }
    ]
  },
  71: { name: "super_punch",
    pic: 10, state: 3, wait: 2, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 29, y: 57, w: 32, h: 23 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 },
      { kind: 0, x: 0, y: 9000, w: 80, h: 500 }
    ]
  },
  72: { name: "super_punch",
    pic: 58, state: 3, wait: 2, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    itr: { kind: 0, x: 50, y: 34, w: 45, h: 14, dvx: 20, dvy: -8, fall: 100, arest: 15, bdefend: 100, injury: 55 },
    bdy: [
      { kind: 0, x: 31, y: 2, w: 27, h: 78 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  73: { name: "super_punch",
    pic: 59, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 40, y: 21, w: 30, h: 43 },
      { kind: 0, x: 29, y: 57, w: 32, h: 23 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  80: { name: "jump_attack",
    pic: 41, state: 3, wait: 0, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: [
      { kind: 0, x: 20, y: 18, w: 34, h: 61 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 },
      { kind: 0, x: 0, y: 9000, w: 80, h: 500 }
    ]
  },
  81: { name: "jump_attack",
    pic: 42, state: 3, wait: 0, next: 82, dvx: 0, dvy: -1, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 34, y: 45, w: 46, h: 18, dvx: 2, arest: 15, bdefend: 16, injury: 35 },
    bdy: [
      { kind: 0, x: 45, y: 20, w: 28, h: 27 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 9000, w: 80, h: 500 }
    ]
  },
  82: { name: "jump_attack",
    pic: 43, state: 3, wait: 0, next: 83, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: [
      { kind: 0, x: 20, y: 18, w: 34, h: 61 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  83: { name: "jump_attack",
    pic: 44, state: 3, wait: 0, next: 999, dvx: 0, dvy: -1, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 34, y: 45, w: 46, h: 18, dvx: 2, arest: 15, bdefend: 16, injury: 35 },
    bdy: [
      { kind: 0, x: 45, y: 20, w: 28, h: 27 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  85: { name: "run_attack",
    pic: 54, state: 3, wait: 3, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 22, y: 14, w: 30, h: 65 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 9000, w: 80, h: 500 }
    ]
  },
  90: { name: "dash_attack",
    pic: 41, state: 3, wait: 0, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: [
      { kind: 0, x: 20, y: 18, w: 34, h: 61 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 },
      { kind: 0, x: 0, y: 9000, w: 80, h: 500 }
    ]
  },
  91: { name: "dash_attack",
    pic: 36, state: 3, wait: 1, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 45, y: 20, w: 28, h: 27 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  92: { name: "dash_attack",
    pic: 37, state: 3, wait: 1, next: 93, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    itr: { kind: 0, x: 34, y: 45, w: 50, h: 25, dvx: 2, dvy: 6, fall: 80, arest: 15, bdefend: 16, injury: 75 },
    bdy: [
      { kind: 0, x: 22, y: 19, w: 32, h: 60 },
      { kind: 0, x: 45, y: 20, w: 28, h: 27 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  93: { name: "dash_attack",
    pic: 38, state: 3, wait: 1, next: 94, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 34, y: 45, w: 50, h: 25, dvx: 2, dvy: 6, arest: 15, bdefend: 16, injury: 75 },
    bdy: [
      { kind: 0, x: 22, y: 19, w: 32, h: 60 },
      { kind: 0, x: 45, y: 20, w: 28, h: 27 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  94: { name: "dash_attack",
    pic: 39, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 22, y: 19, w: 32, h: 60 },
      { kind: 0, x: 45, y: 20, w: 28, h: 27 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  95: { name: "dash_defend",
    pic: 64, state: 7, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 19, y: 45, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 14, y: 19, w: 28, h: 36 },
      { kind: 0, x: 28, y: 37, w: 24, h: 34 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  100: { name: "rowing",
    pic: 65, state: 6, wait: 2, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 53, weaponact: 22, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  101: { name: "rowing",
    pic: 65, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 53, weaponact: 22, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  102: { name: "rowing",
    pic: 45, state: 6, wait: 0, next: 103, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    mp: 75,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 17, w: 43, h: 62 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
    ]
  },
  103: { name: "rowing",
    pic: 999, state: 6, wait: 0, next: 104, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 17, w: 43, h: 62 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
    ]
  },
  104: { name: "rowing",
    pic: 999, state: 3005, wait: 2, next: 105, dvx: 70, dvy: 550, dvz: 10, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -999, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
  },
  105: { name: "rowing",
    pic: 999, state: 15, wait: 0, next: 106, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -999, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
  },
  106: { name: "rowing",
    pic: 45, state: 6, wait: 2, next: 999, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -999, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
  },
  107: { name: "rowing",
    pic: 45, state: 6, wait: 1, next: 219, dvx: 0, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 23, y: 62, weaponact: 22, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  108: { name: "rowing",
    pic: 66, state: 6, wait: 3, next: 109, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 52, y: 53, weaponact: 34, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  109: { name: "rowing",
    pic: 66, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 52, y: 53, weaponact: 34, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  110: { name: "defend",
    pic: 40, state: 7, wait: 10, next: 500, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 31, y: 52, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 20, y: 19, w: 38, h: 60 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  111: { name: "defend",
    pic: 40, state: 7, wait: 0, next: 114, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 31, y: 52, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 16, y: 19, w: 42, h: 60 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  112: { name: "broken_defend",
    pic: 30, state: 8, wait: 0, next: 113, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: 52, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1 },
    bdy: [
      { kind: 0, x: 5, y: 17, w: 64, h: 65 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  113: { name: "broken_defend",
    pic: 30, state: 8, wait: 0, next: 114, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: 52, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1 },
    bdy: [
      { kind: 0, x: 5, y: 17, w: 64, h: 65 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  114: { name: "broken_defend",
    pic: 31, state: 8, wait: 0, next: 999, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 24, y: 51, weaponact: 22, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  115: { name: "picking_light",
    pic: 61, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 76, weaponact: 24, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 24, y: 43, w: 33, h: 37 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  116: { name: "picking_heavy",
    pic: 61, state: 15, wait: 0, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 44, y: 79, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 24, y: 43, w: 33, h: 37 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  117: { name: "picking_heavy",
    pic: 60, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 66, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 24, y: 43, w: 33, h: 37 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  120: { name: "catching",
    pic: 106, state: 9, wait: 1, next: 122, dvx: 5, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 39, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7 },
    bdy: [
      { kind: 0, x: 19, y: 15, w: 28, h: 65 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  122: { name: "catching",
    pic: 107, state: 9, wait: 1, next: 123, dvx: 5, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 39, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7 },
    bdy: [
      { kind: 0, x: 19, y: 15, w: 28, h: 65 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  123: { name: "catching",
    pic: 108, state: 9, wait: 1, next: 124, dvx: 5, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 39, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7 },
    bdy: [
      { kind: 0, x: 19, y: 15, w: 28, h: 65 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  124: { name: "catching",
    pic: 109, state: 9, wait: 1, next: 125, dvx: 5, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 39, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7 },
    bdy: [
      { kind: 0, x: 19, y: 15, w: 28, h: 65 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  125: { name: "catching",
    pic: 110, state: 9, wait: 1, next: 232, dvx: 5, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 39, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7 },
    bdy: [
      { kind: 0, x: 19, y: 15, w: 28, h: 65 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  130: { name: "picked_caught",
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 24, y: 51, weaponact: 22, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 41, y: 39, fronthurtact: 132, backhurtact: 131 },
    bdy: [
      { kind: 0, x: 26, y: 14, w: 28, h: 66 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  131: { name: "picked_caught",
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 24, y: 51, weaponact: 22, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 41, y: 39, fronthurtact: 132, backhurtact: 132 },
    bdy: [
      { kind: 0, x: 26, y: 14, w: 28, h: 66 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  132: { name: "picked_caught",
    pic: 30, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: 52, weaponact: 21, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 41, y: 39, fronthurtact: 131, backhurtact: 131 },
    bdy: [
      { kind: 0, x: 26, y: 14, w: 28, h: 66 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  133: { name: "picked_caught",
    pic: 30, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: 52, weaponact: 21, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 33, y: 36 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  134: { name: "picked_caught",
    pic: 31, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 24, y: 51, weaponact: 22, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 37, y: 28 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  135: { name: "picked_caught",
    pic: 32, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 28, y: 55, weaponact: 21, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 31, y: 22 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  136: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 70, weaponact: 33, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 27, y: 46 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  137: { name: "picked_caught",
    pic: 34, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 47, y: 71, weaponact: 34, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 33, y: 68 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  138: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 70, weaponact: 33, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 34, y: 54 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  139: { name: "picked_caught",
    pic: 30, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: 52, weaponact: 21, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 40, y: 36 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  140: { name: "picked_caught",
    pic: 31, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 24, y: 51, weaponact: 22, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 36, y: 38 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  141: { name: "picked_caught",
    pic: 32, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 28, y: 55, weaponact: 21, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 44, y: 40 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  142: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 70, weaponact: 33, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 46, y: 51 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  143: { name: "picked_caught",
    pic: 34, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 47, y: 71, weaponact: 34, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 45, y: 66 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  144: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 70, weaponact: 33, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 42, y: 55 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  147: { name: "summon_ppp",
    pic: 36, state: 15, wait: 3, next: 148, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 295,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 399, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 39, y: 140000, w: 21, h: 61 },
      { kind: 0, x: 21, y: 18, w: 43, h: 62 }
    ]
  },
  148: { name: "summon_ppp",
    pic: 37, state: 15, wait: 1, next: 149, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  149: { name: "summon_ppp",
    pic: 38, state: 15, wait: 1, next: 150, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  150: { name: "summon_ppp",
    pic: 39, state: 15, wait: 0, next: 151, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  151: { name: "summon_ppp",
    pic: 39, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 70, y: 70, action: 305, oid: 53, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: 52, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 21, y: 14, w: 29, h: 44, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: [
      { kind: 0, x: 25, y: 25, w: 21, h: 20 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  181: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 24, y: 51, weaponact: 22, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 15, y: 11, w: 42, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 35, y: 30, w: 27, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: [
      { kind: 0, x: 22, y: 20, w: 24, h: 23 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  182: { name: "falling",
    pic: 32, state: 12, wait: 6, next: 0, dvx: -3, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 28, y: 55, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 13, y: 18, w: 46, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: [
      { kind: 0, x: 27, y: 22, w: 20, h: 18 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  183: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 70, weaponact: 33, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 32, y: 18, w: 33, h: 27, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 10, y: 38, w: 38, h: 21, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: [
      { kind: 0, x: 22, y: 30, w: 27, h: 21 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  184: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 47, y: 71, weaponact: 34, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
  },
  185: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 70, weaponact: 33, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
  },
  186: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: 52, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 22, y: 12, w: 36, h: 50, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: [
      { kind: 0, x: 31, y: 24, w: 25, h: 23 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
    ]
  },
  187: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 24, y: 51, weaponact: 22, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 33, y: 6, w: 26, h: 46, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 26, y: 43, w: 21, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: [
      { kind: 0, x: 28, y: 27, w: 24, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
    ]
  },
  188: { name: "falling",
    pic: 32, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 28, y: 55, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 14, y: 29, w: 58, h: 23, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: [
      { kind: 0, x: 30, y: 31, w: 24, h: 21 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
    ]
  },
  189: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 70, weaponact: 33, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 24, y: 27, w: 26, h: 28, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 37, y: 45, w: 31, h: 28, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: [
      { kind: 0, x: 30, y: 39, w: 23, h: 21 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
    ]
  },
  190: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 47, y: 71, weaponact: 34, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
  },
  191: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 70, weaponact: 33, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
  },
  200: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 201, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 307,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 18, y: 45, weaponact: 20, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  201: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 307,
    mp: -45,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 18, y: 44, weaponact: 20, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  203: { name: "fire",
    pic: 18, state: 18, wait: 3, next: 204, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 46, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -2, dvy: -2, fall: 30, vrest: 10, bdefend: 16, injury: 30, effect: 20 },
    bdy: [
      { kind: 0, x: 22, y: 35, w: 26, h: 19 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  204: { name: "fire",
    pic: 19, state: 18, wait: 5, next: 205, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 46, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 22, y: 35, w: 26, h: 19 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  205: { name: "fire",
    pic: 18, state: 18, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 33, weaponact: 20, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 22, y: 35, w: 26, h: 19 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  206: { name: "fire",
    pic: 19, state: 18, wait: 1, next: 205, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 33, weaponact: 20, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 999, vrest: 10, bdefend: 16, injury: 30, effect: 20 },
    bdy: [
      { kind: 0, x: 22, y: 35, w: 26, h: 19 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  207: { name: "tired",
    pic: 61, state: 15, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 47, y: 76, weaponact: 24, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 44, y: 28, w: 22, h: 37 },
      { kind: 0, x: 28, y: 47, w: 28, h: 35 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  210: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 27, y: 53, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 25, y: 50, w: 15, h: 29 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  211: { name: "jump",
    pic: 61, state: 4, wait: 1, next: 212, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 47, y: 76, weaponact: 24, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 25, y: 55, w: 30, h: 27 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  212: { name: "jump",
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 29, y: 39, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 18, y: 29, w: 48, h: 17 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  213: { name: "dash",
    pic: 63, state: 5, wait: 8, next: 216, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 44, y: 38, weaponact: 23, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 13, y: 54, w: 18, h: 17 },
      { kind: 0, x: 0, y: 3000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  214: { name: "dash",
    pic: 64, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 18, y: 45, weaponact: 22, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 18, y: 14, w: 19, h: 27 },
      { kind: 0, x: 0, y: 3000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  215: { name: "crouch",
    pic: 60, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/012",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 25, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 26, y: 40, w: 29, h: 38 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  216: { name: "dash",
    pic: 62, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 19, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 16, y: 30, w: 39, h: 37 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  217: { name: "dash",
    pic: 62, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 18, y: 13, w: 29, h: 51 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  218: { name: "stop_running",
    pic: 31, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 25, y: -999, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 17, y: 25, w: 30, h: 55 },
      { kind: 0, x: 45, y: 47, w: 16, h: 32 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  219: { name: "crouch2",
    pic: 61, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/012",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 26, y: 36, w: 29, h: 44 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  220: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 250, hit_j: 307,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 47, y: 23, w: 23, h: 54 },
      { kind: 0, x: 29, y: 41, w: 20, h: 37 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  221: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 250, hit_j: 307,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 60, y: 48, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 46, y: 23, w: 21, h: 56 },
      { kind: 0, x: 30, y: 40, w: 17, h: 41 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  222: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 250, hit_j: 307,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 27, y: 58, weaponact: 20, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 11, y: 24, w: 39, h: 31 },
      { kind: 0, x: 25, y: 53, w: 40, h: 27 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  223: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 250, hit_j: 307,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 24, y: 58, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 12, y: 23, w: 40, h: 37 },
      { kind: 0, x: 27, y: 56, w: 36, h: 24 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  224: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 79, hit_a: 0, hit_d: 250, hit_j: 307,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 32, y: 53, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 32, y: 18, w: 28, h: 60 },
      { kind: 0, x: 52, y: 38, w: 20, h: 19 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  225: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 250, hit_j: 307,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 24, y: 53, weaponact: 20, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 24, y: 18, w: 35, h: 63 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  226: { name: "injured",
    pic: 31, state: 16, wait: 0, next: 227, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 250, hit_j: 250,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: 49, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: [
      { kind: 0, x: 27, y: 22, w: 42, h: 58 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  227: { name: "injured",
    pic: 31, state: 16, wait: 0, next: 228, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 250, hit_j: 250,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 60, y: 51, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: [
      { kind: 0, x: 28, y: 24, w: 39, h: 57 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  228: { name: "injured",
    pic: 31, state: 16, wait: 0, next: 229, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 250, hit_j: 250,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 61, y: 48, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: [
      { kind: 0, x: 28, y: 23, w: 37, h: 58 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  229: { name: "injured",
    pic: 31, state: 16, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 250, hit_j: 250,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 61, y: 51, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: [
      { kind: 0, x: 29, y: 26, w: 37, h: 53 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
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
    pic: 111, state: 9, wait: 1, next: 233, dvx: 5, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/006",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: 26, weaponact: 31, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 60, y: 60, action: 73, oid: 206, facing: 0 },
    cpoint: { kind: 1, x: 80, y: 39, injury: 90, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 0 },
    bdy: [
      { kind: 0, x: 28, y: 19, w: 30, h: 62 },
      { kind: 0, x: 0, y: 30000, w: 79, h: 500 }
    ]
  },
  233: { name: "throw_lying_man",
    pic: 114, state: 9, wait: 1, next: 234, dvx: 5, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 49, weaponact: 25, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 110, y: 85, action: 4, oid: 200, facing: 0 },
    cpoint: { kind: 1, x: 100, y: 39, vaction: 181, throwvx: 130, throwvy: -1, throwvz: 3, throwinjury: 30 },
    bdy: [
      { kind: 0, x: 8, y: 39, w: 61, h: 23 },
      { kind: 0, x: 19, y: 56, w: 30, h: 24 },
      { kind: 0, x: 0, y: 30000, w: 79, h: 500 }
    ]
  },
  234: { name: "throw_lying_man",
    pic: 115, state: 9, wait: 10, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 49, weaponact: 25, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 8, y: 39, w: 61, h: 23 },
      { kind: 0, x: 19, y: 56, w: 30, h: 24 },
      { kind: 0, x: 0, y: 30000, w: 79, h: 500 }
    ]
  },
  235: { name: "heal_other",
    pic: 75, state: 15, wait: 2, next: 236, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  236: { name: "heal_other",
    pic: 76, state: 15, wait: 1, next: 237, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  237: { name: "heal_other",
    pic: 77, state: 15, wait: 1, next: 238, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  238: { name: "heal_other",
    pic: 78, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  243: { name: "kunais",
    pic: 54, state: 15, wait: 2, next: 244, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/ch7",
    mp: 75,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  244: { name: "kunais",
    pic: 55, state: 15, wait: 1, next: 245, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  245: { name: "kunais",
    pic: 56, state: 15, wait: 3, next: 246, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  246: { name: "kunais",
    pic: 57, state: 15, wait: 2, next: 248, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  248: { name: "kunais",
    pic: 58, state: 3, wait: 2, next: 249, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 25,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 79, action: 0, oid: 419, facing: 0 },
    bdy: [
      { kind: 0, x: 31, y: 2, w: 27, h: 78 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  249: { name: "kunais",
    pic: 59, state: 3, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 24, y: 14, w: 31, h: 64 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  250: { name: "replacement",
    pic: 30, state: 14, wait: 0, next: 251, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 45,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  251: { name: "replacement",
    pic: 30, state: 15, wait: 2, next: 252, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 70, action: 150, oid: 204, facing: 0 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  252: { name: "replacement",
    pic: 999, state: 3005, wait: 5, next: 253, dvx: 30, dvy: -4, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  253: { name: "replacement",
    pic: 30, state: 15, wait: 0, next: 999, dvx: -1, dvy: 12, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/061",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 70, action: 60, oid: 204, facing: 0 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  254: { name: "puppet summons",
    pic: 46, state: 15, wait: 1, next: 255, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/ch6",
    mp: 50,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 19000, w: 80, h: 500 }
    ]
  },
  255: { name: "puppet summons",
    pic: 47, state: 15, wait: 1, next: 256, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 19000, w: 80, h: 500 }
    ]
  },
  256: { name: "puppet summons",
    pic: 48, state: 15, wait: 1, next: 257, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 19000, w: 80, h: 500 }
    ]
  },
  257: { name: "puppet summons",
    pic: 49, state: 15, wait: 3, next: 258, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 89, action: 100, oid: 420, facing: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 19000, w: 80, h: 500 }
    ]
  },
  258: { name: "puppet summons",
    pic: 49, state: 15, wait: 6, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 89, action: 100, oid: 418, facing: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
    ]
  },
  260: { name: "chakra_shield",
    pic: 27, state: 15, wait: 1, next: 261, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 5,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  261: { name: "chakra_shield",
    pic: 28, state: 15, wait: 1, next: 262, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  262: { name: "chakra_shield",
    pic: 29, state: 7, wait: 1, next: 263, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 272, hit_j: 275,
    mp: -6,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 89, action: 123, oid: 203, facing: 0 },
    itr: { kind: 14, x: 40, y: 0, w: 39, h: 79, vrest: 1 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  263: { name: "chakra_shield",
    pic: 29, state: 7, wait: 1, next: 264, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 272, hit_j: 275,
    mp: -6,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 89, action: 124, oid: 203, facing: 0 },
    itr: { kind: 14, x: 40, y: 0, w: 39, h: 79, vrest: 1 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  264: { name: "chakra_shield",
    pic: 29, state: 7, wait: 1, next: 265, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 272, hit_j: 275,
    sound: "2/053",
    mp: -6,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 89, action: 125, oid: 203, facing: 0 },
    itr: { kind: 14, x: 40, y: 0, w: 39, h: 79, vrest: 1 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  265: { name: "chakra_shield",
    pic: 29, state: 7, wait: 1, next: 266, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 272, hit_j: 275,
    mp: -6,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 89, action: 126, oid: 203, facing: 0 },
    itr: { kind: 14, x: 40, y: 0, w: 39, h: 79, vrest: 1 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  266: { name: "chakra_shield",
    pic: 29, state: 7, wait: 0, next: 267, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 272, hit_j: 275,
    mp: -6,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 89, action: 127, oid: 203, facing: 0 },
    itr: { kind: 14, x: 40, y: 0, w: 39, h: 79, vrest: 1 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  267: { name: "chakra_shield",
    pic: 29, state: 7, wait: 0, next: 268, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 272, hit_j: 275,
    sound: "2/053",
    mp: -6,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 89, action: 128, oid: 203, facing: 0 },
    itr: { kind: 14, x: 40, y: 0, w: 39, h: 79, vrest: 1 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  268: { name: "chakra_shield",
    pic: 29, state: 7, wait: 1, next: 269, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 272, hit_j: 275,
    mp: -6,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 89, action: 129, oid: 203, facing: 0 },
    itr: { kind: 14, x: 40, y: 0, w: 39, h: 79, vrest: 1 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  269: { name: "chakra_shield",
    pic: 29, state: 7, wait: 1, next: 270, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 272, hit_j: 275,
    mp: -6,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 89, action: 130, oid: 203, facing: 0 },
    itr: { kind: 14, x: 40, y: 0, w: 39, h: 79, vrest: 1 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  270: { name: "chakra_shield",
    pic: 29, state: 7, wait: 1, next: 271, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 272, hit_j: 275,
    sound: "2/053",
    mp: -6,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 89, action: 131, oid: 203, facing: 0 },
    itr: { kind: 14, x: 40, y: 0, w: 39, h: 79, vrest: 1 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  271: { name: "chakra_shield",
    pic: 29, state: 7, wait: 1, next: 262, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 272, hit_j: 275,
    mp: -6,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 89, action: 132, oid: 203, facing: 0 },
    itr: { kind: 14, x: 40, y: 0, w: 39, h: 79, vrest: 1 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  272: { name: "chakra_shield",
    pic: 28, state: 7, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  275: { name: "heal_other",
    pic: 70, state: 15, wait: 2, next: 276, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/ch5",
    mp: 210,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  276: { name: "heal_other",
    pic: 71, state: 15, wait: 1, next: 277, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 5, dvy: 0, dvz: 0, kind: 1, x: 42, y: 79, action: 32, oid: 419, facing: 0 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  277: { name: "heal_other",
    pic: 72, state: 15, wait: 1, next: 278, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 10, dvy: 0, dvz: 0, kind: 1, x: 42, y: 79, action: 32, oid: 419, facing: 0 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  278: { name: "heal_other",
    pic: 73, state: 15, wait: 3, next: 279, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    opoint: { dvx: 15, dvy: 0, dvz: 0, kind: 1, x: 42, y: 79, action: 32, oid: 419, facing: 0 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  279: { name: "heal_other",
    pic: 74, state: 15, wait: 1, next: 235, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  280: { name: "catching",
    pic: 68, state: 9, wait: 2, next: 281, dvx: 5, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 39, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7 },
    bdy: [
      { kind: 0, x: 19, y: 15, w: 28, h: 65 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  281: { name: "catching",
    pic: 69, state: 9, wait: 3, next: 120, dvx: 5, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/001",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 85, y: 65, action: 73, oid: 206, facing: 0 },
    cpoint: { kind: 1, x: 80, y: 38, injury: 15, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3 },
    bdy: [
      { kind: 0, x: 19, y: 15, w: 28, h: 65 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  290: { name: "charge",
    pic: 50, state: 3, wait: 3, next: 291, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 999, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
    ]
  },
  291: { name: "charge",
    pic: 51, state: 17, wait: 3, next: 292, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 294, hit_d: 294, hit_j: 294,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 79, y: 2, weaponact: 20, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 2, x: 42, y: 81, action: 20, oid: 123, facing: 0 },
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
    ]
  },
  292: { name: "charge",
    pic: 52, state: 17, wait: 3, next: 293, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 294, hit_d: 294, hit_j: 294,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 12, weaponact: 20, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 55, action: 4, oid: 203 },
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
    ]
  },
  293: { name: "charge",
    pic: 52, state: 17, wait: 3, next: 292, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 294, hit_d: 294, hit_j: 294,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 30, weaponact: 20, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
    ]
  },
  294: { name: "charge",
    pic: 50, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 100, dvy: -1, dvz: 0, kind: 1, x: 39, y: 30, weaponact: 40, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
    ]
  },
  300: { name: "father_puppet_special",
    pic: 70, state: 15, wait: 4, next: 301, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 75,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 },
      { kind: 0, x: 0, y: 13000, w: 80, h: 500 }
    ]
  },
  301: { name: "father_puppet_special",
    pic: 71, state: 15, wait: 1, next: 302, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 },
      { kind: 0, x: 0, y: 13000, w: 80, h: 500 }
    ]
  },
  302: { name: "father_puppet_special",
    pic: 72, state: 15, wait: 1, next: 303, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 },
      { kind: 0, x: 0, y: 13000, w: 80, h: 500 }
    ]
  },
  303: { name: "father_puppet_special",
    pic: 73, state: 15, wait: 12, next: 304, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 },
      { kind: 0, x: 0, y: 13000, w: 80, h: 500 }
    ]
  },
  304: { name: "father_puppet_special",
    pic: 84, state: 15, wait: 1, next: 305, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  305: { name: "father_puppet_special",
    pic: 85, state: 15, wait: 1, next: 306, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  306: { name: "father_puppet_special",
    pic: 86, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  307: { name: "mother_puppet_special",
    pic: 74, state: 15, wait: 2, next: 308, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 80,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 },
      { kind: 0, x: 0, y: 15000, w: 80, h: 500 }
    ]
  },
  308: { name: "mother_puppet_special",
    pic: 75, state: 15, wait: 2, next: 309, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 },
      { kind: 0, x: 0, y: 15000, w: 80, h: 500 }
    ]
  },
  309: { name: "mother_puppet_special",
    pic: 90, state: 15, wait: 0, next: 310, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 },
      { kind: 0, x: 0, y: 15000, w: 80, h: 500 }
    ]
  },
  310: { name: "mother_puppet_special",
    pic: 91, state: 15, wait: 0, next: 311, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 },
      { kind: 0, x: 0, y: 15000, w: 80, h: 500 }
    ]
  },
  311: { name: "mother_puppet_special",
    pic: 92, state: 15, wait: 0, next: 312, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 },
      { kind: 0, x: 0, y: 15000, w: 80, h: 500 }
    ]
  },
  312: { name: "mother_puppet_special",
    pic: 90, state: 15, wait: 0, next: 313, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  313: { name: "mother_puppet_special",
    pic: 91, state: 15, wait: 0, next: 314, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  314: { name: "mother_puppet_special",
    pic: 92, state: 15, wait: 0, next: 315, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  315: { name: "mother_puppet_special",
    pic: 90, state: 15, wait: 0, next: 316, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  316: { name: "mother_puppet_special",
    pic: 91, state: 15, wait: 0, next: 317, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  317: { name: "mother_puppet_special",
    pic: 86, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 0, hit_j: 300,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  320: { name: "Life transfer",
    pic: 60, state: 18, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    itr: { kind: 3, x: 12, y: 30000, w: 50, h: 500, catchingact: [321, 321], caughtact: [130, 130] },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  321: { name: "Life transfer",
    pic: 94, state: 9, wait: 10, next: 322, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: { kind: 1, x: 40, y: 69, vaction: 143, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, cover: 11 },
  },
  322: { name: "Life transfer",
    pic: 94, state: 9, wait: 2, next: 323, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: -500, action: 210, oid: 222, facing: 0 },
    cpoint: { kind: 1, x: 50, y: -500, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, cover: 11 },
  },
  323: { name: "Life transfer",
    pic: 95, state: 9, wait: 5, next: 324, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/053",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: 69, action: 133, oid: 203, facing: 0 },
    cpoint: { kind: 1, x: 50, y: 69, vaction: 143, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, cover: 11 },
  },
  324: { name: "Life transfer",
    pic: 104, state: 9, wait: 5, next: 325, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: { kind: 1, x: 50, y: 69, vaction: 143, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, cover: 11 },
  },
  325: { name: "Life transfer",
    pic: 105, state: 9, wait: 5, next: 326, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/053",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: 69, action: 133, oid: 203, facing: 0 },
    cpoint: { kind: 1, x: 50, y: 69, vaction: 143, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, cover: 11 },
  },
  326: { name: "Life transfer",
    pic: 106, state: 9, wait: 5, next: 327, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: { kind: 1, x: 50, y: 69, vaction: 143, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, cover: 11 },
  },
  327: { name: "Life transfer",
    pic: 107, state: 9, wait: 5, next: 328, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/053",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: 69, action: 133, oid: 203, facing: 0 },
    cpoint: { kind: 1, x: 50, y: 69, vaction: 143, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, cover: 11 },
  },
  328: { name: "Life transfer",
    pic: 108, state: 9, wait: 5, next: 329, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: { kind: 1, x: 50, y: 69, vaction: 143, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, cover: 11 },
  },
  329: { name: "Life transfer",
    pic: 94, state: 9, wait: 5, next: 330, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/053",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: 69, action: 133, oid: 203, facing: 0 },
    cpoint: { kind: 1, x: 50, y: 69, vaction: 143, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, cover: 11 },
  },
  330: { name: "Life transfer",
    pic: 96, state: 9, wait: 5, next: 331, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: { kind: 1, x: 50, y: 69, vaction: 143, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, cover: 11 },
  },
  331: { name: "Life transfer",
    pic: 97, state: 9, wait: 5, next: 332, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/053",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: 69, action: 133, oid: 203, facing: 0 },
    cpoint: { kind: 1, x: 50, y: 69, vaction: 143, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, cover: 11 },
  },
  332: { name: "Life transfer",
    pic: 98, state: 9, wait: 5, next: 333, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: { kind: 1, x: 50, y: 69, vaction: 143, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, cover: 11 },
  },
  333: { name: "Life transfer",
    pic: 99, state: 9, wait: 5, next: 334, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/053",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: -1000, action: 209, oid: 222, facing: 0 },
    cpoint: { kind: 1, x: 50, y: 69, vaction: 143, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, cover: 11 },
  },
  334: { name: "Life transfer",
    pic: 30, state: 9, wait: 90, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 0, y: -1000, w: 79, h: 500 }
  },
  335: { name: "life transfer start",
    pic: 10, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 8, x: -30, y: 30000, w: 139, h: 500, zwidth: 10, dvx: 320, injury: 0 },
    bdy: [
      { kind: 0, x: 19, y: 15, w: 28, h: 65 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  340: { name: "heal",
    pic: 50, state: 15, wait: 8, next: 341, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 100,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 60, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  341: { name: "heal",
    pic: 51, state: 1700, wait: 2, next: 342, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/052",
    mp: -5,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  342: { name: "heal",
    pic: 121, state: 17, wait: 2, next: 343, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 347, hit_j: 347,
    mp: -5,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 79, action: 211, oid: 222, facing: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  343: { name: "heal",
    pic: 122, state: 17, wait: 2, next: 344, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 347, hit_j: 347,
    mp: -5,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 79, action: 211, oid: 222, facing: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  344: { name: "heal",
    pic: 123, state: 17, wait: 2, next: 345, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 347, hit_j: 347,
    mp: -5,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 79, action: 211, oid: 222, facing: 0 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 }
    ]
  },
  345: { name: "heal",
    pic: 124, state: 17, wait: 2, next: 346, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 347, hit_j: 347,
    mp: -5,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 79, action: 211, oid: 222, facing: 0 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 10, y: 7897897890000, w: 54, h: 21 }
    ]
  },
  346: { name: "heal",
    pic: 120, state: 17, wait: 2, next: 342, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 347, hit_j: 347,
    mp: -5,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 31, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 10, y: 38, w: 54, h: 21 }
  },
  347: { name: "heal",
    pic: 124, state: 17, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 300, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 55, dvy: -10, dvz: 0, kind: 1, x: 999, y: 200, weaponact: 35, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 }
    ]
  },
  348: { name: "chakra_strings",
    pic: 71, state: 15, wait: 1, next: 349, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 70,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  349: { name: "chakra_strings",
    pic: 72, state: 15, wait: 1, next: 350, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 60, y: 45, action: 120, oid: 419, facing: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  350: { name: "chakra_strings",
    pic: 110, state: 15, wait: 1, next: 351, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 50, action: 121, oid: 419, facing: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  351: { name: "chakra_strings",
    pic: 86, state: 15, wait: 1, next: 352, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 25, y: 40, action: 122, oid: 419, facing: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  352: { name: "chakra_strings",
    pic: 74, state: 15, wait: 0, next: 353, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 25, y: 25, action: 123, oid: 419, facing: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  353: { name: "chakra_strings",
    pic: 76, state: 15, wait: 0, next: 354, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 60, y: 70, action: 124, oid: 419, facing: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  354: { name: "chakra_strings",
    pic: 84, state: 15, wait: 1, next: 355, dvx: 550, dvy: 550, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 15, y: 40, action: 125, oid: 419, facing: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  355: { name: "chakra_strings",
    pic: 85, state: 15, wait: 1, next: 999, dvx: 550, dvy: 550, dvz: 0, centerx: 29, centery: 79, hit_a: 300, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 15, y: 40, action: 126, oid: 419, facing: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  360: { name: "stage1-5",
    pic: 0, state: 18, wait: 20, next: 361, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 21, y: 9999555, w: 43, h: 150 }
  },
  361: { name: "stage1-5",
    pic: 0, state: 14, wait: 300, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 150, y: -20, action: 150, oid: 235, facing: 10 },
    bdy: { kind: 0, x: 21, y: 9999555, w: 43, h: 150 }
  },
  390: { name: "injured_mp",
    pic: 30, state: 15, wait: 2, next: 391, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  391: { name: "injured_mp",
    pic: 31, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -500,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  392: { name: "catching2",
    pic: 999, state: 9, wait: 1, next: 393, dvx: 10, dvy: 0, dvz: 0, centerx: 38, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 100, y: -60, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  393: { name: "catching2",
    pic: 999, state: 9, wait: 1, next: 392, dvx: -20, dvy: 0, dvz: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: { kind: 1, x: 70, y: -60, injury: 15, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  394: { name: "catching2",
    pic: 999, state: 9, wait: 0, next: 395, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: { kind: 1, x: 100, y: -60, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  395: { name: "catching2",
    pic: 999, state: 9, wait: 1, next: 392, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 79, action: 0, oid: 214, facing: 0 },
    cpoint: { kind: 1, x: 100, y: -60, vaction: 396, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -7 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  396: { name: "picked_caught2",
    pic: 999, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 31, y: 56, weaponact: 30, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 41, y: 39, fronthurtact: 396, backhurtact: 396 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  397: { name: "injured",
    pic: 30, state: 3, wait: 1, next: 398, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
  },
  398: { name: "injured",
    pic: 999, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 81, action: 91, oid: 201, facing: 0 },
    bdy: [
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  },
  500: { name: "defend2",
    pic: 40, state: 6001, wait: 0, next: 501, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 110, hit_j: 0,
    bdy: { kind: 0, x: 0, y: 1000, w: 80, h: 500 }
  },
  501: { name: "defendend",
    pic: 40, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 31, y: 52, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 20, y: 19, w: 38, h: 60 },
      { kind: 0, x: 0, y: 1000, w: 80, h: 500 },
      { kind: 0, x: 0, y: 5000, w: 5, h: 500 }
    ]
  }
  }
});