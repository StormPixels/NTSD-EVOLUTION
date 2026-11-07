define({
  bmp: {
    file: [
      { "file(0-7)": "sprite/clay_worm.png", w: 219, h: 99, row: 4, col: 2 },
      { "file(8-50)": "sprite/big_smoke.png", w: 219, h: 99, row: 4, col: 5 }
    ],
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 5, dvy: 0, dvz: 0, centerx: 113, centery: 7, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 22, y: 0, w: 120, h: 70 },
      { kind: 0, x: 22, y: -666, w: 120, h: 40 }
    ]
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 2, dvx: 5, dvy: 0, dvz: 0, centerx: 113, centery: 7, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 22, y: 0, w: 120, h: 70 },
      { kind: 0, x: 22, y: -666, w: 120, h: 40 }
    ]
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 3, dvx: 5, dvy: 0, dvz: 0, centerx: 113, centery: 7, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 22, y: 0, w: 120, h: 70 },
      { kind: 0, x: 22, y: -666, w: 120, h: 40 }
    ]
  },
  3: { name: "flying",
    pic: 3, state: 3000, wait: 1, next: 999, dvx: 5, dvy: 0, dvz: 0, centerx: 113, centery: 7, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 22, y: 0, w: 120, h: 70 },
      { kind: 0, x: 22, y: -666, w: 120, h: 40 }
    ]
  },
  5: { name: "katsu",
    pic: 999, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 7, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: -9999, y: 10, w: 99999, zwidth: 999, h: 14, vrest: 7, dvx: 1, bdefend: 0, injury: 0, effect: 5 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  10: { name: "hiting",
    pic: 4, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 7, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  11: { name: "hiting",
    pic: 6, state: 3001, wait: 10, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 7, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/020",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 60, y: 100, action: 130, oid: 211, facing: 0 },
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 7, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  21: { name: "hit",
    pic: 6, state: 3002, wait: 10, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 7, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/020",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 70, y: 100, action: 130, oid: 211, facing: 0 },
  },
  30: { name: "rebounding",
    pic: 4, state: 3003, wait: 0, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 7, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  31: { name: "rebounding",
    pic: 6, state: 3003, wait: 10, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 7, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 100, action: 130, oid: 211, facing: 0 },
  },
  40: { name: "smoke",
    pic: 8, state: 3000, wait: 3, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/061",
  },
  41: { name: "smoke",
    pic: 9, state: 3000, wait: 3, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  42: { name: "smoke",
    pic: 10, state: 3000, wait: 3, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  43: { name: "smoke",
    pic: 11, state: 3000, wait: 3, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 100, y: 5, action: 0, oid: 407, facing: 0 },
  },
  45: { name: "smoke",
    pic: 8, state: 3005, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/061",
  },
  46: { name: "smoke",
    pic: 9, state: 3000, wait: 3, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  47: { name: "smoke",
    pic: 10, state: 3000, wait: 3, next: 48, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  48: { name: "smoke",
    pic: 11, state: 3000, wait: 3, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 110, y: 15, action: 49, oid: 407, facing: 0 },
  },
  49: { name: "smoke",
    pic: 12, state: 3000, wait: 7, next: 50, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  50: { name: "smoke",
    pic: 13, state: 3000, wait: 7, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  51: { name: "smoke",
    pic: 14, state: 3000, wait: 0, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/018",
  },
  52: { name: "smoke",
    pic: 15, state: 3000, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 100, y: 79, action: 40, oid: 216, facing: 0 },
  },
  55: { name: "just_smoke",
    pic: 8, state: 3005, wait: 3, next: 56, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/061",
  },
  56: { name: "just_smoke",
    pic: 9, state: 3005, wait: 3, next: 57, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  57: { name: "just_smoke",
    pic: 10, state: 3005, wait: 3, next: 58, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  58: { name: "just_smoke",
    pic: 11, state: 3005, wait: 3, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 18, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  60: { name: "lightning",
    pic: 16, state: 15, wait: 1, next: 61, dvx: 550, dvy: 550, dvz: 0, centerx: 99, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 0, y: 80032, w: 220, h: 65, dvx: 20, dvy: -10, fall: 70, vrest: 20, bdefend: 100, injury: 50 },
  },
  61: { name: "lightning",
    pic: 17, state: 15, wait: 1, next: 62, dvx: 550, dvy: 550, dvz: 0, centerx: 99, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 43, y: 81, action: 334, oid: 203, facing: 0 },
    itr: { kind: 0, x: 0, y: 80032, w: 220, h: 65, dvx: 20, dvy: -10, fall: 70, vrest: 20, bdefend: 100, injury: 50 },
  },
  62: { name: "lightning",
    pic: 18, state: 15, wait: 1, next: 63, dvx: 550, dvy: 550, dvz: 550, centerx: 99, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 0, y: 80032, w: 220, h: 65, dvx: 20, dvy: -10, fall: 70, vrest: 20, bdefend: 100, injury: 50 },
  },
  63: { name: "lightning",
    pic: 17, state: 15, wait: 1, next: 64, dvx: 550, dvy: 550, dvz: 550, centerx: 99, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 0, y: 80032, w: 220, h: 65, dvx: 20, dvy: -10, fall: 70, vrest: 20, bdefend: 100, injury: 50 },
  },
  64: { name: "lightning",
    pic: 19, state: 15, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 99, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 0, y: 80032, w: 220, h: 65, dvx: 20, dvy: -10, fall: 70, vrest: 20, bdefend: 100, injury: 50 },
  },
  70: { name: "sword2",
    pic: 20, state: 3003, wait: 1, next: 71, dvx: 25, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  71: { name: "sword2",
    pic: 21, state: 3003, wait: 1, next: 72, dvx: 25, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  72: { name: "sword2",
    pic: 20, state: 3003, wait: 1, next: 73, dvx: 25, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  73: { name: "sword2",
    pic: 21, state: 3003, wait: 1, next: 74, dvx: 25, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  74: { name: "sword2",
    pic: 20, state: 3003, wait: 1, next: 80, dvx: 25, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  75: { name: "sword3",
    pic: 22, state: 3003, wait: 1, next: 76, dvx: 25, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  76: { name: "sword3",
    pic: 23, state: 3003, wait: 1, next: 77, dvx: 25, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  77: { name: "sword3",
    pic: 24, state: 3003, wait: 1, next: 78, dvx: 25, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  78: { name: "sword3",
    pic: 22, state: 3003, wait: 1, next: 79, dvx: 25, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  79: { name: "sword3",
    pic: 23, state: 3003, wait: 1, next: 80, dvx: 25, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  80: { name: "sword4",
    pic: 25, state: 3003, wait: 1, next: 81, dvx: -1, dvy: 0, dvz: 0, centerx: 19, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  81: { name: "sword4",
    pic: 26, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  88: { name: "smoke2",
    pic: 999, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 8, x: 0, y: 454554545, w: 10000, h: 10000, zwidth: 10000, dvx: 55 },
  },
  110: { name: "sword2",
    pic: 20, state: 3003, wait: 1, next: 111, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  111: { name: "sword2",
    pic: 21, state: 3003, wait: 1, next: 112, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  112: { name: "sword2",
    pic: 20, state: 3003, wait: 1, next: 113, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  113: { name: "sword2",
    pic: 21, state: 3003, wait: 1, next: 114, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  114: { name: "sword2",
    pic: 20, state: 3003, wait: 1, next: 120, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  115: { name: "sword3",
    pic: 22, state: 3003, wait: 1, next: 116, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  116: { name: "sword3",
    pic: 23, state: 3003, wait: 1, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  117: { name: "sword3",
    pic: 24, state: 3003, wait: 1, next: 118, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  118: { name: "sword3",
    pic: 22, state: 3003, wait: 1, next: 119, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  119: { name: "sword3",
    pic: 23, state: 3003, wait: 1, next: 120, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 65, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  120: { name: "sword4",
    pic: 25, state: 3003, wait: 1, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  },
  121: { name: "sword4",
    pic: 26, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 5, y: 32, w: 75, h: 34, dvx: 0, fall: 1, vrest: 15, bdefend: 100, injury: 5, effect: 1 },
      { kind: 0, x: 0, y: 80000, w: 0, h: 79, fall: 500, bdefend: 100, injury: 1 }
    ],
  }
  }
});