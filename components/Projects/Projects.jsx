'use client';

import SectionWrapper from '../hoc/SectionWrapper';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
  Badge,
} from '@/providers/AppProvider';
import {PROJECTS} from './constants';
import Link from 'next/link';

function Projects() {
  return (
    <>
      <p className="md:text-[1rem] text-[0.75rem] text-gray-700 dark:text-gray-500 uppercase tracking-wider">
        Work Experience
      </p>
      <h1 className="text-text font-black md:text-[3.125rem] sm:text-[2.625rem] text-[1.875rem]">
        Projects.
      </h1>

      <div className="mt-8 flex flex-col h-[60rem] overflow-scroll px-2 sm:px-8 py-10 bg-slate-200 dark:bg-stone-950 rounded-[1.25rem] shadow-inner">
        <Timeline>
          {PROJECTS.map((project, index) => (
            <TimelineItem key={index}>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar
                    size="sm"
                    src={project.iconSrc}
                    alt={project.companyName}
                    withBorder
                    className="border-gray-200 bg-white"
                  />
                </TimelineIcon>
                <div className="flex gap-4 items-center">
                  <Typography
                    variant="h5"
                    className="font-raleway text-[1.2rem] sm:text-[1.6rem]">
                    {project.title}
                  </Typography>
                  {index === 0 && (
                    <Badge
                      content="Recent"
                      className="text-[0.5rem] font-bold bg-gradient-to-r from-primary to-indigo-500 dark:via-purple-500 dark:to-pink-500">
                      &nbsp;
                    </Badge>
                  )}
                </div>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography
                  variant="small"
                  className="text-[0.75rem] font-bold font-raleway">
                  Client: {project.companyName} / Position: {project.position}
                </Typography>
                <Typography
                  variant="small"
                  className="text-[0.75rem] font-normal font-raleway">
                  {project.date}
                </Typography>
                <ul>
                  <li>
                    <Typography className="font-bold text-stone-600 dark:text-stone font-heavydata text-[0.5rem] sm:text-[0.875rem]">
                      {project.description}
                      {project.link && (
                        <>
                          :&nbsp;
                          <Link
                            href={project.link}
                            className="text-cyan-500 dark:text-violet-500 underline">
                            {project.linkText || 'Demo'}
                          </Link>
                        </>
                      )}
                    </Typography>
                  </li>
                  {project.contributions && (
                    <li>
                      <Typography className="font-medium text-stone-600 dark:text-stone font-heavydata text-[0.5rem] sm:text-[0.875rem]">
                        Contributions:
                      </Typography>
                    </li>
                  )}
                  {project.contributions &&
                    project.contributions.map((contribution, index) => (
                      <li key={index}>
                        <Typography className="font-medium text-stone-600 dark:text-stone font-heavydata text-[0.5rem] sm:text-[0.875rem]">
                          - {contribution}
                        </Typography>
                      </li>
                    ))}
                  <li>
                    <Typography className="font-medium text-stone-600 dark:text-stone font-heavydata text-[0.5rem] sm:text-[0.875rem]">
                      Stack: {project.stack}
                    </Typography>
                  </li>
                </ul>
              </TimelineBody>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </>
  );
}

export default SectionWrapper(Projects, 'projects');
