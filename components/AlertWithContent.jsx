'use client';

import {useContext} from 'react';
import {AlertContext} from '@/providers/AlertProvider';
import {Alert, Typography} from '@/providers/AppProvider';

function AlertWithContent() {
  const {alertState, setAlertState} = useContext(AlertContext);

  return (
    <Alert
      open={alertState.open}
      className="mx-auto z-50 fixed inset-x-0 bottom-20 w-[80%] max-w-screen-md bg-slate-100 dark:bg-zinc-900 shadow-md shadow-gray dark:shadow-zinc-800 text-text"
      icon={alertState.icon}
      onClose={() => setAlertState({type: 'HIDE'})}>
      <Typography variant="h5" className="font-black font-raleway">
        {alertState.title}
      </Typography>
      <Typography className="mt-2 font-bold font-raleway">
        {alertState.content}
      </Typography>
    </Alert>
  );
}

export default AlertWithContent;
