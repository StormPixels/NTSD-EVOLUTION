define({
  bmp: {
    file: [
      { "file(0-34)": "sprite/puppet.png", w: 110, h: 100, row: 5, col: 7 },
      { "file(35-99)": "sprite/puppet2.png", w: 275, h: 235, row: 3, col: 3 }
    ],
  },
  frame: {
  0: { name: "stand",
    pic: 0, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  1: { name: "stand",
    pic: 1, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  2: { name: "stand",
    pic: 2, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  3: { name: "stand",
    pic: 3, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  4: { name: "attack1",
    pic: 4, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 11, y: 15, w: 40, h: 40 },
      { kind: 0, x: 999, y: -999, w: 500, h: 40 }
    ]
  },
  5: { name: "attack1",
    pic: 5, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  6: { name: "attack1",
    pic: 6, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: -2, y: -1, w: 115, zwidth: 10, h: 70, dvx: 12, dvy: -10, fall: 70, vrest: 9, bdefend: 100, injury: 55, effect: 1 },
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  7: { name: "attack1",
    pic: 7, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  8: { name: "attack1",
    pic: 8, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  9: { name: "attack2",
    pic: 9, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 11, y: 15, w: 40, h: 40 },
      { kind: 0, x: 999, y: -999, w: 500, h: 40 }
    ]
  },
  10: { name: "attack2",
    pic: 10, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  11: { name: "attack2",
    pic: 11, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 13, y: 22, w: 104, zwidth: 10, h: 89, dvx: 12, dvy: -10, fall: 70, vrest: 15, bdefend: 100, injury: 55, effect: 1 },
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  12: { name: "attack2",
    pic: 12, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  13: { name: "attack2",
    pic: 13, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  14: { name: "ironsand1",
    pic: 14, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 80, y: 130, action: 9, oid: 222 },
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
  20: { name: "ironsand2",
    pic: 24, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
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
    bdy: { kind: 0, x: 11, y: -666, w: 500, h: 40 }
  },
  28: { name: "defend",
    pic: 22, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 11, y: 15, w: 50, h: 40, zwidth: 70 },
      { kind: 0, x: 11, y: -666, w: 500, h: 40 }
    ]
  },
  30: { name: "attack3",
    pic: 30, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 51, y: 27, w: 61, h: 25, zwidth: 10, dvx: 20, dvy: -10, fall: 70, vrest: 15, bdefend: 100, injury: 55, effect: 1 },
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  31: { name: "attack3",
    pic: 31, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 51, y: 27, w: 61, h: 25, zwidth: 10, dvx: 20, dvy: -10, fall: 70, vrest: 15, bdefend: 100, injury: 55, effect: 1 },
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  60: { name: "on_ground",
    pic: 20, state: 15, wait: 3, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  61: { name: "on_ground",
    pic: 20, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 70, y: 0, action: 65, oid: 222, facing: 0 },
  },
  70: { name: "just_on_ground",
    pic: 20, state: 15, wait: 10, next: 71, dvx: -5, dvy: -1, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  71: { name: "just_on_ground",
    pic: 20, state: 15, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 70, y: 0, action: 65, oid: 222, facing: 0 },
  },
  75: { name: "attack2",
    pic: 11, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 13, y: 22, w: 104, zwidth: 10, h: 89, dvx: 3, dvy: -10, fall: 10, arest: 8, bdefend: 100, injury: 55, effect: 1 },
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  76: { name: "attack1",
    pic: 6, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: -2, y: -1, w: 115, zwidth: 10, h: 70, dvx: 3, dvy: -10, fall: 10, arest: 8, bdefend: 100, injury: 55, effect: 1 },
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  80: { name: "attack1",
    pic: 0, state: 3005, wait: 0, next: 80, dvx: 550, dvy: 550, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
  },
  81: { name: "stand",
    pic: 25, state: 3005, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 10, dvy: 0, dvz: 0, kind: 1, x: 80, y: 115, action: 95, oid: 452, facing: 0 },
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
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
    bdy: { kind: 0, x: 11, y: 15, w: 40, h: 40 }
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
    itr: { kind: 0, x: 80, y: 53, w: 187, zwidth: 10, h: 177, dvx: 12, dvy: -15, fall: 100, vrest: 9, bdefend: 100, injury: 80, effect: 0 },
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
  398: { name: "on_ground",
    pic: 999, state: 3005, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  399: { name: "dummy",
    pic: 0, state: 0, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 84, y: 99, action: 4, oid: 55, facing: 0 },
  }
  }
});