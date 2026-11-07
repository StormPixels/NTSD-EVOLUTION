define({
  bmp: {
    file: [
      { "file(0-99)": "sprite/sand.png", w: 79, h: 79, row: 10, col: 7 }
    ],
  },
  frame: {
  0: { name: "flying",
    pic: 999, state: 3000, wait: 18, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 0, y: 0, w: 79, h: 79 }
  },
  10: { name: "hiting",
    pic: 999, state: 3001, wait: 0, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  11: { name: "hiting",
    pic: 999, state: 3001, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 159, y: 79, action: 339, oid: 15, facing: 0 },
  },
  20: { name: "hit",
    pic: 999, state: 3002, wait: 0, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  21: { name: "hiting",
    pic: 999, state: 3002, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 79, action: 340, oid: 15, facing: 0 },
  },
  30: { name: "rebounding",
    pic: 999, state: 3003, wait: 0, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  }
  }
});