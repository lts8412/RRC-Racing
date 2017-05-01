/* - - This File Contains Event Listeners - - */
/* - - Version 0.2 - - 17.04.24 - - RRC - - Ximun - - */
window.addEventListener('resize', function() {							//Create An Event Listener To Resize The Window 
	c.aspect = window.innerWidth / window.innerHeight;					//Update The Camera Aspect
	c.updateProjectionMatrix();											//Update The Camera
	MarklarRenderer.setSize( window.innerWidth, window.innerHeight );	//Reset the Renderer Size
}, false);																//End of Resize Listener
function move(){
	if(OrientationOn){						//Code to use orientation controls
		if(device.angleY() < 0){
			input.direction = 1;
		}if(device.angleY() > 0){
			input.direction = -1;
		}if(device.angleZ() < 0){
			input.forward = true;
			input.power = true;
		}if(device.angleZ() > 0){
			input.forward = false;
			input.power = true;
		}
	}
}		