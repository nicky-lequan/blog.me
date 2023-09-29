'use client';

import React from 'react';
import {Html, useProgress} from '@react-three/drei';
import {useTheme} from 'next-themes';

export default function CanvasProgress(): JSX.Element {
  const {progress} = useProgress();
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
    <Html>
      <span className="canvas-load">
        <p
          style={{
            fontSize: 14,
            color: `${isDarkTheme() ? 'white' : 'black'}`,
            fontWeight: 800,
            marginTop: 40,
          }}>
          {progress.toFixed(2)}&nbsp;%
        </p>
      </span>
    </Html>
  );
}
