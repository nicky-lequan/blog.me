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
    "I'm a Backend Engineer.",
    "I'm a Solutions Architect.",
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
    <div className="px-8 py-20 flex flex-col justify-center mx-auto bg-gradient-to-r from-indigo-800/20 dark:from-indigo-800/30 rounded-xl">
      <p className="text-5xl mb-6">
        <span className="font-bold">{text}</span>
        <span className="font-bold text-red-600">|</span>
      </p>
      <p>
        &nbsp;
        <span className="font-bold">&quot;Jooncco&quot;</span> is a compound
        word consists of two substrings.
        <span className="font-bold"> &quot;Joon&quot;</span> comes from my first
        name <span className="font-bold"> Junha</span>, and
        <span className="font-bold"> &quot;cco&quot;</span> comes from&nbsp;
        <Tooltip
          content={
            <Image height={60} width={60} src="/img/loco.png" alt={'loco'} />
          }
          placement="bottom">
          <Link
            className="font-bold underline decoration-indigo-400"
            href="https://www.instagram.com/satgotloco">
            Loco
          </Link>
        </Tooltip>
        , the name of my favorite Korean hiphop star who is incredibly talented
        & always shares good vibes with band sounds.
        <br />
        <br />
        It&apos;s been&nbsp;
        <span className="font-bold">4 years</span>
        &nbsp;since I&apos;ve been around in this field. Software engineering is
        full of challenges most of the time, and I really enjoy the sense of
        conquest that comes after everytime I solve them. This keeps me rolling,
        and my journey shall continue on and on and on. You&apos;re watching the
        outcomes of my hardwork on my live channel ON AIR.
      </p>
    </div>
  );
}
