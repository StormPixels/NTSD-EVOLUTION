define({
  bmp: {
    file: [
      { "file(0-69)": "sprite/killerbee_0.png", w: 79, h: 79, row: 10, col: 7 },
      { "file(70-139)": "sprite/killerbee_1.png", w: 79, h: 79, row: 10, col: 7 },
      { "file(140-174)": "sprite/killerbee_2.png", w: 159, h: 99, row: 5, col: 7 }
    ],
    name: "Killerbee",
    head: "sprite/bee_f.png",
    small: "sprite/killerbee_s.png",
    walking_frame_rate: 3,
    walking_speed: 4,
    walking_speedz: 2,
    running_frame_rate: 3,
    running_speed: 19.5,
    running_speedz: 3.3,
    heavy_walking_speed: 3,
    heavy_walking_speedz: 1.5,
    heavy_running_speed: 5,
    heavy_running_speedz: 0.8,
    jump_height: -16.299999,
    jump_distance: 8,
    jump_distancez: 3,
    dash_height: -13.4,
    dash_distance: 14.3,
    dash_distancez: 3.75,
    rowing_height: -2,
    rowing_distance: 20
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 6, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 266, hit_d: 0, hit_j: 0, hit_ja: 245, hit_Fj: 320, hit_Fa: 345, hit_Da: 284, hit_Ua: 64, hit_Uj: 48,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 26, y: 11, w: 30, h: 68 }
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 6, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 266, hit_d: 0, hit_j: 0, hit_ja: 245, hit_Fj: 320, hit_Fa: 345, hit_Da: 284, hit_Ua: 64, hit_Uj: 48,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 26, y: 11, w: 30, h: 68 }
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 6, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 266, hit_d: 0, hit_j: 0, hit_ja: 245, hit_Fj: 320, hit_Fa: 345, hit_Da: 284, hit_Ua: 64, hit_Uj: 48,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 26, y: 11, w: 30, h: 68 }
  },
  3: { name: "standing",
    pic: 3, state: 1, wait: 6, next: 999, dvx: 550, dvy: 550, dvz: 0, centerx: 41, centery: 79, hit_a: 266, hit_d: 0, hit_j: 0, hit_ja: 245, hit_Fj: 320, hit_Fa: 345, hit_Da: 284, hit_Ua: 64, hit_Uj: 48,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 26, y: 11, w: 30, h: 68 }
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 266, hit_d: 0, hit_j: 0, hit_ja: 245, hit_Fj: 320, hit_Fa: 345, hit_Da: 284, hit_Ua: 64, hit_Uj: 48,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 13, w: 28, h: 66 }
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 79, hit_a: 266, hit_d: 0, hit_j: 0, hit_ja: 245, hit_Fj: 320, hit_Fa: 345, hit_Da: 284, hit_Ua: 64, hit_Uj: 48,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 30, y: 13, w: 27, h: 66 }
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 79, hit_a: 266, hit_d: 0, hit_j: 0, hit_ja: 245, hit_Fj: 320, hit_Fa: 345, hit_Da: 284, hit_Ua: 64, hit_Uj: 48,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 31, y: 13, w: 26, h: 66 }
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 79, hit_a: 266, hit_d: 0, hit_j: 0, hit_ja: 245, hit_Fj: 320, hit_Fa: 345, hit_Da: 284, hit_Ua: 64, hit_Uj: 48,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 14, w: 29, h: 65 }
  },
  9: { name: "running",
    pic: 20, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/003",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 30, y: 24, w: 30, h: 55 }
  },
  10: { name: "running",
    pic: 21, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 33, y: 24, w: 30, h: 55 }
  },
  11: { name: "running",
    pic: 22, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/004",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 30, y: 24, w: 30, h: 55 }
  },
  12: { name: "heavy_obj_walk",
    pic: 23, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 35, weaponact: 10, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 29, y: 15, w: 28, h: 64 }
  },
  13: { name: "heavy_obj_walk",
    pic: 24, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 35, weaponact: 10, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 29, y: 15, w: 28, h: 64 }
  },
  14: { name: "heavy_obj_walk",
    pic: 25, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 35, weaponact: 10, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 29, y: 15, w: 28, h: 64 }
  },
  15: { name: "heavy_obj_walk",
    pic: 26, state: 1, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 35, weaponact: 10, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 29, y: 15, w: 28, h: 64 }
  },
  16: { name: "heavy_obj_walk",
    pic: 23, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 35, weaponact: 10, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 29, y: 15, w: 28, h: 64 }
  },
  20: { name: "normal_weapon_atck",
    pic: 70, state: 3, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/SNDDATA_1881",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  22: { name: "dash2",
    pic: 60, state: 15, wait: 1, next: 23, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 90, hit_d: 107, hit_j: 0,
    sound: "2/Killerbee/Jump",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 29, w: 21, h: 33 }
  },
  23: { name: "dash2",
    pic: 63, state: 15, wait: 4, next: 216, dvx: 16, dvy: -4, dvz: 0, centerx: 39, centery: 79, hit_a: 90, hit_d: 107, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: [
      { kind: 85, x: 0, y: -1930, w: 79, h: 10, dvx: 17 },
      { kind: 84, x: 50, y: -2995, w: 10, h: 5, dvx: 18 }
    ],
    bdy: [
      { kind: 0, x: 28, y: 29, w: 21, h: 33 },
      { kind: 0, x: 13, y: 54, w: 18, h: 17 }
    ]
  },
  25: { name: "normal_weapon_atck",
    pic: 76, state: 3, wait: 1, next: 26, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/SNDDATA_1882",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    itr: { kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1 },
    bdy: { kind: 0, x: 27, y: 17, w: 31, h: 63 }
  },
  26: { name: "normal_weapon_atck",
    pic: 92, state: 3, wait: 2, next: 27, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 28, y: 17, w: 29, h: 63 },
      { kind: 0, x: 45, y: 37, w: 32, h: 11 }
    ]
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
    pic: 75, state: 3, wait: 1, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 10, y: 23, w: 31, h: 55 }
  },
  29: { name: "hang",
    pic: 77, state: 7024, wait: 3, next: 29, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 65, hit_a: 0, hit_d: 24, hit_j: 210,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 84, x: 10, y: -3000, w: 10, h: 10, dvx: 19 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  30: { name: "jump_weapon_atck",
    pic: 97, state: 15, wait: 6, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 22, y: 10, w: 40, h: 52 }
  },
  31: { name: "7_sword_spin3_end",
    pic: 69, state: 15, wait: 1, next: 33, dvx: 0, dvy: 550, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  33: { name: "7_sword_spin3_end",
    pic: 43, state: 15, wait: 3, next: 3, dvx: 0, dvy: 550, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  34: { name: "7_sword_start",
    pic: 53, state: 15, wait: 1, next: 328, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 115,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  35: { name: "run_weapon_atck",
    pic: 70, state: 3, wait: 3, next: 36, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  36: { name: "run_weapon_atck",
    pic: 71, state: 3, wait: 1, next: 37, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  37: { name: "run_weapon_atck",
    pic: 72, state: 3, wait: 3, next: 38, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  38: { name: "run_weapon_atck",
    pic: 73, state: 3, wait: 3, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 46, y: -999, weaponact: 30, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 49, y: 31, w: 30, h: 16, dvx: 2, bdefend: 16, injury: 40, effect: 1 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  40: { name: "dash_weapon_atck",
    pic: 63, state: 3, wait: 0, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 19, y: -999, weaponact: 30, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 15, w: 40, h: 53 }
  },
  41: { name: "dash_weapon_atck",
    pic: 91, state: 3, wait: 7, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 37, y: 69, weaponact: 25, attacking: 4, cover: 0 },
    bdy: { kind: 0, x: 8, y: 32, w: 33, h: 45 }
  },
  42: { name: "combo_2b",
    pic: 145, state: 3, wait: 2, next: 43, dvx: 0, dvy: 550, dvz: 0, centerx: 30, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/Attack3",
    itr: { kind: 0, x: 53, y: 27, w: 70, h: 16, dvx: 0, dvy: -20, bdefend: 16, injury: 60, fall: 70 },
    bdy: { kind: 0, x: 16, y: 41, w: 28, h: 58 }
  },
  43: { name: "combo_2b",
    pic: 161, state: 15, wait: 1, next: 44, dvx: 2, dvy: -11, dvz: 0, centerx: 42, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
  },
  44: { name: "combo_2b",
    pic: 162, state: 15, wait: 1, next: 44, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 30, w: 31, h: 68 }
  },
  45: { name: "light_weapon_thw",
    pic: 41, state: 10061, wait: 3, next: 46, dvx: 0, dvy: 550, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 16, w: 30, h: 61 }
  },
  46: { name: "light_weapon_thw",
    pic: 92, state: 10061, wait: 1, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/Attack2",
    wpoint: { dvx: 35, dvy: -4, dvz: 3, kind: 1, x: 80, y: 35, weaponact: 35, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 24, y: 22, w: 32, h: 57 }
  },
  47: { name: "light_weapon_thw",
    pic: 93, state: 10061, wait: 5, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 10, y: 38, w: 54, h: 21 }
  },
  48: { name: "eight_tail_trans",
    pic: 74, state: 15, wait: 0, next: 49, dvx: 550, dvy: 550, dvz: 550, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/ChargeChakra",
    mp: 135,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 14, w: 24, h: 65 }
  },
  49: { name: "eight_tail_trans",
    pic: 75, state: 15, wait: 1, next: 337, dvx: 550, dvy: 550, dvz: 550, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 22, y: 17, w: 26, h: 62 }
  },
  50: { name: "heavy_weapon_thw",
    pic: 37, state: 15, wait: 6, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 16, y: 52, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 19, w: 30, h: 62 }
  },
  51: { name: "heavy_weapon_thw",
    pic: 29, state: 15, wait: 10, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 28, dvy: -7, dvz: 2, kind: 1, x: 93, y: 57, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 19, y: 56, w: 30, h: 24 }
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 97, state: 15, wait: 1, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 23, dvy: 8, dvz: 3, kind: 1, x: 54, y: 29, weaponact: 42, attacking: 0, cover: 0 },
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 98, state: 15, wait: 1, next: 999, dvx: 0, dvy: -2, dvz: 0, centerx: 39, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/Attack2",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 51, weaponact: 34, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 35, y: 10, w: 36, h: 23 }
  },
  55: { name: "wall_run",
    pic: 71, state: 15, wait: 1, next: 56, dvx: 550, dvy: -10, dvz: 550, centerx: 60, centery: 79, hit_a: 0, hit_d: 0, hit_j: 251,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -30, y: 40, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 82, x: 79, y: -989899, zwidth: 999, w: 59, h: 200, dvx: 251 },
    bdy: [
      { kind: 0, x: 10, y: 40, w: 20, h: 13 },
      { kind: 0, x: 0, y: 777777, w: 79, h: 79 }
    ]
  },
  56: { name: "wall_run",
    pic: 71, state: 15, wait: 1, next: 57, dvx: 550, dvy: -2, dvz: 550, centerx: 60, centery: 79, hit_a: 0, hit_d: 0, hit_j: 251,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -30, y: 40, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 82, x: 79, y: -989899, zwidth: 999, w: 59, h: 200, dvx: 251 },
    bdy: [
      { kind: 0, x: 10, y: 40, w: 20, h: 13 },
      { kind: 0, x: 0, y: 777777, w: 79, h: 79 }
    ]
  },
  57: { name: "wall_run",
    pic: 70, state: 15, wait: 1, next: 58, dvx: 550, dvy: -2, dvz: 550, centerx: 58, centery: 79, hit_a: 0, hit_d: 0, hit_j: 251,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -30, y: 40, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 82, x: 79, y: -989899, zwidth: 999, w: 59, h: 200, dvx: 251 },
    bdy: [
      { kind: 0, x: 10, y: 40, w: 20, h: 13 },
      { kind: 0, x: 0, y: 777777, w: 79, h: 79 }
    ]
  },
  58: { name: "wall_run",
    pic: 71, state: 15, wait: 1, next: 59, dvx: 550, dvy: -2, dvz: 550, centerx: 60, centery: 79, hit_a: 0, hit_d: 0, hit_j: 251,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -30, y: 40, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 82, x: 79, y: -989899, zwidth: 999, w: 59, h: 200, dvx: 251 },
    bdy: [
      { kind: 0, x: 10, y: 40, w: 20, h: 13 },
      { kind: 0, x: 0, y: 777777, w: 79, h: 79 }
    ]
  },
  59: { name: "wall_run",
    pic: 72, state: 15, wait: 1, next: 56, dvx: 550, dvy: -2, dvz: 550, centerx: 63, centery: 79, hit_a: 0, hit_d: 0, hit_j: 251,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -30, y: 40, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 82, x: 79, y: -989899, zwidth: 999, w: 59, h: 200, dvx: 251 },
    bdy: [
      { kind: 0, x: 10, y: 40, w: 20, h: 13 },
      { kind: 0, x: 0, y: 777777, w: 79, h: 79 }
    ]
  },
  60: { name: "punch",
    pic: 10, state: 10061, wait: 5, next: 46, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: [
      { kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1 },
      { kind: 82, x: 38, y: -3940, w: 2, h: 20, dvx: 212 }
    ],
  },
  61: { name: "punch",
    pic: 11, state: 3, wait: 0, next: 62, dvx: 2, dvy: 550, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/Attack1",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 79, action: 100, oid: 223 },
    itr: { kind: 82, x: 38, y: -3940, w: 2, h: 20, dvx: 212 },
  },
  62: { name: "punch",
    pic: 12, state: 3, wait: 1, next: 63, dvx: 0, dvy: 550, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 82, x: 38, y: -3940, w: 2, h: 20, dvx: 212 },
    bdy: { kind: 0, x: 17, y: 14, w: 34, h: 65 }
  },
  63: { name: "punch",
    pic: 12, state: 3, wait: 2, next: 3, dvx: 0, dvy: 550, dvz: 0, centerx: 36, centery: 79, hit_a: 66, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 82, x: 38, y: -3940, w: 2, h: 20, dvx: 212 },
    bdy: { kind: 0, x: 17, y: 14, w: 34, h: 65 }
  },
  64: { name: "write_song",
    pic: 123, state: 15, wait: 2, next: 125, dvx: 550, dvy: 550, dvz: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/Yosh!",
    mp: 40,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
  },
  65: { name: "punch",
    pic: 10, state: 10061, wait: 5, next: 46, dvx: 2, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: [
      { kind: 82, x: 38, y: -3940, w: 2, h: 20, dvx: 212 },
      { kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1 }
    ],
    bdy: { kind: 0, x: 30, y: 18, w: 28, h: 60 }
  },
  66: { name: "punch2",
    pic: 13, state: 3, wait: 2, next: 67, dvx: 2, dvy: 550, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 82, x: 38, y: -3940, w: 2, h: 20, dvx: 212 },
    bdy: { kind: 0, x: 26, y: 12, w: 29, h: 67 }
  },
  67: { name: "punch2",
    pic: 14, state: 3, wait: 0, next: 68, dvx: 0, dvy: 550, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 82, x: 38, y: -3940, w: 2, h: 20, dvx: 212 },
  },
  68: { name: "punch2",
    pic: 15, state: 3, wait: 1, next: 69, dvx: 0, dvy: 550, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/Attack2",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 79, action: 100, oid: 223 },
    itr: { kind: 82, x: 38, y: -3940, w: 2, h: 20, dvx: 212 },
    bdy: { kind: 0, x: 21, y: 23, w: 33, h: 66 }
  },
  69: { name: "punch2",
    pic: 15, state: 3, wait: 2, next: 3, dvx: 0, dvy: 550, dvz: 0, centerx: 38, centery: 79, hit_a: 70, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 82, x: 38, y: -3940, w: 2, h: 20, dvx: 212 },
    bdy: { kind: 0, x: 21, y: 23, w: 33, h: 66 }
  },
  70: { name: "super_punch",
    pic: 16, state: 3, wait: 1, next: 71, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 82, x: 38, y: -3940, w: 2, h: 20, dvx: 212 },
    bdy: { kind: 0, x: 26, y: 18, w: 27, h: 61 }
  },
  71: { name: "super_punch",
    pic: 17, state: 3, wait: 0, next: 72, dvx: 0, dvy: 550, dvz: 0, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 30, y: 18, w: 27, h: 61 }
  },
  72: { name: "super_punch",
    pic: 35, state: 3, wait: 0, next: 73, dvx: 1, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/Attack3",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 21, w: 27, h: 58 }
  },
  73: { name: "super_punch",
    pic: 36, state: 3, wait: 1, next: 74, dvx: 0, dvy: 550, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/103",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
  },
  74: { name: "super_punch2",
    pic: 27, state: 3, wait: 1, next: 75, dvx: 2, dvy: 550, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 26, y: 17, w: 30, h: 62 }
  },
  75: { name: "super_punch2",
    pic: 37, state: 3, wait: 5, next: 3, dvx: 0, dvy: 550, dvz: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 26, y: 17, w: 30, h: 62 }
  },
  76: { name: "7_sword_spin3",
    pic: 121, state: 9, wait: 80, next: 77, dvx: 0, dvy: 550, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/kib",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 58, y: 40, vaction: 131, throwvz: -842150451, throwinjury: -842150451, dircontrol: 0 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  77: { name: "7_sword_spin3",
    pic: 122, state: 9, wait: 0, next: 78, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/033",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 58, y: 40, vaction: 131, injury: 35, throwvz: -842150451, throwinjury: -842150451, dircontrol: 0 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  78: { name: "7_sword_spin3_end",
    pic: 122, state: 9, wait: 3, next: 79, dvx: 30, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 58, y: 65, vaction: 181, hurtable: 0, injury: 0, throwvx: 40, throwvy: -2, throwinjury: 0 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  79: { name: "7_sword_spin3_end",
    pic: 152, state: 15, wait: 1, next: 82, dvx: 0, dvy: 550, dvz: 0, centerx: 69, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 },
      { kind: 0, x: 21, y: 35, w: 43, h: 62 }
    ]
  },
  80: { name: "jump_attack",
    pic: 54, state: 15, wait: 1, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/Attack1",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 37, y: 37, w: 32, h: 42, dvx: 3, dvy: 10, fall: 70, vrest: 10, bdefend: 20, injury: 50 },
  },
  81: { name: "jump_attack",
    pic: 55, state: 15, wait: 5, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
  },
  82: { name: "7_sword_spin3_end",
    pic: 153, state: 15, wait: 15, next: 83, dvx: 550, dvy: 550, dvz: 0, centerx: 57, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 },
      { kind: 0, x: 21, y: 35, w: 43, h: 62 }
    ]
  },
  83: { name: "7_sword_spin3_end",
    pic: 67, state: 15, wait: 1, next: 84, dvx: 0, dvy: 550, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  84: { name: "7_sword_spin3_end",
    pic: 68, state: 15, wait: 1, next: 31, dvx: 0, dvy: 550, dvz: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  85: { name: "run_attack",
    pic: 90, state: 3, wait: 2, next: 86, dvx: 0, dvy: 550, dvz: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 23, y: 12, w: 27, h: 67 }
  },
  86: { name: "run_attack",
    pic: 115, state: 3, wait: 1, next: 87, dvx: 0, dvy: 550, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
  },
  87: { name: "run_attack",
    pic: 164, state: 3, wait: 1, next: 88, dvx: 0, dvy: 550, dvz: 0, centerx: 34, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/Attack3",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 53, y: 27, w: 60, h: 16, dvx: 2, bdefend: 16, injury: 65, fall: 70 },
  },
  88: { name: "run_attack",
    pic: 165, state: 3, wait: 5, next: 89, dvx: 0, dvy: 550, dvz: 0, centerx: 33, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
  },
  89: { name: "run_attack",
    pic: 90, state: 3, wait: 2, next: 3, dvx: 0, dvy: 550, dvz: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 23, y: 12, w: 27, h: 67 }
  },
  90: { name: "dash_attack",
    pic: 125, state: 15, wait: 1, next: 80, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 22, y: 10, w: 40, h: 52 }
  },
  91: { name: "dash_attack",
    pic: 82, state: 15, wait: 1, next: 92, dvx: 8, dvy: -10, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 260,
    sound: "2/SNDDATA_1860",
    bdy: { kind: 0, x: 13, y: 36, w: 52, h: 18 }
  },
  92: { name: "dash_attack",
    pic: 83, state: 15, wait: 1, next: 93, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 260,
    sound: "2/007",
    itr: { kind: 0, x: 53, y: 27, w: 60, h: 16, dvx: 2, bdefend: 16, injury: 25 },
    bdy: { kind: 0, x: 22, y: 36, w: 50, h: 18 }
  },
  93: { name: "7_sword_spin",
    dvx: 0, dvy: 0, dvz: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 38, y: 45, w: 9, h: 9 }
  },
  94: { name: "7_sword_spin",
    pic: 41, state: 6093, wait: 2, next: 999, dvx: 550, dvy: 550, dvz: 5, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 38, y: 45, w: 9, h: 9 }
  },
  95: { name: "dash_defend",
    pic: 64, state: 7, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 21, y: -999, weaponact: 30, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 37, w: 24, h: 34 }
  },
  96: { name: "lightning_sword",
    pic: 108, state: 3, wait: 7, next: 3, dvx: 0, dvy: 550, dvz: 0, centerx: 35, centery: 79, hit_a: 288, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 20, y: 16, w: 30, h: 63 }
  },
  97: { name: "7_sword_spin",
    pic: 116, state: 100, wait: 1, next: 173, dvx: 35, dvy: -3, dvz: 5, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    mp: 20,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  100: { name: "rowing",
    pic: 65, state: 6, wait: 2, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 53, y: -999, weaponact: 27, attacking: 0, cover: 0 },
  },
  101: { name: "rowing",
    pic: 65, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 53, y: -999, weaponact: 27, attacking: 0, cover: 0 },
  },
  102: { name: "rowing",
    pic: 129, state: 6, wait: 0, next: 103, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
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
    pic: 129, state: 6, wait: 2, next: 999, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -999, weaponact: 75, attacking: 0, cover: 0 },
  },
  107: { name: "rowing",
    pic: 129, state: 6, wait: 2, next: 215, dvx: 2, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 27, attacking: 0, cover: 1 },
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
    pic: 40, state: 7, wait: 12, next: 999, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 16, y: 19, w: 42, h: 60 }
  },
  112: { name: "broken_defend",
    pic: 31, state: 8, wait: 5, next: 113, dvx: -2, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1 },
    bdy: { kind: 0, x: 5, y: 17, w: 64, h: 65 }
  },
  113: { name: "broken_defend",
    pic: 40, state: 8, wait: 0, next: 999, dvx: -1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1 },
    bdy: { kind: 0, x: 5, y: 17, w: 64, h: 65 }
  },
  114: { name: "eight_tail_trans",
    pic: 80, state: 15, wait: 2, next: 118, dvx: 550, dvy: 550, dvz: 550, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/bubble",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 17, w: 32, h: 62 }
  },
  115: { name: "picking_light",
    pic: 60, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 43, w: 33, h: 37 }
  },
  116: { name: "picking_heavy",
    pic: 60, state: 15, wait: 5, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 43, w: 33, h: 37 }
  },
  117: { name: "picking_heavy",
    pic: 61, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 66, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 43, w: 33, h: 37 }
  },
  118: { name: "eight_tail_trans",
    pic: 81, state: 15, wait: 2, next: 119, dvx: 550, dvy: 550, dvz: 550, centerx: 42, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 17, w: 32, h: 62 }
  },
  119: { name: "eight_tail_trans",
    pic: 82, state: 15, wait: 2, next: 149, dvx: 550, dvy: 550, dvz: 550, centerx: 42, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 17, w: 32, h: 62 }
  },
  120: { name: "catching",
    pic: 46, state: 9, wait: 0, next: 121, dvx: 15, dvy: 550, dvz: 550, centerx: 27, centery: 79, hit_a: 0, hit_d: 370, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 80, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 10 },
    bdy: { kind: 0, x: 19, y: 15, w: 28, h: 65 }
  },
  121: { name: "eight_tail_trans",
    pic: 81, state: 15, wait: 2, next: 149, dvx: 550, dvy: 550, dvz: 550, centerx: 42, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 17, w: 32, h: 62 }
  },
  125: { name: "write_song",
    pic: 124, state: 15, wait: 5, next: 126, dvx: 550, dvy: 550, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 79, action: 0, oid: 513, facing: 0 },
    itr: [
      { kind: 8, x: 0, y: 50000000, w: 79, h: 79, dvx: 238 },
      { kind: 8, x: 0, y: 60000000, w: 79, h: 79, dvx: 238 }
    ],
  },
  126: { name: "write_song",
    pic: 125, state: 15, wait: 2, next: 127, dvx: 0, dvy: 550, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: [
      { kind: 8, x: 0, y: 50000000, w: 79, h: 79, dvx: 238 },
      { kind: 8, x: 0, y: 60000000, w: 79, h: 79, dvx: 238 }
    ],
  },
  127: { name: "write_song",
    pic: 126, state: 15, wait: 2, next: 128, dvx: 0, dvy: 550, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: [
      { kind: 8, x: 0, y: 50000000, w: 79, h: 79, dvx: 238 },
      { kind: 8, x: 0, y: 60000000, w: 79, h: 79, dvx: 238 }
    ],
  },
  128: { name: "write_song",
    pic: 127, state: 15, wait: 2, next: 129, dvx: 0, dvy: 550, dvz: 0, centerx: 38, centery: 79, hit_a: 341, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: [
      { kind: 8, x: 0, y: 50000000, w: 79, h: 79, dvx: 238 },
      { kind: 8, x: 0, y: 60000000, w: 79, h: 79, dvx: 238 }
    ],
  },
  129: { name: "write_song",
    pic: 123, state: 15, wait: 2, next: 3, dvx: 0, dvy: 550, dvz: 0, centerx: 34, centery: 79, hit_a: 341, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
  },
  130: { name: "picked_caught",
    pic: 30, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 31, y: 56, weaponact: 30, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 41, y: 39, fronthurtact: 132, backhurtact: 131 },
    bdy: { kind: 0, x: 26, y: 14, w: 28, h: 66 }
  },
  131: { name: "picked_caught",
    pic: 30, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 26, y: 54, weaponact: 31, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 41, y: 39, fronthurtact: 132, backhurtact: 132 },
    bdy: { kind: 0, x: 26, y: 14, w: 28, h: 66 }
  },
  132: { name: "picked_caught",
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 51, weaponact: 30, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 41, y: 39, fronthurtact: 131, backhurtact: 131 },
    bdy: { kind: 0, x: 26, y: 14, w: 28, h: 66 }
  },
  133: { name: "picked_caught",
    pic: 33, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 46, weaponact: 22, attacking: 0, cover: 0 },
    cpoint: { kind: 2, x: 33, y: 36 },
  },
  134: { name: "picked_caught",
    pic: 34, state: 10, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
  149: { name: "eight_tail_trans",
    pic: 83, state: 15, wait: 1, next: 162, dvx: 550, dvy: 550, dvz: 550, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 17, w: 32, h: 62 }
  },
  150: { name: "combo2a",
    pic: 45, state: 3, wait: 1, next: 151, dvx: 0, dvy: 550, dvz: 0, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/Attack3",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 9, y: 16, w: 22, h: 64 }
  },
  151: { name: "combo2a",
    pic: 151, state: 3, wait: 1, next: 152, dvx: 50, dvy: 550, dvz: 0, centerx: 64, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 53, y: 27, w: 40, h: 16, dvx: 10, dvy: -10, bdefend: 16, injury: 95, fall: 70 },
  },
  152: { name: "combo2a",
    pic: 39, state: 3, wait: 1, next: 153, dvx: 0, dvy: 550, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 53, y: 27, w: 40, h: 16, dvx: 10, dvy: -10, bdefend: 16, injury: 95, fall: 70 },
    bdy: { kind: 0, x: 25, y: 21, w: 31, h: 55 }
  },
  153: { name: "combo2a",
    pic: 59, state: 3, wait: 5, next: 3, dvx: 550, dvy: 550, dvz: 0, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 53, y: 27, w: 40, h: 16, dvx: 10, dvy: -10, bdefend: 16, injury: 95, fall: 70 },
    bdy: { kind: 0, x: 18, y: 21, w: 31, h: 55 }
  },
  162: { name: "eight_tail_trans",
    pic: 84, state: 15, wait: 1, next: 163, dvx: 550, dvy: 550, dvz: 550, centerx: 50, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  163: { name: "eight_tail_trans",
    pic: 85, state: 15, wait: 1, next: 164, dvx: 550, dvy: 550, dvz: 550, centerx: 50, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  164: { name: "eight_tail_trans",
    pic: 86, state: 8068, wait: 0, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 50, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  171: { name: "7_sword_spin",
    pic: 119, state: 15, wait: 0, next: 352, dvx: 550, dvy: 550, dvz: 1, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  172: { name: "7_sword_spin",
    pic: 116, state: 15, wait: 1, next: 342, dvx: 550, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    mp: 50,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  173: { name: "7_sword_spin",
    pic: 117, state: 100, wait: 0, next: 174, dvx: 22, dvy: 0, dvz: 550, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    mp: -1,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  174: { name: "7_sword_spin",
    pic: 118, state: 100, wait: 0, next: 175, dvx: 22, dvy: 0, dvz: 550, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    mp: -1,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  175: { name: "7_sword_spin",
    pic: 119, state: 100, wait: 0, next: 177, dvx: 22, dvy: 0, dvz: 5, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    mp: -1,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  177: { name: "7_sword_spin",
    pic: 116, state: 100, wait: 0, next: 350, dvx: 22, dvy: 0, dvz: 5, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    mp: -1,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  178: { name: "defend",
    pic: 40, state: 14003, wait: 0, next: 110, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
  },
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/KillerbeeDie",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 47, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 21, y: 14, w: 29, h: 44, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: [
      { kind: 0, x: 25, y: 25, w: 21, h: 20 },
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
    ]
  },
  181: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 36, weaponact: 21, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 15, y: 11, w: 42, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 35, y: 30, w: 27, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: [
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 },
      { kind: 0, x: 22, y: 20, w: 24, h: 23 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
    ]
  },
  182: { name: "falling",
    pic: 32, state: 12, wait: 6, next: 0, dvx: -3, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 37, weaponact: 21, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 13, y: 18, w: 46, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: [
      { kind: 0, x: 27, y: 22, w: 20, h: 18 },
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
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
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 },
      { kind: 0, x: 22, y: 30, w: 27, h: 21 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
    ]
  },
  184: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 36, y: 74, weaponact: 32, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
    ]
  },
  185: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 37, y: 64, weaponact: 31, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
    ]
  },
  186: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/KillerbeeDie",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 21, y: 45, weaponact: 34, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 22, y: 12, w: 36, h: 50, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: [
      { kind: 0, x: 31, y: 24, w: 25, h: 23 },
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
    ]
  },
  187: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 23, y: 42, weaponact: 20, attacking: 0, cover: 0 },
    itr: [
      { kind: 4, x: 33, y: 6, w: 26, h: 46, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 26, y: 43, w: 21, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: [
      { kind: 0, x: 28, y: 27, w: 24, h: 26 },
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
    ]
  },
  188: { name: "falling",
    pic: 32, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 31, y: 42, weaponact: 22, attacking: 0, cover: 0 },
    itr: { kind: 4, x: 14, y: 29, w: 58, h: 23, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: [
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 },
      { kind: 0, x: 30, y: 31, w: 24, h: 21 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
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
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 },
      { kind: 0, x: 30, y: 39, w: 23, h: 21 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
    ]
  },
  190: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 31, y: 74, weaponact: 24, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
    ]
  },
  191: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 67, weaponact: 25, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 25, y: -90000000000000, w: 21, h: 20 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
    ]
  },
  200: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 201, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 18, y: 45, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
  },
  201: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -45,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 18, y: 44, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
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
    pic: 60, state: 4, wait: 2, next: 211, dvx: 0, dvy: 550, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 24, w: 32, h: 55 }
  },
  211: { name: "jump",
    pic: 61, state: 4, wait: 1, next: 212, dvx: 0, dvy: 550, dvz: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/Jump",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 20, y: 25, w: 30, h: 54 }
  },
  212: { name: "jump",
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 86, hit_a: 0, hit_d: 0, hit_j: 252, hit_Fj: 34,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: [
      { kind: 85, x: 0, y: -1930, w: 79, h: 10, dvx: 17 },
      { kind: 84, x: 50, y: -2995, w: 10, h: 5, dvx: 18 }
    ],
    bdy: { kind: 0, x: 32, y: 9, w: 26, h: 60 }
  },
  213: { name: "dash",
    pic: 63, state: 15, wait: 4, next: 216, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/Jump",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: [
      { kind: 85, x: 0, y: -1930, w: 79, h: 10, dvx: 17 },
      { kind: 84, x: 50, y: -2995, w: 10, h: 5, dvx: 18 }
    ],
    bdy: [
      { kind: 0, x: 28, y: 29, w: 21, h: 33 },
      { kind: 0, x: 13, y: 54, w: 18, h: 17 }
    ]
  },
  214: { name: "dash",
    pic: 62, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: [
      { kind: 85, x: 0, y: -1930, w: 79, h: 10, dvx: 17 },
      { kind: 84, x: 50, y: -2995, w: 10, h: 5, dvx: 18 }
    ],
    bdy: { kind: 0, x: 18, y: 14, w: 19, h: 27 }
  },
  215: { name: "crouch",
    pic: 60, state: 15, wait: 2, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/012",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 26, y: 40, w: 29, h: 38 }
  },
  216: { name: "dash",
    pic: 62, state: 5, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 252, hit_Fj: 34,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: [
      { kind: 85, x: 0, y: -1930, w: 79, h: 10, dvx: 17 },
      { kind: 84, x: 50, y: -2995, w: 10, h: 5, dvx: 18 },
      { kind: 80, x: 79, y: -999899, zwidth: 999, w: 59, h: 200, dvx: 55 }
    ],
    bdy: { kind: 0, x: 16, y: 30, w: 39, h: 37 }
  },
  217: { name: "dash",
    pic: 62, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 252, hit_Fj: 34,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: [
      { kind: 85, x: 0, y: -1930, w: 79, h: 10, dvx: 17 },
      { kind: 84, x: 50, y: -2995, w: 10, h: 5, dvx: 18 }
    ],
    bdy: { kind: 0, x: 18, y: 13, w: 29, h: 51 }
  },
  218: { name: "stop_running",
    pic: 30, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 17, y: 25, w: 30, h: 55 }
  },
  219: { name: "crouch2",
    pic: 61, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/012",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 26, y: 36, w: 29, h: 44 }
  },
  220: { name: "injured",
    pic: 30, state: 11, wait: 0, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 57, y: 48, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 47, y: 23, w: 23, h: 54 },
      { kind: 0, x: 29, y: 41, w: 20, h: 37 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
    ]
  },
  221: { name: "injured",
    pic: 30, state: 11, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    sound: "2/Killerbee/KillerbeeHurt",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 60, y: 48, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 46, y: 23, w: 21, h: 56 },
      { kind: 0, x: 30, y: 40, w: 17, h: 41 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
    ]
  },
  222: { name: "injured",
    pic: 31, state: 11, wait: 0, next: 223, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    sound: "2/Killerbee/KillerbeeHurt",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 27, y: 58, weaponact: 20, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 11, y: 24, w: 39, h: 31 },
      { kind: 0, x: 25, y: 53, w: 40, h: 27 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
    ]
  },
  223: { name: "injured",
    pic: 31, state: 11, wait: 0, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 24, y: 58, weaponact: 21, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 12, y: 23, w: 40, h: 37 },
      { kind: 0, x: 27, y: 56, w: 36, h: 24 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
    ]
  },
  224: { name: "injured",
    pic: 30, state: 11, wait: 0, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 32, y: 53, weaponact: 35, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 32, y: 18, w: 28, h: 60 },
      { kind: 0, x: 52, y: 38, w: 20, h: 19 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
    ]
  },
  225: { name: "injured",
    pic: 30, state: 11, wait: 0, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 24, y: 53, weaponact: 20, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 24, y: 18, w: 35, h: 63 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
    ]
  },
  226: { name: "injured",
    pic: 31, state: 16, wait: 0, next: 227, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: 49, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: [
      { kind: 0, x: 27, y: 22, w: 42, h: 58 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
    ]
  },
  227: { name: "injured",
    pic: 31, state: 16, wait: 3, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 235,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: 49, weaponact: 35, attacking: 0, cover: 0 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: [
      { kind: 0, x: 27, y: 22, w: 42, h: 58 },
      { kind: 0, x: 39, y: 90666, w: 10, h: 50 }
    ]
  },
  228: { name: "quick_get",
    pic: 61, state: 15, wait: 0, next: 229, dvx: -15, dvy: -7, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    mp: 1128,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  229: { name: "quick_get",
    pic: 64, state: 15, wait: 10, next: 229, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  230: { name: "lying",
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 74, weaponact: 32, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 0, y: 30000, w: 79, h: 500 }
  },
  231: { name: "lying",
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 29, state: 9, wait: 10, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 49, weaponact: 25, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 8, y: 39, w: 61, h: 23 },
      { kind: 0, x: 19, y: 56, w: 30, h: 24 }
    ]
  },
  235: { name: "replacement",
    pic: 30, state: 15, wait: 0, next: 236, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 60,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0 },
  },
  236: { name: "replacement",
    pic: 30, state: 15, wait: 0, next: 237, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 79, action: 140, oid: 522, facing: 0 },
  },
  237: { name: "replacement",
    pic: 30, state: 15, wait: 0, next: 241, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 52, y: 24, weaponact: 31, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 79, action: 144, oid: 522, facing: 0 },
  },
  238: { name: "replacement",
    dvx: 0, dvy: 0, dvz: 0, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  239: { name: "replacement",
    pic: 999, state: 400, wait: 1, next: 242, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  240: { name: "replacement",
    pic: 999, state: 15, wait: 0, next: 280, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 70, action: 60, oid: 204, facing: 0 },
  },
  241: { name: "replacement",
    pic: 999, state: 15, wait: 0, next: 240, dvx: -85, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  242: { name: "replacement",
    pic: 999, state: 15, wait: 1, next: 243, dvx: 40, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  243: { name: "replacement",
    pic: 999, state: 15, wait: 1, next: 400, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 70, action: 60, oid: 204, facing: 0 },
  },
  245: { name: "charge",
    pic: 78, state: 3, wait: 1, next: 246, dvx: 0, dvy: 550, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/ChargeChakra",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 45, y: 29, weaponact: 100, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 29, y: 22, w: 29, h: 57 },
      { kind: 0, x: 22, y: 60000, w: 40, h: 500 }
    ]
  },
  246: { name: "charge",
    pic: 79, state: 17, wait: 1, next: 247, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 2, x: 42, y: 81, action: 20, oid: 123, facing: 0 },
    bdy: { kind: 0, x: 29, y: 22, w: 29, h: 57 }
  },
  247: { name: "charge",
    pic: 73, state: 17, wait: 3, next: 248, dvx: 0, dvy: 550, dvz: 0, centerx: 44, centery: 79, hit_a: 250, hit_d: 250, hit_j: 250,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 49, y: 50, action: 4, oid: 203 },
    bdy: { kind: 0, x: 29, y: 22, w: 29, h: 57 }
  },
  248: { name: "charge",
    pic: 73, state: 17, wait: 3, next: 249, dvx: 0, dvy: 550, dvz: 0, centerx: 44, centery: 79, hit_a: 250, hit_d: 250, hit_j: 250,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 22, w: 29, h: 57 }
  },
  249: { name: "charge",
    pic: 73, state: 17, wait: 3, next: 247, dvx: 0, dvy: 550, dvz: 0, centerx: 44, centery: 79, hit_a: 250, hit_d: 250, hit_j: 250,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 22, w: 29, h: 57 }
  },
  250: { name: "charge",
    pic: 78, state: 15, wait: 0, next: 3, dvx: 0, dvy: 550, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 29, y: 22, w: 29, h: 57 },
      { kind: 0, x: 26, y: 55, w: 32, h: 26 }
    ]
  },
  251: { name: "jump2",
    pic: 60, state: 15, wait: 1, next: 253, dvx: -5, dvy: -1, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
  },
  252: { name: "jump2",
    pic: 46, state: 4, wait: 1, next: 253, dvx: 0, dvy: 550, dvz: 0, centerx: 42, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 8, w: 25, h: 52 }
  },
  253: { name: "jump2",
    pic: 47, state: 15, wait: 0, next: 254, dvx: 0, dvy: -6, dvz: 3, centerx: 67, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 80, oid: 522 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  254: { name: "jump2",
    pic: 48, state: 15, wait: 0, next: 255, dvx: 0, dvy: -6, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 80, oid: 522 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  255: { name: "jump2",
    pic: 140, state: 15, wait: 0, next: 256, dvx: 0, dvy: -2, dvz: 0, centerx: 65, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 80, oid: 522 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  256: { name: "jump2",
    pic: 47, state: 15, wait: 0, next: 257, dvx: 0, dvy: -2, dvz: 0, centerx: 67, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 80, oid: 522 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  257: { name: "jump2",
    pic: 48, state: 15, wait: 0, next: 258, dvx: 0, dvy: -2, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 80, oid: 522 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  258: { name: "jump2",
    pic: 140, state: 15, wait: 0, next: 259, dvx: 0, dvy: -2, dvz: 0, centerx: 65, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 80, oid: 522 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  259: { name: "jump2",
    pic: 47, state: 15, wait: 0, next: 260, dvx: 0, dvy: -2, dvz: 0, centerx: 67, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 80, oid: 522 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  260: { name: "jump2",
    pic: 48, state: 15, wait: 0, next: 261, dvx: 0, dvy: -2, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 80, oid: 522 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  261: { name: "jump2",
    pic: 140, state: 15, wait: 0, next: 262, dvx: 0, dvy: -2, dvz: 0, centerx: 65, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 80, oid: 522 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  262: { name: "jump2",
    pic: 47, state: 15, wait: 0, next: 263, dvx: 0, dvy: -2, dvz: 0, centerx: 67, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 80, oid: 522 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  263: { name: "jump2",
    pic: 48, state: 15, wait: 1, next: 264, dvx: 0, dvy: -2, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 80, oid: 522 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  264: { name: "jump2",
    pic: 49, state: 15, wait: 1, next: 265, dvx: 0, dvy: -2, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 80, oid: 522 },
    bdy: { kind: 0, x: 29, y: 8, w: 25, h: 52 }
  },
  265: { name: "jump2",
    pic: 28, state: 15, wait: 1, next: 265, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_d: 265, hit_j: 265, hit_Fj: 34, hit_a: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 8, w: 25, h: 52 }
  },
  266: { name: "combo2",
    pic: 41, state: 3, wait: 1, next: 267, dvx: 0, dvy: 550, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 355,
    wpoint: { dvx: 50, dvy: 0, dvz: 0, kind: 1, x: 60, y: 20, weaponact: 4, attacking: 0, cover: 0 },
    itr: { kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1 },
    bdy: { kind: 0, x: 29, y: 16, w: 30, h: 61 }
  },
  267: { name: "combo2",
    pic: 42, state: 3, wait: 0, next: 268, dvx: 0, dvy: 550, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 355,
    sound: "2/028",
    bdy: { kind: 0, x: 29, y: 16, w: 30, h: 61 }
  },
  268: { name: "combo2",
    pic: 144, state: 3, wait: 1, next: 269, dvx: 2, dvy: 550, dvz: 0, centerx: 50, centery: 99, hit_a: 0, hit_d: 0, hit_j: 355,
    sound: "2/Killerbee/Attack1",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 53, y: 27, w: 60, h: 16, dvx: 2, bdefend: 16, injury: 25 },
  },
  269: { name: "combo2",
    pic: 145, state: 3, wait: 2, next: 270, dvx: 0, dvy: 550, dvz: 0, centerx: 30, centery: 99, hit_a: 0, hit_d: 42, hit_j: 355,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 16, y: 41, w: 28, h: 58 }
  },
  270: { name: "combo2",
    pic: 145, state: 3, wait: 2, next: 3, dvx: 0, dvy: 550, dvz: 0, centerx: 30, centery: 99, hit_a: 271, hit_d: 42, hit_j: 355,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 16, y: 41, w: 28, h: 58 }
  },
  271: { name: "combo2",
    pic: 146, state: 3, wait: 1, next: 272, dvx: 0, dvy: 550, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 355,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 31, y: 34, w: 23, h: 65 }
  },
  272: { name: "combo2",
    pic: 38, state: 3, wait: 0, next: 273, dvx: 0, dvy: 550, dvz: 0, centerx: 59, centery: 79, hit_a: 0, hit_d: 0, hit_j: 355,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 45, y: 14, w: 25, h: 65 }
  },
  273: { name: "combo2",
    pic: 147, state: 3, wait: 1, next: 274, dvx: 3, dvy: 550, dvz: 0, centerx: 41, centery: 99, hit_a: 0, hit_d: 0, hit_j: 355,
    sound: "2/Killerbee/Attack2",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 53, y: 27, w: 60, h: 16, dvx: 2, bdefend: 16, injury: 25 },
  },
  274: { name: "combo2",
    pic: 29, state: 3, wait: 1, next: 275, dvx: 0, dvy: 550, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 42, hit_j: 355,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 14, w: 26, h: 65 }
  },
  275: { name: "combo2",
    pic: 29, state: 3, wait: 2, next: 3, dvx: 0, dvy: 550, dvz: 0, centerx: 38, centery: 79, hit_a: 276, hit_d: 42, hit_j: 355,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 14, w: 26, h: 65 }
  },
  276: { name: "combo2",
    pic: 148, state: 3, wait: 1, next: 277, dvx: 0, dvy: 550, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 355,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 34, w: 29, h: 65 }
  },
  277: { name: "combo2",
    pic: 149, state: 3, wait: 1, next: 278, dvx: 3, dvy: 550, dvz: 0, centerx: 30, centery: 99, hit_a: 0, hit_d: 0, hit_j: 355,
    sound: "2/Killerbee/Attack3",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: [
      { kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1 },
      { kind: 0, x: 53, y: 27, w: 70, h: 16, dvx: 10, dvy: -10, bdefend: 16, injury: 60, fall: 70 }
    ],
  },
  278: { name: "combo2",
    pic: 150, state: 3, wait: 7, next: 279, dvx: 550, dvy: 550, dvz: 0, centerx: 27, centery: 99, hit_a: 0, hit_d: 0, hit_j: 355,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 23, y: 40, w: 37, h: 59 }
  },
  279: { name: "combo2",
    pic: 43, state: 3, wait: 3, next: 3, dvx: 0, dvy: 550, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 355,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 15, w: 26, h: 64 }
  },
  280: { name: "combo2a",
    pic: 45, state: 3, wait: 1, next: 281, dvx: 0, dvy: 550, dvz: 0, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/Attack3",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 9, y: 16, w: 22, h: 64 }
  },
  281: { name: "combo2a",
    pic: 151, state: 3, wait: 1, next: 282, dvx: 50, dvy: 550, dvz: 0, centerx: 64, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 53, y: 27, w: 40, h: 16, dvx: 10, dvy: -10, bdefend: 16, injury: 50, fall: 70 },
  },
  282: { name: "combo2a",
    pic: 39, state: 3, wait: 1, next: 283, dvx: 0, dvy: 550, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 53, y: 27, w: 40, h: 16, dvx: 10, dvy: -10, bdefend: 16, injury: 50, fall: 70 },
    bdy: { kind: 0, x: 25, y: 21, w: 31, h: 55 }
  },
  283: { name: "combo2a",
    pic: 59, state: 3, wait: 5, next: 3, dvx: 550, dvy: 550, dvz: 0, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 53, y: 27, w: 40, h: 16, dvx: 10, dvy: -10, bdefend: 16, injury: 50, fall: 70 },
    bdy: { kind: 0, x: 18, y: 21, w: 31, h: 55 }
  },
  284: { name: "lightning_sword",
    pic: 90, state: 15, wait: 0, next: 285, dvx: 550, dvy: 550, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/103",
    mp: 70,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 22, y: 12, w: 28, h: 67 }
  },
  285: { name: "lightning_sword",
    pic: 91, state: 15, wait: 0, next: 286, dvx: 0, dvy: 550, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 22, y: 12, w: 28, h: 67 }
  },
  286: { name: "lightning_sword",
    pic: 100, state: 15, wait: 0, next: 287, dvx: 0, dvy: 550, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 22, y: 12, w: 28, h: 67 }
  },
  287: { name: "lightning_sword",
    pic: 101, state: 15, wait: 0, next: 288, dvx: 0, dvy: 550, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 22, y: 12, w: 28, h: 67 }
  },
  288: { name: "lightning_sword",
    pic: 102, state: 3, wait: 0, next: 289, dvx: 0, dvy: 550, dvz: 0, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 60,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 32, y: 12, w: 28, h: 67 }
  },
  289: { name: "lightning_sword",
    pic: 154, state: 3, wait: 1, next: 290, dvx: 2, dvy: 550, dvz: 0, centerx: 29, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/103",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 82, oid: 522 },
    bdy: { kind: 0, x: 22, y: 12, w: 28, h: 67 }
  },
  290: { name: "lightning_sword",
    pic: 155, state: 3, wait: 1, next: 291, dvx: 0, dvy: 550, dvz: 0, centerx: 28, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 82, oid: 522 },
    bdy: { kind: 0, x: 21, y: 37, w: 24, h: 61 }
  },
  291: { name: "lightning_sword",
    pic: 155, state: 3, wait: 1, next: 292, dvx: 0, dvy: 550, dvz: 0, centerx: 28, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 82, oid: 522 },
    bdy: { kind: 0, x: 21, y: 37, w: 24, h: 61 }
  },
  292: { name: "lightning_sword",
    pic: 103, state: 3, wait: 7, next: 3, dvx: 0, dvy: 550, dvz: 0, centerx: 21, centery: 79, hit_a: 293, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 9, y: 16, w: 24, h: 65 }
  },
  293: { name: "lightning_sword",
    pic: 156, state: 3, wait: 1, next: 294, dvx: 6, dvy: 550, dvz: 0, centerx: 27, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 60,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 22, y: 12, w: 28, h: 67 }
  },
  294: { name: "lightning_sword",
    pic: 156, state: 3, wait: 1, next: 295, dvx: 2, dvy: 550, dvz: 0, centerx: 27, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/103",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 82, oid: 522 },
    bdy: { kind: 0, x: 22, y: 12, w: 28, h: 67 }
  },
  295: { name: "lightning_sword",
    pic: 157, state: 3, wait: 1, next: 296, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 82, oid: 522 },
    bdy: { kind: 0, x: 37, y: 37, w: 24, h: 61 }
  },
  296: { name: "lightning_sword",
    pic: 157, state: 3, wait: 1, next: 297, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 82, oid: 522 },
    bdy: { kind: 0, x: 37, y: 37, w: 24, h: 61 }
  },
  297: { name: "lightning_sword",
    pic: 158, state: 3, wait: 7, next: 3, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 99, hit_a: 298, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 37, y: 37, w: 24, h: 61 }
  },
  298: { name: "lightning_sword",
    pic: 104, state: 3, wait: 1, next: 299, dvx: 0, dvy: 550, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 60,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 18, y: 17, w: 24, h: 62 }
  },
  299: { name: "lightning_sword",
    pic: 159, state: 3, wait: 1, next: 300, dvx: 7, dvy: 550, dvz: 0, centerx: 32, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/103",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 82, oid: 522 },
    bdy: { kind: 0, x: 22, y: 12, w: 28, h: 67 }
  },
  300: { name: "lightning_sword",
    pic: 105, state: 3, wait: 1, next: 301, dvx: 2, dvy: 550, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 82, oid: 522 },
    bdy: { kind: 0, x: 18, y: 17, w: 24, h: 62 }
  },
  301: { name: "lightning_sword",
    pic: 105, state: 3, wait: 1, next: 302, dvx: 0, dvy: 550, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 82, oid: 522 },
    bdy: { kind: 0, x: 18, y: 17, w: 24, h: 62 }
  },
  302: { name: "lightning_sword",
    pic: 106, state: 3, wait: 7, next: 3, dvx: 0, dvy: 550, dvz: 0, centerx: 29, centery: 79, hit_a: 303, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 18, y: 17, w: 24, h: 62 }
  },
  303: { name: "lightning_sword",
    pic: 107, state: 3, wait: 2, next: 304, dvx: 0, dvy: 550, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 60,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 14, w: 25, h: 64 }
  },
  304: { name: "lightning_sword",
    pic: 160, state: 3, wait: 1, next: 305, dvx: 0, dvy: 550, dvz: 0, centerx: 35, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/103",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 82, oid: 522 },
    bdy: { kind: 0, x: 22, y: 12, w: 28, h: 67 }
  },
  305: { name: "lightning_sword",
    pic: 108, state: 3, wait: 1, next: 306, dvx: 0, dvy: 550, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 82, oid: 522 },
    bdy: { kind: 0, x: 20, y: 16, w: 30, h: 63 }
  },
  306: { name: "lightning_sword",
    pic: 108, state: 3, wait: 1, next: 96, dvx: 0, dvy: 550, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 82, oid: 522 },
    bdy: { kind: 0, x: 20, y: 16, w: 30, h: 63 }
  },
  307: { name: "jump_attack_kick",
    pic: 54, state: 15, wait: 1, next: 308, dvx: 10, dvy: -1, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
  },
  308: { name: "jump_attack_kick",
    pic: 55, state: 15, wait: 1, next: 309, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/SNDDATA_1883",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 22, y: 10, w: 40, h: 52 }
  },
  309: { name: "jump_attack_kick",
    pic: 56, state: 15, wait: 1, next: 310, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 79, action: 111, oid: 206 },
    bdy: { kind: 0, x: 22, y: 10, w: 40, h: 52 }
  },
  310: { name: "jump_attack_kick",
    pic: 57, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 22, y: 10, w: 40, h: 52 }
  },
  320: { name: "7_sword_start",
    pic: 43, state: 15, wait: 0, next: 328, dvx: 550, dvy: 550, dvz: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/Yosh!",
    mp: 100,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 30, y: 14, w: 27, h: 65 }
  },
  321: { name: "7_sword_start",
    pic: 50, state: 15, wait: 0, next: 322, dvx: 550, dvy: 550, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 30, y: 14, w: 27, h: 65 }
  },
  322: { name: "7_sword_start",
    pic: 51, state: 15, wait: 0, next: 323, dvx: 550, dvy: 550, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 30, y: 14, w: 27, h: 65 }
  },
  323: { name: "7_sword_start",
    pic: 52, state: 15, wait: 0, next: 324, dvx: 550, dvy: 550, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 30, y: 14, w: 27, h: 65 }
  },
  324: { name: "7_sword_start",
    pic: 141, state: 15, wait: 0, next: 325, dvx: 550, dvy: 550, dvz: 0, centerx: 53, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 30, y: 14, w: 27, h: 65 }
  },
  325: { name: "7_sword_start",
    pic: 142, state: 15, wait: 0, next: 326, dvx: 550, dvy: 550, dvz: 0, centerx: 55, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 30, y: 14, w: 27, h: 65 }
  },
  326: { name: "7_sword_start",
    pic: 143, state: 15, wait: 0, next: 327, dvx: 550, dvy: 550, dvz: 0, centerx: 52, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 30, y: 14, w: 27, h: 65 }
  },
  327: { name: "7_sword_start",
    pic: 53, state: 15, wait: 0, next: 328, dvx: 550, dvy: 550, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  328: { name: "7_sword_spin",
    pic: 116, state: 15, wait: 0, next: 329, dvx: 550, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    mp: 90,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  329: { name: "7_sword_spin",
    pic: 117, state: 15, wait: 0, next: 330, dvx: 550, dvy: 550, dvz: 1, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  330: { name: "7_sword_spin",
    pic: 118, state: 100, wait: 0, next: 331, dvx: 550, dvy: 550, dvz: 1, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  331: { name: "7_sword_spin",
    pic: 119, state: 15, wait: 0, next: 332, dvx: 550, dvy: 550, dvz: 1, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  332: { name: "7_sword_spin",
    pic: 116, state: 100, wait: 1, next: 333, dvx: 38, dvy: -5, dvz: 5, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    mp: 70,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  333: { name: "7_sword_spin",
    pic: 117, state: 100, wait: 0, next: 334, dvx: 25, dvy: 0, dvz: 550, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    mp: -1,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  334: { name: "7_sword_spin",
    pic: 118, state: 100, wait: 0, next: 335, dvx: 25, dvy: 0, dvz: 550, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  335: { name: "7_sword_spin",
    pic: 119, state: 100, wait: 0, next: 336, dvx: 25, dvy: 0, dvz: 5, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    mp: -1,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  336: { name: "7_sword_spin",
    pic: 116, state: 100, wait: 0, next: 353, dvx: 25, dvy: 0, dvz: 5, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  337: { name: "eight_tail_trans",
    pic: 76, state: 15, wait: 9, next: 114, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 17, w: 26, h: 62 }
  },
  338: { name: "7_sword_spin",
    pic: 116, state: 100, wait: 1, next: 333, dvx: 38, dvy: -3, dvz: 5, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    mp: 20,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  339: { name: "counter_check",
    pic: 107, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 159, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 0, y: 50000000, w: 79, h: 79 }
  },
  340: { name: "counter_check",
    pic: 107, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 159, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 0, y: 60000000, w: 79, h: 79 }
  },
  341: { name: "write_song",
    pic: 124, state: 15, wait: 0, next: 125, dvx: 550, dvy: 550, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 70,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: [
      { kind: 8, x: 0, y: 50000000, w: 79, h: 79, dvx: 238 },
      { kind: 8, x: 0, y: 60000000, w: 79, h: 79, dvx: 238 }
    ],
  },
  342: { name: "7_sword_spin",
    pic: 117, state: 15, wait: 1, next: 343, dvx: 550, dvy: 550, dvz: 1, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  343: { name: "7_sword_spin",
    pic: 118, state: 100, wait: 0, next: 171, dvx: 550, dvy: 550, dvz: 1, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  344: { name: "7_sword_spin",
    pic: 116, state: 15, wait: 0, next: 328, dvx: -1, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 3, hit_j: 0,
    sound: "2/029",
    mp: 45,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 21, y: 35, w: 43, h: 62, vrest: 4, injury: 40 },
  },
  345: { name: "sword_light_weapon_thw",
    pic: 41, state: 15, wait: 3, next: 346, dvx: 550, dvy: 550, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 95,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 29, y: 16, w: 30, h: 61 }
  },
  346: { name: "sword_light_weapon_thw",
    pic: 92, state: 15, wait: 1, next: 347, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/Attack2",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 50, action: 100, oid: 522 },
    bdy: { kind: 0, x: 24, y: 22, w: 32, h: 57 }
  },
  347: { name: "sword_light_weapon_thw",
    pic: 93, state: 15, wait: 0, next: 348, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 10, y: 38, w: 54, h: 21 }
  },
  348: { name: "sword_light_weapon_thw",
    pic: 93, state: 15, wait: 5, next: 3, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 10, y: 38, w: 54, h: 21 }
  },
  350: { name: "7_sword_spin",
    pic: 117, state: 100, wait: 0, next: 351, dvx: 22, dvy: 0, dvz: 5, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    mp: -1,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  351: { name: "7_sword_spin",
    pic: 118, state: 100, wait: 0, next: 173, dvx: 22, dvy: 0, dvz: 5, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    mp: -1,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  352: { name: "7_sword_spin",
    pic: 116, state: 100, wait: 1, next: 173, dvx: 35, dvy: -5, dvz: 5, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    mp: 70,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  353: { name: "7_sword_spin",
    pic: 117, state: 100, wait: 0, next: 354, dvx: 25, dvy: 0, dvz: 5, centerx: 43, centery: 79, hit_a: -172, hit_d: 0, hit_j: -172,
    sound: "2/029",
    mp: -1,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  354: { name: "7_sword_spin",
    pic: 118, state: 100, wait: 0, next: 333, dvx: 25, dvy: 0, dvz: 5, centerx: 43, centery: 79, hit_a: -172, hit_d: 0, hit_j: -172,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 138, oid: 522 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  355: { name: "7_sword_spin2",
    pic: 56, state: 9, wait: 3, next: 356, dvx: 23, dvy: 550, dvz: 2, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 120,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 3, x: 28, y: 43, w: 90, h: 56, zwidth: 20, catchingact: [358, 358], caughtact: [130, 130] },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  356: { name: "7_sword_spin2",
    pic: 152, state: 15, wait: 2, next: 357, dvx: 0, dvy: 550, dvz: 0, centerx: 68, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  357: { name: "7_sword_spin2",
    pic: 43, state: 15, wait: 3, next: 3, dvx: 550, dvy: 550, dvz: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  358: { name: "7_sword_spin2",
    pic: 116, state: 9, wait: 1, next: 359, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 381,
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 70, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 131, hurtable: 0 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  359: { name: "7_sword_spin2",
    pic: 116, state: 9, wait: 1, next: 360, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 381,
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 131, hurtable: 0 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  360: { name: "7_sword_spin2",
    pic: 116, state: 9, wait: 4, next: 361, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 381,
    sound: "2/028",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 131, hurtable: 0, injury: 0 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  361: { name: "7_sword_spin2",
    pic: 119, state: 9, wait: 1, next: 362, dvx: 2, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 70, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 132, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  362: { name: "7_sword_spin2",
    pic: 116, state: 9, wait: 1, next: 363, dvx: 2, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 73, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 131, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  363: { name: "7_sword_spin2",
    pic: 117, state: 9, wait: 1, next: 364, dvx: 2, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 76, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 132, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  364: { name: "7_sword_spin2",
    pic: 118, state: 9, wait: 1, next: 365, dvx: 2, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 70, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 131, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  365: { name: "7_sword_spin2",
    pic: 119, state: 9, wait: 1, next: 366, dvx: 2, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 73, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 132, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  366: { name: "7_sword_spin2",
    pic: 116, state: 9, wait: 1, next: 367, dvx: 2, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 76, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 131, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  367: { name: "7_sword_spin2",
    pic: 117, state: 9, wait: 1, next: 368, dvx: 2, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 70, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 132, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  368: { name: "7_sword_spin2",
    pic: 118, state: 9, wait: 1, next: 369, dvx: 2, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 73, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 131, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  369: { name: "7_sword_spin2",
    pic: 119, state: 9, wait: 1, next: 374, dvx: 2, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 76, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 132, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  370: { name: "7_sword_spin2",
    pic: 116, state: 9, wait: 1, next: 371, dvx: 2, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 76, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 131, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  371: { name: "7_sword_spin2",
    pic: 117, state: 9, wait: 1, next: 372, dvx: 2, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 70, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 132, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  372: { name: "7_sword_spin2",
    pic: 118, state: 9, wait: 1, next: 373, dvx: 2, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 73, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 131, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  373: { name: "7_sword_spin2",
    pic: 119, state: 9, wait: 1, next: 374, dvx: 2, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 76, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 132, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  374: { name: "7_sword_spin2",
    pic: 56, state: 9, wait: 1, next: 375, dvx: 5, dvy: 550, dvz: 0, centerx: 38, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 0 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  375: { name: "7_sword_spin2",
    pic: 56, state: 9, wait: 2, next: 376, dvx: 20, dvy: 550, dvz: 0, centerx: 38, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 181, hurtable: 0, injury: 10, throwvx: 25, throwvy: -10, throwinjury: 0 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  376: { name: "7_sword_spin2",
    pic: 152, state: 15, wait: 2, next: 377, dvx: 0, dvy: 550, dvz: 0, centerx: 68, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  377: { name: "7_sword_spin2",
    pic: 43, state: 15, wait: 3, next: 3, dvx: 550, dvy: 550, dvz: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  378: { name: "7_sword_spin3",
    pic: 56, state: 9, wait: 3, next: 379, dvx: 75, dvy: 550, dvz: 5, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 3, x: 28, y: 43, w: 75, h: 56, catchingact: [381, 381], caughtact: [130, 130] },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  379: { name: "7_sword_spin3",
    pic: 152, state: 15, wait: 2, next: 380, dvx: 0, dvy: 550, dvz: 0, centerx: 68, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  380: { name: "7_sword_spin3",
    pic: 43, state: 15, wait: 3, next: 3, dvx: 550, dvy: 550, dvz: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 21, y: 35, w: 43, h: 62 }
  },
  381: { name: "7_sword_spin3",
    pic: 116, state: 9, wait: 0, next: 382, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    mp: 265,
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 131, hurtable: 0, injury: 0 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  382: { name: "7_sword_spin3",
    pic: 116, state: 9, wait: 1, next: 383, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/effect",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 350, action: 97, oid: 214, facing: 2 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 132, hurtable: 0, injury: 0 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  383: { name: "7_sword_spin3",
    pic: 116, state: 9, wait: 10, next: 384, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 131, hurtable: 0, injury: 0 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  384: { name: "7_sword_spin3",
    pic: 117, state: 9, wait: 1, next: 385, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 120, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 132, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  385: { name: "7_sword_spin3",
    pic: 118, state: 9, wait: 1, next: 386, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 130, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 131, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  386: { name: "7_sword_spin3",
    pic: 119, state: 9, wait: 1, next: 387, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 120, oid: 522, facing: 1 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 132, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  387: { name: "7_sword_spin3",
    pic: 116, state: 9, wait: 1, next: 388, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 132, oid: 522, facing: 1 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 131, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  388: { name: "7_sword_spin3",
    pic: 117, state: 9, wait: 1, next: 389, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 120, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 132, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  389: { name: "7_sword_spin3",
    pic: 118, state: 9, wait: 1, next: 390, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 134, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 131, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  390: { name: "7_sword_spin3",
    pic: 119, state: 9, wait: 1, next: 391, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 120, oid: 522, facing: 1 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 132, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  391: { name: "7_sword_spin3",
    pic: 116, state: 9, wait: 1, next: 392, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 136, oid: 522, facing: 1 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 131, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  392: { name: "7_sword_spin3",
    pic: 117, state: 9, wait: 1, next: 393, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 120, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 132, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  393: { name: "7_sword_spin3",
    pic: 118, state: 9, wait: 1, next: 394, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 130, oid: 522, facing: 1 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 131, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  394: { name: "7_sword_spin3",
    pic: 119, state: 9, wait: 1, next: 395, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 120, oid: 522, facing: 1 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 132, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  395: { name: "7_sword_spin3",
    pic: 116, state: 9, wait: 1, next: 396, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 134, oid: 522, facing: 1 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 131, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  396: { name: "7_sword_spin3",
    pic: 117, state: 9, wait: 1, next: 397, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 120, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 132, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  397: { name: "7_sword_spin3",
    pic: 118, state: 9, wait: 1, next: 398, dvx: 0, dvy: 550, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 79, action: 130, oid: 522 },
    cpoint: { kind: 1, x: 50, y: 20, vaction: 131, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  398: { name: "7_sword_spin3",
    pic: 120, state: 9, wait: 1, next: 76, dvx: 0, dvy: 550, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/033",
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    cpoint: { kind: 1, x: 58, y: 40, vaction: 132, hurtable: 0, injury: 12 },
    bdy: [
      { kind: 0, x: 21, y: 35, w: 43, h: 62 },
      { kind: 0, x: -999, y: -600000000000, w: 999999, h: 999, zwidth: 999 }
    ]
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 2, dvy: 0, dvz: 0, kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0 },
  },
  400: { name: "combo2a",
    pic: 45, state: 3, wait: 1, next: 401, dvx: 0, dvy: 550, dvz: 0, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/Killerbee/Attack3",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
  },
  401: { name: "combo2a",
    pic: 151, state: 3, wait: 1, next: 402, dvx: 50, dvy: 550, dvz: 0, centerx: 64, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 53, y: 27, w: 40, h: 16, dvx: 10, dvy: -10, bdefend: 16, injury: 95, fall: 70 },
  },
  402: { name: "combo2a",
    pic: 39, state: 3, wait: 1, next: 403, dvx: 0, dvy: 550, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 53, y: 27, w: 40, h: 16, dvx: 10, dvy: -10, bdefend: 16, injury: 95, fall: 70 },
  },
  403: { name: "combo2a",
    pic: 59, state: 3, wait: 5, next: 3, dvx: 550, dvy: 550, dvz: 0, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -5, weaponact: 75, attacking: 0, cover: 0 },
    itr: { kind: 0, x: 53, y: 27, w: 40, h: 16, dvx: 10, dvy: -10, bdefend: 16, injury: 95, fall: 70 },
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