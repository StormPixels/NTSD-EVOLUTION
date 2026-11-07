define({
  bmp: {
    file: [
      { "file(0-69)": "sprite/kankuro.png", w: 79, h: 79, row: 10, col: 7 },
      { "file(70-139)": "sprite/kankuro_2.png", w: 79, h: 79, row: 10, col: 7 },
      { "file(140-143)": "sprite/kankuro_fly.png", w: 88, h: 135, row: 4, col: 1 },
      { "file(144-223)": "sprite/kankuro_down.png", w: 79, h: 79, row: 10, col: 7 }
    ],
    name: "Kankuro",
    head: "sprite/kankuro_f.png",
    small: "sprite/kankuro_s.png",
    walking_frame_rate: 3,
    walking_speed: 4,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 18,
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
    rowing_distance: 30
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 3, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 345, hit_ja: 270, hit_Dj: 240, hit_Ua: 255, hit_Fj: 263, hit_Da: 293, hit_Uj: 360,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 345, hit_ja: 270, hit_Dj: 240, hit_Ua: 255, hit_Fj: 263, hit_Da: 293, hit_Uj: 360,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 345, hit_ja: 270, hit_Dj: 240, hit_Ua: 255, hit_Fj: 263, hit_Da: 293, hit_Uj: 360,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  3: { name: "standing",
    pic: 1, state: 0, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 345, hit_ja: 270, hit_Dj: 240, hit_Ua: 255, hit_Fj: 263, hit_Da: 293, hit_Uj: 360,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 58, y: 37, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 345, hit_ja: 270, hit_Dj: 240, hit_Ua: 255, hit_Fj: 263, hit_Da: 293, hit_Uj: 360,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 34, y: 53, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 345, hit_ja: 270, hit_Dj: 240, hit_Ua: 255, hit_Fj: 263, hit_Da: 293, hit_Uj: 360,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 53, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 345, hit_ja: 270, hit_Dj: 240, hit_Ua: 255, hit_Fj: 263, hit_Da: 293, hit_Uj: 360,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 36, y: 53, weaponact: 22, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 345, hit_ja: 270, hit_Dj: 240, hit_Ua: 255, hit_Fj: 263, hit_Da: 293, hit_Uj: 360,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 34, y: 53, weaponact: 23, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  9: { name: "running",
    pic: 20, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/003",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 53, weaponact: 23, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 25, y: 19, w: 38, h: 60 }
  },
  10: { name: "running",
    pic: 21, state: 2, wait: 4, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 53, weaponact: 23, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 25, y: 19, w: 38, h: 60 }
  },
  11: { name: "running",
    pic: 22, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/004",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 53, weaponact: 23, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 25, y: 19, w: 38, h: 60 }
  },
  12: { name: "heavy_obj_walk",
    pic: 100, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 23, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 15, w: 28, h: 64 }
  },
  13: { name: "heavy_obj_walk",
    pic: 101, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 23, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 15, w: 28, h: 64 }
  },
  14: { name: "heavy_obj_walk",
    pic: 102, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 23, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 15, w: 28, h: 64 }
  },
  15: { name: "heavy_obj_walk",
    pic: 103, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 23, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  16: { name: "heavy_obj_run",
    pic: 100, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 23, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  17: { name: "tree_jump",
    pic: 90, state: 3, wait: 1, next: 18, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  18: { name: "tree_jump",
    pic: 91, state: 3, wait: 1, next: 19, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 0, y: 82, action: 150, oid: 203 },
  },
  19: { name: "tree_jump",
    pic: 81, state: 2, wait: 5, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  20: { name: "normal_weapon_atck",
    pic: 23, state: 3, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  21: { name: "normal_weapon_atck",
    pic: 24, state: 3, wait: 2, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 49, y: 31, w: 30, h: 16, dvx: 10, bdefend: 16, injury: 60, effect: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  22: { name: "normal_weapon_atck",
    pic: 25, state: 3, wait: 1, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  23: { name: "normal_weapon_atck",
    pic: 26, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  25: { name: "normal_weapon_atck",
    pic: 23, state: 3, wait: 0, next: 20, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 27, y: 17, w: 31, h: 63 }
  },
  26: { name: "normal_weapon_atck",
    pic: 92, state: 3, wait: 2, next: 27, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 45, y: 37, w: 32, h: 11 }
  },
  27: { name: "normal_weapon_atck",
    pic: 74, state: 3, wait: 1, next: 28, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 49, y: 34, w: 33, h: 14, dvx: 2, bdefend: 16, injury: 20, effect: 1 },
    bdy: [
      { kind: 0, x: 28, y: 17, w: 29, h: 63 },
      { kind: 0, x: 45, y: 37, w: 32, h: 11 }
    ]
  },
  28: { name: "normal_weapon_atck",
    pic: 75, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 10, y: 23, w: 31, h: 55 }
  },
  30: { name: "jump_weapon_atck",
    pic: 95, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 22, y: 10, w: 40, h: 52 }
  },
  35: { name: "run_weapon_atck",
    pic: 23, state: 3, wait: 0, next: 20, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  36: { name: "run_weapon_atck",
    pic: 71, state: 3, wait: 1, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  37: { name: "run_weapon_atck",
    pic: 72, state: 3, wait: 3, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  38: { name: "run_weapon_atck",
    pic: 73, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 49, y: 31, w: 30, h: 16, dvx: 2, bdefend: 16, injury: 40, effect: 1 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  40: { name: "dash_weapon_atck",
    pic: 62, state: 3, wait: 0, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 19, y: 20, weaponact: 30, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 15, w: 40, h: 53 }
  },
  41: { name: "dash_weapon_atck",
    pic: 91, state: 3, wait: 7, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 37, y: 69, weaponact: 25, attacking: 4, cover: 0 },
    bdy: { kind: 0, x: 8, y: 32, w: 33, h: 45 }
  },
  45: { name: "light_weapon_thw",
    pic: 27, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 22, w: 35, h: 57 },
      { kind: 0, x: 10, y: 40, w: 20, h: 13 }
    ]
  },
  46: { name: "light_weapon_thw",
    pic: 28, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 60, y: 42, weaponact: 31, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 24, y: 22, w: 32, h: 57 }
  },
  47: { name: "light_weapon_thw",
    pic: 29, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 55, dvy: -4, dvz: 3, kind: 1, x: 100, y: 50, weaponact: 35, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 }
    ]
  },
  50: { name: "heavy_weapon_thw",
    pic: 80, state: 15, wait: 6, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 16, y: 52, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 19, w: 30, h: 62 }
  },
  51: { name: "heavy_weapon_thw",
    pic: 92, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 45, dvy: -4, dvz: 2, kind: 1, x: 93, y: 57, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 8, y: 39, w: 61, h: 23 },
      { kind: 0, x: 19, y: 56, w: 30, h: 24 }
    ]
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 45, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 22, y: 10, w: 40, h: 52 }
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 46, state: 15, wait: 1, next: 54, dvx: 0, dvy: -2, dvz: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 34, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 35, y: 10, w: 36, h: 23 },
      { kind: 0, x: 15, y: 18, w: 30, h: 43 }
    ]
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 47, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 23, dvy: 8, dvz: 3, kind: 1, x: 67, y: 56, weaponact: 23, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 22, y: 15, w: 38, h: 38 },
      { kind: 0, x: 3, y: 37, w: 34, h: 26 }
    ]
  },
  60: { name: "punch",
    pic: 10, state: 3, wait: 1, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 363,
    itr: { kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1 },
    bdy: [
      { kind: 0, x: 30, y: 18, w: 28, h: 60 },
      { kind: 0, x: 23, y: 35, w: 37, h: 24 }
    ]
  },
  61: { name: "punch",
    pic: 11, state: 3, wait: 1, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 363,
    sound: "2/1251",
    itr: { kind: 3, x: 40, y: 753, w: 25, h: 65, catchingact: [394, 394], caughtact: [396, 396] },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  62: { name: "punch",
    pic: 12, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 363,
    itr: { kind: 0, x: 53, y: 27, w: 30, h: 16, dvx: 2, bdefend: 16, injury: 15 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  65: { name: "punch",
    pic: 13, state: 3, wait: 1, next: 66, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 363,
    itr: { kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1 },
    bdy: { kind: 0, x: 27, y: 17, w: 31, h: 63 }
  },
  66: { name: "punch",
    pic: 14, state: 3, wait: 0, next: 67, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 363,
    bdy: [
      { kind: 0, x: 28, y: 17, w: 29, h: 63 },
      { kind: 0, x: 45, y: 753, w: 32, h: 11 }
    ]
  },
  67: { name: "punch",
    pic: 15, state: 3, wait: 0, next: 68, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 363,
    sound: "2/1252",
    itr: { kind: 0, x: 50, y: 30, w: 33, h: 14, dvx: 2, bdefend: 16, injury: 15 },
    bdy: { kind: 0, x: 28, y: 17, w: 29, h: 63 }
  },
  68: { name: "punch",
    pic: 16, state: 3, wait: 0, next: 69, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 363,
    bdy: [
      { kind: 0, x: 28, y: 17, w: 29, h: 63 },
      { kind: 0, x: 45, y: 753, w: 32, h: 11 }
    ]
  },
  69: { name: "punch",
    pic: 17, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 363,
    bdy: [
      { kind: 0, x: 28, y: 17, w: 29, h: 63 },
      { kind: 0, x: 45, y: 753, w: 32, h: 11 }
    ]
  },
  70: { name: "super_punch",
    pic: 35, state: 3, wait: 2, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 12, centery: 79, hit_a: 0, hit_d: 0, hit_j: 363,
    bdy: { kind: 0, x: 22, y: 14, w: 30, h: 65 }
  },
  71: { name: "super_punch",
    pic: 36, state: 3, wait: 3, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 12, centery: 79, hit_a: 0, hit_d: 0, hit_j: 363,
    bdy: [
      { kind: 0, x: 40, y: 21, w: 30, h: 43 },
      { kind: 0, x: 29, y: 57, w: 32, h: 23 }
    ]
  },
  72: { name: "super_punch",
    pic: 37, state: 3, wait: 5, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 12, centery: 79, hit_a: 0, hit_d: 0, hit_j: 363,
    sound: "2/007",
    itr: { kind: 0, x: 50, y: 34, w: 35, h: 14, dvx: 15, dvy: -8, fall: 100, arest: 15, bdefend: 100, injury: 40, effect: 1 },
    bdy: { kind: 0, x: 31, y: 2, w: 27, h: 78 }
  },
  73: { name: "super_punch",
    pic: 38, state: 3, wait: 3, next: 74, dvx: 0, dvy: 0, dvz: 0, centerx: 12, centery: 79, hit_a: 0, hit_d: 0, hit_j: 363,
    bdy: [
      { kind: 0, x: 40, y: 21, w: 30, h: 43 },
      { kind: 0, x: 29, y: 57, w: 32, h: 23 }
    ]
  },
  74: { name: "super_punch",
    pic: 39, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 363,
    bdy: [
      { kind: 0, x: 40, y: 21, w: 30, h: 43 },
      { kind: 0, x: 29, y: 57, w: 32, h: 23 }
    ]
  },
  80: { name: "jump_attack",
    pic: 48, state: 3, wait: 4, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 20, y: 18, w: 34, h: 61 },
      { kind: 0, x: 39, y: -49999841354687, w: 10, h: 100 }
    ]
  },
  81: { name: "jump_attack",
    pic: 49, state: 3, wait: 1, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    itr: { kind: 0, x: 34, y: 45, w: 46, h: 18, dvx: 5, dvy: -3, vrest: 15, fall: 70, bdefend: 60, injury: 65 },
    bdy: [
      { kind: 0, x: 45, y: 20, w: 28, h: 27 },
      { kind: 0, x: 39, y: -49999841354687, w: 10, h: 100 }
    ]
  },
  82: { name: "jump_attack",
    pic: 50, state: 3, wait: 1, next: 83, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 20, y: 18, w: 34, h: 61 },
      { kind: 0, x: 39, y: -49999841354687, w: 10, h: 100 }
    ]
  },
  83: { name: "jump_attack",
    pic: 51, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 22, y: 19, w: 32, h: 60 },
      { kind: 0, x: 45, y: 20, w: 28, h: 27 }
    ]
  },
  85: { name: "run_attack",
    pic: 40, state: 3, wait: 2, next: 86, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/1255",
    bdy: { kind: 0, x: 22, y: 14, w: 30, h: 65 }
  },
  86: { name: "run_attack",
    pic: 41, state: 3, wait: 1, next: 87, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 40, y: 21, w: 30, h: 43 }
  },
  87: { name: "run_attack",
    pic: 42, state: 3, wait: 1, next: 88, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    itr: { kind: 0, x: 39, y: 34, w: 50, h: 14, dvx: 15, dvy: -8, fall: 100, arest: 15, bdefend: 100, injury: 40 },
    bdy: { kind: 0, x: 31, y: 2, w: 27, h: 78 }
  },
  88: { name: "run_attack",
    pic: 43, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 40, y: 21, w: 30, h: 43 }
  },
  90: { name: "dash_attack",
    pic: 48, state: 15, wait: 1, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 24, y: 18, w: 25, h: 55 }
  },
  91: { name: "dash_attack",
    pic: 101, state: 15, wait: 1, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 22, y: 36, w: 50, h: 18 }
  },
  92: { name: "dash_attack",
    pic: 102, state: 15, wait: 1, next: 93, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    itr: { kind: 0, x: 27, y: 38, w: 53, h: 23, dvx: 12, fall: 70, arest: 20, bdefend: 60, injury: 70 },
    bdy: { kind: 0, x: 22, y: 36, w: 50, h: 18 }
  },
  93: { name: "dash_attack",
    pic: 103, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 22, y: 36, w: 50, h: 18 }
  },
  95: { name: "dash_defend",
    pic: 64, state: 7, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 21, y: 27, weaponact: 30, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 37, w: 24, h: 34 }
  },
  100: { name: "rowing",
    pic: 65, state: 6, wait: 2, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 66, weaponact: 22, attacking: 0, cover: 0 },
  },
  101: { name: "rowing",
    pic: 65, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 53, y: 54, weaponact: 21, attacking: 0, cover: 0 },
  },
  102: { name: "rowing",
    pic: 69, state: 6, wait: 0, next: 103, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 69, state: 6, wait: 2, next: 999, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -999, weaponact: 75, attacking: 0, cover: 0 },
  },
  107: { name: "rowing",
    pic: 69, state: 6, wait: 1, next: 219, dvx: 0, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 59, weaponact: 25, attacking: 0, cover: 0 },
  },
  108: { name: "rowing",
    pic: 66, state: 6, wait: 3, next: 109, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 66, weaponact: 22, attacking: 0, cover: 0 },
  },
  109: { name: "rowing",
    pic: 66, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 53, y: 54, weaponact: 21, attacking: 0, cover: 0 },
  },
  110: { name: "defend",
    pic: 44, state: 7, wait: 10, next: 500, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 16, y: 19, w: 42, h: 60 }
  },
  111: { name: "defend",
    pic: 44, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 36, y: 46, weaponact: 35, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 16, y: 19, w: 42, h: 60 }
  },
  112: { name: "broken_defend",
    pic: 31, state: 8, wait: 0, next: 113, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 7, y: 29, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1 },
    bdy: { kind: 0, x: 5, y: 17, w: 64, h: 65 }
  },
  113: { name: "broken_defend",
    pic: 31, state: 8, wait: 0, next: 114, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 4, y: 42, weaponact: 20, attacking: 0, cover: 0 },
    itr: { kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1 },
    bdy: { kind: 0, x: 5, y: 17, w: 64, h: 65 }
  },
  114: { name: "broken_defend",
    pic: 31, state: 8, wait: 2, next: 999, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 52, weaponact: 35, attacking: 0, cover: 0 },
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
  120: { name: "catching",
    pic: 85, state: 9, wait: 0, next: 122, dvx: 5, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  121: { name: "catching",
    pic: 50, state: 9, wait: 0, next: 0, dvx: 5, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 39, vaction: 130, aaction: 122, taction: -232, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  122: { name: "catching",
    pic: 86, state: 9, wait: 0, next: 123, dvx: 5, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  123: { name: "catching",
    pic: 88, state: 9, wait: 0, next: 124, dvx: 5, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/103",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 38, injury: 25, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  124: { name: "catching",
    pic: 89, state: 9, wait: 0, next: 297, dvx: 5, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/103",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10, injury: 25 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  125: { name: "catching",
    pic: 89, state: 9, wait: 0, next: 297, dvx: 5, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 35, attacking: 0, cover: 1 },
    cpoint: { kind: 1, x: 80, y: 38, injury: 35, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10 },
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
  145: { name: "puff",
    pic: 999, state: 14, wait: 0, next: 146, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  146: { name: "buff",
    pic: 999, state: 14, wait: 2, next: 147, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 79, action: 60, oid: 204, facing: 0 },
  },
  147: { name: "puff",
    pic: 0, state: 14, wait: 220, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 300, y: 0, action: 120, oid: 235, facing: 10 },
  },
  148: { name: "buff",
    pic: 999, state: 14, wait: 0, next: 149, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  149: { name: "puff",
    pic: 0, state: 14, wait: 120, next: 150, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 150, y: 0, action: 123, oid: 235, facing: 10 },
  },
  150: { name: "buff",
    pic: 999, state: 14, wait: 3, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 79, action: 60, oid: 204, facing: 0 },
  },
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/1263",
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
    pic: 60, state: 4, wait: 2, next: 211, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: -999, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 50, w: 15, h: 29 }
  },
  211: { name: "jump",
    pic: 61, state: 4, wait: 1, next: 212, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 17, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 15, y: 41, w: 48, h: 20 }
  },
  212: { name: "jump",
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 365,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 21, y: -999, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 31, y: 15, w: 21, h: 64 }
  },
  213: { name: "dash",
    pic: 63, state: 5, wait: 8, next: 216, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: -999, weaponact: 25, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 46, y: 18, w: 22, h: 25 },
      { kind: 0, x: 13, y: 54, w: 18, h: 17 }
    ]
  },
  214: { name: "dash",
    pic: 64, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 34, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 18, y: 14, w: 19, h: 27 }
  },
  215: { name: "crouch",
    pic: 60, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/012",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 25, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 26, y: 40, w: 29, h: 38 }
  },
  216: { name: "dash",
    pic: 67, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 365,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 19, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 16, y: 30, w: 39, h: 37 }
  },
  217: { name: "dash",
    pic: 67, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 365,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 35, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 18, y: 13, w: 29, h: 51 }
  },
  218: { name: "stop_running",
    pic: 31, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    sound: "2/1269",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 47, y: 23, w: 23, h: 54 },
      { kind: 0, x: 29, y: 41, w: 20, h: 37 }
    ]
  },
  221: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 60, y: 48, weaponact: 35, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 46, y: 23, w: 21, h: 56 }
  },
  222: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    sound: "2/1270",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 27, y: 58, weaponact: 20, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 11, y: 24, w: 39, h: 31 },
      { kind: 0, x: 25, y: 53, w: 40, h: 27 }
    ]
  },
  223: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 24, y: 58, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 12, y: 23, w: 40, h: 37 },
      { kind: 0, x: 27, y: 56, w: 36, h: 24 }
    ]
  },
  224: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 32, y: 53, weaponact: 35, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 32, y: 18, w: 28, h: 60 }
  },
  225: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 24, y: 53, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 18, w: 35, h: 63 }
  },
  226: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 223, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: 49, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: { kind: 0, x: 27, y: 22, w: 42, h: 58 }
  },
  227: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 228, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 60, y: 51, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
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
    pic: 31, state: 14, wait: 0, next: 236, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 100,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0 },
  },
  236: { name: "replacement",
    pic: 999, state: 15, wait: 5, next: 237, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 79, action: 145, oid: 230, facing: 0 },
  },
  237: { name: "replacement",
    pic: 999, state: 3005, wait: 5, next: 238, dvx: 30, dvy: -4, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  238: { name: "replacement",
    pic: 30, state: 15, wait: 0, next: 999, dvx: 550, dvy: 12, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/061",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 70, action: 60, oid: 204, facing: 0 },
  },
  239: { name: "Karakuri Engeki",
    pic: 71, state: 3, wait: 1, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  240: { name: "Karakuri Engeki",
    pic: 17, state: 3, wait: 1, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 200,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  241: { name: "Karakuri Engeki",
    pic: 27, state: 3, wait: 1, next: 242, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/1247",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  242: { name: "Karakuri Engeki",
    pic: 28, state: 3, wait: 3, next: 243, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  243: { name: "Karakuri Engeki",
    pic: 29, state: 3, wait: 0, next: 244, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 70, y: 70, action: 60, oid: 204, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  244: { name: "Karakuri Engeki",
    pic: 29, state: 3, wait: 3, next: 245, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 70, y: 70, action: 50, oid: 230, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  245: { name: "Karakuri Engeki",
    pic: 27, state: 3, wait: 2, next: 247, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 30000, w: 134, h: 500 }
    ]
  },
  247: { name: "Karakuri Engeki",
    pic: 76, state: 3, wait: 2, next: 248, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 30000, w: 134, h: 500 }
    ]
  },
  248: { name: "Karakuri Engeki",
    pic: 76, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    itr: { kind: 8, x: 39, y: -38976841354687, w: 100, h: 200, zwidth: 2, dvx: 250 },
    bdy: [
      { kind: 0, x: 39, y: -38976841354787, w: 10, h: 200 },
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 0, y: 30000, w: 134, h: 500 }
    ]
  },
  250: { name: "Karakuri Engeki",
    pic: 77, state: 3, wait: 26, next: 251, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  251: { name: "Karakuri Engeki",
    pic: 78, state: 3, wait: 1, next: 252, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  252: { name: "Karakuri Engeki",
    pic: 79, state: 3, wait: 35, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  255: { name: "Kuroari",
    pic: 70, state: 3, wait: 1, next: 256, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/1259",
    mp: 220,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  256: { name: "Kuroari",
    pic: 71, state: 3, wait: 1, next: 257, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  257: { name: "Kuroari",
    pic: 72, state: 3, wait: 10, next: 258, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 69, y: 79, action: 130, oid: 230, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  258: { name: "Kuroari",
    pic: 80, state: 3, wait: 5, next: 259, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  259: { name: "Kuroari",
    pic: 81, state: 3, wait: 1, next: 260, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  260: { name: "Kuroari",
    pic: 82, state: 3, wait: 1, next: 261, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
  },
  261: { name: "Kuroari",
    pic: 83, state: 3, wait: 1, next: 262, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
  },
  262: { name: "Kuroari",
    pic: 84, state: 15, wait: 2, next: 275, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 55, y: 85, action: 50, oid: 231, facing: 0 },
  },
  263: { name: "Sanshouo",
    pic: 85, state: 3, wait: 0, next: 264, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 140,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  264: { name: "Sanshouo",
    pic: 86, state: 3, wait: 0, next: 265, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/1257",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  265: { name: "Sanshouo",
    pic: 87, state: 3, wait: 0, next: 266, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/004",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  266: { name: "Sanshouo",
    pic: 88, state: 3, wait: 0, next: 267, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  267: { name: "Sanshouo",
    pic: 88, state: 3, wait: 0, next: 268, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 55, y: 70, action: 60, oid: 204, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  268: { name: "Sanshouo",
    pic: 89, state: 3, wait: 2, next: 269, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 149, y: 79, action: 0, oid: 231, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  269: { name: "Sanshouo",
    pic: 99, state: 3, wait: 2, next: 281, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 30,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  270: { name: "charge",
    pic: 27, state: 3, wait: 3, next: 271, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/1260",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  271: { name: "charge",
    pic: 57, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 79, y: 2, weaponact: 20, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 2, x: 42, y: 51, action: 20, oid: 123, facing: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  272: { name: "charge",
    pic: 57, state: 17, wait: 3, next: 273, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 274, hit_d: 274, hit_j: 274,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 12, weaponact: 20, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 49, y: 49, action: 4, oid: 203 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  273: { name: "charge",
    pic: 57, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 274, hit_d: 274, hit_j: 274,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 30, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  274: { name: "charge",
    pic: 60, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 100, dvy: -1, dvz: 0, kind: 1, x: 39, y: 30, weaponact: 1000, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 26, y: 55, w: 32, h: 26 }
  },
  275: { name: "Kuroari",
    pic: 61, state: 15, wait: 0, next: 276, dvx: 0, dvy: -25, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
  },
  276: { name: "Kuroari",
    pic: 61, state: 15, wait: 40, next: 999, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
  },
  280: { name: "Sanshouo",
    pic: 99, state: 3, wait: 10, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 269, hit_d: 0, hit_j: 269, hit_Fj: 269,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  281: { name: "Sanshouo",
    pic: 109, state: 3, wait: 4, next: 280, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 39900, action: 40, oid: 231, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  293: { name: "Poisonbomb",
    pic: 94, state: 3, wait: 0, next: 294, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 120,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  294: { name: "Poisonbomb",
    pic: 95, state: 3, wait: 0, next: 295, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  295: { name: "Poisonbomb",
    pic: 96, state: 3, wait: 0, next: 296, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 55, y: 70, action: 60, oid: 204, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  296: { name: "Poisonbomb",
    pic: 96, state: 3, wait: 1, next: 297, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 69, y: 79, action: 70, oid: 230, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  297: { name: "Poisonbomb",
    pic: 97, state: 3, wait: 1, next: 298, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  298: { name: "Poisonbomb",
    pic: 98, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  345: { name: "karasu",
    pic: 27, state: 15, wait: 0, next: 346, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 110,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 }
    ]
  },
  346: { name: "karasu",
    pic: 28, state: 15, wait: 0, next: 347, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 20, dvy: 0, dvz: 0, kind: 1, x: 70, y: 70, action: 5, oid: 230, facing: 0 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 }
    ]
  },
  347: { name: "karasu",
    pic: 52, state: 15, wait: 0, next: 348, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 }
    ]
  },
  348: { name: "karasu",
    pic: 53, state: 15, wait: 0, next: 349, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 }
    ]
  },
  349: { name: "karasu",
    pic: 54, state: 15, wait: 0, next: 350, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 10, y: 38, w: 54, h: 21 }
  },
  350: { name: "karasu",
    pic: 55, state: 15, wait: 0, next: 351, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 10, y: 38, w: 54, h: 21 }
  },
  351: { name: "karasu",
    pic: 56, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 }
    ]
  },
  355: { name: "body",
    pic: 999, state: 15, wait: 20, next: 356, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 8, x: -9999, y: -38976841354687, w: 99999, h: 200, zwidth: 9999, dvx: 356 },
    bdy: { kind: 0, x: 39, y: -38976841354687, w: 10, h: 100 }
  },
  356: { name: "body",
    pic: 999, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 39, y: -38976841354687, w: 10, h: 100 }
  },
  360: { name: "Poisonmisting",
    pic: 94, state: 3, wait: 1, next: 361, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 160,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  361: { name: "Poisonmisting",
    pic: 94, state: 3, wait: 1, next: 362, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  362: { name: "Poisonmisting",
    pic: 94, state: 3, wait: 6, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 69, y: 79, action: 155, oid: 230, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  363: { name: "bird_summon_jump",
    pic: 60, state: 15, wait: 1, next: 364, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  364: { name: "bird_summon_jump",
    pic: 62, state: 15, wait: 3, next: 365, dvx: 0, dvy: -6, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  365: { name: "bird_summon_jump",
    pic: 71, state: 15, wait: 1, next: 366, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  366: { name: "bird_summon_jump",
    pic: 58, state: 15, wait: 1, next: 367, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 70, y: 40, action: 29, oid: 230, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  367: { name: "bird_mode",
    pic: 140, state: 4, wait: 1, next: 368, dvx: 0, dvy: 550, dvz: 4, centerx: 42, centery: 154, hit_a: 372, hit_d: 371, hit_j: 371,
    sound: "2/029",
    mp: -3,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  368: { name: "bird_mode",
    pic: 141, state: 4, wait: 1, next: 369, dvx: 6, dvy: -3, dvz: 6, centerx: 42, centery: 154, hit_a: 372, hit_d: 371, hit_j: 371,
    sound: "2/028",
    mp: -3,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  369: { name: "bird_mode",
    pic: 142, state: 4, wait: 1, next: 370, dvx: 7, dvy: 0, dvz: 6, centerx: 42, centery: 154, hit_a: 372, hit_d: 371, hit_j: 371,
    sound: "2/029",
    mp: -3,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  370: { name: "bird_mode",
    pic: 143, state: 4, wait: 1, next: 367, dvx: 0, dvy: -1, dvz: 6, centerx: 42, centery: 154, hit_a: 372, hit_d: 371, hit_j: 371,
    sound: "2/028",
    mp: -3,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  371: { name: "bird_mode",
    pic: 143, state: 15, wait: 0, next: 373, dvx: 0, dvy: 0, dvz: 550, centerx: 42, centery: 154, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  372: { name: "bird_mode",
    pic: 143, state: 15, wait: 0, next: 374, dvx: 0, dvy: 0, dvz: 550, centerx: 42, centery: 154, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  373: { name: "bird_mode",
    pic: 143, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 550, centerx: 42, centery: 154, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 70, y: 40, action: 29, oid: 230, facing: 0 },
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  374: { name: "bird_mode",
    pic: 143, state: 15, wait: 1, next: 80, dvx: 0, dvy: -5, dvz: 550, centerx: 42, centery: 154, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 70, y: 40, action: 29, oid: 230, facing: 0 },
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  375: { name: "Kuroari",
    pic: 154, state: 3, wait: 1, next: 376, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 100,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  376: { name: "Kuroari",
    pic: 155, state: 3, wait: 1, next: 377, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  377: { name: "Kuroari",
    pic: 156, state: 3, wait: 1, next: 378, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  378: { name: "Kuroari",
    pic: 157, state: 3, wait: 1, next: 379, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  379: { name: "Kuroari",
    pic: 158, state: 3, wait: 1, next: 380, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  380: { name: "Kuroari",
    pic: 158, state: 3, wait: 0, next: 381, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 55, y: 70, action: 60, oid: 204, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  381: { name: "Kuroari",
    pic: 158, state: 3, wait: 1, next: 382, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 79, action: 39, oid: 230, facing: 0 },
  },
  382: { name: "Kuroari",
    pic: 158, state: 3, wait: 10, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
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
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 81, action: 80, oid: 201, facing: 0 },
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0 },
  },
  500: { name: "defend2",
    pic: 44, state: 6001, wait: 0, next: 501, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 110, hit_j: 0,
  },
  501: { name: "defendend",
    pic: 44, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 16, y: 19, w: 42, h: 60 }
  }
  }
});