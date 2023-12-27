import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Preload, useGLTF} from '@react-three/drei';
import Loader from './Loader';

const Earth = () => {
  const earth = useGLTF('/3d/earth/scene.gltf');

  return (
    <primitive
      object={earth.scene}
      scale={0.8}
      position-x={-1.2}
      position-y={-0.5}
      position-z={-1.1}
      rotation-x={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => (
  <Canvas
    shadows
    frameloop="demand"
    gl={{preserveDrawingBuffer: true}}
    camera={{fov: 45, near: 0.1, far: 100, position: [2, -4, 6]}}>
    <Suspense fallback={<Loader />}>
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Suspense>
    <Earth />
  </Canvas>
);

export default EarthCanvas;
