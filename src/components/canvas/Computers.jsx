import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { SpotLightHelper } from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./dogpc/retro.gltf");
  const { gl, scene } = useThree();
  const spotLightRef1 = React.useRef();
  const spotLightRef2 = React.useRef();

  React.useEffect(() => {
    // const addSpotLightHelper = (spotLightRef) => {
    //   if (spotLightRef.current) {
    //     const spotLightHelper = new SpotLightHelper(spotLightRef.current);
    //     scene.add(spotLightHelper);

    //     return () => {
    //       scene.remove(spotLightHelper);
    //     };
    //   }
    // };

    // const cleanupFunctions = [
    //   addSpotLightHelper(spotLightRef1),
    //   addSpotLightHelper(spotLightRef2),
    // ];

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup && cleanup());
    };
  }, [gl, scene]);

  return (
    <mesh>
      <hemisphereLight intensity={0.50} groundColor="#87CEEB" skyColor="blue" />
      <spotLight
        ref={spotLightRef1}
        position={[14, -10, -20]}
        angle={1}
        color="#971088"
        penumbra={0}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        ref={spotLightRef2}
        position={[-35, 0, 10]}
        angle={1}
        color="#33feb1"
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} groundColor="black" />
      <primitive
        object={computer.scene}
        scale={isMobile ? 6 : 9}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[0, 1, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [5, 5, 90], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
