define({
  bmp: {
    file: [
      { "file(0-8)": "sprite/akamaru.png", w: 155, h: 95, row: 3, col: 3 }
    ],
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 0, dvy: 550, dvz: 0, centerx: 80, centery: 52, hit_a: 3, hit_d: 100, hit_j: 0, hit_Fa: 12,
    sound: "2/003",
    itr: [
      { kind: 0, x: 28, y: 30, w: 102, h: 36, vrest: 15, dvx: 10, dvy: -7, fall: 999, bdefend: 150, injury: 30, effect: 1 },
      { kind: 0, x: 10, y: 9880000, w: 137, h: 200, vrest: 15, dvx: 10, dvy: -7, fall: 999, bdefend: 150, injury: 30, effect: 1 }
    ],
    bdy: { kind: 0, x: 20, y: 32, w: 100, h: 32 }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 2, dvx: 0, dvy: 1, dvz: 0, centerx: 80, centery: 52, hit_a: 3, hit_d: 100, hit_j: 0, hit_Fa: 12,
    itr: [
      { kind: 0, x: 28, y: 30, w: 102, h: 36, vrest: 15, dvx: 10, dvy: -7, fall: 999, bdefend: 150, injury: 30, effect: 1 },
      { kind: 0, x: 10, y: 9880000, w: 137, h: 200, vrest: 15, dvx: 10, dvy: -7, fall: 999, bdefend: 150, injury: 30, effect: 1 }
    ],
    bdy: { kind: 0, x: 20, y: 32, w: 100, h: 32 }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 3, dvx: 0, dvy: 550, dvz: 0, centerx: 80, centery: 52, hit_a: 3, hit_d: 100, hit_j: 0, hit_Fa: 12,
    sound: "2/004",
    itr: [
      { kind: 0, x: 28, y: 30, w: 102, h: 36, vrest: 15, dvx: 10, dvy: -7, fall: 999, bdefend: 150, injury: 30, effect: 1 },
      { kind: 0, x: 10, y: 9880000, w: 137, h: 200, vrest: 15, dvx: 10, dvy: -7, fall: 999, bdefend: 150, injury: 30, effect: 1 }
    ],
    bdy: { kind: 0, x: 20, y: 32, w: 100, h: 32 }
  },
  3: { name: "flying",
    pic: 3, state: 3000, wait: 1, next: 999, dvx: 0, dvy: 1, dvz: 0, centerx: 80, centery: 52, hit_a: 3, hit_d: 100, hit_j: 0, hit_Fa: 12,
    itr: [
      { kind: 0, x: 28, y: 30, w: 102, h: 36, vrest: 15, dvx: 10, dvy: -7, fall: 999, bdefend: 150, injury: 30, effect: 1 },
      { kind: 0, x: 10, y: 9880000, w: 137, h: 200, vrest: 15, dvx: 10, dvy: -7, fall: 999, bdefend: 150, injury: 30, effect: 1 }
    ],
    bdy: { kind: 0, x: 20, y: 32, w: 100, h: 32 }
  },
  10: { name: "attacking",
    pic: 8, state: 3, wait: 0, next: 35, dvx: 550, dvy: 550, dvz: 550, centerx: 80, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/017",
  },
  20: { name: "hiting",
    pic: 4, state: 3001, wait: 5, next: 101, dvx: 0, dvy: 0, dvz: 550, centerx: 80, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  30: { name: "hiting",
    pic: 4, state: 3001, wait: 5, next: 101, dvx: 0, dvy: 0, dvz: 550, centerx: 80, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  35: { name: "attacking",
    pic: 8, state: 300, wait: 3, next: 36, dvx: 155, dvy: 550, dvz: 550, centerx: 80, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 28, y: 30, w: 102, h: 36, vrest: 15, dvx: 10, dvy: -7, fall: 999, bdefend: 150, injury: 30, effect: 1 },
      { kind: 0, x: 0, y: 9880000, w: 155, h: 200, vrest: 15, dvx: 10, dvy: -7, fall: 999, bdefend: 150, injury: 30, effect: 1 }
    ],
  },
  36: { name: "attacking",
    pic: 4, state: 3, wait: 7, next: 101, dvx: 550, dvy: 550, dvz: 550, centerx: 80, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  37: { name: "stand",
    pic: 4, state: 3001, wait: 7, next: 38, dvx: 550, dvy: 550, dvz: 550, centerx: 80, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 20, y: 32, w: 100, h: 32 }
  },
  38: { name: "stand",
    pic: 5, state: 3001, wait: 5, next: 999, dvx: 550, dvy: 550, dvz: 550, centerx: 80, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 20, y: 32, w: 100, h: 32 }
  },
  40: { name: "hiting",
    pic: 4, state: 3001, wait: 5, next: 101, dvx: 0, dvy: 0, dvz: 550, centerx: 80, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  50: { name: "hiting",
    pic: 4, state: 3001, wait: 5, next: 101, dvx: 0, dvy: 0, dvz: 550, centerx: 80, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  60: { name: "hiting",
    pic: 4, state: 3001, wait: 5, next: 101, dvx: 0, dvy: 0, dvz: 550, centerx: 80, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  100: { name: "hiting",
    pic: 4, state: 3001, wait: 7, next: 101, dvx: 550, dvy: 550, dvz: 550, centerx: 80, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  101: { name: "hiting",
    pic: 5, state: 3001, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 80, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 80, y: 120, action: 125, oid: 216, facing: 0 },
  }
  }
});