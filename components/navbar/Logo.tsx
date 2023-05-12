import React from 'react';
import Image from 'next/image';

export default function Logo(): JSX.Element {
  return (
    <div className="m-2 my-auto">
      <Image src="/img/logo.png" alt="logo image" width={60} height={60} />
    </div>
  );
}
