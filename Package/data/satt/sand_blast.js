define({
  bmp: {
    file: [
      { "file(0-11)": "sprite/sand.png", w: 81, h: 82, row: 4, col: 3 }
    ],
  },
  frame: {
  0: { name: "flying",
    pic: 10, state: 3000, wait: 2, next: 1, dvx: 20, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 70, vrest: 10, bdefend: 16, injury: 60 },
    bdy: { kind: 0, x: 22, y: 27, w: 55, h: 27 }
  },
  1: { name: "flying",
    pic: 11, state: 3000, wait: 2, next: 999, dvx: 20, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 5, dvy: -15, fall: 70, vrest: 10, bdefend: 16, injury: 60 },
    bdy: { kind: 0, x: 22, y: 27, w: 55, h: 27 }
  },
  10: { name: "hiting",
    pic: 999, state: 3001, wait: 0, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  11: { name: "hiting",
    pic: 999, state: 3001, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: 70, action: 37, oid: 410, facing: 0 },
  },
  20: { name: "hit",
    pic: 999, state: 3002, wait: 0, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  21: { name: "hit",
    pic: 999, state: 3002, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: 70, action: 37, oid: 410, facing: 0 },
  },
  30: { name: "rebounding",
    pic: 999, state: 3001, wait: 0, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  31: { name: "rebounding",
    pic: 999, state: 3001, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 50, y: 70, action: 37, oid: 410, facing: 0 },
  }
  }
});