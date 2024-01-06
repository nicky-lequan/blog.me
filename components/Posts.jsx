'use client';

import React, {useState} from 'react';
import {Button} from '@/providers/AppProvider';

const tags = [
  'aws',
  'spring',
  'spring-boot',
  'dynamic-programming',
  'divide-and-conquer',
  'brute-force',
  'jpa',
  'architecture',
  'eks-jam',
  'algorithms',
  'binary-search',
  'git',
  'cicd-pipeline',
  'infrastructure',
  'cloud',
];

const Posts = () => {
  const [seletedTags, setSelectedTags] = useState([]);

  const handleClick = (tag) => {
    setSelectedTags(
      seletedTags.includes(tag)
        ? seletedTags.filter((e) => e !== tag)
        : [tag, ...seletedTags]
    );
  };

  return (
    <>
      <h1 className="text-text font-black md:text-[50px] sm:text-[42px] text-[30px]">
        Posts
      </h1>
      <div className="mt-10 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Button
            key={index}
            variant="outlined"
            className={`${
              seletedTags.includes(tag)
                ? 'bg-secondary border-secondary'
                : 'border-text'
            } p-2 text-text hover:bg-secondary shadow-md shadow-gray-600 dark:shadow-gray-700`}
            onClick={() => handleClick(tag)}>
            {tag.replaceAll('-', ' ')}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Posts;
