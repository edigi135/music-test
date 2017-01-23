'use strict';

// Import components
import createKeyboard from './components/nexus_keyboard';

// Set up jQuery
$(document).ready(function() {
  
  // Initialize material select
  $('select').material_select();

  $('select').change(function() {
    $('select option:selected').each(function() {
      // remove hidden css style
    });
  });
});
