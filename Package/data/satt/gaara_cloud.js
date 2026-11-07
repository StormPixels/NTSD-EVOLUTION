define({
  bmp: {
    file: [
      { "file(13-16)": "sprite/lee_smoke.png", w: 209, h: 146, row: 2, col: 2 }
    ],
  },
  frame: {
  60: { name: "lee_smoke",
    pic: 13, state: 3, wait: 1, next: 61, dvx: 550, dvy: 550, dvz: 550, centerx: 111, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/020",
    itr: [
      { kind: 0, x: 50, y: 45, w: 41, h: 30680, dvx: -35, dvy: -13, fall: 90, vrest: 20, bdefend: 100, injury: 70 },
      { kind: 0, x: 132, y: 45, w: 41, h: 30680, dvx: 1, dvy: -45, fall: 90, vrest: 20, bdefend: 100, injury: 70 },
      { kind: 0, x: 91, y: 43, w: 41, h: 30680, dvx: 35, dvy: -13, fall: 90, vrest: 20, bdefend: 100, injury: 70 }
    ],
  },
  61: { name: "lee_smoke",
    pic: 14, state: 3, wait: 1, next: 62, dvx: 550, dvy: 550, dvz: 550, centerx: 111, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 29, y: 23, w: 57, h: 30680, dvx: -35, dvy: -13, fall: 90, vrest: 20, bdefend: 100, injury: 70 },
      { kind: 0, x: 86, y: 23, w: 41, h: 30680, dvx: 1, dvy: -45, fall: 90, vrest: 20, bdefend: 100, injury: 70 },
      { kind: 0, x: 127, y: 23, w: 69, h: 30680, dvx: 35, dvy: -13, fall: 90, vrest: 20, bdefend: 100, injury: 70 }
    ],
  },
  62: { name: "lee_smoke",
    pic: 15, state: 3, wait: 1, next: 63, dvx: 550, dvy: 550, dvz: 550, centerx: 111, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 29, y: 23, w: 57, h: 30680, dvx: -35, dvy: -13, fall: 90, vrest: 20, bdefend: 100, injury: 70 },
      { kind: 0, x: 86, y: 23, w: 41, h: 30680, dvx: 1, dvy: -45, fall: 90, vrest: 20, bdefend: 100, injury: 70 },
      { kind: 0, x: 127, y: 23, w: 69, h: 30680, dvx: 35, dvy: -13, fall: 90, vrest: 20, bdefend: 100, injury: 70 }
    ],
  },
  63: { name: "lee_smoke",
    pic: 16, state: 3, wait: 1, next: 1000, dvx: 550, dvy: 550, dvz: 550, centerx: 111, centery: 159, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: 0, y: 23, w: 86, h: 30680, dvx: -35, dvy: -13, fall: 90, vrest: 20, bdefend: 100, injury: 70 },
      { kind: 0, x: 86, y: 23, w: 127, h: 30680, dvx: 1, dvy: -45, fall: 90, vrest: 20, bdefend: 100, injury: 70 },
      { kind: 0, x: 127, y: 23, w: 32, h: 30680, dvx: 35, dvy: -13, fall: 90, vrest: 20, bdefend: 100, injury: 70 }
    ],
  }
  }
});