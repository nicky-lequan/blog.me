'use client';

import React from 'react';
import {ThemeProvider} from 'next-themes';
import {Typography, Button} from '@material-tailwind/react';
import AlertProvider from './AlertProvider';

const AppProvider = ({children}) => {
  return (
    <ThemeProvider attribute="class">
      <AlertProvider>{children}</AlertProvider>
    </ThemeProvider>
  );
};

export {Typography, Button};
export default AppProvider;
