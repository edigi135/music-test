'use strict';

export default function createKeyboard() {
  // Create Nexus keyboard widget
	let keyboard = window.nx.add('keyboard');

	// Create div
	let newDiv = document.createElement('div');
	newDiv.setAttribute('id', 'instrument-container');

	$('#instrument').append(newDiv);
	
}