/* - This File Contains Objects That Will Be Added To The Scene - */
/* - - - Version 0.1 - - - 17.04.05 - - - RRC - - - Ximun - - - */
var a = new THREE.AmbientLight( 0x404040 ); 												//Soft White Light
var b = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );									//Light For The Scene
var c = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1000);	// create a camera, which defines where we're looking at.
function track(sizeX, sizeY, segmentsX, segmentsY, positionX, positionY, positionZ){
	var track_geometry = new THREE.PlaneGeometry(sizeX, sizeY, segmentsX, segmentsY);
	ground = new Physijs.HeightfieldMesh( track_geometry, ground_material, 0 /* mass */	);
	ground.rotation.x = -Math.PI / 2;
	ground.receiveShadow = true;
	ground.position.x = positionX;
	ground.position.y = positionY;
	ground.position.z = positionZ;
	ground.rotation.x = 4.71239;//No need to change
	ground.rotation.y = 0;//Will Need to be changed to create the banking of the track
	ground.rotation.z = 0;//1.5708;//Will Need For The Curve
	scene.add( ground );
}
