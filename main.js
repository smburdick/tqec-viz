import * as mitsu from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const scene = new mitsu.Scene();
const camera = new mitsu.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new mitsu.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new mitsu.BoxGeometry( 1, 1, 1 );
const material = new mitsu.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new mitsu.Mesh( geometry, material );
// scene.add( cube );

const loader = new OBJLoader();

// load a resource
loader.load(
	// resource URL
	'static/tqec_skp_L2_new.obj',
	// called when resource is loaded
	function ( object ) {
		scene.add( object );
	},
	// called when loading is in progress
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	// called when loading has errors
	function ( error ) {
		console.log( 'An error happened' );
	}
);

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}

animate();
