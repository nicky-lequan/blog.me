import React from 'react';
import ImageBanner from '@/components/ImageBanner';
import Posts from '@/components/Posts';

const PostsPage = () => (
  <>
    <ImageBanner className="mx-auto" />
    <div className="mt-4 sm:px-16 px-6 py-8 flex-auto flex flex-col bg-neutral rounded-2xl">
      <Posts />
    </div>
  </>
);

export default PostsPage;
