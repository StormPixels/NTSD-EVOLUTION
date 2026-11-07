define({
  bmp: {
    file: [
      { "file(0-8)": "sprite/akamaru.png", w: 155, h: 95, row: 3, col: 3 }
    ],
  },
  frame: {
  0: { name: "rain",
    pic: 0, state: 5000002, wait: 1, next: 1, dvx: 550, dvy: 550, dvz: 0, centerx: 26, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0,
    bdyp: [{ x: -26, y: -32, z: -45, w: 300, h: 20, zw: 10 }],
  },
  1: { name: "rain",
    pic: 1, state: 5000002, wait: 1, next: 2, dvx: 550, dvy: 550, dvz: 0, centerx: 26, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    bdyp: [{ x: -26, y: -32, z: -45, w: 300, h: 20, zw: 10 }],
  },
  2: { name: "rain",
    pic: 2, state: 5000002, wait: 1, next: 3, dvx: 550, dvy: 550, dvz: 0, centerx: 26, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    bdyp: [{ x: -26, y: -32, z: -45, w: 300, h: 20, zw: 10 }],
  },
  3: { name: "rain",
    pic: 3, state: 5000002, wait: 1, next: 4, dvx: 550, dvy: 550, dvz: 0, centerx: 26, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    bdyp: [{ x: -26, y: -32, z: -45, w: 300, h: 20, zw: 10 }],
  },
  4: { name: "rain",
    pic: 4, state: 5000002, wait: 1, next: 5, dvx: 550, dvy: 550, dvz: 0, centerx: 26, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    bdyp: [{ x: -26, y: -32, z: -45, w: 300, h: 20, zw: 10 }],
  },
  5: { name: "rain",
    pic: 4, state: 5000002, wait: 1, next: 1, dvx: 550, dvy: 550, dvz: 0, centerx: 26, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    bdyp: [{ x: -26, y: -32, z: -45, w: 300, h: 20, zw: 10 }],
  },
  }
});