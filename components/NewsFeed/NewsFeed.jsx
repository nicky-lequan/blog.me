'use client';

import {useState} from 'react';
import SectionWrapper from '../hoc/SectionWrapper';
import {
  Button,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from '@/providers/AppProvider';
import {PhotoIcon} from '../Icons';
import Image from 'next/image';
import {
  ALL_NEWSFEED,
  INITIAL_NEWSFEED_COUNT,
  LOAD_MORE_NEWSFEED_COUNT,
} from './constants';

function NewsFeed() {
  const [imageIdx, setImageIdx] = useState(0);
  const [items, setItems] = useState(
    ALL_NEWSFEED.slice(0, INITIAL_NEWSFEED_COUNT)
  );

  const handleLoadMore = () => {
    setItems((prev) =>
      ALL_NEWSFEED.slice(0, prev.length + LOAD_MORE_NEWSFEED_COUNT)
    );
  };

  return (
    <>
      <p className="md:text-[1rem] text-[0.75rem] text-gray-700 dark:text-gray-500 uppercase tracking-wider">
        My small wins
      </p>
      <h1 className="text-text font-black md:text-[3.125rem] sm:text-[2.625rem] text-[1.875rem]">
        News Feed
      </h1>

      <div className="relative mt-8">
        <div className="p-2 sm:p-8 h-[36rem] overflow-scroll bg-slate-200 dark:bg-stone-950 rounded-lg shadow-inner">
          <Timeline>
            {items.map((item, index) => (
              <TimelineItem
                key={index}
                className="h-28 max-w-[28rem]"
                onMouseEnter={() => setImageIdx(index)}>
                {index < ALL_NEWSFEED.length - 1 && (
                  <TimelineConnector className="!w-[4.875rem]" />
                )}
                <TimelineHeader className="py-3 pl-4 pr-8 relative rounded-lg bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800  shadow-lg">
                  <TimelineIcon
                    className="p-3"
                    variant="ghost"
                    color={item.color}>
                    {item.icon}
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="text-text text-[0.6rem] sm:text-[0.8rem] font-semibold font-heavydata">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="small"
                      className="text-[0.6rem] sm:text-[0.8rem] font-normal text-gray dark:text-gray-400 font-heavydata">
                      {item.subtitle}
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
            ))}
          </Timeline>
          {items.length < ALL_NEWSFEED.length && (
            <div className="flex justify-center md:block">
              <Button
                className="md:mx-40 my-4 max-w-[9rem] bg-primary text-text shadow-none font-raleway font-bold rounded-2xl"
                onClick={() => handleLoadMore()}>
                Load More
              </Button>
            </div>
          )}
          {imageIdx === -1 && (
            <div className="absolute right-12 top-12 w-[25rem] h-[25rem] hidden xl:flex xl:flex-col items-center justify-center rounded-xl bg-white dark:bg-zinc-900 shadow-xl">
              <PhotoIcon className="!h-24 !w-24" />
              Hover an event to see image
            </div>
          )}
          {imageIdx > -1 && (
            <div className="p-[0.063rem] green-violet-gradient absolute right-10 top-10 rounded-xl hidden xl:block shadow-xl">
              <div className="p-2 bg-zinc-50 dark:bg-zinc-900 rounded-xl flex justify-center items-center">
                <Image
                  src={items[imageIdx].imageSrc}
                  alt="trailer"
                  width={400}
                  height={400}
                  className="rounded-lg"
                  priority={true}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(NewsFeed, 'news-feed');
