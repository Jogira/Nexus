import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = ({ imgUrl, index, isMobile }) => {
  const [decal] = useTexture([imgUrl]);

  const position = React.useMemo(() => {
    const ballsPerRow = isMobile ? 2 : 6;
    const row = Math.floor(index / ballsPerRow);
    const column = index % ballsPerRow;
    const spacing = isMobile ? 0.6 : 1.5;
    const xOffset = isMobile ? 0.3 : 3.7;
    const yOffset = isMobile ? 1.8 : 1;
    const x = column * spacing - xOffset;
    const y = -row * spacing + yOffset;
    return [x, y, 0];
  }, [index, isMobile]);

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.3}>
      <ambientLight intensity={0} />
      <directionalLight position={[0, 0, 0.005]} />
      <mesh castShadow receiveShadow scale={isMobile ? 0.3 : 0.7} position={position}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#092553" polygonOffset polygonOffsetFactor={-5} flatShading />
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

  const controlsRef = React.useRef();

  const isMobile = window.innerWidth < 768; // Set the breakpoint for mobile devices

  return (
    <div style={{ width: '100%', height: isMobile ? '60vh' : '30vh' }}>
      <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }} style={{ width: '100%', height: '140%' }} camera={cameraSettings}>
        <BallCanvasControls ref={controlsRef} enableZoom={false} />
        {technologies.map((technology, index) => (
          <Ball key={technology.name} imgUrl={technology.icon} index={index} isMobile={isMobile} />
        ))}
        <Preload all />
      </Canvas>
    </div>
  );
};

const BallCanvasControls = React.forwardRef((props, ref) => {
  return (
    <OrbitControls
      ref={ref}
      enableZoom={props.enableZoom}
      enablePan={props.enablePan} // Add enablePan prop to enable panning
      autoRotateSpeed={0} // Adjust the speed of auto rotation if desired
      minDistance={5} // Adjust the minimum distance from the center
      maxDistance={15} // Adjust the maximum distance from the center
      distance={10} // Adjust the initial distance of the camera
    />
  );
});

export default BallCanvas;
