define({
  bmp: {
    file: [
      { "file(0-69)": "sprite/sai_0.png", w: 79, h: 79, row: 10, col: 7 },
      { "file(70-139)": "sprite/sai_1.png", w: 79, h: 79, row: 10, col: 7 },
      { "file(140-200)": "sprite/sai_bird.png", w: 135, h: 135, row: 5, col: 5 }
    ],
    name: "Sai",
    head: "sprite/sai_f.png",
    small: "sprite/sai_s.png",
    walking_frame_rate: 3,
    walking_speed: 4,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 14,
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
    pic: 0, state: 0, wait: 3, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Fj: 250, hit_ja: 270, hit_Da: 280, hit_Ua: 300, hit_Uj: 56, hit_Dj: 310,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 55, y: 55, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Fj: 250, hit_ja: 270, hit_Da: 280, hit_Ua: 300, hit_Uj: 56, hit_Dj: 310,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 53, y: 56, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Fj: 250, hit_ja: 270, hit_Da: 280, hit_Ua: 300, hit_Uj: 56, hit_Dj: 310,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 53, y: 57, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  3: { name: "standing",
    pic: 3, state: 0, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Fj: 250, hit_ja: 270, hit_Da: 280, hit_Ua: 300, hit_Uj: 56, hit_Dj: 310,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 54, y: 56, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Fj: 250, hit_ja: 270, hit_Da: 280, hit_Ua: 300, hit_Uj: 56, hit_Dj: 310,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 56, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Fj: 250, hit_ja: 270, hit_Da: 280, hit_Ua: 300, hit_Uj: 56, hit_Dj: 310,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 59, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Fj: 250, hit_ja: 270, hit_Da: 280, hit_Ua: 300, hit_Uj: 56, hit_Dj: 310,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 31, y: 61, weaponact: 22, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Fj: 250, hit_ja: 270, hit_Da: 280, hit_Ua: 300, hit_Uj: 56, hit_Dj: 310,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 22, y: 60, weaponact: 23, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  9: { name: "running",
    pic: 20, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/003",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -999, weaponact: 25, attacking: 0, cover: 0 },
opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 340, oid: 203 },
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
    pic: 105, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 33, weaponact: 10, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  13: { name: "heavy_obj_walk",
    pic: 106, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 33, weaponact: 10, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  14: { name: "heavy_obj_walk",
    pic: 107, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 33, weaponact: 10, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  15: { name: "heavy_obj_walk",
    pic: 108, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 33, weaponact: 10, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  16: { name: "heavy_obj_run",
    pic: 105, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 33, weaponact: 10, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 29, y: 15, w: 28, h: 64 }
  },
  17: { name: "tree_jump",
    pic: 17, state: 3, wait: 1, next: 18, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  18: { name: "tree_jump",
    pic: 17, state: 3, wait: 1, next: 19, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 0, y: 82, action: 150, oid: 203 },
  },
  19: { name: "tree_jump",
    pic: 17, state: 2, wait: 5, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 0, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  20: { name: "normal_weapon_atck",
    pic: 52, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 22, w: 35, h: 57 },
      { kind: 0, x: 10, y: 40, w: 20, h: 13 }
    ]
  },
  25: { name: "normal_weapon_atck",
    pic: 52, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 22, w: 35, h: 57 },
      { kind: 0, x: 10, y: 40, w: 20, h: 13 }
    ]
  },
  30: { name: "jump_weapon_atck",
    pic: 67, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 22, y: 10, w: 40, h: 52 }
  },
  35: { name: "run_weapon_atck",
    pic: 52, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 22, w: 35, h: 57 },
      { kind: 0, x: 10, y: 40, w: 20, h: 13 }
    ]
  },
  40: { name: "dash_weapon_atck",
    pic: 62, state: 3, wait: 0, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 19, y: -999, weaponact: 30, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 15, w: 40, h: 53 }
  },
  41: { name: "dash_weapon_atck",
    pic: 91, state: 3, wait: 7, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 37, y: 69, weaponact: 25, attacking: 4, cover: 0 },
    bdy: { kind: 0, x: 8, y: 32, w: 33, h: 45 }
  },
  45: { name: "light_weapon_thw",
    pic: 52, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 47, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 22, w: 35, h: 57 },
      { kind: 0, x: 10, y: 40, w: 20, h: 13 }
    ]
  },
  46: { name: "light_weapon_thw",
    pic: 53, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 60, y: 42, weaponact: 31, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 24, y: 22, w: 32, h: 57 }
  },
  47: { name: "light_weapon_thw",
    pic: 54, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 55, dvy: -4, dvz: 3, kind: 1, x: 100, y: 50, weaponact: 35, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 }
    ]
  },
  50: { name: "heavy_weapon_thw",
    pic: 14, state: 15, wait: 6, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 16, y: 52, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 19, w: 30, h: 62 }
  },
  51: { name: "heavy_weapon_thw",
    pic: 16, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 45, dvy: -4, dvz: 2, kind: 1, x: 93, y: 57, weaponact: 10, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 8, y: 39, w: 61, h: 23 },
      { kind: 0, x: 19, y: 56, w: 30, h: 24 }
    ]
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 67, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 30, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 22, y: 10, w: 40, h: 52 }
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 68, state: 15, wait: 1, next: 54, dvx: 0, dvy: -2, dvz: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 30, weaponact: 34, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 35, y: 10, w: 36, h: 23 },
      { kind: 0, x: 15, y: 18, w: 30, h: 43 }
    ]
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 69, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 23, dvy: 8, dvz: 3, kind: 1, x: 67, y: 56, weaponact: 23, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 22, y: 15, w: 38, h: 38 },
      { kind: 0, x: 3, y: 37, w: 34, h: 26 }
    ]
  },
  55: { name: "kirby",
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: { kind: 2, x: 41, y: 39, fronthurtact: 55, backhurtact: 55 },
    bdy: { kind: 0, x: 26, y: 136000, w: 28, h: 500 }
  },
  56: { name: "bird_summon_jump",
    pic: 60, state: 15, wait: 1, next: 57, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 100,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  57: { name: "bird_summon_jump",
    pic: 70, state: 15, wait: 3, next: 58, dvx: 0, dvy: -5, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  58: { name: "bird_summon_jump",
    pic: 71, state: 15, wait: 1, next: 59, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  59: { name: "bird_summon_jump",
    pic: 72, state: 15, wait: 1, next: 68, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: 73, action: 20, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  60: { name: "punch",
    pic: 10, state: 3, wait: 1, next: 61, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1 },
    bdy: { kind: 0, x: 30, y: 18, w: 28, h: 60 }
  },
  61: { name: "punch",
    pic: 11, state: 3, wait: 0, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 325, hit_j: 0,
    sound: "2/2988",
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  62: { name: "punch",
    pic: 12, state: 3, wait: 0, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 325, hit_j: 0,
    itr: { kind: 0, x: 49, y: 40, w: 30, h: 16, dvx: 2, bdefend: 16, injury: 25, effect: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  63: { name: "punch",
    pic: 13, state: 3, wait: 3, next: 64, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 325, hit_j: 0,
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  64: { name: "punch",
    pic: 10, state: 3, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 325, hit_j: 0,
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  65: { name: "punch",
    pic: 14, state: 3, wait: 3, next: 66, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1 },
    bdy: { kind: 0, x: 27, y: 17, w: 31, h: 63 }
  },
  66: { name: "punch",
    pic: 15, state: 3, wait: 1, next: 67, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 325, hit_j: 0,
    sound: "2/2987",
    bdy: { kind: 0, x: 28, y: 17, w: 29, h: 63 }
  },
  67: { name: "punch",
    pic: 16, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 325, hit_j: 0,
    itr: { kind: 0, x: 45, y: 37, w: 33, h: 14, dvx: 2, bdefend: 16, injury: 15 },
    bdy: { kind: 0, x: 28, y: 17, w: 29, h: 63 }
  },
  68: { name: "bird_summon_jump",
    pic: 73, state: 15, wait: 1, next: 69, dvx: 550, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 50, action: 195, oid: 203 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  69: { name: "bird_summon_jump",
    pic: 74, state: 15, wait: 5, next: 346, dvx: 550, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  70: { name: "super_punch",
    pic: 40, state: 15, wait: 1, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 100,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  80: { name: "jump_attack",
    pic: 102, state: 15, wait: 6, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1 },
  },
  81: { name: "jump_attack",
    pic: 103, state: 15, wait: 1, next: 82, dvx: 0, dvy: -2, dvz: 0, centerx: 39, centery: 63, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/2969",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 34, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 15, y: 40, w: 80, h: 25, dvx: 5, dvy: -5, bdefend: 16, fall: 100, injury: 55, effect: 1 },
    bdy: { kind: 0, x: 35, y: 10, w: 36, h: 23 }
  },
  82: { name: "jump_attack",
    pic: 104, state: 15, wait: 8, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 23, dvy: 8, dvz: 3, kind: 1, x: 67, y: 56, weaponact: 23, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 22, y: 15, w: 38, h: 38 }
  },
  85: { name: "run_attack",
    pic: 130, state: 3, wait: 3, next: 86, dvx: 8, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 19, y: 24, w: 35, h: 54 }
  },
  86: { name: "run_attack",
    pic: 131, state: 3, wait: 0, next: 87, dvx: 6, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/2961",
    bdy: { kind: 0, x: 24, y: 36, w: 55, h: 19 }
  },
  87: { name: "run_attack",
    pic: 132, state: 3, wait: 1, next: 88, dvx: 5, dvy: 0, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 25, y: 50, w: 55, h: 25, dvx: 15, dvy: -5, fall: 70, arest: 15, bdefend: 16, injury: 70, effect: 1 },
    bdy: { kind: 0, x: 18, y: 36, w: 39, h: 24 }
  },
  88: { name: "run_attack",
    pic: 133, state: 3, wait: 3, next: 999, dvx: 5, dvy: 0, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 18, y: 36, w: 39, h: 24 }
  },
  90: { name: "dash_attack",
    pic: 102, state: 15, wait: 6, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 22, y: 10, w: 40, h: 52 }
  },
  94: { name: "bird_mode_up",
    pic: 147, state: 15, wait: 0, next: 361, dvx: 0, dvy: 550, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 51, state: 6, wait: 0, next: 103, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    mp: 75,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 341, oid: 203 },
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
    pic: 51, state: 6, wait: 2, next: 999, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 50, state: 7, wait: 10, next: 500, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 16, y: 19, w: 42, h: 60 }
  },
  111: { name: "defend",
    pic: 50, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: 30, weaponact: 35, attacking: 0, cover: 0 },
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
    pic: 61, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 66, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 43, w: 33, h: 37 }
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
  158: { name: "lion_many",
    pic: 41, state: 15, wait: 0, next: 159, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  159: { name: "lion_many",
    pic: 42, state: 15, wait: 0, next: 160, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  160: { name: "lion_many",
    pic: 43, state: 15, wait: 0, next: 161, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  161: { name: "lion_many",
    pic: 44, state: 15, wait: 1, next: 162, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  162: { name: "lion_many",
    pic: 42, state: 15, wait: 1, next: 163, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  163: { name: "lion_many",
    pic: 43, state: 15, wait: 1, next: 164, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  164: { name: "lion_many",
    pic: 44, state: 15, wait: 1, next: 165, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  165: { name: "lion_many",
    pic: 135, state: 15, wait: 1, next: 166, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  166: { name: "lion_many",
    pic: 136, state: 15, wait: 1, next: 312, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/2977",
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
    sound: "2/2977",
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
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 56,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 60, weaponact: 21, attacking: 0, cover: 0 },
opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 344, oid: 203 },
    bdy: { kind: 0, x: 33, y: 33, w: 20, h: 48 }
  },
  211: { name: "jump",
    pic: 61, state: 4, wait: 1, next: 212, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 56,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 70, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 15, y: 41, w: 48, h: 20 }
  },
  212: { name: "jump",
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 56,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 45, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 31, y: 15, w: 21, h: 64 }
  },
  213: { name: "dash",
    pic: 63, state: 5, wait: 8, next: 216, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 45, weaponact: 21, attacking: 0, cover: 0 },
opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 340, oid: 203 },
    bdy: [
      { kind: 0, x: 46, y: 18, w: 22, h: 25 },
      { kind: 0, x: 28, y: 29, w: 21, h: 33 }
    ]
  },
  214: { name: "dash",
    pic: 64, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 34, y: 45, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 18, y: 14, w: 19, h: 27 }
  },
  215: { name: "crouch",
    pic: 60, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/012",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 25, y: -999, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 26, y: 40, w: 29, h: 38 }
  },
  216: { name: "dash",
    pic: 64, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 34, y: 45, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 42, y: 15, w: 24, h: 21 }
  },
  217: { name: "dash",
    pic: 64, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 34, y: 45, weaponact: 21, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 18, y: 13, w: 29, h: 51 }
  },
  218: { name: "stop_running",
    pic: 60, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 25, y: -999, weaponact: 35, attacking: 0, cover: 0 },
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
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 47, y: 23, w: 23, h: 54 },
      { kind: 0, x: 29, y: 41, w: 20, h: 37 }
    ]
  },
  221: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    sound: "2/2983",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 60, y: 48, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 46, y: 23, w: 21, h: 56 },
      { kind: 0, x: 30, y: 40, w: 17, h: 41 }
    ]
  },
  222: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 27, y: 58, weaponact: 20, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 11, y: 24, w: 39, h: 31 },
      { kind: 0, x: 25, y: 53, w: 40, h: 27 }
    ]
  },
  223: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    sound: "2/2979",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 24, y: 58, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 12, y: 23, w: 40, h: 37 },
      { kind: 0, x: 27, y: 56, w: 36, h: 24 }
    ]
  },
  224: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 220, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
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
    pic: 999, state: 15, wait: 2, next: 237, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 79, action: 40, oid: 207, facing: 0 },
  },
  237: { name: "replacement",
    pic: 999, state: 3005, wait: 5, next: 238, dvx: 30, dvy: -4, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  238: { name: "replacement",
    pic: 30, state: 15, wait: 0, next: 999, dvx: -1, dvy: 12, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/2971",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 70, action: 50, oid: 207, facing: 0 },
  },
  240: { name: "lion",
    pic: 40, state: 15, wait: 0, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 75,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  241: { name: "lion",
    pic: 41, state: 15, wait: 0, next: 242, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  242: { name: "lion",
    pic: 42, state: 15, wait: 0, next: 243, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  243: { name: "lion",
    pic: 43, state: 15, wait: 1, next: 244, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  244: { name: "lion",
    pic: 44, state: 15, wait: 1, next: 245, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  245: { name: "lion",
    pic: 45, state: 15, wait: 1, next: 246, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/2970",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: 73, action: 20, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  246: { name: "lion",
    pic: 46, state: 15, wait: 1, next: 247, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 70, y: 78, action: 5, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  247: { name: "lion",
    pic: 47, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  250: { name: "lion_many",
    pic: 40, state: 15, wait: 0, next: 251, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 140,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  251: { name: "lion_many",
    pic: 41, state: 15, wait: 0, next: 252, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  252: { name: "lion_many",
    pic: 42, state: 15, wait: 0, next: 253, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  253: { name: "lion_many",
    pic: 43, state: 15, wait: 1, next: 254, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  254: { name: "lion_many",
    pic: 44, state: 15, wait: 1, next: 255, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  255: { name: "lion_many",
    pic: 42, state: 15, wait: 1, next: 256, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  256: { name: "lion_many",
    pic: 43, state: 15, wait: 1, next: 257, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  257: { name: "lion_many",
    pic: 44, state: 15, wait: 1, next: 258, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/2985",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  258: { name: "lion_many",
    pic: 45, state: 15, wait: 1, next: 259, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: 73, action: 20, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  259: { name: "lion_many",
    pic: 46, state: 15, wait: 1, next: 260, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 70, y: 83, action: 5, oid: 207, facing: 20 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  260: { name: "lion_many",
    pic: 47, state: 15, wait: 1, next: 261, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: 73, action: 20, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  261: { name: "lion_many",
    pic: 47, state: 15, wait: 1, next: 262, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 70, y: 83, action: 5, oid: 207 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  262: { name: "lion_many",
    pic: 47, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  270: { name: "charge",
    pic: 55, state: 3, wait: 3, next: 271, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/2973",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  271: { name: "charge",
    pic: 56, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 79, y: 200, weaponact: 20, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 2, x: 42, y: 51, action: 20, oid: 123, facing: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  272: { name: "charge",
    pic: 56, state: 17, wait: 3, next: 273, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 274, hit_d: 274, hit_j: 274,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 102, weaponact: 20, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 4, oid: 203 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  273: { name: "charge",
    pic: 56, state: 17, wait: 3, next: 272, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 274, hit_d: 274, hit_j: 274,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 100, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  274: { name: "charge",
    pic: 56, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 100, dvy: -1, dvz: 0, kind: 1, x: 39, y: 30, weaponact: 40, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 10, y: 38, w: 54, h: 21 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 }
    ]
  },
  280: { name: "snake",
    pic: 60, state: 15, wait: 0, next: 281, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/2974",
    mp: 75,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  281: { name: "snake",
    pic: 23, state: 15, wait: 0, next: 282, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  282: { name: "snake",
    pic: 24, state: 15, wait: 0, next: 283, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  283: { name: "snake",
    pic: 25, state: 15, wait: 0, next: 284, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  284: { name: "snake",
    pic: 26, state: 15, wait: 0, next: 285, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  285: { name: "snake",
    pic: 27, state: 15, wait: 1, next: 286, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  286: { name: "snake",
    pic: 28, state: 15, wait: 0, next: 287, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  287: { name: "snake",
    pic: 29, state: 15, wait: 0, next: 292, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  292: { name: "snake",
    pic: 39, state: 15, wait: 0, next: 293, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  293: { name: "snake",
    pic: 48, state: 15, wait: 1, next: 294, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  294: { name: "snake",
    pic: 49, state: 15, wait: 1, next: 295, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  295: { name: "snake",
    pic: 57, state: 15, wait: 1, next: 296, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  296: { name: "snake",
    pic: 58, state: 15, wait: 5, next: 297, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 70, y: 83, action: 60, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  297: { name: "snake",
    pic: 60, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  300: { name: "bird",
    pic: 40, state: 15, wait: 0, next: 301, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 155,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  301: { name: "bird",
    pic: 41, state: 15, wait: 0, next: 302, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  302: { name: "bird",
    pic: 42, state: 15, wait: 1, next: 303, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  303: { name: "bird",
    pic: 43, state: 15, wait: 1, next: 304, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  304: { name: "bird",
    pic: 44, state: 15, wait: 1, next: 305, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  305: { name: "bird",
    pic: 42, state: 15, wait: 1, next: 306, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  306: { name: "bird",
    pic: 43, state: 15, wait: 1, next: 307, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  307: { name: "bird",
    pic: 44, state: 15, wait: 1, next: 308, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/2972",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  308: { name: "bird",
    pic: 100, state: 15, wait: 1, next: 309, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: 73, action: 20, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  309: { name: "bird",
    pic: 101, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 70, y: 50, action: 70, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  310: { name: "lion_many",
    pic: 40, state: 15, wait: 0, next: 158, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 300,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  312: { name: "dragon",
    pic: 139, state: 15, wait: 1, next: 313, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/1996",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: 73, action: 20, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  313: { name: "dragon",
    pic: 139, state: 15, wait: 1, next: 314, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/2963",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 20, dvy: 0, dvz: 0, kind: 1, x: 100, y: 40, action: 0, oid: 400, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  314: { name: "dragon",
    pic: 137, state: 15, wait: 1, next: 315, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 47, y: 76, action: 20, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  315: { name: "dragon",
    pic: 137, state: 15, wait: 1, next: 316, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 53, y: 67, action: 20, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  316: { name: "dragon",
    pic: 138, state: 15, wait: 1, next: 317, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 67, action: 20, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  317: { name: "dragon",
    pic: 138, state: 15, wait: 1, next: 318, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: 60, action: 20, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  318: { name: "dragon",
    pic: 138, state: 15, wait: 1, next: 319, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 67, action: 20, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  319: { name: "dragon",
    pic: 138, state: 15, wait: 1, next: 320, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 56, y: 65, action: 20, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  320: { name: "dragon",
    pic: 138, state: 15, wait: 1, next: 321, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 49, y: 63, action: 20, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  321: { name: "dragon",
    pic: 138, state: 15, wait: 1, next: 322, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 53, y: 75, action: 20, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  322: { name: "dragon",
    pic: 138, state: 15, wait: 1, next: 323, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 47, y: 76, action: 20, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  323: { name: "dragon",
    pic: 138, state: 15, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 65, y: 78, action: 20, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  325: { name: "rats",
    pic: 60, state: 15, wait: 0, next: 326, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 135,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  326: { name: "rats",
    pic: 23, state: 15, wait: 0, next: 327, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  327: { name: "rats",
    pic: 24, state: 15, wait: 0, next: 328, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  328: { name: "rats",
    pic: 25, state: 15, wait: 0, next: 329, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  329: { name: "rats",
    pic: 26, state: 15, wait: 0, next: 330, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  330: { name: "rats",
    pic: 27, state: 15, wait: 1, next: 331, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  331: { name: "rats",
    pic: 29, state: 15, wait: 1, next: 332, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  332: { name: "rats",
    pic: 28, state: 15, wait: 1, next: 333, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  333: { name: "rats",
    pic: 37, state: 15, wait: 1, next: 334, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  334: { name: "rats",
    pic: 26, state: 15, wait: 0, next: 335, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 3, dvy: 0, dvz: 0, kind: 1, x: 50, y: 79, action: 115, oid: 207, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  335: { name: "rats",
    pic: 59, state: 15, wait: 0, next: 336, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  336: { name: "rats",
    pic: 59, state: 15, wait: 0, next: 337, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  337: { name: "rats",
    pic: 58, state: 15, wait: 0, next: 297, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  340: { name: "hell",
    pic: 139, state: 15, wait: 0, next: 341, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -95,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -999, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  341: { name: "hell",
    pic: 139, state: 15, wait: 0, next: 342, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 70, y: 83, action: 5, oid: 207, facing: 30 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  342: { name: "hell",
    pic: 139, state: 15, wait: 0, next: 343, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 100, y: 40, action: 0, oid: 400, facing: 30 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  343: { name: "hell",
    pic: 139, state: 15, wait: 0, next: 344, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 70, y: 50, action: 70, oid: 207 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  344: { name: "hell",
    pic: 139, state: 15, wait: 0, next: 345, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 70, y: 83, action: 5, oid: 207, facing: 31 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  345: { name: "hell",
    pic: 139, state: 15, wait: 0, next: 340, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -55,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 58, weaponact: 21, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 70, y: 50, action: 70, oid: 207 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  346: { name: "bird_mode",
    pic: 140, state: 4, wait: 1, next: 347, dvx: 0, dvy: 550, dvz: 0, centerx: 85, centery: 95, hit_a: 370, hit_d: 364, hit_j: 355,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  347: { name: "bird_mode",
    pic: 141, state: 4, wait: 1, next: 348, dvx: 5, dvy: -3, dvz: 3, centerx: 85, centery: 91, hit_a: 370, hit_d: 364, hit_j: 0,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  348: { name: "bird_mode",
    pic: 142, state: 4, wait: 1, next: 349, dvx: 3, dvy: -3, dvz: 3, centerx: 85, centery: 87, hit_a: 370, hit_d: 364, hit_j: 0,
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  349: { name: "bird_mode",
    pic: 143, state: 4, wait: 1, next: 350, dvx: 3, dvy: 0, dvz: 3, centerx: 85, centery: 95, hit_a: 370, hit_d: 364, hit_j: 355,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  350: { name: "bird_mode",
    pic: 144, state: 4, wait: 1, next: 351, dvx: 0, dvy: 0, dvz: 3, centerx: 85, centery: 95, hit_a: 370, hit_d: 364, hit_j: 355,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  351: { name: "bird_mode",
    pic: 145, state: 4, wait: 1, next: 352, dvx: 0, dvy: 0, dvz: 3, centerx: 85, centery: 99, hit_a: 370, hit_d: 364, hit_j: 355,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  352: { name: "bird_mode",
    pic: 146, state: 4, wait: 1, next: 346, dvx: 0, dvy: -1, dvz: 3, centerx: 85, centery: 99, hit_a: 370, hit_d: 364, hit_j: 0,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  353: { name: "bird_mode_up",
    pic: 141, state: 15, wait: 0, next: 348, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  355: { name: "bird_mode_up",
    pic: 147, state: 15, wait: 1, next: 356, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  356: { name: "bird_mode_up",
    pic: 148, state: 15, wait: 2, next: 357, dvx: 0, dvy: -15, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  357: { name: "bird_mode_up",
    pic: 149, state: 15, wait: 2, next: 358, dvx: 0, dvy: -15, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  358: { name: "bird_mode_up",
    pic: 999, state: 4, wait: 0, next: 359, dvx: 3, dvy: 550, dvz: 3, centerx: 85, centery: 99, hit_a: 360, hit_d: 360, hit_j: 360,
    mp: -5,
  },
  359: { name: "bird_mode_up",
    pic: 999, state: 4, wait: 0, next: 358, dvx: 3, dvy: 550, dvz: 3, centerx: 85, centery: 99, hit_a: 360, hit_d: 360, hit_j: 360,
    mp: -5,
  },
  360: { name: "bird_mode_up",
    pic: 147, state: 100, wait: 3, next: 360, dvx: 0, dvy: 30, dvz: 0, centerx: 85, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 8, y: 54, w: 133, h: 55, zwidth: 55, dvx: 10, dvy: -5, fall: 100, vrest: 15, bdefend: 100, injury: 95, effect: 0 },
  },
  361: { name: "bird_mode_up",
    pic: 147, state: 15, wait: 0, next: 362, dvx: 0, dvy: 550, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 80, y: 120, action: 255, oid: 207, facing: 0 },
  },
  362: { name: "bird_mode_up",
    pic: 147, state: 15, wait: 0, next: 363, dvx: 0, dvy: 550, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: -2, dvy: 0, dvz: 0, kind: 1, x: 85, y: 60, action: 20, oid: 204, facing: 31 },
  },
  363: { name: "bird_mode_up",
    pic: 140, state: 15, wait: 2, next: 353, dvx: 0, dvy: -5, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: -2, dvy: 0, dvz: 0, kind: 1, x: 85, y: 60, action: 20, oid: 204, facing: 30 },
    bdy: { kind: 0, x: 69, y: 17, w: 31, h: 52 }
  },
  364: { name: "bird_mode_gone",
    pic: 140, state: 15, wait: 0, next: 365, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  365: { name: "bird_mode_gone",
    pic: 140, state: 15, wait: 0, next: 366, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 85, y: 200, action: 95, oid: 433, facing: 30 },
  },
  366: { name: "bird_mode_gone",
    pic: 63, state: 15, wait: 0, next: 999, dvx: -5, dvy: -15, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  370: { name: "bird_mode_attack",
    pic: 147, state: 15, wait: 2, next: 371, dvx: 550, dvy: 550, dvz: 550, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  371: { name: "bird_mode_attack",
    pic: 148, state: 15, wait: 2, next: 372, dvx: -2, dvy: -5, dvz: 550, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 80, y: 120, action: 250, oid: 207, facing: 0 },
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  372: { name: "bird_mode__attack",
    pic: 149, state: 15, wait: 2, next: 373, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 83, y: 120, action: 250, oid: 207, facing: 0 },
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  373: { name: "bird_mode_attack",
    pic: 150, state: 15, wait: 2, next: 374, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 80, y: 120, action: 250, oid: 207, facing: 0 },
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  374: { name: "bird_mode_attack",
    pic: 147, state: 15, wait: 2, next: 375, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  375: { name: "bird_mode_attack",
    pic: 148, state: 15, wait: 2, next: 376, dvx: -2, dvy: -6, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 83, y: 120, action: 250, oid: 207, facing: 0 },
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  376: { name: "bird_mode__attack",
    pic: 149, state: 15, wait: 2, next: 377, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 83, y: 120, action: 250, oid: 207, facing: 0 },
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  377: { name: "bird_mode_attack",
    pic: 150, state: 15, wait: 2, next: 378, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 83, y: 120, action: 250, oid: 207, facing: 0 },
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  378: { name: "bird_mode_attack",
    pic: 147, state: 15, wait: 2, next: 379, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  379: { name: "bird_mode_attack",
    pic: 148, state: 15, wait: 2, next: 380, dvx: -2, dvy: -7, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 83, y: 120, action: 250, oid: 207, facing: 0 },
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  380: { name: "bird_mode__attack",
    pic: 149, state: 15, wait: 2, next: 381, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 83, y: 120, action: 250, oid: 207, facing: 0 },
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
  },
  381: { name: "bird_mode_attack",
    pic: 147, state: 15, wait: 9, next: 346, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 69, y: 17, w: 31, h: 52 },
      { kind: 0, x: 10, y: 63, w: 113, h: 45 }
    ]
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
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 81, action: 125, oid: 201, facing: 0 },
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0 },
  },
  500: { name: "defend2",
    pic: 50, state: 6001, wait: 0, next: 501, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 110, hit_j: 0,
  },
  501: { name: "defendend",
    pic: 50, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 16, y: 19, w: 42, h: 60 }
  }
  }
});