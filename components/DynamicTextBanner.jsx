'use client';

import Link from 'next/link';
import {useEffect, useState} from 'react';

function DynamicTextBanner() {
  const [text, setText] = useState('');
  const texts = [
    'Hey, stranger.',
    'Welcome to my knowledge base.',
    'Hope you find something useful :)',
  ];
  const [textIdx, setTextIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const initialTypeInterval = 50;
  const [typeInterval, setTypeInterval] = useState(initialTypeInterval);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, typeInterval);

    return () => {
      clearInterval(ticker);
    };
  });

  function tick() {
    const fullText = texts[textIdx];
    const updatedText = isDeleting
      ? text.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypeInterval(
        updatedText.length === fullText.length - 1
          ? initialTypeInterval
          : Math.max(20, typeInterval - Math.random() * 8)
      );
    }

    if (isDeleting && updatedText === '') {
      setTextIdx((textIdx + 1) % texts.length);
      setIsDeleting(false);
      setTypeInterval(initialTypeInterval);
    } else if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypeInterval(period);
    }
  }

  return (
    <div className="px-8 py-20 flex flex-col justify-center bg-gradient-to-r from-primary dark:from-primary/90 shadow-md shadow-current dark:shadow-gray-800 rounded-xl">
      <p className="text-5xl mb-6 h-40 sm:h-24 md:h-20">
        <span className="font-bold font-raleway">{text}</span>
        <span className="font-bold text-rose-700">|</span>
      </p>
      <br />
      <p>
        This is the place where I collect & share what I&apos;ve learned.
        <br />
        Wanna dig into the source code of this blog ? Visit &nbsp;
        <Link
          href="https://github.com/jooncco/about-jooncco"
          className="font-bold text-blue-700 dark:text-pink-800 hover:underline">
          here
        </Link>
        . It&apos;s under MIT liscence.
      </p>
    </div>
  );
}

export default DynamicTextBanner;
