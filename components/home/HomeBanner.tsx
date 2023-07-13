'use client';

import {Tooltip} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';

export default function HomeBanner(): JSX.Element {
  const [text, setText] = useState('');
  const texts: string[] = [
    'Fellows !',
    "It's Jooncco.",
    "I'm a Software Engineer.",
    "I'm a Quant Enthusiast.",
    'I LOVE to learn & build things.',
  ];
  const [textIdx, setTextIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typeSpeed = 100;
  const [typeInterval, setTypeInterval] = useState(typeSpeed);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, typeInterval);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  function tick(): void {
    const fullText = texts[textIdx];
    const updatedText = isDeleting
      ? text.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypeInterval(
        updatedText.length === fullText.length - 1
          ? typeSpeed
          : typeInterval - Math.random() * 8
      );
    }

    if (isDeleting && updatedText === '') {
      setTextIdx((textIdx + 1) % texts.length);
      setIsDeleting(false);
      setTypeInterval(typeSpeed);
    } else if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypeInterval(period);
    }
  }

  return (
    <div className="px-8 py-20 flex flex-col justify-center mx-auto bg-gradient-to-r from-blue-100 dark:from-indigo-800/30 shadow-md shadow-current dark:shadow-gray-800 rounded-xl">
      <p className="text-5xl mb-6">
        <span className="font-bold">{text}</span>
        <span className="font-bold text-red-900 dark:text-red-600">|</span>
      </p>
      <p>
        &nbsp;
        <span className="font-bold underline decoration-2 decoration-indigo-500">
          Jooncco
        </span>
        &nbsp;is a compound word consists of two substrings.&nbsp;
        <span className="font-bold underline decoration-2 decoration-indigo-500">
          Joon
        </span>
        &nbsp;comes from my first name&nbsp;
        <span className="font-bold underline decoration-2 decoration-indigo-500">
          Junha
        </span>
        , and &nbsp;
        <span className="font-bold underline decoration-2 decoration-indigo-500">
          cco
        </span>
        &nbsp;comes from&nbsp;
        <Tooltip
          content={
            <Image height={60} width={60} src="/img/loco.png" alt={'loco'} />
          }
          placement="bottom"
          className="bg-blue-100 dark:bg-[#202A44]">
          <Link
            className="font-bold text-indigo-500 dark:text-indigo-500 underline decoration-2 decoration-indigo-500"
            href="https://www.instagram.com/satgotloco">
            Loco
          </Link>
        </Tooltip>
        , the name of my favorite Korean hiphop star who is incredibly talented
        & always spreads good vibes with music band sound.
        <br />
        <br />
        It&apos;s been&nbsp;
        <span className="font-bold">4 years</span>
        &nbsp;since I&apos;ve been around in this field. Software engineering is
        full of challenges most of the time, and I really enjoy the sense of
        conquest that comes after everytime I solve them. It is the fuel keeps
        me rolling, and my journey shall continue on and on and on. You&apos;re
        watching the outcomes of my hardwork ON AIR.
      </p>
    </div>
  );
}
