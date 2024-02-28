'use client';

import React, {useState} from 'react';
import SectionWrapper from '../hoc/SectionWrapper';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Tooltip,
} from '@/providers/AppProvider';
import {SKILLS} from './constants';
import Image from 'next/image';

function Skills() {
  const [openIndex, setOpenIndex] = useState(0);
  const handleOpen = (value) => setOpenIndex(open === value ? 0 : value);

  return (
    <>
      <p className="md:text-[1rem] text-[0.75rem] text-gray-700 dark:text-gray-500 uppercase tracking-wider">
        Hammer and wrench
      </p>
      <h1 className="text-text font-black md:text-[3.125rem] sm:text-[2.625rem] text-[1.875rem]">
        Skills
      </h1>

      <div className="mt-8">
        {SKILLS.map((skill, index) => (
          <Accordion
            key={index}
            open={openIndex === index}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4 shadow-inner">
            <AccordionHeader
              onClick={() => handleOpen(index)}
              className={`border-b-0 transition-colors font-raleway font-bold ${
                openIndex === index
                  ? 'text-text hover:text-text'
                  : 'hover:text-text'
              }`}>
              {skill.category}
            </AccordionHeader>
            <AccordionBody className="pt-0 flex flex-wrap">
              {index === openIndex &&
                skill.tools.map((tool) => (
                  <Tooltip
                    key={tool.name}
                    content={tool.name}
                    animate={{
                      mount: {scale: 1, y: 0},
                      unmount: {scale: 0, y: 25},
                    }}>
                    <Image
                      src={tool.iconSrc}
                      alt={tool.name}
                      width={48}
                      height={48}
                      priority={true}
                    />
                  </Tooltip>
                ))}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Skills, 'skills');
