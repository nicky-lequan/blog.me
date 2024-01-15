import DynamicTextBanner from '@/components/DynamicTextBanner';
import Posts from '@/components/Posts';

function PostsPage() {
  return (
    <div className="p-4">
      <DynamicTextBanner />
      <div className="mt-4 p-8 flex-auto flex flex-col bg-neutral rounded-2xl drop-shadow-lg">
        <Posts />
      </div>
    </div>
  );
}

export default PostsPage;
