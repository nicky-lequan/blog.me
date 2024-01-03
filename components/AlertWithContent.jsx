'use client';

import {AlertContext} from '@/providers/AlertProvider';
import {Alert, Typography} from '@material-tailwind/react';
import {useContext} from 'react';

const AlertWithContent = () => {
  const {alertState, setAlertState} = useContext(AlertContext);

  return (
    <Alert
      variant="gradient"
      open={alertState.open}
      className="mx-auto z-50 fixed inset-x-0 bottom-20 w-[80%] max-w-screen-md bg-gradient-to-r from-slate-800 via-indigo-500 to-primary dark:from-slate-950 dark:to-primary shadow-md shadow-gray dark:shadow-gray-700"
      icon={alertState.icon}
      onClose={() => setAlertState({type: 'HIDE'})}>
      <Typography variant="h5" className="text-white font-black font-raleway">
        {alertState.title}
      </Typography>
      <Typography className="mt-2 font-bold text-white font-raleway">
        {alertState.content}
      </Typography>
    </Alert>
  );
};

export default AlertWithContent;
