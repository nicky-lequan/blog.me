import React from 'react';
import ImageBanner from '@/components/ImageBanner';
import Posts from '@/components/Posts';

const PostsPage = () => (
  <div className="p-4">
    <ImageBanner className="mx-auto" />
    <div className="mt-4 p-8 flex-auto flex flex-col bg-neutral rounded-2xl drop-shadow-lg">
      <Posts />
    </div>
  </div>
);

export default PostsPage;
