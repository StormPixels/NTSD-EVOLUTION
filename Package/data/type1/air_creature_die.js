define({
  bmp: {
    file: [
      { "file(0-19)": "sprite/air_creature.png", w: 120, h: 70, row: 4, col: 4 }
    ],
  },
  frame: {
  31: { name: "fall",
    pic: 2, state: 3003, wait: 0, next: 0, dvx: 550, dvy: -1, dvz: 550, centerx: 67, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  60: { name: "die",
    pic: 2, state: 3003, wait: 0, next: 80, dvx: 550, dvy: 0, dvz: 550, centerx: 67, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  80: { name: "trans",
    pic: 2, state: 4450, wait: 1, next: 0, dvx: 550, dvy: 0, dvz: 550, centerx: 67, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
  }
  }
});