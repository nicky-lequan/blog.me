'use client';

import {Button} from '@/providers/AppProvider';
import {RESUME_FILE_NAME_EN, RESUME_FILE_NAME_KO} from './constants';
import {DownloadIcon} from '../Icons';

function Resume() {
  const handleDownload = (fileName) => {
    const link = document.createElement('a');
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mb-20 px-4 md:px-8 flex gap-2 md:gap-4">
      {[RESUME_FILE_NAME_EN, RESUME_FILE_NAME_KO].map((fileName, index) => (
        <Button
          key={index}
          className="flex gap-1 bg-primary/50 text-text font-raleway font-bold justify-center items-center"
          onClick={() => handleDownload(fileName)}>
          {fileName}
          <DownloadIcon className="!w-6 !h-6 xs:!w-4 xs:!h-4" />
        </Button>
      ))}
    </div>
  );
}

export default Resume;
