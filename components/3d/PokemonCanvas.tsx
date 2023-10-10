'use client';

import React, {Suspense, useEffect, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Preload, useGLTF} from '@react-three/drei';
import {useTheme} from 'next-themes';
import CanvasProgress from './CanvasProgress';

const Pokemon = ({isUnderSm, isUnderLg}) => {
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
      <pointLight intensity={0.5} position={[2.1, 1.9, -0.8]} />
      <primitive
        object={isDarkTheme() ? charmander.scene : squirtle.scene}
        scale={isUnderSm ? 0.3 : 0.65}
        position={
          isUnderLg
            ? isUnderSm
              ? [0.8, 0.4, 0]
              : [1.2, 0.4, 0]
            : [1.8, 0.4, 0]
        }
        rotation={[0.5, -0.4, 0]}
      />
    </mesh>
  );
};

export default function PokemonCanvas(): JSX.Element {
  const [isUnderSm, setIsUnderSm] = useState(false);
  const [isUnderLg, setIsUnderLg] = useState(false);

  useEffect(() => {
    const mediaQuerySm = window.matchMedia('(max-width: 639px)');
    const mediaQueryLg = window.matchMedia('(max-width: 1023px)');
    setIsUnderSm(mediaQuerySm.matches);
    setIsUnderLg(mediaQueryLg.matches);

    function handleMediaQueryChangeSm(event: MediaQueryListEvent): void {
      setIsUnderSm(event.matches);
    }
    function handleMediaQueryChangeLg(event: MediaQueryListEvent): void {
      setIsUnderLg(event.matches);
    }

    mediaQuerySm.addEventListener('change', handleMediaQueryChangeSm);
    mediaQueryLg.addEventListener('change', handleMediaQueryChangeLg);
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
        <Pokemon isUnderSm={isUnderSm} isUnderLg={isUnderLg} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
1;
