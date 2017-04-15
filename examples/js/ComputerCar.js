/* - - This File Contains The Creation Of The Computer's Cars - - */
/* - - Version 0.1 - - 17.04.14 - - RRC - - Ximun - - */
/* - - AI1 is computer car 1 (vehicle variable) - - */
function createComputerCar2(){					//Function To Make The Computer's Cars
	var jsonLoader = new THREE.JSONLoader();													//NOT MY CODE
	jsonLoader.load( "models/mustang.js", function( car, car_materials ) {						//NOT MY CODE
		jsonLoader.load( "models/wheel.js", function( wheel, wheel_materials ) {				//NOT MY CODE
			var mesh = new Physijs.BoxMesh(	car, new THREE.MeshFaceMaterial( car_materials ) ); //NOT MY CODE
			mesh.position.y = 2;																//NOT MY CODE
			mesh.position.z = 0;	//handicap
			mesh.position.x = 8;
			AI2 = new Physijs.Vehicle(mesh, new Physijs.VehicleTuning(10.88, 1.83, 0.28, 500, 10.5, 6000));	//NOT MY CODE
			scene.add( AI2 );																	//Add The First Computer Controlled Car
			var wheel_material = new THREE.MeshFaceMaterial( wheel_materials );					//NOT MY CODE
			for ( var i = 0; i < 4; i++ ) {														//NOT MY CODE
				AI2.addWheel(wheel, wheel_material, new THREE.Vector3(i % 2 === 0 ? -1.6 : 1.6, -1, i < 2 ? 3.3 : -3.2),	//NOT MY CODE
					new THREE.Vector3( 0, -1, 0 ),												//NOT MY CODE
					new THREE.Vector3( -1, 0, 0 ),												//NOT MY CODE
					0.5, 0.7, i < 2 ? false : true														//NOT MY CODE
				);																				//NOT MY CODE
			}																					//NOT MY CODE
			AI2input = {																			//NOT MY CODE
				power: null,																	//NOT MY CODE
				direction: null,																//NOT MY CODE
				steering: 0																		//NOT MY CODE
			};																					//NOT MY CODE
		});																						//NOT MY CODE
	});																							//NOT MY CODE
}		

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
function createComputerCar(){					//Function To Make The Computer's Cars
	var jsonLoader = new THREE.JSONLoader();													//NOT MY CODE
	jsonLoader.load( "models/mustang.js", function( car, car_materials ) {						//NOT MY CODE
		jsonLoader.load( "models/wheel.js", function( wheel, wheel_materials ) {				//NOT MY CODE
			var mesh = new Physijs.BoxMesh(	car, new THREE.MeshFaceMaterial( car_materials ) ); //NOT MY CODE
			mesh.position.y = 2;																//NOT MY CODE
			mesh.position.z = 0;	//handicap
			mesh.position.x = -8;
			AI1 = new Physijs.Vehicle(mesh, new Physijs.VehicleTuning(10.88, 1.83, 0.28, 500, 10.5, 6000));	//NOT MY CODE
			scene.add( AI1 );																	//Add The First Computer Controlled Car
			var wheel_material = new THREE.MeshFaceMaterial( wheel_materials );					//NOT MY CODE
			for ( var i = 0; i < 4; i++ ) {														//NOT MY CODE
				AI1.addWheel(wheel, wheel_material, new THREE.Vector3(i % 2 === 0 ? -1.6 : 1.6, -1, i < 2 ? 3.3 : -3.2),	//NOT MY CODE
					new THREE.Vector3( 0, -1, 0 ),												//NOT MY CODE
					new THREE.Vector3( -1, 0, 0 ),												//NOT MY CODE
					0.5, 0.7, i < 2 ? false : true														//NOT MY CODE
				);																				//NOT MY CODE
			}																					//NOT MY CODE
			AI1input = {																			//NOT MY CODE
				power: null,																	//NOT MY CODE
				direction: null,																//NOT MY CODE
				steering: 0																		//NOT MY CODE
			};																					//NOT MY CODE
			/*document.addEventListener('keydown', function( ev ) {								//NOT MY CODE
				switch ( ev.keyCode ) {															//NOT MY CODE
					case 37: // left															//NOT MY CODE
						AI1input.direction = 1;													//NOT MY CODE
						break;																	//NOT MY CODE
					case 38: // forward															//NOT MY CODE
						AI1input.forward = true;								//Added to add the ability to drive in reverse
						AI1input.power = true;														//NOT MY CODE	
						break;																	//NOT MY CODE
					case 39: // right															//NOT MY CODE
						AI1input.direction = -1;													//NOT MY CODE
						break;																	//NOT MY CODE
					case 40: // back															//NOT MY CODE
						AI1input.forward = false;								//Added to add the ability to drive in reverse
						AI1input.power = true;									//Added to add the ability to drive in reverse 
						break;																	//NOT MY CODE
				}																				//NOT MY CODE
			});	*/																				//NOT MY CODE
			/*document.addEventListener('keyup', function( ev ) {									//NOT MY CODE
				switch ( ev.keyCode ) {															//NOT MY CODE
					case 37: // left															//NOT MY CODE
						AI1input.direction = null;													//NOT MY CODE
						break;																	//NOT MY CODE
					case 38: // forward															//NOT MY CODE
						AI1input.power = null;														//NOT MY CODE
						break;																	//NOT MY CODE
					case 39: // right															//NOT MY CODE
						AI1input.direction = null;													//NOT MY CODE
						break;																	//NOT MY CODE
					case 40: // back															//NOT MY CODE
						AI1input.power = null;														//NOT MY CODE
						break;																	//NOT MY CODE
				}																				//NOT MY CODE
			});*/																					//NOT MY CODE
		});																						//NOT MY CODE
	});																							//NOT MY CODE
}		
