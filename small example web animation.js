/*
https://www.javascriptjanuary.com/blog/exploring-web-animations-api?utm_campaign=CSS%20Animation%20Weekly&utm_medium=email&utm_source=Revue%20newsletter
*/

cons1t cubeRotating = [
	  {transform: 'rotate(0deg)', backgroundColor: 'pink'},
	  {backgroundColor: 'purple', offset:0.3},
	  {transform: 'rotate(180deg)', backgroundColor: 'pink'}
	]

	const cubeTiming = {
	  duration: 1000,
	  iterations: Infinity
	}

	const cubeAnimation = document.getElementById('cube').animate(cubeRotating, cubeTiming);

	// ---------------------------------------------

	/* Other syntax passing all keyframes and timing values directly in the animate function

	document.getElementById('cube').animate(
	  [
		{transform: 'rotate(0deg)', backgroundColor: 'pink'},
		{backgroundColor: 'purple', offset:0.3},
		{transform: 'rotate(180deg)', backgroundColor: 'pink'}
	  ], {
		duration: 1000,
		iterations: Infinity
	  }
	)
	*/
	 
	 // animation pause
	//cubeAnimation.pause();

	// --------------------------------------------

	/* If we wanted to only pass the animation duration, we could write it like this:

	document.getElementById('cube').animate(
	  [
		{transform: 'rotate(0deg)', backgroundColor: 'pink'},
		{backgroundColor: 'purple', offset:0.3},
		{transform: 'rotate(180deg)', backgroundColor: 'pink'}
	  ], 1000)
	*/
