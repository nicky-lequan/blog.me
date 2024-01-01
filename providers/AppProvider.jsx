'use client';

import React from 'react';
import {ThemeProvider} from 'next-themes';
import {Typography} from '@material-tailwind/react';
import AlertProvider from './AlertProvider';

const AppProvider = ({children}) => {
  return (
    <ThemeProvider attribute="class">
      <AlertProvider>{children}</AlertProvider>
    </ThemeProvider>
  );
};

export {Typography};
export default AppProvider;
