'use client';

import React, {useEffect, useState} from 'react';

export default function HomeBanner() {
  const [text, setText] = useState('');
  const texts = [
    'Welcome to my knowledge base.',
    'Hope you find something useful :)',
  ];
  const [textIdx, setTextIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const initialTypeInterval = 80;
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
    <div className="px-8 py-20 flex flex-col justify-center bg-gradient-to-r from-primary dark:from-primary/70 shadow-md shadow-current dark:shadow-gray-800 rounded-xl">
      <p className="text-5xl mb-6 h-40 sm:h-24 md:h-20">
        <span className="font-bold">{text}</span>
        <span className="font-bold text-red-900 dark:text-red-600">|</span>
      </p>
      <br />
      <p>
        Software engineering is always challenging, but those challenge never
        comes solely itself alone. <br />
        It always comes with a sense of conquest in the end when you solve it,
        and I think I&apos;m sorta addicted to that feeling.
      </p>
    </div>
  );
}
