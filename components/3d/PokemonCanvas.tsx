'use client';

import React, {Suspense, useEffect, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Preload, useGLTF} from '@react-three/drei';
import {useTheme} from 'next-themes';
import CanvasProgress from './CanvasProgress';

const Pokemon = ({isMobile}) => {
  const charmander = useGLTF('/3d/charmander/scene.gltf');
  const squirtle = useGLTF('/3d/squirtle/scene.gltf');
  const {systemTheme, theme} = useTheme();

  const isDarkTheme = (): boolean => {
    return theme === 'system'
      ? systemTheme === 'dark'
        ? true
        : false
      : theme === 'dark'
      ? true
      : false;
  };

  return (
    <mesh>
      <hemisphereLight intensity={isDarkTheme() ? 2 : 7} groundColor="black" />
      <pointLight intensity={0.5} position={[2.1, 1.4, -1.3]} />
      <primitive
        object={isDarkTheme() ? charmander.scene : squirtle.scene}
        scale={isMobile ? 0.3 : 0.65}
        position={isMobile ? [0.87, 1.2, 0] : [1.2, 1, 0]}
        rotation={[0.5, -0.4, 0]}
      />
    </mesh>
  );
};

export default function PokemonCanvas(): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 719px)');
    setIsMobile(mediaQuery.matches);

    function handleMediaQueryChange(event: MediaQueryListEvent): void {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [2.5, 3, 15], fov: 22}}
      gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasProgress />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Pokemon isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
