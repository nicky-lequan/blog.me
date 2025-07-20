'use client';

import React, {useEffect, useState} from 'react';
import CapabilityCard from './CapabilityCard';
import SectionWrapper from '../hoc/SectionWrapper';
import {Avatar} from '@/providers/AppProvider';
import {CAPABILITIES} from './constants';
import {getArticle} from '@/utility/string';

function About() {
  const [iamText, setIamText] = useState('');
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
  }, [iamText]);

  function tick() {
    const fullText = `I'm ${getArticle(
      CAPABILITIES[textIdx].shortTitle
    )} ${CAPABILITIES[textIdx].shortTitle.toUpperCase()}.`;
    const updatedText = isDeleting
      ? iamText.substring(0, iamText.length - 1)
      : fullText.substring(0, iamText.length + 1);
    setIamText(updatedText);
    if (isDeleting) {
      setTypeInterval(
        updatedText.length === fullText.length - 1
          ? typeSpeed
          : typeInterval - Math.random() * 8
      );
    }
    if (isDeleting && updatedText === '') {
      setTextIdx((textIdx + 1) % CAPABILITIES.length);
      setIsDeleting(false);
      setTypeInterval(typeSpeed);
    } else if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypeInterval(period);
    }
  }

  return (
    <div className="flex flex-row items-start gap-0 sm:gap-4">
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-primary" />
        <div className="w-1 sm:h-[32.5rem] h-[30rem] bg-gradient-to-b from-primary" />
      </div>
      <div className="px-4">
        <div className="flex flex-row justify-between items-center">
          <article>
            <h1 className="mt-8 font-black text-[2.5rem] xs:text-[3.125rem] sm:text-[3.75rem] lg:text-[5rem] lg:leading-[6.125rem]">
              Hey there. I&apos;m <span className="text-primary">Nicky</span>.
            </h1>
            <p className="mt-2 mb-2 text-gray-700 dark:text-gray-500 font-medium text-[1rem] xs:text-[1.25rem] sm:text-[1.625rem] lg:text-[1.875rem] leading-[2rem]">
              <span className="font-bold">{iamText}</span>
              <span className="font-bold text-red-600">|</span>
            </p>
            <p className="mt-2 lg:pe-12 text-gray-700 dark:text-gray-500 font-medium text-[0.625rem] xs:text-[0.875rem] sm:text-[1.125rem] lg:text-[1.5rem] sm:leading-[1.5rem]">
              I started my career in blockchain development, but soon found my
              place in traditional engineering. I began with front-end
              development, where I thrive. At LG CNS, I discovered I could be
              more than just a developer, stepping up as a Project Leader and
              unofficial Scrum Master. I&apos;ve led many business-critical
              projects to success, ranging from small to medium scale. Check out
              the details below &nbsp;
              <a
                className="text-cyan-500 dark:text-violet-500 underline"
                href="#projects">
                here
              </a>
              .
            </p>
          </article>
          <Avatar
            variant="circular"
            alt="profile"
            withBorder
            className="mt-12 hidden lg:block lg:w-[20rem] lg:h-[18.75rem] border-2 border-primary"
            src="/assets/images/about/profile.jfif"
          />
        </div>
        <div className="mt-10 flex flex-wrap gap-6">
          {CAPABILITIES.map((capability) => (
            <CapabilityCard key={capability.title} {...capability} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(About, 'about');
