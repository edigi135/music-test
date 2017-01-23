'use strict';

export default window.nx.onload = function() {
  // Matrix
  matrix1.col = 8;
  matrix1.row = 8;
  setInterval(matrix1.life, 180);
  matrix1.init();

  // Matrix Slider Control
  slider1.hslider = true
  slider1.draw();
}
