'use client';

import {useState} from 'react';
import {Button} from '@/providers/AppProvider';
import PostCard from './PostCard';

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
      <div
        id="card-container"
        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PostCard
          thumbnailSrc="/assets/images/default/thumbnail-1.jpg"
          title="UI/UX Review Check"
          description="Because it's about motivating the doers. Because I'm here to
          follow my dreams and inspire others."
          views={14272329}
        />
        <PostCard
          thumbnailSrc="/assets/images/default/thumbnail-2.jpg"
          title="UI/UX Review Check"
          description="Because it's about motivating the doers. Because I'm here to
          follow my dreams and inspire others."
          views={14272329}
        />
        <PostCard
          thumbnailSrc="/assets/images/default/thumbnail-3.jpg"
          title="UI/UX Review Check"
          description="Because it's about motivating the doers. Because I'm here to
          follow my dreams and inspire others."
          views={14272329}
        />
        <PostCard
          thumbnailSrc="/assets/images/default/thumbnail-2.jpg"
          title="UI/UX Review Check"
          description="Because it's about motivating the doers. Because I'm here to
          follow my dreams and inspire others."
          views={14272329}
        />
        <PostCard
          thumbnailSrc="/assets/images/default/thumbnail-3.jpg"
          title="UI/UX Review Check"
          description="Because it's about motivating the doers. Because I'm here to
          follow my dreams and inspire others."
          views={14272329}
        />
        <PostCard
          thumbnailSrc="/assets/images/default/thumbnail-1.jpg"
          title="UI/UX Review Check"
          description="Because it's about motivating the doers. Because I'm here to
          follow my dreams and inspire others."
          views={14272329}
        />
        <PostCard
          thumbnailSrc="/assets/images/default/thumbnail-2.jpg"
          title="UI/UX Review Check"
          description="Because it's about motivating the doers. Because I'm here to
          follow my dreams and inspire others."
          views={14272329}
        />
        <PostCard
          thumbnailSrc="/assets/images/default/thumbnail-3.jpg"
          title="UI/UX Review Check"
          description="Because it's about motivating the doers. Because I'm here to
          follow my dreams and inspire others."
          views={14272329}
        />
        <PostCard
          thumbnailSrc="/assets/images/default/thumbnail-1.jpg"
          title="UI/UX Review Check"
          description="Because it's about motivating the doers. Because I'm here to
          follow my dreams and inspire others."
          views={14272329}
        />
        <PostCard
          thumbnailSrc="/assets/images/default/thumbnail-1.jpg"
          title="UI/UX Review Check"
          description="Because it's about motivating the doers. Because I'm here to
          follow my dreams and inspire others."
          views={14272329}
        />
      </div>
    </>
  );
}

export default Posts;
