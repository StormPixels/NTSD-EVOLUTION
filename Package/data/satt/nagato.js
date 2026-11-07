define({
  bmp: {
    file: [
      { "file(0-35)": "sprite/nagato.png", w: 79, h: 79, row: 5, col: 7 },
      { "file(36-66)": "sprite/kak5.png", w: 79, h: 185, row: 10, col: 3 },
      { "file(67-99)": "sprite/fukusaku.png", w: 79, h: 79, row: 5, col: 7 }
    ],
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 3, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -464444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 3, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 35, y: 80, action: 5, oid: 236, facing: 0 },
    itr: { kind: 0, x: -99999999, y: -474444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 15, fall: 100, vrest: 1 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -464444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 3, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -464444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  3: { name: "flying",
    pic: 3, state: 3000, wait: 3, next: 4, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -464444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  4: { name: "flying",
    pic: 0, state: 3000, wait: 3, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -464444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  5: { name: "scan",
    pic: 999, state: 3000, wait: 12, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 8, x: -99999999, y: -444444444, w: 9999999999999, zwidth: 99999, h: 1000, dvx: 6 },
      { kind: 0, x: -99999999, y: -474444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 15, fall: 100, vrest: 1 }
    ],
    bdy: { kind: 0, x: -99999999, y: -474444444, w: 9999999999999, zwidth: 99999, h: 1000 }
  },
  6: { name: "summon",
    pic: 999, state: 15, wait: 1, next: 7, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: -99999999, y: -464444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 15, fall: 100, vrest: 1 },
  },
  7: { name: "summon",
    pic: 999, state: 400, wait: 1, next: 13, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: -99999999, y: -464444444, w: 9999999999999, zwidth: 99999, h: 1000 }
  },
  8: { name: "summon",
    pic: 25, state: 15, wait: 1, next: 9, dvx: -1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 70, action: 60, oid: 204, facing: 0 },
    itr: { kind: 0, x: 45, y: 30, w: 44, h: 10, arest: 30, dvx: 5, dvy: -1, fall: 100, bdefend: 16, injury: 15 },
    bdy: { kind: 0, x: -99999999, y: -464444444, w: 9999999999999, zwidth: 99999, h: 1000 }
  },
  9: { name: "summon",
    pic: 26, state: 15, wait: 5, next: 12, dvx: 2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: { kind: 0, x: 45, y: 30, w: 44, h: 10, arest: 30, dvx: 5, dvy: -1, fall: 100, bdefend: 16, injury: 15 },
    bdy: { kind: 0, x: -99999999, y: -464444444, w: 9999999999999, zwidth: 99999, h: 1000 }
  },
  10: { name: "hiting",
    pic: 999, state: 3001, wait: 0, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  11: { name: "hiting",
    pic: 999, state: 3001, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 70, action: 60, oid: 204, facing: 0 },
  },
  12: { name: "summon",
    pic: 27, state: 15, wait: 20, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 70, action: 60, oid: 204, facing: 0 },
    bdy: { kind: 0, x: -99999999, y: -464444444, w: 9999999999999, zwidth: 99999, h: 1000 }
  },
  13: { name: "summon",
    pic: 999, state: 15, wait: 1, next: 8, dvx: 40, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  20: { name: "hit",
    pic: 999, state: 3005, wait: 0, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  30: { name: "rebounding",
    pic: 999, state: 3003, wait: 0, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  40: { name: "firstone",
    pic: 5, state: 3000, wait: 3, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -414444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  41: { name: "firstone",
    pic: 6, state: 3000, wait: 3, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 35, y: 80, action: 5, oid: 236, facing: 0 },
    itr: { kind: 0, x: -99999999, y: -474444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 15, fall: 100, vrest: 1 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -414444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  42: { name: "firstone",
    pic: 7, state: 3000, wait: 3, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -414444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  43: { name: "firstone",
    pic: 8, state: 3000, wait: 3, next: 40, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -414444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  50: { name: "secondone",
    pic: 10, state: 3000, wait: 3, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -424444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  51: { name: "secondone",
    pic: 11, state: 3000, wait: 3, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 35, y: 80, action: 5, oid: 236, facing: 0 },
    itr: { kind: 0, x: -99999999, y: -474444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 15, fall: 100, vrest: 1 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -424444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  52: { name: "secondone",
    pic: 12, state: 3000, wait: 3, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -424444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  53: { name: "secondone",
    pic: 13, state: 3000, wait: 3, next: 50, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -424444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  60: { name: "thirdone",
    pic: 15, state: 3000, wait: 3, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -434444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  61: { name: "thirdone",
    pic: 16, state: 3000, wait: 3, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 35, y: 80, action: 5, oid: 236, facing: 0 },
    itr: { kind: 0, x: -99999999, y: -474444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 15, fall: 100, vrest: 1 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -434444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  62: { name: "thirdone",
    pic: 17, state: 3000, wait: 3, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -434444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  63: { name: "thirdone",
    pic: 18, state: 3000, wait: 3, next: 60, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -434444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  70: { name: "fourthone",
    pic: 20, state: 3000, wait: 3, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -454444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  71: { name: "fourthone",
    pic: 21, state: 3000, wait: 3, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 35, y: 80, action: 5, oid: 236, facing: 0 },
    itr: { kind: 0, x: -99999999, y: -474444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 15, fall: 100, vrest: 1 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -454444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  72: { name: "fourthone",
    pic: 22, state: 3000, wait: 3, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -454444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  73: { name: "fourthone",
    pic: 23, state: 3000, wait: 3, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -454444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  80: { name: "fifthskin",
    pic: 30, state: 3003, wait: 3, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -434444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  81: { name: "fifthskin",
    pic: 31, state: 3000, wait: 3, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 3, x: 35, y: 80, action: 5, oid: 236, facing: 0 },
    itr: { kind: 0, x: -99999999, y: -474444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 15, fall: 100, vrest: 1 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -434444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  82: { name: "fifthskin",
    pic: 32, state: 3000, wait: 3, next: 83, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -434444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  83: { name: "fifthskin",
    pic: 33, state: 3000, wait: 3, next: 80, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: -99999999, y: -434444444, w: 9999999999999, zwidth: 99999, h: 1000 }
    ]
  },
  271: { name: "madara",
    pic: 999, state: 3005, wait: 4, next: 272, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  272: { name: "madara",
    pic: 999, state: 3005, wait: 1, next: 273, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 35, y: 65, action: 60, oid: 204, facing: 0 },
  },
  273: { name: "madara",
    pic: 36, state: 3000, wait: 8, next: 274, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  274: { name: "madara",
    pic: 37, state: 3000, wait: 8, next: 275, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  275: { name: "madara",
    pic: 38, state: 3000, wait: 8, next: 276, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  276: { name: "madara",
    pic: 39, state: 3000, wait: 8, next: 277, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  277: { name: "madara",
    pic: 40, state: 3000, wait: 8, next: 278, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  278: { name: "madara",
    pic: 41, state: 3000, wait: 8, next: 279, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  279: { name: "madara",
    pic: 42, state: 3000, wait: 8, next: 280, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  280: { name: "madara",
    pic: 43, state: 3000, wait: 8, next: 281, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  281: { name: "madara",
    pic: 46, state: 3000, wait: 8, next: 282, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  282: { name: "madara",
    pic: 47, state: 3000, wait: 8, next: 283, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  283: { name: "madara",
    pic: 48, state: 3000, wait: 8, next: 284, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  284: { name: "madara",
    pic: 49, state: 3000, wait: 8, next: 285, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  285: { name: "madara",
    pic: 50, state: 3000, wait: 8, next: 286, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  286: { name: "madara",
    pic: 51, state: 3000, wait: 8, next: 287, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  287: { name: "madara",
    pic: 52, state: 3000, wait: 8, next: 288, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  288: { name: "madara",
    pic: 53, state: 3000, wait: 8, next: 289, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  289: { name: "madara",
    pic: 56, state: 3000, wait: 8, next: 290, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "2/tsuki",
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  290: { name: "madara",
    pic: 57, state: 3000, wait: 2, next: 291, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  291: { name: "madara",
    pic: 58, state: 3000, wait: 2, next: 292, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  292: { name: "madara",
    pic: 59, state: 3000, wait: 2, next: 293, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  293: { name: "madara",
    pic: 60, state: 3000, wait: 2, next: 294, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  294: { name: "madara",
    pic: 61, state: 3000, wait: 2, next: 295, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  295: { name: "madara",
    pic: 62, state: 3000, wait: 2, next: 296, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  296: { name: "madara",
    pic: 63, state: 3000, wait: 2, next: 297, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: { kind: 0, x: 21, y: 125, w: 43, h: 62 }
  },
  297: { name: "madara",
    pic: 64, state: 3000, wait: 1, next: 298, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
  },
  298: { name: "madara",
    pic: 64, state: 3000, wait: 1, next: 299, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 39, y: 350, action: 74, oid: 214, facing: 2 },
  },
  299: { name: "madara",
    pic: 64, state: 3000, wait: 6, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: -98, y: 380, action: 343, oid: 220, facing: 0 },
  },
  300: { name: "madara",
    pic: 64, state: 15, wait: 8, next: 301, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
  },
  301: { name: "madara",
    pic: 64, state: 15, wait: 8, next: 302, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
  },
  302: { name: "madara",
    pic: 64, state: 15, wait: 8, next: 302, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 185, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 41, y: 6666, action: 342, oid: 205, facing: 0 },
    itr: { kind: 0, x: -9999, y: 100, w: 99999, h: 9999, zwidth: 9999, dvx: 0, dvy: 0, fall: 1, vrest: 5, bdefend: 100, injury: 500, effect: 5 },
  },
  303: { name: "sixpaths",
    pic: 999, state: 18, wait: 1, next: 304, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
  },
  304: { name: "sixpaths",
    pic: 999, state: 18, wait: 2, next: 305, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: -99999999, y: -454444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 60, fall: 100 },
      { kind: 0, x: -99999999, y: -424444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 60, fall: 100 }
    ],
  },
  305: { name: "sixpaths",
    pic: 999, state: 18, wait: 2, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      { kind: 0, x: -99999999, y: -414444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 60, fall: 100 },
      { kind: 0, x: -99999999, y: -434444444, w: 9999999999999, zwidth: 99999, h: 1000, injury: 60, fall: 100 }
    ],
  },
  310: { name: "fukusaku",
    pic: 65, state: 3000, wait: 3, next: 311, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 22, y: 3543400, w: 99999, h: 500 }
    ]
  },
  311: { name: "fukusaku",
    pic: 66, state: 3000, wait: 2, next: 312, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 22, y: 3543400, w: 99999, h: 500 }
    ]
  },
  312: { name: "fukusaku",
    pic: 67, state: 3000, wait: 3, next: 313, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 22, y: 3543400, w: 99999, h: 500 }
    ]
  },
  313: { name: "fukusaku",
    pic: 68, state: 3000, wait: 2, next: 314, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 22, y: 3543400, w: 99999, h: 500 }
    ]
  },
  314: { name: "fukusaku",
    pic: 69, state: 3000, wait: 2, next: 315, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: { dvx: 0, dvy: 0, dvz: 0, kind: 1, x: 40, y: -10, action: 50, oid: 239, facing: 0 },
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 22, y: 3543400, w: 99999, h: 500 }
    ]
  },
  315: { name: "fukusaku",
    pic: 70, state: 3000, wait: 2, next: 316, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 22, y: 3543400, w: 99999, h: 500 }
    ]
  },
  316: { name: "fukusaku",
    pic: 71, state: 3000, wait: 3, next: 310, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      { kind: 0, x: 21, y: 18, w: 43, h: 62 },
      { kind: 0, x: 22, y: 3543400, w: 99999, h: 500 }
    ]
  }
  }
});