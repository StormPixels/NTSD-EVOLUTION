/* 
  training_dummy.js
  AI pasif untuk latihan combo.
  Tidak bergerak, tidak menyerang, dan tidak bisa mati.
*/

define(function() {
  function AIscript(self, match, controller) {
    this.TU = function() {
      // Tetap diam — lepas semua tombol
      controller.key('left', 0);
      controller.key('right', 0);
      controller.key('up', 0);
      controller.key('down', 0);
      controller.key('att', 0);
      controller.key('def', 0);
      controller.key('jump', 0);

      // Cegah kematian — isi penuh HP & MP terus
      //if (self.health) {
       // self.health.hp = self.health.hp_full;   // isi darah full
       // self.health.mp = self.health.mp_full;   // isi energi full
      //}

      // Kalau sempat terjatuh, paksa berdiri lagi
      if (self.state() === 14 || self.state() === 15) { // state 14 = lying, 15 = fall
        self.ps.vx = 0;
        self.ps.vy = 0;
        self.ps.vz = 0;
        self.change_state(0); // 0 = idle / stand
      }
    };
  }

  AIscript.type = AIscript.prototype.type = 'AIscript';
  return AIscript;
});
