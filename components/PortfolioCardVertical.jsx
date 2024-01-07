import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import Link from 'next/link';

const PortfolioCardVertical = ({
  title,
  thumbnail,
  linkUrl,
  desc,
  className,
}) => (
  <div className={className}>
    <Card className="w-96 h-[480px] xl:w-80 flex flex-col justify-between overflow-hidden bg-zinc-100 dark:bg-zinc-900 drop-shadow-md">
      <div>
        <CardHeader
          shadow={false}
          floated={false}
          className="h-32 sm:h-40 bg-zinc-100 dark:bg-zinc-900">
          <img src={thumbnail} alt={title} className="w-full object-cover" />
        </CardHeader>
        <CardBody>
          <div className="mb-2">
            <Typography className="text-text font-extrabold font-raleway text-2xl">
              {title}
            </Typography>
          </div>
          <div className="flex flex-wrap gap-x-1">
            <Typography
              variant="small"
              className="text-[14px] font-bold opacity-75 text-slate font-heavydata">
              {desc}
            </Typography>
          </div>
        </CardBody>
      </div>
      <CardFooter className="pt-0">
        <Link href={linkUrl}>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-slate-200 dark:bg-slate-800 text-text shadow-none hover:scale-105 hover:shadow-none font-bold">
            CHECKOUT
          </Button>
        </Link>
      </CardFooter>
    </Card>
  </div>
);

export default PortfolioCardVertical;
