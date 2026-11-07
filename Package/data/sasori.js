define({
  bmp: {
    file: [
      { "file(0-69)": "sprite/sasori.png", w: 79, h: 79, row: 10, col: 7 },
      { "file(70-139)": "sprite/sasori_2.png", w: 79, h: 79, row: 10, col: 7 },
      { "file(140-209)": "sprite/sasori_3.png", w: 79, h: 79, row: 10, col: 7 },
      { "file(210-279)": "sprite/sasori_3.png", w: 79, h: 79, row: 10, col: 7 }
    ],
    name: "Sasori",
    head: "sprite/sasori_f.png",
    small: "sprite/sasori_s.png",
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
    pic: 0, state: 0, wait: 5, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 251, hit_Da: 320, hit_Fj: 270, hit_Ua: 325, hit_ja: 315, hit_Dj: 330, hit_Uj: 147,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -35, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 5, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 251, hit_Da: 320, hit_Fj: 270, hit_Ua: 325, hit_ja: 315, hit_Dj: 330, hit_Uj: 147,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -35, y: -22, weaponact: 1, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 5, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 251, hit_Da: 320, hit_Fj: 270, hit_Ua: 325, hit_ja: 315, hit_Dj: 330, hit_Uj: 147,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -35, y: -24, weaponact: 2, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  3: { name: "standing",
    pic: 3, state: 0, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 251, hit_Da: 320, hit_Fj: 270, hit_Ua: 325, hit_ja: 315, hit_Dj: 330, hit_Uj: 147,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -35, y: -22, weaponact: 3, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 251, hit_Da: 320, hit_Fj: 270, hit_Ua: 325, hit_ja: 315, hit_Dj: 330, hit_Uj: 147,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -40, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 251, hit_Da: 320, hit_Fj: 270, hit_Ua: 325, hit_ja: 315, hit_Dj: 330, hit_Uj: 147,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -40, y: -22, weaponact: 1, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 251, hit_Da: 320, hit_Fj: 270, hit_Ua: 325, hit_ja: 315, hit_Dj: 330, hit_Uj: 147,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -40, y: -24, weaponact: 2, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 251, hit_Da: 320, hit_Fj: 270, hit_Ua: 325, hit_ja: 315, hit_Dj: 330, hit_Uj: 147,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -40, y: -22, weaponact: 3, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 28, y: 15, w: 27, h: 65 }
  },
  9: { name: "running",
    pic: 20, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/003",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -40, y: -22, weaponact: 1, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 25, y: 19, w: 38, h: 60 }
  },
  10: { name: "running",
    pic: 21, state: 2, wait: 4, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -40, y: -25, weaponact: 2, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 25, y: 19, w: 38, h: 60 }
  },
  11: { name: "running",
    pic: 22, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/004",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -40, y: -30, weaponact: 3, attacking: 0, cover: 1 },
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
    pic: 40, state: 3, wait: 0, next: 26, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 96,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -15, y: -20, weaponact: 9, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 999, y: -999, w: 500, h: 14, dvx: 2, vrest: 7, bdefend: 16, injury: 20, effect: 5 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  21: { name: "normal_weapon_atck",
    pic: 41, state: 3, wait: 0, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 96,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -5, y: -20, weaponact: 5, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  22: { name: "normal_weapon_atck",
    pic: 42, state: 3, wait: 1, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 96,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 15, y: -20, weaponact: 5, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  23: { name: "normal_weapon_atck",
    pic: 43, state: 3, wait: 0, next: 24, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 96,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: -20, weaponact: 76, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  24: { name: "normal_weapon_atck",
    pic: 44, state: 3, wait: 0, next: 240, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: -20, weaponact: 7, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  25: { name: "normal_weapon_atck",
    pic: 40, state: 3, wait: 0, next: 26, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 96,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -15, y: -20, weaponact: 9, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 999, y: -999, w: 500, h: 14, dvx: 2, vrest: 7, bdefend: 16, injury: 20, effect: 5 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  26: { name: "normal_weapon_atck",
    pic: 45, state: 3, wait: 1, next: 27, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 96,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 10, y: -20, weaponact: 10, attacking: 0, cover: 1 },
    itr: { kind: 3, x: 40, y: 753, w: 25, h: 65, catchingact: [394, 394], caughtact: [396, 396] },
    bdy: { kind: 0, x: 45, y: 37, w: 32, h: 11 }
  },
  27: { name: "normal_weapon_atck",
    pic: 46, state: 3, wait: 1, next: 28, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 96,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -20, weaponact: 75, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 45, y: 37, w: 32, h: 11 }
  },
  28: { name: "normal_weapon_atck",
    pic: 47, state: 3, wait: 2, next: 29, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 96,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 53, y: -20, weaponact: 12, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 10, y: 23, w: 31, h: 55 }
  },
  29: { name: "normal_weapon_atck",
    pic: 48, state: 3, wait: 1, next: 243, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 27, y: -20, weaponact: 13, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 10, y: 23, w: 31, h: 55 }
  },
  30: { name: "jump_weapon_atck",
    pic: 25, state: 3, wait: 0, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -15, y: -20, weaponact: 9, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 999, y: 999, w: 500, h: 14, dvx: 2, vrest: 7, bdefend: 16, injury: 20, effect: 5 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  31: { name: "last_weap_atk",
    pic: 100, state: 3, wait: 0, next: 32, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -15, y: -20, weaponact: 9, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 999, y: -999, w: 500, h: 14, dvx: 2, vrest: 7, bdefend: 16, injury: 20, effect: 5 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  32: { name: "last_weap_atk",
    pic: 101, state: 3, wait: 1, next: 33, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 10, y: -20, weaponact: 30, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 45, y: 37, w: 32, h: 11 }
  },
  33: { name: "last_weap_atk",
    pic: 102, state: 3, wait: 1, next: 34, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 60, y: -20, weaponact: 31, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 45, y: 37, w: 32, h: 11 }
  },
  34: { name: "last_weap_atk",
    pic: 103, state: 3, wait: 2, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 100, y: -20, weaponact: 31, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 10, y: 23, w: 31, h: 55 }
  },
  35: { name: "run_weapon_atck",
    pic: 40, state: 3, wait: 0, next: 36, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -20, y: -20, weaponact: 4, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  36: { name: "run_weapon_atck",
    pic: 41, state: 3, wait: 0, next: 37, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 10, y: -20, weaponact: 5, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 999, y: -999, w: 500, h: 14, dvx: 2, vrest: 7, bdefend: 16, injury: 20, effect: 5 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  37: { name: "run_weapon_atck",
    pic: 42, state: 3, wait: 1, next: 38, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -20, weaponact: 5, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  38: { name: "run_weapon_atck",
    pic: 43, state: 3, wait: 0, next: 39, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: -20, weaponact: 6, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  39: { name: "run_weapon_atck",
    pic: 44, state: 3, wait: 0, next: 240, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 70, y: -20, weaponact: 7, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  40: { name: "dash_weapon_atck",
    pic: 25, state: 3, wait: 0, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -15, y: -20, weaponact: 9, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 999, y: 999, w: 500, h: 14, dvx: 2, vrest: 7, bdefend: 16, injury: 20, effect: 5 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  41: { name: "dash_weapon_atck",
    pic: 26, state: 3, wait: 1, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/029",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 10, y: -20, weaponact: 10, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 28, y: 17, w: 29, h: 63 }
  },
  42: { name: "dash_weapon_atck",
    pic: 26, state: 3, wait: 1, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: -20, weaponact: 11, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 45, y: 37, w: 32, h: 11 }
  },
  43: { name: "dash_weapon_atck",
    pic: 29, state: 3, wait: 2, next: 44, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 53, y: -20, weaponact: 12, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 10, y: 23, w: 31, h: 55 }
  },
  44: { name: "dash_weapon_atck",
    pic: 29, state: 3, wait: 1, next: 243, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 27, y: -20, weaponact: 13, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 10, y: 23, w: 31, h: 55 }
  },
  45: { name: "light_weapon_thw",
    pic: 40, state: 3, wait: 0, next: 36, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -20, y: -20, weaponact: 4, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 35, y: -999, w: 500, h: 14, dvx: 2, vrest: 7, bdefend: 16, injury: 1, effect: 5 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  46: { name: "normal_weapon_atck",
    pic: 40, state: 3, wait: 0, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -25, y: -20, weaponact: 4, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 999, y: -999, w: 500, h: 14, dvx: 2, vrest: 7, bdefend: 16, injury: 20, effect: 5 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 45, y: 753, w: 32, h: 11 }
    ]
  },
  47: { name: "last_weap_atk",
    pic: 103, state: 3, wait: 1, next: 48, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 150, y: -20, weaponact: 31, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 10, y: 23, w: 31, h: 55 }
  },
  48: { name: "last_weap_atk",
    pic: 103, state: 3, wait: 1, next: 49, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 100, y: -20, weaponact: 31, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 10, y: 23, w: 31, h: 55 }
  },
  49: { name: "last_weap_atk",
    pic: 103, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: -20, weaponact: 31, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 10, y: 23, w: 31, h: 55 }
  },
  50: { name: "heavy_weapon_thw",
    pic: 14, state: 15, wait: 6, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 16, y: 52, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 19, w: 30, h: 62 }
  },
  51: { name: "heavy_weapon_thw",
    pic: 17, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    wpoint: { dvx: 15, dvy: -4, dvz: 2, kind: 1, x: 93, y: 57, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 19, y: 56, w: 30, h: 24 }
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 25, state: 3, wait: 0, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/028",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -15, y: -20, weaponact: 9, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 999, y: -999, w: 500, h: 14, dvx: 2, vrest: 7, bdefend: 16, injury: 20, effect: 5 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  53: { name: "poison",
    pic: 44, state: 15, wait: 0, next: 54, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -60,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -32, weaponact: 1, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  54: { name: "poison",
    pic: 44, state: 15, wait: 0, next: 55, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 0, y: -32, weaponact: 1, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  55: { name: "poison",
    pic: 42, state: 15, wait: 0, next: 56, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -32, weaponact: 81, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  56: { name: "poison",
    pic: 41, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: -32, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  57: { name: "mass",
    pic: 58, state: 3, wait: 0, next: 371, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 85, attacking: 0, cover: 1 },
    opoint: { dvx: 10, dvy: 0, dvz: 0, kind: 1, x: 267, y: -30, action: 90, oid: 451, facing: 40 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  58: { name: "mass",
    pic: 58, state: 3, wait: 0, next: 59, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 85, attacking: 0, cover: 1 },
    opoint: { dvx: -10, dvy: 0, dvz: 0, kind: 1, x: 20, y: -30, action: 290, oid: 822, facing: 40 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  59: { name: "mass",
    pic: 58, state: 3, wait: 0, next: 64, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 85, attacking: 0, cover: 1 },
    opoint: { dvx: 15, dvy: 0, dvz: 0, kind: 1, x: 20, y: -30, action: 290, oid: 822, facing: 30 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  60: { name: "punch",
    pic: 10, state: 3, wait: 0, next: 61, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 380, hit_j: 0,
    itr: { kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1 },
    bdy: [
      { kind: 0, x: 30, y: 18, w: 28, h: 60 },
      { kind: 0, x: 23, y: 35, w: 37, h: 24 }
    ]
  },
  61: { name: "punch",
    pic: 11, state: 3, wait: 0, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 380, hit_j: 0,
    sound: "2/007",
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  62: { name: "punch",
    pic: 12, state: 3, wait: 1, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 380, hit_j: 85,
    itr: { kind: 0, x: 35, y: 44, w: 33, h: 14, dvx: 2, vrest: 7, bdefend: 16, injury: 20, effect: 1 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 45, y: 753, w: 32, h: 11 }
    ]
  },
  63: { name: "punch",
    pic: 13, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 380, hit_j: 85,
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  64: { name: "mass",
    pic: 59, state: 3, wait: 0, next: 76, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 86, attacking: 0, cover: 1 },
    opoint: { dvx: 10, dvy: 0, dvz: 0, kind: 1, x: 250, y: -30, action: 290, oid: 822, facing: 50 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  65: { name: "punch",
    pic: 14, state: 3, wait: 0, next: 66, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 380, hit_j: 0,
    itr: { kind: 2, x: 26, y: 58, w: 37, h: 23, vrest: 1 },
    bdy: { kind: 0, x: 27, y: 17, w: 31, h: 63 }
  },
  66: { name: "punch",
    pic: 15, state: 3, wait: 0, next: 67, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 380, hit_j: 0,
    bdy: [
      { kind: 0, x: 28, y: 17, w: 29, h: 63 },
      { kind: 0, x: 45, y: 37, w: 32, h: 11 }
    ]
  },
  67: { name: "punch",
    pic: 16, state: 3, wait: 1, next: 68, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 380, hit_j: 0,
    sound: "2/007",
    itr: { kind: 0, x: 45, y: 44, w: 33, h: 14, dvx: 2, vrest: 7, bdefend: 16, injury: 20, effect: 1 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 45, y: 37, w: 32, h: 11 }
    ]
  },
  68: { name: "punch",
    pic: 17, state: 3, wait: 0, next: 69, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 380, hit_j: 85,
    bdy: { kind: 0, x: 45, y: 37, w: 32, h: 11 }
  },
  69: { name: "punch",
    pic: 28, state: 3, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 380, hit_j: 85,
    bdy: { kind: 0, x: 45, y: 37, w: 32, h: 11 }
  },
  70: { name: "super_punch",
    pic: 86, state: 3, wait: 1, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 22, y: 14, w: 30, h: 65 }
  },
  71: { name: "super_punch",
    pic: 87, state: 3, wait: 1, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 29, y: 57, w: 32, h: 23 }
  },
  72: { name: "super_punch",
    pic: 88, state: 3, wait: 1, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 31, y: 2, w: 27, h: 78 }
  },
  73: { name: "super_punch",
    pic: 89, state: 3, wait: 1, next: 74, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    itr: { kind: 0, x: 25, y: 10, w: 45, h: 14, dvx: 2, dvy: -15, fall: 100, arest: 15, bdefend: 100, injury: 55, effect: 1 },
    bdy: { kind: 0, x: 29, y: 57, w: 32, h: 23 }
  },
  74: { name: "super_punch",
    pic: 90, state: 3, wait: 1, next: 75, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 29, y: 57, w: 32, h: 23 }
  },
  75: { name: "super_punch",
    pic: 91, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 40, y: 21, w: 30, h: 43 }
  },
  76: { name: "mass",
    pic: 59, state: 3, wait: 0, next: 78, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/iron",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 86, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  77: { name: "dummy2",
    pic: 999, state: 15, wait: 2, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 35, y: 70066, w: 20, h: 20 }
  },
  78: { name: "mass",
    pic: 59, state: 3, wait: 0, next: 79, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 86, attacking: 0, cover: 1 },
    opoint: { dvx: 10, dvy: 0, dvz: 0, kind: 1, x: 267, y: -30, action: 290, oid: 822, facing: 41 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  79: { name: "mass",
    pic: 68, state: 3, wait: 0, next: 83, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 87, attacking: 0, cover: 1 },
    opoint: { dvx: -10, dvy: 0, dvz: 0, kind: 1, x: 20, y: -30, action: 290, oid: 822, facing: 41 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  80: { name: "jump_attack",
    pic: 71, state: 15, wait: 1, next: 87, dvx: 6, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 24, y: 36, w: 55, h: 19 }
  },
  81: { name: "jump_attack",
    pic: 71, state: 15, wait: 1, next: 87, dvx: 6, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 8, y: 51, w: 38, h: 27 }
  },
  82: { name: "jump_attack",
    pic: 71, state: 15, wait: 1, next: 87, dvx: 6, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 24, y: 36, w: 55, h: 19 }
  },
  83: { name: "mass",
    pic: 68, state: 3, wait: 0, next: 84, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 87, attacking: 0, cover: 1 },
    opoint: { dvx: 15, dvy: 0, dvz: 0, kind: 1, x: 20, y: -30, action: 290, oid: 822, facing: 31 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  84: { name: "mass",
    pic: 68, state: 3, wait: 0, next: 93, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 87, attacking: 0, cover: 1 },
    opoint: { dvx: 10, dvy: 0, dvz: 0, kind: 1, x: 250, y: -30, action: 290, oid: 822, facing: 51 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  85: { name: "run_attack",
    pic: 70, state: 15, wait: 1, next: 86, dvx: 8, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: { kind: 0, x: 19, y: 24, w: 35, h: 54 }
  },
  86: { name: "run_attack",
    pic: 71, state: 15, wait: 1, next: 87, dvx: 6, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 24, y: 36, w: 55, h: 19 }
  },
  87: { name: "run_attack",
    pic: 72, state: 15, wait: 0, next: 88, dvx: 10, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    mp: -2,
    itr: { kind: 0, x: 72, y: 5, w: 12, h: 73, dvx: 2, fall: 25, vrest: 7, bdefend: 16, injury: 25, effect: 1 },
    bdy: { kind: 0, x: 18, y: 36, w: 39, h: 24 }
  },
  88: { name: "run_attack",
    pic: 73, state: 15, wait: 0, next: 89, dvx: 10, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -2,
    itr: { kind: 0, x: 47, y: 12, w: 12, h: 60, dvx: 12, fall: 25, vrest: 7, bdefend: 16, injury: 25, effect: 1 },
    bdy: { kind: 0, x: 18, y: 36, w: 39, h: 24 }
  },
  89: { name: "run_attack",
    pic: 74, state: 15, wait: 0, next: 300, dvx: 10, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    mp: -2,
    itr: [
      { kind: 0, x: -1, y: 9, w: 60, h: 71, dvx: 18, fall: 25, vrest: 7, bdefend: 16, injury: 25, effect: 1 },
      { kind: 0, x: 3, y: 11, w: 50, h: 65, dvx: -4, fall: 25, vrest: 7, bdefend: 16, injury: 35, effect: 1 }
    ],
    bdy: { kind: 0, x: 2, y: 57, w: 41, h: 22 }
  },
  90: { name: "dash_attack",
    pic: 71, state: 15, wait: 1, next: 87, dvx: 6, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 24, y: 36, w: 55, h: 19 }
  },
  91: { name: "dash_attack",
    pic: 71, state: 15, wait: 1, next: 87, dvx: 6, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 8, y: 51, w: 38, h: 27 }
  },
  92: { name: "dash_attack",
    pic: 71, state: 15, wait: 1, next: 87, dvx: 6, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 24, y: 36, w: 55, h: 19 }
  },
  93: { name: "mass",
    pic: 40, state: 3, wait: 30, next: 145, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 88, attacking: 0, cover: 1 },
    opoint: { dvx: -10, dvy: 0, dvz: 0, kind: 1, x: 237, y: -30, action: 290, oid: 822, facing: 51 },
  },
  95: { name: "dash_defend",
    pic: 64, state: 7, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 21, y: -999, weaponact: 30, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 28, y: 37, w: 24, h: 34 }
  },
  97: { name: "charge",
    pic: 93, state: 17, wait: 3, next: 98, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 79, y: 2, weaponact: 20, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 2, x: 42, y: 51, action: 20, oid: 123, facing: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  98: { name: "charge",
    pic: 94, state: 17, wait: 3, next: 319, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 12, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
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
    pic: 24, state: 6, wait: 0, next: 103, dvx: 550, dvy: 550, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 24, state: 6, wait: 2, next: 999, dvx: 550, dvy: 0, dvz: 550, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -999, weaponact: 75, attacking: 0, cover: 0 },
  },
  107: { name: "rowing",
    pic: 24, state: 6, wait: 2, next: 215, dvx: 2, dvy: 0, dvz: 3, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -17, weaponact: 28, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 16, y: 19, w: 42, h: 60 }
  },
  111: { name: "defend",
    pic: 40, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -17, weaponact: 28, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 16, y: 19, w: 42, h: 60 }
  },
  112: { name: "broken_defend",
    pic: 31, state: 8, wait: 0, next: 113, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -17, weaponact: 28, attacking: 0, cover: 0 },
    itr: { kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1 },
    bdy: { kind: 0, x: 5, y: 17, w: 64, h: 65 }
  },
  113: { name: "broken_defend",
    pic: 31, state: 8, wait: 0, next: 114, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -17, weaponact: 28, attacking: 0, cover: 0 },
    itr: { kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1 },
    bdy: { kind: 0, x: 5, y: 17, w: 64, h: 65 }
  },
  114: { name: "broken_defend",
    pic: 31, state: 8, wait: 2, next: 999, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -17, weaponact: 28, attacking: 0, cover: 0 },
    itr: { kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1 },
    bdy: { kind: 0, x: 5, y: 17, w: 64, h: 65 }
  },
  115: { name: "picking_light",
    pic: 100, state: 15, wait: 5, next: 343, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 38, y: 76, weaponact: 24, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 43, w: 33, h: 37 }
  },
  116: { name: "picking_heavy",
    pic: 104, state: 15, wait: 5, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 79, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 43, w: 33, h: 37 }
  },
  117: { name: "picking_heavy",
    pic: 105, state: 15, wait: 2, next: 341, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 66, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 43, w: 33, h: 37 }
  },
  125: { name: "tele",
    dvx: 0, dvy: 0, dvz: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
  },
  126: { name: "flames",
    pic: 35, state: 15, wait: 2, next: 127, dvx: 550, dvy: 550, dvz: 0, centerx: 44, centery: 79, hit_a: 125, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  127: { name: "flames",
    pic: 36, state: 15, wait: 2, next: 128, dvx: 550, dvy: 550, dvz: 0, centerx: 44, centery: 79, hit_a: 125, hit_d: 0, hit_j: 0,
    opoint: { dvx: 20, dvy: 0, dvz: 0, kind: 1, x: 67, y: 45, action: 0, oid: 211, facing: 50 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  128: { name: "flames",
    pic: 36, state: 15, wait: 2, next: 129, dvx: 550, dvy: 550, dvz: 0, centerx: 44, centery: 79, hit_a: 125, hit_d: 0, hit_j: 0,
    opoint: { dvx: 20, dvy: 0, dvz: 0, kind: 1, x: 67, y: 45, action: 0, oid: 211, facing: 50 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  129: { name: "flames",
    pic: 36, state: 15, wait: 2, next: 118, dvx: 550, dvy: 550, dvz: 0, centerx: 44, centery: 79, hit_a: 125, hit_d: 0, hit_j: 0,
    opoint: { dvx: 20, dvy: 0, dvz: 0, kind: 1, x: 67, y: 45, action: 0, oid: 211, facing: 50 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
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
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
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
  145: { name: "mass",
    pic: 46, state: 3, wait: 1, next: 146, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 85, attacking: 0, cover: 1 },
  },
  146: { name: "mass",
    pic: 47, state: 3, wait: 12, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 85, attacking: 0, cover: 1 },
  },
  147: { name: "summon_ppp",
    pic: 51, state: 15, wait: 3, next: 148, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/waw2",
    mp: 320,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 399, attacking: 0, cover: 1 },
    itr: { kind: 806, x: 39, y: 90019, w: 21, h: 61, dvx: 155 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  148: { name: "summon_ppp",
    pic: 52, state: 15, wait: 1, next: 149, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  149: { name: "summon_ppp",
    pic: 53, state: 15, wait: 1, next: 150, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  150: { name: "summon_ppp",
    pic: 54, state: 15, wait: 0, next: 151, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  151: { name: "summon_ppp",
    pic: 54, state: 15, wait: 0, next: 152, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 0, y: 70, action: 305, oid: 55, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  152: { name: "summon_ppp",
    pic: 54, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -90,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 80, y: 70, action: 307, oid: 55, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  155: { name: "hands",
    pic: 49, state: 15, wait: 0, next: 156, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -60, weaponact: 90, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  156: { name: "hands",
    pic: 41, state: 15, wait: 1, next: 157, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -12, y: -70, weaponact: 91, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  157: { name: "hands",
    pic: 42, state: 15, wait: 1, next: 158, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -14, y: -80, weaponact: 92, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  158: { name: "hands",
    pic: 43, state: 15, wait: 0, next: 159, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -16, y: -90, weaponact: 93, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  159: { name: "hands",
    pic: 43, state: 15, wait: 0, next: 160, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -18, y: -100, weaponact: 94, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  160: { name: "hands",
    pic: 43, state: 15, wait: 0, next: 161, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -20, y: -110, weaponact: 95, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  161: { name: "hands",
    pic: 43, state: 15, wait: 0, next: 162, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -22, y: -120, weaponact: 96, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  162: { name: "hands",
    pic: 43, state: 15, wait: 0, next: 163, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/020",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -25, y: -130, weaponact: 97, attacking: 0, cover: 1 },
    opoint: { dvx: -2, dvy: 0, dvz: 0, kind: 1, x: 180, y: 34, action: 20, oid: 204, facing: 30 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  163: { name: "hands",
    pic: 45, state: 15, wait: 10, next: 164, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -25, y: -130, weaponact: 98, attacking: 0, cover: 1 },
    opoint: { dvx: -2, dvy: 0, dvz: 0, kind: 1, x: 180, y: 34, action: 20, oid: 204, facing: 31 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  164: { name: "hands",
    pic: 46, state: 15, wait: 0, next: 165, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -25, y: -130, weaponact: 99, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 140, y: 70, action: 180, oid: 206 },
  },
  165: { name: "hands",
    pic: 46, state: 15, wait: 0, next: 166, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -25, y: -130, weaponact: 100, attacking: 0, cover: 1 },
  },
  166: { name: "hands",
    pic: 47, state: 15, wait: 0, next: 167, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -25, y: -130, weaponact: 101, attacking: 0, cover: 1 },
  },
  167: { name: "hands",
    pic: 47, state: 15, wait: 20, next: 999, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -25, y: -130, weaponact: 98, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 110, y: 70, action: 172, oid: 206 },
  },
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    itr: { kind: 4, x: 21, y: 14, w: 29, h: 44, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: { kind: 0, x: 25, y: 25, w: 21, h: 20 }
  },
  181: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    itr: [
      { kind: 4, x: 15, y: 11, w: 42, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 35, y: 30, w: 27, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: { kind: 0, x: 22, y: 20, w: 24, h: 23 }
  },
  182: { name: "falling",
    pic: 32, state: 12, wait: 6, next: 0, dvx: -3, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    itr: { kind: 4, x: 13, y: 18, w: 46, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: { kind: 0, x: 27, y: 22, w: 20, h: 18 }
  },
  183: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    itr: [
      { kind: 4, x: 32, y: 18, w: 33, h: 27, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 10, y: 38, w: 38, h: 21, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: { kind: 0, x: 22, y: 30, w: 27, h: 21 }
  },
  184: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
  },
  185: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
  },
  186: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    itr: { kind: 4, x: 22, y: 12, w: 36, h: 50, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: { kind: 0, x: 31, y: 24, w: 25, h: 23 }
  },
  187: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    itr: [
      { kind: 4, x: 33, y: 6, w: 26, h: 46, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 26, y: 43, w: 21, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: { kind: 0, x: 28, y: 27, w: 24, h: 26 }
  },
  188: { name: "falling",
    pic: 32, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    itr: { kind: 4, x: 14, y: 29, w: 58, h: 23, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
    bdy: { kind: 0, x: 30, y: 31, w: 24, h: 21 }
  },
  189: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    itr: [
      { kind: 4, x: 24, y: 27, w: 26, h: 28, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 },
      { kind: 4, x: 37, y: 45, w: 31, h: 28, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30 }
    ],
    bdy: { kind: 0, x: 30, y: 39, w: 23, h: 21 }
  },
  190: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
  },
  191: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
  },
  200: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 201, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
  },
  201: { name: "mpdrain",
    pic: 30, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -45,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
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
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -40, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 25, y: 50, w: 15, h: 29 }
  },
  211: { name: "jump",
    pic: 61, state: 4, wait: 1, next: 212, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -40, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 25, y: 55, w: 30, h: 27 }
  },
  212: { name: "jump",
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -40, y: -30, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 18, y: 29, w: 48, h: 17 }
  },
  213: { name: "dash",
    pic: 63, state: 5, wait: 8, next: 216, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -40, y: -30, weaponact: 0, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 28, y: 29, w: 21, h: 33 },
      { kind: 0, x: 13, y: 54, w: 18, h: 17 }
    ]
  },
  214: { name: "dash",
    pic: 64, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -40, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 18, y: 14, w: 19, h: 27 }
  },
  215: { name: "crouch",
    pic: 60, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Dj: 330, hit_Uj: 325, hit_Fj: 270,
    sound: "2/012",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 26, y: 40, w: 29, h: 38 }
  },
  216: { name: "dash",
    pic: 64, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -40, y: -30, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 16, y: 30, w: 39, h: 37 }
  },
  217: { name: "dash",
    pic: 64, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -40, y: -30, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 18, y: 13, w: 29, h: 51 }
  },
  218: { name: "stop_running",
    pic: 40, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/009",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 17, y: 25, w: 30, h: 55 },
      { kind: 0, x: 45, y: 47, w: 16, h: 32 }
    ]
  },
  219: { name: "crouch2",
    pic: 61, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/012",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 26, y: 36, w: 29, h: 44 }
  },
  220: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 355, hit_j: 355,
    wpoint: { dvx: 55, dvy: -5, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 80, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 47, y: 23, w: 23, h: 54 },
      { kind: 0, x: 29, y: 41, w: 20, h: 37 }
    ]
  },
  221: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 355, hit_j: 355,
    wpoint: { dvx: 55, dvy: -5, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 80, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 46, y: 23, w: 21, h: 56 },
      { kind: 0, x: 30, y: 40, w: 17, h: 41 }
    ]
  },
  222: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 355, hit_j: 355,
    wpoint: { dvx: 55, dvy: -5, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 80, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 11, y: 24, w: 39, h: 31 },
      { kind: 0, x: 25, y: 53, w: 40, h: 27 }
    ]
  },
  223: { name: "injured",
    pic: 31, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 355, hit_j: 355,
    wpoint: { dvx: 55, dvy: -5, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 80, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 12, y: 23, w: 40, h: 37 },
      { kind: 0, x: 27, y: 56, w: 36, h: 24 }
    ]
  },
  224: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 225, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 79, hit_a: 0, hit_d: 355, hit_j: 355,
    wpoint: { dvx: 55, dvy: -5, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 80, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 32, y: 18, w: 28, h: 60 },
      { kind: 0, x: 52, y: 38, w: 20, h: 19 }
    ]
  },
  225: { name: "injured",
    pic: 30, state: 11, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 355, hit_j: 355,
    wpoint: { dvx: 55, dvy: -5, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 80, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 24, y: 18, w: 35, h: 63 }
  },
  226: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 227, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 355, hit_j: 355,
    wpoint: { dvx: 55, dvy: -5, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 80, attacking: 0, cover: 1 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: { kind: 0, x: 27, y: 22, w: 42, h: 58 }
  },
  227: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 228, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 355, hit_j: 355,
    wpoint: { dvx: 55, dvy: -5, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 80, attacking: 0, cover: 1 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: { kind: 0, x: 28, y: 24, w: 39, h: 57 }
  },
  228: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 229, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 355, hit_j: 355,
    wpoint: { dvx: 55, dvy: -5, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 80, attacking: 0, cover: 1 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: { kind: 0, x: 28, y: 23, w: 37, h: 58 }
  },
  229: { name: "injured",
    pic: 31, state: 16, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 355, hit_j: 355,
    wpoint: { dvx: 55, dvy: -5, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 80, attacking: 0, cover: 1 },
    itr: { kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1 },
    bdy: { kind: 0, x: 29, y: 26, w: 37, h: 53 }
  },
  230: { name: "lying",
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 74, weaponact: 32, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 0, y: 30000, w: 79, h: 500 },
      { kind: 0, x: 0, y: 40000, w: 79, h: 500 }
    ]
  },
  231: { name: "lying",
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 32, y: 74, weaponact: 24, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 0, y: 30000, w: 79, h: 500 },
      { kind: 0, x: 0, y: 40000, w: 79, h: 500 }
    ]
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
  240: { name: "normal_weapon_atck",
    pic: 44, state: 3, wait: 1, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: -20, weaponact: 8, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  241: { name: "normal_weapon_atck",
    pic: 44, state: 3, wait: 1, next: 242, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 0, y: -20, weaponact: 4, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  242: { name: "normal_weapon_atck",
    pic: 44, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 31, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -20, weaponact: 4, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  243: { name: "normal_weapon_atck",
    pic: 40, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 46, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 0, y: -20, weaponact: 13, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 10, y: 23, w: 31, h: 55 }
  },
  245: { name: "iron_sand_kunai",
    pic: 43, state: 3, wait: 0, next: 246, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 15, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 35, y: 70066, w: 500, h: 14, dvx: 2, vrest: 7, bdefend: 16, injury: 20, effect: 5 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  246: { name: "iron_sand_kunai",
    pic: 41, state: 3, wait: 0, next: 247, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/iron",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 16, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 35, y: 70066, w: 500, h: 14, dvx: 2, vrest: 7, bdefend: 16, injury: 20, effect: 5 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  247: { name: "iron_sand_kunai",
    pic: 45, state: 3, wait: 1, next: 248, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 16, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  248: { name: "iron_sand_kunai",
    pic: 46, state: 3, wait: 1, next: 249, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 17, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  249: { name: "iron_sand_kunai",
    pic: 47, state: 3, wait: 0, next: 250, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 14, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  250: { name: "iron_sand_kunai",
    pic: 47, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 15, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  251: { name: "water",
    pic: 100, state: 15, wait: 0, next: 252, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 130,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 399, attacking: 0, cover: 1 },
    itr: { kind: 806, x: 39, y: 90019, w: 21, h: 61, dvx: 245 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  252: { name: "water",
    pic: 100, state: 3, wait: 1, next: 253, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 14, attacking: 0, cover: 1 },
    itr: { kind: 806, x: 39, y: 90019, w: 21, h: 61, dvx: 245 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  253: { name: "water",
    pic: 101, state: 3, wait: 0, next: 254, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  254: { name: "water",
    pic: 102, state: 3, wait: 0, next: 267, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  255: { name: "iron_sand_blast",
    pic: 40, state: 15, wait: 0, next: 256, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 220,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 18, attacking: 0, cover: 1 },
    itr: { kind: 0, x: 35, y: 70066, w: 500, h: 14, dvx: 2, vrest: 7, bdefend: 16, injury: 20, effect: 5 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  256: { name: "iron_sand_blast",
    pic: 58, state: 15, wait: 0, next: 257, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/iron",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 19, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  257: { name: "iron_sand_blast",
    pic: 58, state: 15, wait: 1, next: 258, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 20, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  258: { name: "iron_sand_blast",
    pic: 58, state: 15, wait: 1, next: 259, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 21, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  259: { name: "iron_sand_blast",
    pic: 59, state: 15, wait: 1, next: 260, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 21, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  260: { name: "iron_sand_blast",
    pic: 68, state: 15, wait: 2, next: 261, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  261: { name: "iron_sand_blast",
    pic: 68, state: 15, wait: 2, next: 262, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 23, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  262: { name: "iron_sand_blast",
    pic: 68, state: 15, wait: 2, next: 263, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 24, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  263: { name: "iron_sand_blast",
    pic: 68, state: 15, wait: 2, next: 264, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 25, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  264: { name: "iron_sand_blast",
    pic: 69, state: 15, wait: 2, next: 265, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  265: { name: "iron_sand_blast",
    pic: 44, state: 15, wait: 2, next: 266, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 23, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  266: { name: "iron_sand_blast",
    pic: 43, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 24, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  267: { name: "water",
    pic: 103, state: 3, wait: 8, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 110, y: 110, action: 85, oid: 419 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  270: { name: "flamethrower",
    pic: 35, state: 15, wait: 3, next: 271, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 95,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 399, attacking: 0, cover: 1 },
    itr: { kind: 806, x: 39, y: 90019, w: 21, h: 61, dvx: 53 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  271: { name: "flamethrower",
    pic: 36, state: 15, wait: 1, next: 272, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 275, hit_d: 275, hit_j: 275,
    sound: "2/071",
    mp: -10,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -32, weaponact: 1, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 67, y: 45, action: 0, oid: 211, facing: 0 },
    itr: { kind: 806, x: 39, y: 90019, w: 21, h: 61, dvx: 53 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  272: { name: "flamethrower",
    pic: 37, state: 15, wait: 1, next: 273, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 275, hit_d: 275, hit_j: 275,
    mp: -10,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -33, weaponact: 2, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 110, y: 43, action: 0, oid: 211, facing: 0 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  273: { name: "flamethrower",
    pic: 38, state: 15, wait: 1, next: 274, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 275, hit_d: 275, hit_j: 275,
    mp: -10,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -32, weaponact: 3, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 165, y: 43, action: 0, oid: 211, facing: 0 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  274: { name: "flamethrower",
    pic: 39, state: 15, wait: 1, next: 271, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 275, hit_d: 275, hit_j: 275,
    mp: -10,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -31, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  275: { name: "flamethrower",
    pic: 49, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  277: { name: "summon2",
    pic: 60, state: 15, wait: 0, next: 278, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  278: { name: "summon2",
    pic: 60, state: 15, wait: 0, next: 279, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 0, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 44, y: -20, action: 65, oid: 222, facing: 0 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  279: { name: "summon2",
    pic: 60, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 0, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 2, x: 44, y: 14, action: 0, oid: 213, facing: 0 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  280: { name: "summon",
    pic: 50, state: 15, wait: 2, next: 281, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 399, attacking: 0, cover: 1 },
    itr: { kind: 806, x: 35, y: 70066, w: 20, h: 14, dvx: 255 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  281: { name: "summon",
    pic: 51, state: 15, wait: 1, next: 282, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  282: { name: "summon",
    pic: 52, state: 15, wait: 1, next: 283, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  283: { name: "summon",
    pic: 53, state: 15, wait: 1, next: 284, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  284: { name: "summon",
    pic: 54, state: 15, wait: 1, next: 285, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  285: { name: "summon",
    pic: 55, state: 15, wait: 1, next: 286, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  286: { name: "summon",
    pic: 56, state: 15, wait: 1, next: 287, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  287: { name: "summon",
    pic: 57, state: 15, wait: 1, next: 288, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  288: { name: "summon",
    pic: 57, state: 15, wait: 1, next: 289, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 0, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  289: { name: "summon",
    pic: 57, state: 15, wait: 1, next: 290, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 0, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 110, y: -20, action: 65, oid: 222, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  290: { name: "summon",
    pic: 57, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 0, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 2, x: 44, y: 14, action: 0, oid: 213, facing: 0 },
    bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 }
  },
  291: { name: "ironkill",
    pic: 1, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 0, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 21, y: -88888888888880000, w: 43, h: 62 }
    ]
  },
  292: { name: "ironkill",
    pic: 0, state: 12, wait: 10, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 17, y: 52, weaponact: 40, attacking: 0, cover: 0 },
    bdy: [
      { kind: 0, x: 25, y: 26, w: 37, h: 53 },
      { kind: 0, x: 21, y: -88888888888880000, w: 43, h: 62 }
    ]
  },
  293: { name: "ironkill",
    pic: 44, state: 15, wait: 2, next: 294, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 16, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  294: { name: "ironkill",
    pic: 42, state: 15, wait: 2, next: 295, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 17, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  295: { name: "ironkill",
    pic: 43, state: 15, wait: 2, next: 296, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 22, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  296: { name: "ironkill",
    pic: 40, state: 15, wait: 2, next: 297, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 23, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  297: { name: "ironkill",
    pic: 41, state: 15, wait: 2, next: 298, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 24, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  298: { name: "ironkill",
    pic: 42, state: 15, wait: 2, next: 299, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 25, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  299: { name: "ironkill",
    pic: 40, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -30, weaponact: 22, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  300: { name: "run_attack",
    pic: 75, state: 15, wait: 0, next: 301, dvx: 10, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -2,
    itr: { kind: 0, x: 49, y: 9, w: 14, h: 64, dvx: 18, fall: 20, vrest: 7, bdefend: 16, injury: 25, effect: 1 },
    bdy: { kind: 0, x: 18, y: 36, w: 39, h: 24 }
  },
  301: { name: "run_attack",
    pic: 76, state: 15, wait: 0, next: 302, dvx: 10, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    mp: -2,
    itr: [
      { kind: 0, x: 77, y: 8, w: 10, h: 64, dvx: 12, fall: 30, vrest: 7, bdefend: 16, injury: 25, effect: 1 },
      { kind: 0, x: 25, y: 13, w: 50, h: 56, dvx: 13, fall: 20, vrest: 7, bdefend: 16, injury: 35, effect: 1 }
    ],
    bdy: [
      { kind: 0, x: 18, y: 36, w: 39, h: 24 },
      { kind: 0, x: 2, y: 57, w: 41, h: 22 }
    ]
  },
  302: { name: "run_attack",
    pic: 77, state: 15, wait: 0, next: 303, dvx: 10, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -2,
    itr: { kind: 0, x: 52, y: 5, w: 7, h: 70, dvx: 12, fall: 20, vrest: 7, bdefend: 16, injury: 25, effect: 1 },
    bdy: { kind: 0, x: 18, y: 36, w: 39, h: 24 }
  },
  303: { name: "run_attack",
    pic: 78, state: 15, wait: 0, next: 304, dvx: 10, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    mp: -2,
    itr: [
      { kind: 0, x: -1, y: 9, w: 65, h: 71, dvx: 18, fall: 30, vrest: 7, bdefend: 16, injury: 25, effect: 1 },
      { kind: 0, x: 3, y: 11, w: 50, h: 65, dvx: -4, fall: 20, vrest: 7, bdefend: 16, injury: 35, effect: 1 }
    ],
    bdy: { kind: 0, x: 18, y: 36, w: 39, h: 24 }
  },
  304: { name: "run_attack",
    pic: 79, state: 15, wait: 0, next: 305, dvx: 10, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -2,
    itr: { kind: 0, x: 49, y: 9, w: 16, h: 64, dvx: 18, fall: 20, vrest: 7, bdefend: 16, injury: 25, effect: 1 },
    bdy: [
      { kind: 0, x: 18, y: 36, w: 39, h: 24 },
      { kind: 0, x: 2, y: 57, w: 35, h: 22 }
    ]
  },
  305: { name: "run_attack",
    pic: 80, state: 15, wait: 0, next: 306, dvx: 10, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    mp: -2,
    itr: [
      { kind: 0, x: 77, y: 8, w: 12, h: 64, dvx: 12, fall: 30, vrest: 7, bdefend: 16, injury: 25, effect: 1 },
      { kind: 0, x: 25, y: 13, w: 57, h: 56, dvx: 13, fall: 20, vrest: 7, bdefend: 16, injury: 35, effect: 1 }
    ],
    bdy: [
      { kind: 0, x: 18, y: 36, w: 39, h: 24 },
      { kind: 0, x: 2, y: 57, w: 41, h: 22 }
    ]
  },
  306: { name: "run_attack",
    pic: 81, state: 15, wait: 0, next: 307, dvx: 10, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: -2,
    itr: { kind: 0, x: 52, y: 5, w: 11, h: 70, dvx: 12, fall: 20, vrest: 7, bdefend: 16, injury: 25, effect: 1 },
    bdy: { kind: 0, x: 18, y: 36, w: 39, h: 24 }
  },
  307: { name: "run_attack",
    pic: 82, state: 15, wait: 0, next: 308, dvx: 10, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    mp: -2,
    itr: { kind: 0, x: 35, y: 33, w: 28, h: 14, dvx: 18, fall: 20, vrest: 7, bdefend: 16, injury: 25, effect: 1 },
    bdy: [
      { kind: 0, x: 18, y: 36, w: 39, h: 24 },
      { kind: 0, x: 2, y: 57, w: 41, h: 22 }
    ]
  },
  308: { name: "run_attack",
    pic: 83, state: 15, wait: 0, next: 309, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 18, y: 36, w: 39, h: 24 }
  },
  309: { name: "run_attack",
    pic: 84, state: 15, wait: 0, next: 310, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    bdy: [
      { kind: 0, x: 18, y: 36, w: 39, h: 24 },
      { kind: 0, x: 2, y: 57, w: 41, h: 22 }
    ]
  },
  310: { name: "run_attack",
    pic: 85, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 18, y: 36, w: 39, h: 24 },
      { kind: 0, x: 2, y: 57, w: 41, h: 22 }
    ]
  },
  311: { name: "charge",
    pic: 93, state: 15, wait: 3, next: 316, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -17, weaponact: 28, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  312: { name: "charge",
    pic: 94, state: 15, wait: 3, next: 313, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 313, hit_d: 314, hit_j: 314,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -17, weaponact: 28, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 45, action: 0, oid: 203 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  313: { name: "charge",
    pic: 94, state: 15, wait: 3, next: 312, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 314, hit_j: 314,
    mp: -25,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -17, weaponact: 28, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  314: { name: "charge",
    pic: 92, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -17, weaponact: 28, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 10, y: 38, w: 54, h: 21 }
  },
  315: { name: "charge",
    pic: 92, state: 3, wait: 3, next: 316, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 4,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 399, attacking: 0, cover: 1 },
    itr: { kind: 806, x: 39, y: 90019, w: 21, h: 61, dvx: 311 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  316: { name: "charge",
    pic: 93, state: 17, wait: 3, next: 317, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 4,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 79, y: 2, weaponact: 20, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 2, x: 42, y: 51, action: 20, oid: 123, facing: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  317: { name: "charge",
    pic: 94, state: 17, wait: 3, next: 318, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 319, hit_d: 319, hit_j: 319,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 12, weaponact: 20, attacking: 0, cover: 0 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 45, action: 0, oid: 203 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  318: { name: "charge",
    pic: 94, state: 17, wait: 3, next: 317, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 319, hit_d: 319, hit_j: 319,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 30, weaponact: 20, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 25, y: 26, w: 37, h: 53 }
  },
  319: { name: "charge",
    pic: 92, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 100, dvy: -1, dvz: 0, kind: 1, x: 39, y: 30, weaponact: 40, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 10, y: 38, w: 54, h: 21 }
  },
  320: { name: "double_flame",
    pic: 104, state: 15, wait: 0, next: 321, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/sasori2",
    mp: 180,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 399, attacking: 0, cover: 1 },
    itr: { kind: 806, x: 39, y: 90019, w: 21, h: 61, dvx: 255 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  321: { name: "double_flame",
    pic: 104, state: 3, wait: 1, next: 322, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 14, attacking: 0, cover: 1 },
    itr: { kind: 806, x: 39, y: 90019, w: 21, h: 61, dvx: 255 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  322: { name: "double_flame",
    pic: 105, state: 3, wait: 1, next: 323, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  323: { name: "double_flame",
    pic: 107, state: 3, wait: 2, next: 324, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 275, hit_d: 275, hit_j: 275,
    sound: "2/071",
    mp: -2,
    opoint: { dvx: 20, dvy: 0, dvz: 0, kind: 1, x: 67, y: 45, action: 0, oid: 211, facing: 20 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  324: { name: "double_flame",
    pic: 108, state: 3, wait: 2, next: 323, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 275, hit_d: 275, hit_j: 275,
    mp: -3,
    opoint: { dvx: 16, dvy: 0, dvz: 0, kind: 1, x: 67, y: 45, action: 0, oid: 211, facing: 20 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  325: { name: "summon",
    pic: 50, state: 1170326, wait: 1, next: 380, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 399, attacking: 0, cover: 1 },
    itr: { kind: 806, x: 39, y: 90019, w: 21, h: 61, dvx: 1 },
  },
  326: { name: "summon",
    pic: 50, state: 15, wait: 0, next: 281, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/sasori1",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 399, attacking: 0, cover: 1 },
    itr: { kind: 806, x: 39, y: 90019, w: 21, h: 61, dvx: 1 },
  },
  330: { name: "doube_attack",
    pic: 35, state: 15, wait: 5, next: 331, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 165,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -50, y: -20, weaponact: 399, attacking: 0, cover: 1 },
    itr: { kind: 806, x: 39, y: 90019, w: 21, h: 61, dvx: 57 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  331: { name: "doube_attack",
    pic: 120, state: 15, wait: 1, next: 332, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -44, weaponact: 2, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  332: { name: "doube_attack",
    pic: 121, state: 15, wait: 0, next: 333, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -45, weaponact: 3, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -30, y: 110, action: 85, oid: 419, facing: 1 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  333: { name: "doube_attack",
    pic: 121, state: 15, wait: 0, next: 334, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/071",
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -45, weaponact: 2, attacking: 0, cover: 1 },
    opoint: { dvx: 35, dvy: 0, dvz: 0, kind: 1, x: 30, y: 45, action: 0, oid: 211, facing: 0 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  334: { name: "doube_attack",
    pic: 121, state: 15, wait: 0, next: 335, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -46, weaponact: 2, attacking: 0, cover: 1 },
    opoint: { dvx: 35, dvy: 0, dvz: 0, kind: 1, x: 30, y: 45, action: 0, oid: 211, facing: 0 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  335: { name: "doube_attack",
    pic: 121, state: 15, wait: 0, next: 336, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -46, weaponact: 1, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -350, y: 110, action: 185, oid: 822, facing: 1 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  336: { name: "doube_attack",
    pic: 121, state: 15, wait: 0, next: 337, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -46, weaponact: 1, attacking: 0, cover: 1 },
    opoint: { dvx: 35, dvy: 0, dvz: 0, kind: 1, x: 30, y: 45, action: 0, oid: 211, facing: 0 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  337: { name: "doube_attack",
    pic: 121, state: 15, wait: 0, next: 338, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -45, weaponact: 1, attacking: 0, cover: 1 },
    opoint: { dvx: 35, dvy: 0, dvz: 0, kind: 1, x: 30, y: 45, action: 0, oid: 211, facing: 0 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  338: { name: "doube_attack",
    pic: 121, state: 15, wait: 0, next: 339, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -45, weaponact: 2, attacking: 0, cover: 1 },
    opoint: { dvx: 35, dvy: 0, dvz: 0, kind: 1, x: 30, y: 45, action: 0, oid: 211, facing: 0 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  339: { name: "doube_attack",
    pic: 121, state: 15, wait: 0, next: 340, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -44, weaponact: 2, attacking: 0, cover: 1 },
    opoint: { dvx: 35, dvy: 0, dvz: 0, kind: 1, x: 30, y: 45, action: 0, oid: 211, facing: 0 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  340: { name: "doube_attack",
    pic: 121, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -44, weaponact: 3, attacking: 0, cover: 1 },
    opoint: { dvx: 35, dvy: 0, dvz: 0, kind: 1, x: 30, y: 45, action: 0, oid: 211, facing: 0 },
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  341: { name: "picking_heavy",
    pic: 106, state: 15, wait: 4, next: 342, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 45, dvy: -4, dvz: 2, kind: 1, x: 93, y: 57, weaponact: 10, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 24, y: 43, w: 33, h: 37 }
  },
  342: { name: "picking_heavy",
    pic: 119, state: 15, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 24, y: 43, w: 33, h: 37 }
  },
  343: { name: "picking_light",
    pic: 101, state: 15, wait: 1, next: 344, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 30, y: 42, weaponact: 20, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 24, y: 43, w: 33, h: 37 }
  },
  344: { name: "picking_light",
    pic: 102, state: 15, wait: 1, next: 345, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 55, dvy: -4, dvz: 3, kind: 1, x: 100, y: 50, weaponact: 35, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 24, y: 43, w: 33, h: 37 }
  },
  345: { name: "picking_light",
    pic: 103, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 24, y: 43, w: 33, h: 37 }
  },
  355: { name: "counter",
    pic: 122, state: 15, wait: 0, next: 356, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 100,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -46, weaponact: 1, attacking: 0, cover: 1 },
    itr: [
      { kind: 0, x: 4, y: 24, w: 38, h: 44, dvx: 5, dvy: -5, fall: 70, vrest: 4, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 43, y: 27, w: 36, h: 46, dvx: -5, dvy: -5, fall: 70, vrest: 4, bdefend: 100, injury: 5, effect: 1 }
    ],
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  356: { name: "counter",
    pic: 123, state: 15, wait: 0, next: 357, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -46, weaponact: 1, attacking: 0, cover: 1 },
    itr: [
      { kind: 0, x: 4, y: 24, w: 38, h: 44, dvx: 5, dvy: -5, fall: 70, vrest: 4, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 43, y: 27, w: 36, h: 46, dvx: -5, dvy: -5, fall: 70, vrest: 4, bdefend: 100, injury: 5, effect: 1 }
    ],
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  357: { name: "counter",
    pic: 124, state: 15, wait: 0, next: 358, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -46, weaponact: 1, attacking: 0, cover: 1 },
    itr: [
      { kind: 0, x: 4, y: 24, w: 38, h: 44, dvx: 5, dvy: -5, fall: 70, vrest: 4, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 43, y: 27, w: 36, h: 46, dvx: -5, dvy: -5, fall: 70, vrest: 4, bdefend: 100, injury: 5, effect: 1 }
    ],
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  358: { name: "counter",
    pic: 125, state: 15, wait: 0, next: 359, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -46, weaponact: 1, attacking: 0, cover: 1 },
    itr: [
      { kind: 0, x: 4, y: 24, w: 38, h: 44, dvx: 5, dvy: -5, fall: 70, vrest: 4, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 43, y: 27, w: 36, h: 46, dvx: -5, dvy: -5, fall: 70, vrest: 4, bdefend: 100, injury: 5, effect: 1 }
    ],
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  359: { name: "counter",
    pic: 122, state: 15, wait: 0, next: 360, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -46, weaponact: 1, attacking: 0, cover: 1 },
    itr: [
      { kind: 0, x: 4, y: 24, w: 38, h: 44, dvx: 5, dvy: -5, fall: 70, vrest: 4, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 43, y: 27, w: 36, h: 46, dvx: -5, dvy: -5, fall: 70, vrest: 4, bdefend: 100, injury: 5, effect: 1 }
    ],
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  360: { name: "counter",
    pic: 123, state: 15, wait: 0, next: 361, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -46, weaponact: 1, attacking: 0, cover: 1 },
    itr: [
      { kind: 0, x: 4, y: 24, w: 38, h: 44, dvx: 5, dvy: -5, fall: 70, vrest: 4, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 43, y: 27, w: 36, h: 46, dvx: -5, dvy: -5, fall: 70, vrest: 4, bdefend: 100, injury: 5, effect: 1 }
    ],
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  361: { name: "counter",
    pic: 124, state: 15, wait: 0, next: 362, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -46, weaponact: 1, attacking: 0, cover: 1 },
    itr: [
      { kind: 0, x: 4, y: 24, w: 38, h: 44, dvx: 5, dvy: -5, fall: 70, vrest: 4, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 43, y: 27, w: 36, h: 46, dvx: -5, dvy: -5, fall: 70, vrest: 4, bdefend: 100, injury: 5, effect: 1 }
    ],
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  362: { name: "counter",
    pic: 125, state: 15, wait: 0, next: 363, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -46, weaponact: 1, attacking: 0, cover: 1 },
    itr: [
      { kind: 0, x: 4, y: 24, w: 38, h: 44, dvx: 5, dvy: -5, fall: 70, vrest: 4, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 43, y: 27, w: 36, h: 46, dvx: -5, dvy: -5, fall: 70, vrest: 4, bdefend: 100, injury: 5, effect: 1 }
    ],
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  363: { name: "counter",
    pic: 126, state: 15, wait: 0, next: 999, dvx: 0, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -10, y: -46, weaponact: 1, attacking: 0, cover: 1 },
    itr: [
      { kind: 0, x: 4, y: 24, w: 38, h: 44, dvx: 5, dvy: -5, fall: 70, vrest: 4, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 43, y: 27, w: 36, h: 46, dvx: -5, dvy: -5, fall: 70, vrest: 4, bdefend: 100, injury: 5, effect: 1 }
    ],
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  365: { name: "poison",
    pic: 44, state: 15, wait: 0, next: 366, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -60, y: -32, weaponact: 1, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  366: { name: "poison",
    pic: 44, state: 15, wait: 0, next: 367, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 0, y: -32, weaponact: 1, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  367: { name: "poison",
    pic: 42, state: 15, wait: 0, next: 368, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -32, weaponact: 81, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  368: { name: "poison",
    pic: 41, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: -32, weaponact: 22, attacking: 0, cover: 1 },
    bdy: { kind: 0, x: 51, y: 34, w: 26, h: 16 }
  },
  370: { name: "mass",
    pic: 58, state: 3, wait: 0, next: 371, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 85, attacking: 0, cover: 1 },
    opoint: { dvx: 10, dvy: 0, dvz: 0, kind: 1, x: 267, y: -30, action: 90, oid: 451, facing: 40 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  371: { name: "mass",
    pic: 58, state: 3, wait: 0, next: 372, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 85, attacking: 0, cover: 1 },
    opoint: { dvx: -10, dvy: 0, dvz: 0, kind: 1, x: 20, y: -30, action: 90, oid: 451, facing: 40 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  372: { name: "mass",
    pic: 58, state: 3, wait: 0, next: 373, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 85, attacking: 0, cover: 1 },
    opoint: { dvx: 15, dvy: 0, dvz: 0, kind: 1, x: 20, y: -30, action: 90, oid: 451, facing: 30 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  373: { name: "mass",
    pic: 59, state: 3, wait: 0, next: 374, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 86, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  374: { name: "mass",
    pic: 59, state: 3, wait: 0, next: 375, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 86, attacking: 0, cover: 1 },
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 81, action: 203, oid: 203, facing: 0 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  375: { name: "mass",
    pic: 59, state: 3, wait: 0, next: 376, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 86, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  376: { name: "mass",
    pic: 68, state: 3, wait: 0, next: 377, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 87, attacking: 0, cover: 1 },
    opoint: { dvx: -10, dvy: 0, dvz: 0, kind: 1, x: 20, y: -30, action: 90, oid: 451, facing: 41 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  377: { name: "mass",
    pic: 68, state: 3, wait: 0, next: 378, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 87, attacking: 0, cover: 1 },
    opoint: { dvx: 15, dvy: 0, dvz: 0, kind: 1, x: 20, y: -30, action: 90, oid: 451, facing: 31 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  378: { name: "mass",
    pic: 68, state: 3, wait: 0, next: 379, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 87, attacking: 0, cover: 1 },
    bdy: [
      { kind: 0, x: 45, y: 753, w: 32, h: 11 },
      { kind: 0, x: 51, y: 34, w: 26, h: 16 }
    ]
  },
  379: { name: "mass",
    pic: 68, state: 3, wait: 9, next: 145, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -39, y: -60, weaponact: 88, attacking: 0, cover: 1 },
    opoint: { dvx: -10, dvy: 0, dvz: 0, kind: 1, x: 237, y: -30, action: 90, oid: 451, facing: 51 },
  },
  380: { name: "hell",
    pic: 58, state: 3, wait: 3, next: 400, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 30, y: 18, w: 28, h: 60 }
  },
  381: { name: "hell",
    pic: 87, state: 3, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 382,
    bdy: { kind: 0, x: 30, y: 18, w: 28, h: 60 }
  },
  382: { name: "hell",
    pic: 88, state: 3, wait: 0, next: 383, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    mp: 49500,
    bdy: { kind: 0, x: 30, y: 18, w: 28, h: 60 }
  },
  383: { name: "hell",
    pic: 95, state: 3, wait: 3, next: 384, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/007",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 51, action: 88, oid: 512, facing: 20 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  384: { name: "hell",
    pic: 96, state: 3, wait: 3, next: 385, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 51, action: 88, oid: 511, facing: 20 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  385: { name: "hell",
    pic: 97, state: 3, wait: 3, next: 386, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 51, action: 88, oid: 510, facing: 20 },
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  386: { name: "hell",
    pic: 95, state: 3, wait: 3, next: 387, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 39, y: 19, w: 21, h: 61 },
      { kind: 0, x: 0, y: 40000000, w: 79, h: 500 }
    ]
  },
  387: { name: "hell",
    pic: 96, state: 3, wait: 90, next: 388, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  388: { name: "hell",
    pic: 97, state: 3, wait: 90, next: 389, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  389: { name: "hell",
    pic: 96, state: 3, wait: 90, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 39, y: 19, w: 21, h: 61 }
  },
  399: { name: "dummy",
    pic: 30, state: 15, wait: 3, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 58, y: 35, weaponact: 21, attacking: 0, cover: 0 },
  },
  400: { name: "trans",
    pic: 130, state: 3, wait: 3, next: 401, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 381, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 30, y: 18, w: 28, h: 60 }
  },
  401: { name: "trans",
    pic: 131, state: 3, wait: 3, next: 402, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 381, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 30, y: 18, w: 28, h: 60 }
  },
  402: { name: "trans",
    pic: 132, state: 3, wait: 3, next: 403, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 381, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 30, y: 18, w: 28, h: 60 }
  },
  403: { name: "trans",
    pic: 133, state: 3, wait: 3, next: 404, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 381, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 30, y: 18, w: 28, h: 60 }
  },
  404: { name: "trans",
    pic: 134, state: 3, wait: 3, next: 405, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 381, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 33, y: 83, action: 280, oid: 411, facing: 0 },
    bdy: { kind: 0, x: 30, y: 18, w: 28, h: 60 }
  },
  405: { name: "trans",
    pic: 135, state: 3, wait: 3, next: 406, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 381, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 30, y: 18, w: 28, h: 60 }
  },
  406: { name: "trans",
    pic: 136, state: 3, wait: 3, next: 407, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 381, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 30, y: 18, w: 28, h: 60 }
  },
  407: { name: "trans",
    pic: 137, state: 3, wait: 3, next: 408, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 381, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 51, action: 88, oid: 510, facing: 20 },
    bdy: { kind: 0, x: 30, y: 18, w: 28, h: 60 }
  },
  408: { name: "trans",
    pic: 138, state: 8081, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 79, hit_a: 381, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 30, y: 18, w: 28, h: 60 }
  },
  500: { name: "defend2",
    pic: 40, state: 6001, wait: 0, next: 501, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 110, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -17, weaponact: 28, attacking: 0, cover: 0 },
  },
  501: { name: "defendend",
    pic: 40, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 20, y: -17, weaponact: 28, attacking: 0, cover: 0 },
    bdy: { kind: 0, x: 16, y: 19, w: 42, h: 60 }
  }
  }
});