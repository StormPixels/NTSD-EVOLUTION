define({
  spawn_x: 700,   // opsional, default: tengah lebar panggun
  spawn_y: -70,   // opsional, default: 0 (ground)
  spawn_z: 480, 
  bmp: {
    file: [
      { "file(0)": "sprite/plat.png", w: 80, h: 80, row: 1, col: 1 }
    ],
  },
  frame: {
  0: { name: "plat",
    pic: 0, state: 5000001, wait: 1, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    bdyp: [{ x: 0, y: -32, z: 0, w: 80, h: 10, zw: 2 }],
  },
  1: { name: "plat",
    pic: 0, state: 5000001, wait: 1, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    bdyp: [{ x: 0, y: -32, z: 0, w: 80, h: 10, zw: 2 }],
  },
  2: { name: "plat",
    pic: 0, state: 5000001, wait: 1, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    bdyp: [{ x: 0, y: -32, z: 0, w: 80, h: 10, zw: 2 }],
  },
  }
});