define({
  bmp: {
    file: [
      { "file(0-9)": "sprite/susanoo.png", w: 110, h: 100, row: 5, col: 2 },
      { "file(10-34)": "sprite/susanoo2.png", w: 200, h: 135, row: 4, col: 16 },
      { "file(35-99)": "sprite/puppet2.png", w: 275, h: 235, row: 3, col: 3 }
    ],
  },
  frame: {
  0: { name: "stand",
    pic: 0, state: 3005, wait: 4, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 11, y: 15, w: 100, h: 100, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0 },
    bdy: { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 }
  },
  1: { name: "run",
    pic: 1, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 11, y: 15, w: 100, h: 100, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0 },
    bdy: { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 }
  },
  2: { name: "start",
    pic: 2, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  3: { name: "start2",
    pic: 3, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  4: { name: "attack1",
    pic: 14, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 11, y: 15, w: 100, h: 100, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0 },
    bdy: { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 }
  },
  5: { name: "attack1",
    pic: 14, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 11, y: 15, w: 100, h: 100, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0 },
    bdy: { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 }
  },
  6: { name: "attack1",
    pic: 15, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 13, y: 22, w: 170, zwidth: 10, h: 89, dvx: 12, dvy: -8, fall: 70, vrest: 15, bdefend: 100, injury: 55, effect: 0 },
      { kind: 0, x: 11, y: 15, w: 100, h: 100, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0 }
    ],
    bdy: { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 }
  },
  7: { name: "attack1",
    pic: 15, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 13, y: 22, w: 170, zwidth: 10, h: 89, dvx: 12, dvy: -8, fall: 70, vrest: 15, bdefend: 100, injury: 55, effect: 0 },
      { kind: 0, x: 11, y: 15, w: 100, h: 100, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0 }
    ],
    bdy: { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 }
  },
  8: { name: "attack1",
    pic: 15, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 13, y: 22, w: 170, zwidth: 10, h: 89, dvx: 12, dvy: -8, fall: 70, vrest: 15, bdefend: 100, injury: 55, effect: 0 },
      { kind: 0, x: 11, y: 15, w: 100, h: 100, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0 }
    ],
    bdy: { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 }
  },
  9: { name: "attack2",
    pic: 0, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 11, y: 15, w: 100, h: 100, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0 },
    bdy: { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 }
  },
  10: { name: "attack2",
    pic: 10, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 11, y: 15, w: 100, h: 100, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0 },
    bdy: { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 }
  },
  11: { name: "attack2",
    pic: 11, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 11, y: 15, w: 100, h: 100, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0 },
    bdy: { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 }
  },
  12: { name: "attack2",
    pic: 12, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 11, y: 15, w: 100, h: 100, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0 },
    bdy: { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 }
  },
  13: { name: "attack2",
    pic: 13, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 13, y: 22, w: 175, zwidth: 10, h: 89, dvx: 12, dvy: -10, fall: 70, vrest: 15, bdefend: 100, injury: 55, effect: 0 },
      { kind: 0, x: 11, y: 15, w: 100, h: 100, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0 }
    ],
    bdy: { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 }
  },
  14: { name: "ironsand1",
    pic: 14, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 100, y: 55, action: 101, oid: 206, facing: 0 },
    bdy: [
      { kind: 0, x: 11, y: 15, w: 40, h: 40 },
      { kind: 0, x: 11, y: -666, w: 500, h: 40 }
    ]
  },
  15: { name: "ironsand1",
    pic: 15, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  16: { name: "ironsand1",
    pic: 16, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  17: { name: "ironsand1",
    pic: 17, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  18: { name: "ironsand2",
    pic: 14, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 11, y: 15, w: 40, h: 40 },
      { kind: 0, x: 11, y: -666, w: 500, h: 40 }
    ]
  },
  19: { name: "ironsand2",
    pic: 19, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 180, y: 130, action: 50, oid: 222 },
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  20: { name: "on_hand",
    pic: 999, state: 1001, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: { dvx: 0, dvy: 0, dvz: 0, kind: 2, x: 24, y: 40, weaponact: 0, attacking: 0, cover: 0 },
    itr: { kind: 5, x: 17, y: 2, w: 13, h: 44, fall: 20, bdefend: 16, injury: 789 },
  },
  21: { name: "ironsand2",
    pic: 29, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  22: { name: "ironsand2",
    pic: 25, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  23: { name: "ironsand2",
    pic: 26, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  24: { name: "ironsand2",
    pic: 27, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  25: { name: "ironsand2",
    pic: 28, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  26: { name: "ironkill",
    pic: 14, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 120, y: 70, action: 110, oid: 206, facing: 0 },
    bdy: { kind: 0, x: 11, y: -666, w: 500, h: 40 }
  },
  27: { name: "dash",
    pic: 21, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 }
  },
  28: { name: "defend",
    pic: 0, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 },
      { kind: 0, x: 11, y: -666, w: 500, h: 40 }
    ]
  },
  30: { name: "attack3",
    pic: 16, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 13, y: 22, w: 160, zwidth: 10, h: 89, dvx: 9, dvy: -18, fall: 70, vrest: 15, bdefend: 100, injury: 55, effect: 0 },
      { kind: 0, x: 11, y: 15, w: 100, h: 100, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0 }
    ],
    bdy: { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 }
  },
  31: { name: "attack3",
    pic: 17, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 13, y: 22, w: 160, zwidth: 10, h: 89, dvx: 9, dvy: -18, fall: 70, vrest: 15, bdefend: 100, injury: 55, effect: 0 },
      { kind: 0, x: 11, y: 15, w: 100, h: 100, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0 }
    ],
    bdy: { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 }
  },
  60: { name: "on_ground",
    pic: 999, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  70: { name: "just_on_ground",
    pic: 999, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  75: { name: "attack2",
    pic: 11, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 13, y: 22, w: 175, zwidth: 10, h: 89, dvx: 3, dvy: -10, fall: 10, arest: 8, bdefend: 100, injury: 55, effect: 1 },
    bdy: { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 }
  },
  76: { name: "attack1",
    pic: 15, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 13, y: 22, w: 170, zwidth: 10, h: 89, dvx: 12, dvy: -8, fall: 70, vrest: 15, bdefend: 100, injury: 55, effect: 0 },
      { kind: 0, x: 11, y: 15, w: 100, h: 100, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0 }
    ],
    bdy: { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 }
  },
  80: { name: "attack1",
    pic: 0, state: 3005, wait: 0, next: 80, dvx: 550, dvy: 550, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 11, y: 15, w: 100, h: 100, dvx: 7, dvy: -8, fall: 1, vrest: 30, bdefend: 999, injury: 0, effect: 0 },
    bdy: { kind: 0, x: 11, y: 15, w: 170, h: 100, zwidth: 10 }
  },
  81: { name: "stand",
    pic: 25, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 10, dvy: 0, dvz: 0, kind: 1, x: 80, y: 90, action: 306, oid: 452, facing: 20 },
    bdy: { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 }
  },
  85: { name: "madd_striker",
    pic: 25, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  86: { name: "madd_striker",
    pic: 26, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  87: { name: "madd_striker",
    pic: 27, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  88: { name: "madd_striker",
    pic: 28, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  90: { name: "hands",
    pic: 32, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 100, h: 100, zwidth: 10 }
  },
  91: { name: "hands",
    pic: 33, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  92: { name: "hands",
    pic: 23, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  93: { name: "hands",
    pic: 34, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  94: { name: "hands",
    pic: 35, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  95: { name: "hands",
    pic: 36, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  96: { name: "hands",
    pic: 37, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  97: { name: "hands",
    pic: 38, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 80, y: 53, w: 187, zwidth: 10, h: 177, dvx: 12, dvy: -15, fall: 100, vrest: 9, bdefend: 100, injury: 100, effect: 0 },
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  98: { name: "hands",
    pic: 38, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  99: { name: "hands",
    pic: 39, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 10, dvy: 0, dvz: 0, kind: 1, x: 150, y: 220, action: 95, oid: 452, facing: 11 },
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  100: { name: "hands",
    pic: 40, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 10, dvy: 0, dvz: 0, kind: 1, x: 200, y: 220, action: 95, oid: 452, facing: 0 },
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  101: { name: "hands",
    pic: 40, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  397: { name: "drop",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  398: { name: "on_ground",
    pic: 999, state: 3005, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  399: { name: "dummy",
    pic: 999, state: 0, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 84, y: 99, action: 4, oid: 55, facing: 0 },
  }
  }
});