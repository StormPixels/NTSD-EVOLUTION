define({
  bmp: {
    file: [
      { "file(0)": "bg/rain/1.png", w: 1335, h: 735, row: 1, col: 1 },
      { "file(1)": "bg/rain/2.png", w: 1335, h: 735, row: 1, col: 1 },
      { "file(2)": "bg/rain/3.png", w: 1335, h: 735, row: 1, col: 1 },
      { "file(3)": "bg/rain/4.png", w: 1335, h: 735, row: 1, col: 1 },
      { "file(4)": "bg/rain/5.png", w: 1335, h: 735, row: 1, col: 1 },
    ],
  },
  frame: {
  0: { name: "rain",
    pic: 0, state: 5000002, wait: 1, next: 1, dvx: 550, dvy: 550, dvz: 0, centerx: 667, centery: 450, hit_a: 0, hit_d: 0, hit_j: 0, 
  },
  1: { name: "rain",
    pic: 1, state: 5000002, wait: 1, next: 2, dvx: 550, dvy: 550, dvz: 0, centerx: 667, centery: 450, hit_a: 0, hit_d: 0, hit_j: 0, 
  },
  2: { name: "rain",
    pic: 2, state: 5000002, wait: 1, next: 3, dvx: 550, dvy: 550, dvz: 0, centerx: 667, centery: 450, hit_a: 0, hit_d: 0, hit_j: 0, 
  },
  3: { name: "rain",
    pic: 3, state: 5000002, wait: 1, next: 4, dvx: 550, dvy: 550, dvz: 0, centerx: 667, centery: 450, hit_a: 0, hit_d: 0, hit_j: 0, 
  },
  4: { name: "rain",
    pic: 4, state: 5000002, wait: 1, next: 5, dvx: 550, dvy: 550, dvz: 0, centerx: 667, centery: 450, hit_a: 0, hit_d: 0, hit_j: 0, 
  },
  5: { name: "rain",
    pic: 4, state: 5000002, wait: 1, next: 1, dvx: 550, dvy: 550, dvz: 0, centerx: 667, centery: 450, hit_a: 0, hit_d: 0, hit_j: 0, 
  },
  }
});