'use strict';

export default window.nx.onload = function() {
  // Matrix
  matrix1.col = 16;
  matrix1.row = 8;
  setInterval(matrix1.life, 180);
  matrix1.init();

};
