define({
  bmp: {
    file: [
      { "file(0-11)": "sprite/clay_bird.png", w: 81, h: 82, row: 4, col: 3 }
    ],
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 39, hit_a: 7, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: { kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 4, fall: 20, vrest: 15, bdefend: 16, injury: 1 },
    bdy: [
      { kind: 0, x: 21, y: 22, w: 40, h: 39 },
      { kind: 0, x: 22, y: -666, w: 120, h: 40 }
    ]
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 43, hit_a: 7, hit_d: 1, hit_j: 0, hit_Fa: 12,
    itr: { kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 4, fall: 20, vrest: 15, bdefend: 16, injury: 1 },
    bdy: [
      { kind: 0, x: 21, y: 22, w: 40, h: 39 },
      { kind: 0, x: 22, y: -666, w: 120, h: 40 }
    ]
  },
  2: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 44, hit_a: 7, hit_d: 2, hit_j: 0, hit_Fa: 12,
    itr: { kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 4, fall: 20, vrest: 15, bdefend: 16, injury: 1 },
    bdy: [
      { kind: 0, x: 21, y: 22, w: 40, h: 39 },
      { kind: 0, x: 22, y: -666, w: 120, h: 40 }
    ]
  },
  3: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 45, hit_a: 7, hit_d: 3, hit_j: 0, hit_Fa: 12,
    itr: { kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 4, fall: 20, vrest: 15, bdefend: 16, injury: 1 },
    bdy: [
      { kind: 0, x: 21, y: 22, w: 40, h: 39 },
      { kind: 0, x: 22, y: -666, w: 120, h: 40 }
    ]
  },
  4: { name: "spider",
    pic: 8, state: 18, wait: 20, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  5: { name: "spider",
    pic: 8, state: 18, wait: 0, next: 6, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 8, x: 22, y: 22, w: 20, h: 10, dvx: 7, fall: 20, vrest: 15, bdefend: 16, injury: 1 },
    bdy: [
      { kind: 0, x: 42, y: 80, w: 20, h: 10 },
      { kind: 0, x: 22, y: -666, w: 120, h: 10 }
    ]
  },
  6: { name: "spider",
    pic: 8, state: 18, wait: 0, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 8, x: 22, y: 22, w: 20, h: 10, dvx: 7, fall: 20, vrest: 15, bdefend: 16, injury: 1 },
    bdy: [
      { kind: 0, x: 42, y: 80, w: 20, h: 10 },
      { kind: 0, x: 22, y: -666, w: 120, h: 10 }
    ]
  },
  7: { name: "spider_exl",
    pic: 999, state: 18, wait: 0, next: 130, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  8: { name: "bird",
    pic: 2, state: 3000, wait: 1, next: 9, dvx: 20, dvy: 0, dvz: 0, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 4, fall: 20, vrest: 15, bdefend: 16, injury: 1 },
    bdy: [
      { kind: 0, x: 22, y: 27, w: 10, h: 27 },
      { kind: 0, x: 22, y: -666, w: 120, h: 40 }
    ]
  },
  9: { name: "bird",
    pic: 2, state: 3000, wait: 1, next: 8, dvx: 20, dvy: 0, dvz: 0, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 4, fall: 20, vrest: 15, bdefend: 16, injury: 1 },
    bdy: [
      { kind: 0, x: 22, y: 27, w: 10, h: 27 },
      { kind: 0, x: 22, y: -666, w: 120, h: 40 }
    ]
  },
  10: { name: "hiting",
    pic: 999, state: 3001, wait: 0, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  11: { name: "hiting",
    pic: 999, state: 3001, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 81, action: 160, oid: 211, facing: 0 },
  },
  20: { name: "hit",
    pic: 999, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  30: { name: "rebounding",
    pic: 999, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  31: { name: "rebounding",
    pic: 999, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 81, action: 160, oid: 211, facing: 0 },
  },
  50: { name: "start",
    pic: 0, state: 3005, wait: 1, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  51: { name: "start",
    pic: 0, state: 3005, wait: 1, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  52: { name: "start",
    pic: 1, state: 3005, wait: 1, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  60: { name: "flying2",
    pic: 3, state: 3000, wait: 1, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    bdy: [
      { kind: 0, x: 21, y: 22, w: 40, h: 39 },
      { kind: 0, x: 22, y: -666, w: 120, h: 40 }
    ]
  },
  61: { name: "flying2",
    pic: 7, state: 3000, wait: 1, next: 60, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    bdy: [
      { kind: 0, x: 21, y: 22, w: 40, h: 39 },
      { kind: 0, x: 22, y: -666, w: 120, h: 40 }
    ]
  },
  70: { name: "weap_spike",
    pic: 5, state: 3000, wait: 0, next: 71, dvx: 40, dvy: 0, dvz: 0, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/008",
    itr: { kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 4, fall: 20, vrest: 15, bdefend: 100, injury: 40, effect: 1 },
    bdy: { kind: 0, x: 22, y: 27, w: 30, h: 27 }
  },
  71: { name: "weap_spike",
    pic: 6, state: 3000, wait: 0, next: 70, dvx: 40, dvy: 0, dvz: 0, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 4, fall: 20, vrest: 15, bdefend: 100, injury: 40, effect: 1 },
    bdy: { kind: 0, x: 22, y: 27, w: 30, h: 27 }
  },
  75: { name: "flying_heavy",
    pic: 9, state: 3000, wait: 0, next: 76, dvx: 30, dvy: 0, dvz: 550, centerx: 43, centery: 39, hit_a: 0, hit_d: 0, hit_j: 52,
    itr: { kind: 8, x: 22, y: 22, w: 39, h: 38, dvx: 10 },
  },
  76: { name: "flying_heavy",
    pic: 9, state: 3000, wait: 6, next: 77, dvx: 30, dvy: 0, dvz: 550, centerx: 43, centery: 39, hit_a: 0, hit_d: 0, hit_j: 52,
    itr: { kind: 8, x: 22, y: 22, w: 39, h: 38, dvx: 10 },
  },
  77: { name: "flying_heavy",
    pic: 9, state: 3000, wait: 0, next: 77, dvx: 30, dvy: 0, dvz: 550, centerx: 43, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 4, fall: 20, vrest: 15, bdefend: 100, injury: 65 },
  },
  78: { name: "flying",
    pic: 10, state: 3, wait: 10, next: 79, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  79: { name: "bomb",
    pic: 10, state: 18, wait: 0, next: 79, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 8, x: 22, y: 22, w: 20, h: 10, dvx: 7, fall: 20, vrest: 15, bdefend: 16, injury: 1 },
    bdy: [
      { kind: 0, x: 42, y: 80, w: 20, h: 10 },
      { kind: 0, x: 22, y: -666, w: 120, h: 10 }
    ]
  },
  80: { name: "hiting",
    pic: 999, state: 3005, wait: 0, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 42, y: 38, action: 231, oid: 211, facing: 0 },
  },
  81: { name: "hiting",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  130: { name: "spider_exl",
    pic: 999, state: 18, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 81, action: 109, oid: 211, facing: 0 },
  }
  }
});