/* - - This File Contains Event Listeners - - */
/* - - Version 0.1 - - 17.04.05 - - RRC - - Ximun - - */
window.addEventListener('resize', function() {							//Create An Event Listener To Resize The Window 
	c.aspect = window.innerWidth / window.innerHeight;					//Update The Camera Aspect
	c.updateProjectionMatrix();											//Update The Camera
	MarklarRenderer.setSize( window.innerWidth, window.innerHeight );	//Reset the Renderer Size
}, false);																//End of Resize Listener
