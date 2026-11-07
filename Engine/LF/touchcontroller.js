/*\
 * touchcontroller
 *
 * touch controller for LF2 (mod by Yudi)
 * - F2 disembunyikan di layar sentuh
 * - F1, F4, F7 terlihat jelas saat pause
\*/

define(['LF/util'], function (util) {
  const controllers = [];
  let touches = [];
  let eventtype;

  function touch_fun(event) {
    if (!TC.enabled) return;
    eventtype = event.type;
    touches = event.touches;
    for (const i in controllers) {
      if (!controllers[i].sync) controllers[i].fetch();
    }
    if (TC.preventDefault) event.preventDefault();
  }

  for (const event in { touchstart: 0, touchmove: 0, touchenter: 0, touchend: 0, touchleave: 0, touchcancel: 0 }) {
    document.addEventListener(event, touch_fun, false);
  }

  window.addEventListener('resize', function () {
    for (let i = 0; i < controllers.length; i++) {
      controllers[i].resize();
    }
  }, false);

  function TC(config) {
    const $ = this;
    $.config = config;

    // === Gamepad layout ===
    if ($.config.layout === 'gamepad') {
      $.state = { up: 0, down: 0, left: 0, right: 0, def: 0, jump: 0, att: 0 };
      $.button = {
        up: { label: '&uarr' },
        down: { label: '&darr;' },
        left: { label: '&larr;' },
        right: { label: '&rarr;' },
        def: { label: 'D' },
        jump: { label: 'J' },
        att: { label: 'A' }
      };
    }

    // === Function key layout ===
    else if ($.config.layout === 'functionkey') {
      $.state = { F1: 0, F4: 0, F7: 0 };
      $.button = {
        F1: { label: 'F1' },
        F4: { label: 'F4' },
        F7: { label: 'F7' }
      };

      // Tambahkan F2 hanya jika bukan layar sentuh
      if (!('ontouchstart' in window)) {
        $.state.F2 = 0;
        $.button.F2 = { label: 'F2' };
      }
    }

    $.child = [];
    $.sync = true;
    $.pause_state = false;
    controllers.push(this);

    for (const key in $.button) {
      const el = document.createElement('div');
      util.div('touch_control_holder').appendChild(el);
      el.className = 'touch_controller_button';
      el.innerHTML = '<img src="../assets/ui/' + key + '.png" alt="' + key + '">';
      $.button[key].el = el;
    }
    $.resize();
  }

  TC.enabled = false;
  TC.preventDefault = false;

  TC.enable = function (en) {
    TC.enabled = en;
  };

  TC.prototype.type = 'touch';

  // ======================== Resize
  TC.prototype.resize = function () {
    const $ = this;
    const w = window.innerWidth;
    let h = window.innerHeight;
    if ($.config.layout === 'gamepad') {
      let sizeA = 0.20, sizeB = 0.20, sizeC = 0.25;
      const padL = 0.1, padR = 0.2;
      let offy = 0;
      const R = 0.65;
      if (h > w) {
        offy = h / 2;
        h = w / 16 * 9 * 1.5;
      } else offy = h / 5;
      sizeA *= h; sizeB *= h; sizeC *= h;
      this.set_button_pos({
        up: [sizeA * padL, h / 2 - sizeA + offy, sizeA * 2, sizeA * R],
        down: [sizeA * padL, h / 2 + sizeA * (1 - R) + offy, sizeA * 2, sizeA * R],
        left: [sizeA * padL, h / 2 - sizeA + offy, sizeA * R, sizeA * 2],
        right: [sizeA * (2 - R + padL), h / 2 - sizeA + offy, sizeA * R, sizeA * 2],
        def: [w - sizeB * (1.5 + padR), h / 2 + offy, sizeB, sizeB],
        jump: [w - sizeB - sizeC * (1 + padR), h / 2 - sizeB + offy, sizeB, sizeB],
        att: [w - sizeC * (1 + padR), h / 2 - sizeC + offy, sizeC, sizeC]
      });
    } else if ($.config.layout === 'functionkey') {
      $.paused($.pause_state);
    }
  };

  // ======================== Set posisi tombol
  TC.prototype.set_button_pos = function (sett) {
    const $ = this;
    for (const I in sett) {
      const B = $.button[I];
      if (!B) continue;
      B.left = sett[I][0];
      B.top = sett[I][1];
      B.right = sett[I][0] + sett[I][2];
      B.bottom = sett[I][1] + sett[I][3];
      const el = B.el;
      el.style.left = B.left + 'px';
      el.style.top = B.top + 'px';
      el.style.width = (B.right - B.left) + 'px';
      el.style.height = (B.bottom - B.top) + 'px';
    }
  };

  // ======================== Saat pause
  TC.prototype.paused = function (pause) {
    const $ = this;
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.pause_state = pause;
    TC.preventDefault = !pause;

    if ($.config.layout === 'functionkey') {
      const size = 0.10 * (h < w ? h : w);
      let offy = 0, offx = 0;
      if (h > w) { offx = -w / 10; offy = h / 2.5; }

      if (pause) {
        const Fleft = h / 10 - size / 2 + offx;
        const Ftop = h / 10 - size / 2 + offy;
        this.set_button_pos({
          F1: [Fleft, Ftop, size, size],
          F4: [Fleft + size * 1.5 * 1, Ftop, size, size],
          F7: [Fleft + size * 1.5 * 2, Ftop, size, size]
        });

        // buat tombol F1, F4, F7 terlihat jelas
        for (const key of ['F1', 'F4', 'F7']) {
          if (!$.hidden) show($.button[key]);
          $.button[key].disabled = 10;
          $.button[key].el.style.opacity = "1.0";
         /* $.button[key].el.style.filter = "drop-shadow(0 0 6px black)";*/
        }

        // Sembunyikan F2 kalau ada
        if ($.button.F2) hide($.button.F2);

      } else { // kembali normal
        this.set_button_pos({
          F1: [h / 10 - size / 2, h / 10 - size / 2 + offy, size, size],
          F4: [h / 10 - size / 2, h / 10 - size / 2 + offy, size, size],
          F7: [h / 10 - size / 2, h / 10 - size / 2 + offy, size, size]
        });

        if (!$.hidden) show($.button.F1);
        $.button.F1.disabled = false;

        for (const key of ['F4', 'F7']) {
          hide($.button[key]);
          $.button[key].disabled = true;
          $.button[key].el.style.opacity = "0.4";
          $.button[key].el.style.filter = "";
        }

        if ($.button.F2) hide($.button.F2);
      }
    }
  };

  // ======================== Fungsi umum
  TC.prototype.hide = function () {
    const $ = this;
    for (const i in $.button) {
      hide($.button[i]);
      $.button[i].disabled = true;
    }
    $.hidden = true;
  };

  TC.prototype.show = function () {
    const $ = this;
    $.hidden = false;
    for (const i in $.button) {
      show($.button[i]);
      $.button[i].disabled = false;
    }
  };

  TC.prototype.restart = function () {
    const $ = this;
    if ($.config.layout === 'functionkey') this.paused(false);
  };

  TC.prototype.clear_states = function () {
    for (const I in this.state) this.state[I] = 0;
  };

  TC.prototype.fetch = function () {
    const $ = this;
    for (const key in $.button) {
      if ($.button[key].disabled) {
        if (typeof $.button[key].disabled === 'number') $.button[key].disabled--;
        continue;
      }
      let down = false;
      for (var i = 0; i < touches.length; i++) {
        const T = touches[i];
        if (point_in_rect(T.clientX, T.clientY, $.button[key])) {
          down = true;
          break;
        }
      }
      if ((down && !$.state[key]) || (!down && $.state[key])) {
        for (var i = 0; i < $.child.length; i++) {
          $.child[i].key(key, down);
        }
        $.state[key] = down;
        $.button[key].el.style.border = down ?
          '2px solid rgb(255,170,170)' :
          '2px solid rgb(170,255,255)';
      }
    }
  };

  TC.prototype.flush = function () {};

  return TC;

  // === util ===
  function show(B) { B.el.style.visibility = 'visible'; }
  function hide(B) { B.el.style.visibility = 'hidden'; }
  function inbetween(x, L, R) {
    let l = Math.min(L, R), r = Math.max(L, R);
    return x >= l && x <= r;
  }
  function point_in_rect(Px, Py, R) {
    return (inbetween(Px, R.left, R.right) && inbetween(Py, R.top, R.bottom));
  }
});
