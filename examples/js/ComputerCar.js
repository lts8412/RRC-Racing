/* - - This File Contains The Creation Of The Computer's Cars - - */
/* - - Version 0.9 - - - 17.05.01 - - - RRC - - - Ximun - - */
function cComputerCar2(){					//Function To Make The Computer's Cars
	var jsonLoader = new THREE.JSONLoader();													//NOT MY CODE
	jsonLoader.load( "models/mustang.js", function( car, car_materials ) {						//NOT MY CODE
		jsonLoader.load( "models/wheel.js", function( wheel, wheel_materials ) {				//NOT MY CODE
			var mesh = new Physijs.BoxMesh(	car, new THREE.MeshFaceMaterial( car_materials ) ); //NOT MY CODE
			mesh.position.y = 2;																//Height that the car renders at
			mesh.position.z = 0;	//handicap
			mesh.position.x = 8;
			AI2 = new Physijs.Vehicle(mesh, new Physijs.VehicleTuning(10.88, 1.83, 0.28, 500, 10.5, 6000));	//NOT MY CODE
			scene.add( AI2 );																	//Add The First Computer Controlled Car
			var wheel_material = new THREE.MeshFaceMaterial( wheel_materials );					//NOT MY CODE
			for ( var i = 0; i < 4; i++ ) {														//NOT MY CODE
				AI2.addWheel(wheel, wheel_material, new THREE.Vector3(i % 2 === 0 ? -1.6 : 1.6, -1, i < 2 ? 3.3 : -3.2), new THREE.Vector3( 0, -1, 0 ), new THREE.Vector3( -1, 0, 0 ), 0.5, 0.7, i < 2 ? false : true );
			}
			AI2input = { power: null, direction: null, steering: 0 };});});}
function cComputerCar(){					//Function To Make The Computer's Cars (Unique value = 5)
	var UniqueValue = 5;
	var jsonLoader = new THREE.JSONLoader();													//NOT MY CODE
	jsonLoader.load( "models/mustang.js", function( car, car_materials ) {						//NOT MY CODE
		jsonLoader.load( "models/wheel.js", function( wheel, wheel_materials ) {				//NOT MY CODE
			var mesh = new Physijs.BoxMesh(	car, new THREE.MeshFaceMaterial( car_materials ) ); //NOT MY CODE
			mesh.position.y = 2;																//Set the Height that the car renders at
			mesh.position.z = 0;	//handicap
			mesh.position.x = -8;
			AI1 = new Physijs.Vehicle(mesh, new Physijs.VehicleTuning(10.88, 1.83, 0.28, 500, 10.5, 6000));	//NOT MY CODE
			var geometry = new THREE.BoxGeometry( 0.001, 0.001, 0.001 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			AI1UP = new Physijs.BoxMesh( geometry, material );
			AI1UPUP = new Physijs.BoxMesh( geometry, material );
			AI1L = new Physijs.BoxMesh( geometry, material );
			AI1R = new Physijs.BoxMesh( geometry, material );
			AI1DOWN = new Physijs.BoxMesh( geometry, material );
			/* - Position And Add The Sensors - */
			AI1UP.position.y = UniqueValue;			//Up Value (Avoids Collisions of Sensors)
			AI1UP.position.x = 0;					//Left/Right Value
			AI1UP.position.z = 20;					//Forward Value
			AI1UPUP.position.y = UniqueValue;		//Up Value (Avoids Collisions of Sensors)
			AI1UPUP.position.x = 0;					//Left/Right Value
			AI1UPUP.position.z = 80;				//Forward Value
			AI1L.position.y = UniqueValue;			//Up Value (Avoids Collisions of Sensors)
			AI1L.position.x = 20;					//Left/Right Value
			AI1L.position.z = 15;					//Forward Value
			AI1R.position.y = UniqueValue;			//Up Value (Avoids Collisions of Sensors)
			AI1R.position.x = -20;					//Left/Right Value
			AI1R.position.z = 15;					//Forward Value
			AI1DOWN.position.y = UniqueValue;		//Up Value (Avoids Collisions of Sensors)
			AI1DOWN.position.x = 0;					//Left/Right Value
			AI1DOWN.position.z = -20;				//Forward Value
			AI1.mesh.add( AI1UP );
			AI1.mesh.add( AI1UPUP );
			AI1.mesh.add( AI1L );
			AI1.mesh.add( AI1R );
			AI1.mesh.add( AI1DOWN );
			scene.add( AI1 );																	//Add The First Computer Controlled Car
			var wheel_material = new THREE.MeshFaceMaterial( wheel_materials );					//NOT MY CODE
			for ( var i = 0; i < 4; i++ ) {														//NOT MY CODE
				AI1.addWheel(wheel, wheel_material, new THREE.Vector3(i % 2 === 0 ? -1.6 : 1.6, -1, i < 2 ? 3.3 : -3.2), new THREE.Vector3( 0, -1, 0 ), new THREE.Vector3( -1, 0, 0 ), 0.5, 0.7, i < 2 ? false : true );																				//NOT MY CODE
			}											
			AI1input = { power: null, direction: null, steering: 0	};});});}