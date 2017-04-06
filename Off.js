/* - - This File Contains Device Orientation Settings - - */
/* - - Version 0.1 - - 17.04.05 - - RRC - - Ximun - - */
function displayColor(){
	currentvalue = document.getElementById('marklar').value;
	if(currentvalue == "Enable Tilt Controls"){
		document.getElementById("marklar").value="Disable Tilt Controls";
		OrientationOn = true;
	}else{
		document.getElementById("marklar").value="Enable Tilt Controls";
		OrientationOn = false;
	}
}