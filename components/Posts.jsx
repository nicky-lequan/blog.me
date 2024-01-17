'use client';

import {useState} from 'react';
import {Button} from '@/providers/AppProvider';
import PostCardVertical from './PostCardVertical';
import PostCardHorizontal from './PostCardHorizontal';

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

function Posts() {
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
      <h1 className="text-text font-black md:text-[3.125rem] sm:text-[2.625rem] text-[1.875rem]">
        Posts
      </h1>
      <div id="tag-button-group" className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Button
            key={index}
            variant="outlined"
            className={`${
              seletedTags.includes(tag)
                ? 'bg-secondary/70 border-none'
                : 'border-text'
            } p-2 text-text hover:bg-secondary shadow-md shadow-gray-600 dark:shadow-gray-700`}
            onClick={() => handleClick(tag)}>
            {tag.replaceAll('-', ' ')}
          </Button>
        ))}
      </div>
      <div id="card-container" className="mt-8 flex flex-wrap gap-4">
        <PostCardVertical className="hidden lg:block" />
        <PostCardHorizontal className="block lg:hidden" />
        <PostCardVertical className="hidden lg:block" />
        <PostCardHorizontal className="block lg:hidden" />
        <PostCardVertical className="hidden lg:block" />
        <PostCardHorizontal className="block lg:hidden" />
        <PostCardVertical className="hidden lg:block" />
        <PostCardHorizontal className="block lg:hidden" />
        <PostCardVertical className="hidden lg:block" />
        <PostCardHorizontal className="block lg:hidden" />
        <PostCardVertical className="hidden lg:block" />
        <PostCardHorizontal className="block lg:hidden" />
        <PostCardVertical className="hidden lg:block" />
        <PostCardHorizontal className="block lg:hidden" />
        <PostCardVertical className="hidden lg:block" />
        <PostCardHorizontal className="block lg:hidden" />
        <PostCardVertical className="hidden lg:block" />
        <PostCardHorizontal className="block lg:hidden" />
        <PostCardVertical className="hidden lg:block" />
        <PostCardHorizontal className="block lg:hidden" />
      </div>
    </>
  );
}

export default Posts;
