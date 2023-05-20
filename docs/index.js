import * as THREE from 'https://unpkg.com/three@0.142.0/build/three.module.js';

import { OrbitControls } from "https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js"

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);


const goob_texture = new THREE.TextureLoader().load('media/images/goob.png');
const geometry = new THREE.OctahedronGeometry(10, 0);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const torus = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: goob_texture }));




scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

const ligthHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50, 0x444444, 0xeff00);

const controls = new OrbitControls(camera, renderer.domElement);


function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star)
}
Array(200).fill().forEach(addStar)

const spaceTexture = new THREE.TextureLoader().load('media/images/madotsuki.jpg')
scene.background = spaceTexture

scene.add(ligthHelper, gridHelper);


const zweiTexture = new THREE.TextureLoader().load('media/images/chimkin.png');

const zwei = new THREE.Mesh(
    new THREE.BoxGeometry(3, 3, 3),
    new THREE.MeshBasicMaterial({ map: zweiTexture })
)

scene.add(zwei);

const moonTexture = new THREE.TextureLoader().load('media/images/moon.png');
const normal = new THREE.TextureLoader().load('media/images/normal.jpg');

const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({ map: moonTexture, normalMap: normal })
)

scene.add(moon)

moon.position.z = 10;
moon.position.setX(-3);

zwei.position.y = 20;

function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x = + 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    moon.position.y += 0.01;

    controls.update();
    renderer.render(scene, camera);
}


function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    moon.rotation.x += 0.05;
    moon.rotation.y += 0.075;
    moon.rotation.z += 0.05;


    zwei.rotation.y += 4.05;
    zwei.rotation.z += 4.05;

    camera.position.z = t * -0.001;
    camera.position.x = t * -0.081;
    camera.position.y = t * -0.081;
}

window.onscroll = moveCamera;

animate();
