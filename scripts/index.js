'use strict';

import createKeyboard from './components/nexus_keyboard';

let button = document.getElementById('keyboard-btn');
// button.addEventListener('click', createKeyboard);

$(document).ready(function() {
    $('select').material_select();
});