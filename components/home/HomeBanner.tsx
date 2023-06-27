'use client';

import React, {useEffect, useState} from 'react';

export default function HomeBanner(): JSX.Element {
  const [text, setText] = useState('');
  const texts: string[] = [
    "Fellows !",
    "It's Jooncco.",
    "I'm a Backend Engineer.",
    "I'm a Solutions Architect.",
    "I LOVE to learn & build things.",
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
    <div className="px-8 py-20 flex flex-col justify-center mx-auto bg-slate-900/30 rounded-lg">
      <p className="text-5xl mb-6">
        <span className="font-bold">{text}</span>
        <span className="font-bold text-red-600">|</span>
      </p>
      <p>
        Time Flies! It's been 4 years since I started my career as a software engineer, making a better world.
        Software engineering is a field that I always find exciting, full of challenges which keeps me
        motivated all the time. Honestly, facing challenges itself is not a pleasurable experience for me like everyone else.
        I think it's the sense of conquest that makes me keep rolling.
        My journey will continue anyway, and you're watching the outcomes of my hardwork right now.
      </p>
    </div>
  );
}
