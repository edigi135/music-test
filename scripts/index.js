'use strict';

import createKeyboard from './components/nexus_keyboard';

// Prints to the devtools console
// console.log(createKeyboard);


let button = document.getElementById('keyboard-btn');
button.addEventListener('click', createKeyboard);