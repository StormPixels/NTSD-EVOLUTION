define({
  bmp: {
    file: [
      { "file(0-24)": "sprite/fire_creature.png", w: 140, h: 130, row: 5, col: 5 },
      { "file(25-39)": "sprite/kakuzu_exp.png", w: 319, h: 319, row: 5, col: 3 }
    ],
  },
  frame: {
  0: { name: "fire_Ball",
    pic: 7, state: 3000, wait: 0, next: 1, dvx: 50, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/020",
    itr: [
      { kind: 0, x: 32, y: 30035, w: 30, h: 135, zwidth: 15, dvx: 28, dvy: -12, fall: 100, vrest: 10, bdefend: 100, injury: 100, effect: 2 },
      { kind: 0, x: 32, y: 35, w: 30, h: 135, zwidth: 15, dvx: 28, dvy: -12, fall: 100, vrest: 10, bdefend: 100, injury: 100, effect: 2 }
    ],
  },
  1: { name: "fire_Ball",
    pic: 7, state: 3000, wait: 0, next: 2, dvx: 50, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 32, y: 30035, w: 30, h: 135, zwidth: 15, dvx: 18, dvy: -12, fall: 100, vrest: 10, bdefend: 100, injury: 100, effect: 2 },
      { kind: 0, x: 32, y: 35, w: 30, h: 135, zwidth: 15, dvx: 28, dvy: -12, fall: 100, vrest: 10, bdefend: 100, injury: 100, effect: 2 }
    ],
  },
  2: { name: "fire_Ball",
    pic: 9, state: 3000, wait: 0, next: 999, dvx: 50, dvy: 0, dvz: 0, centerx: 67, centery: 115, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 32, y: 30035, w: 30, h: 135, zwidth: 15, dvx: 18, dvy: -12, fall: 100, vrest: 10, bdefend: 100, injury: 100, effect: 2 },
      { kind: 0, x: 32, y: 35, w: 30, h: 135, zwidth: 15, dvx: 28, dvy: -12, fall: 100, vrest: 10, bdefend: 100, injury: 100, effect: 2 }
    ],
  },
  10: { name: "exp",
    pic: 25, state: 18, wait: 0, next: 11, dvx: 550, dvy: 550, dvz: 550, centerx: 170, centery: 279, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  11: { name: "exp",
    pic: 25, state: 18, wait: 0, next: 12, dvx: 550, dvy: 550, dvz: 550, centerx: 170, centery: 279, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/020",
    opoint: { dvx: 25, dvy: 0, dvz: 0, kind: 1, x: 170, y: 285, action: 172, oid: 211, facing: 41 },
  },
  12: { name: "exp",
    pic: 26, state: 18, wait: 0, next: 13, dvx: 550, dvy: 550, dvz: 550, centerx: 170, centery: 279, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 25, dvy: 0, dvz: 0, kind: 1, x: 170, y: 285, action: 172, oid: 211, facing: 40 },
  },
  13: { name: "exp",
    pic: 26, state: 18, wait: 0, next: 14, dvx: 550, dvy: 550, dvz: 550, centerx: 170, centery: 279, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  14: { name: "exp",
    pic: 27, state: 18, wait: 0, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 170, centery: 279, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  20: { name: "exp",
    pic: 25, state: 18, wait: 0, next: 11, dvx: 550, dvy: 550, dvz: 550, centerx: 170, centery: 279, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  30: { name: "exp",
    pic: 25, state: 18, wait: 0, next: 11, dvx: 550, dvy: 550, dvz: 550, centerx: 170, centery: 279, hit_a: 0, hit_d: 0, hit_j: 0,
  }
  }
});