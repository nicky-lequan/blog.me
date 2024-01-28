import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@/providers/AppProvider';
import {EyeIcon} from './Icons';
import {numberWithCommas} from '@/utility/number';
import Image from 'next/image';

function PostCard({thumbnailSrc, title, description, views}) {
  return (
    <Card className="overflow-hidden bg-zinc-100 dark:bg-zinc-900 drop-shadow-md">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none h-60 md:h-36">
        <Image
          src={thumbnailSrc}
          alt="thumbnail image"
          fill
          style={{
            objectFit: 'cover',
          }}
          quality={100}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" className="font-bold text-text font-raleway">
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          className="mt-3 font-normal opacity-75 text-zinc-700 dark:text-zinc font-heavydata">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <EyeIcon className="text-gray-500 dark:text-gray-400 !h-3 !w-3" />
          <Typography
            variant="small"
            className="font-medium text-gray dark:text-gray-400">
            {numberWithCommas(views)} view{views > 1 && 's'}
          </Typography>
        </div>
        <Typography
          variant="small"
          className="font-medium text-gray dark:text-gray-400">
          10 JAN 2024
        </Typography>
      </CardFooter>
    </Card>
  );
}

export default PostCard;
