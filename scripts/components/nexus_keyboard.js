'use strict';

export default function createKeyboard() {
  // create keyboard container
  let keyDiv = document.createElement('div');
  keyDiv.setAttribute('id', 'keyboard');
  
  // create keyboard
  let keyboard = window.nx.add('keyboard');
  
  // mount to the DOM
  let instrumentDiv = document.getElementById('instrument');
  instrumentDiv.append(keyDiv);
}
