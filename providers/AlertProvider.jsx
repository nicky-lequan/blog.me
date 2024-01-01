'use client';

import React, {createContext, useReducer} from 'react';

export const AlertContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW':
      return {
        open: true,
        icon: action.data.icon,
        title: action.data.title,
        content: action.data.content,
      };
    case 'HIDE':
      return {
        ...state,
        open: false,
      };
    default:
      throw new Error('Invalid action type.');
  }
};

const AlertProvider = ({children}) => {
  const [alertState, setAlertState] = useReducer(reducer, {
    open: false,
    icon: '',
    title: '',
    content: '',
  });

  return (
    <AlertContext.Provider value={{alertState, setAlertState}}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
