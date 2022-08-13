// SCENE - It is like a container. We can put objects, models,lights etc
const scene = new THREE.Scene();

// Objects - Objects can be anything. It can be primitive geometry, imported models, particles, lights, etc.

// Mesh - We can use mesh to create geometry (Polygon Objects). Using BoxGeometry & MeshBasicMaterial.
// -----------------------------------------------------------------------------------------------------------

// Red Cube 

// Creating Shape
const geometry = new THREE.BoxGeometry(1, 1, 1);
// In geometry we basically make a skeleton of the geometry shape we want.

// ----------------------------------------------------------------------------------------------------------

// Creating Material
const material = new THREE.MeshBasicMaterial({ color: 'red' });
// @params - color : color_name , hexcode , rgb_value
// In material we can add color, texture to the shape.

// -----------------------------------------------------------------------------------------------------------

// Making the shape with the geometry and material
const mesh = new THREE.Mesh(geometry, material);

// Adding Mesh to the scene so the it can be visible.
scene.add(mesh);

// -----------------------------------------------------------------------------------------------------------

// Here we didn't saw anything bcoz we need to set to camera.
// Camera - It servers as a view point when doing a render.
//        - We can have multiple camera and can switch between them.
//        - There are different types of camera but we are going to use Perspective camera
//          bcoz it has a first person perspective (FPP) which resemble as real world

const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// @params - Field of view : Vertical vision angle input in degrees
//                  Small value : Zoom In | Big value : Zoom Out
//                  Generally we keep it as 75 degree

//         - Aspect Ratio : The width of the render divided by the height of the render.
//                  Always create a size object containing default values : width = 800 & height = 600

scene.add(camera);

// -----------------------------------------------------------------------------------------------------------

// Renderer - It basically render the scene from the camera point of view
//          - Results are drawn in canvas
const canvas = document.querySelector('canvas.webgl');
console.log(canvas);
const renderer = new THREE.WebGLRenderer({
    canvas
})
// Canvas - It is a HTML element in which you draw stuff
//        - Three.js will use WebGL to draw the render inside this canvas

// -----------------------------------------------------------------------------------------------------------

// Here we would see thing but it is not of the size we wanted so to set it we have a function
// setSize - It will set the size of the renderer
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
// Here we haven't seen anything bcoz the camera is inside the cube
// So we need to move the camera backwards using position, rotation and scale properties

