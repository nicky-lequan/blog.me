'use client';

import {useState} from 'react';
import SectionWrapper from '../hoc/SectionWrapper';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Avatar,
  Tooltip,
} from '@/providers/AppProvider';
import {SKILLS} from './constants';

function Skills() {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

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
            key={index + 1}
            open={open === index + 1}
            className="mb-2 rounded-[1.25rem] border border-blue-gray-100 px-4 shadow-inner">
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className={`border-b-0 transition-colors font-raleway font-bold ${
                open === index + 1
                  ? 'text-text hover:text-text'
                  : 'hover:text-text'
              }`}>
              {skill.category}
            </AccordionHeader>
            <AccordionBody className="pt-0 flex flex-wrap">
              {skill.tools.map((tool, index) => (
                <Tooltip
                  key={index}
                  content={tool.name}
                  animate={{
                    mount: {scale: 1, y: 0},
                    unmount: {scale: 0, y: 25},
                  }}>
                  <Avatar src={tool.iconSrc} alt={tool.name} variant="square" />
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
