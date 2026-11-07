/* 
  training_dummy.js
  AI pasif untuk latihan combo.
  Tidak bergerak, tidak menyerang, dan tidak bisa mati.
*/

define(function() {
  function AIscript(self, match, controller) {
    this.TU = function() {
      controller.key('left', 0);
      controller.key('right', 0);
      controller.key('up', 0);
      controller.key('down', 0);
      controller.key('att', 0);
      controller.key('def', 0);
      controller.key('jump', 0);


//Cegah kematian — isi penuh HP & MP terus
      if (self.health) {
        //self.health.hp = self.health.hp_full;   // isi darah full
        self.health.mp = self.health.mp_full;   // isi energi full
      }
      // biarkan engine yang otomatis bangunkan dummy (gak usah dipaksa)
      // state 12 = falling, 14 = lying — keduanya self-resolve lewat frame data
    };
  }

  AIscript.type = AIscript.prototype.type = 'AIscript';
  return AIscript;
});

  
