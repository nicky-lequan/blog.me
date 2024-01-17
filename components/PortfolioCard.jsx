import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@/providers/AppProvider';
import Image from 'next/image';
import {GithubIcon, GlobeIcon} from './Icons';

function PortfolioCardVertical({title, thumbnail, demoUrl, githubUrl, desc}) {
  return (
    <Card className="h-[30rem] xl:h-[28.75rem] bg-zinc-100 dark:bg-zinc-900 drop-shadow-md">
      <CardHeader
        shadow={false}
        floated={false}
        className="mb-0 h-60 md:h-36 bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={thumbnail}
          alt={title}
          fill
          style={{
            objectFit: 'cover',
          }}
          quality={100}
        />
      </CardHeader>
      <div className="flex flex-col flex-1 justify-between">
        <CardBody>
          <Typography className="mb-4 text-text font-extrabold font-raleway text-2xl">
            {title}
          </Typography>
          <Typography
            variant="small"
            className="text-[0.875rem] font-bold opacity-75 text-slate font-heavydata">
            {desc}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex flex-row-reverse gap-2">
          {githubUrl && (
            <Typography
              as="a"
              href={githubUrl}
              className="opacity-60 transition-opacity hover:opacity-100">
              {<GithubIcon className="!w-8 !h-8" />}
            </Typography>
          )}
          {demoUrl && (
            <Typography
              as="a"
              href={demoUrl}
              className="opacity-60 transition-opacity hover:opacity-100">
              {<GlobeIcon className="!w-8 !h-8" />}
            </Typography>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}

export default PortfolioCardVertical;
