import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = ({ imgUrl, index }) => {
  const [decal] = useTexture([imgUrl]);

  const position = React.useMemo(() => {
    const ballsPerRow = window.innerWidth < 1000 ? 2 : 7;
    const row = Math.floor(index / ballsPerRow);
    const column = index % ballsPerRow;
    const spacing = window.innerWidth < 1000 ? 2 : 1.5;
    const xOffset = window.innerWidth < 1000 ? 9 : 4.5;
    const yOffset = 1.3;
    const x = column * spacing - xOffset;
    const y = -row * spacing + yOffset;
    return [x, y, 0];
  }, [index]);

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.5}>
      <ambientLight intensity={0} />
      <directionalLight position={[0, 0, 0.009]} />
      <mesh castShadow receiveShadow scale={0.7} position={position}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#00368c" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} map={decal} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ technologies }) => {
  const cameraSettings = React.useMemo(() => ({
    position: [0, 0, 12],
    fov: 20, // Adjust the FOV value to lower the camera's field of view
  }), []);

  return (
    <div style={{ width: '100%', height: '30vh' }}>
      <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }} style={{ width: '100%', height: '140%' }} camera={cameraSettings}>
        <OrbitControls
          enableZoom={false}
          autoRotateSpeed={0} // Adjust the speed of auto rotation if desired
          minDistance={5} // Adjust the minimum distance from the center
          maxDistance={15} // Adjust the maximum distance from the center
          distance={10} // Adjust the initial distance of the camera
        />
        {technologies.map((technology, index) => (
          <Ball key={technology.name} imgUrl={technology.icon} index={index} />
        ))}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
