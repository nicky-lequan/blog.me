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

const PortfolioCardHorizontal = ({
  title,
  thumbnail,
  linkUrl,
  desc,
  className,
}) => (
  <Card
    className={`${className} w-full max-w-[48rem] min-h-64 flex flex-row bg-zinc-100 dark:bg-zinc-900 drop-shadow-md`}>
    <CardHeader
      shadow={false}
      floated={false}
      className="m-4 w-2/5 shrink-0 bg-zinc-100 dark:bg-zinc-900">
      <img src={thumbnail} alt={title} className="h-full w-full object-cover" />
    </CardHeader>
    <div className="flex flex-col justify-between">
      <CardBody>
        <Typography className="p-1 text-text font-extrabold font-raleway text-3xl">
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          className="my-4 font-bold opacity-75 text-slate font-heavydata">
          {desc}
        </Typography>
      </CardBody>
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
    </div>
  </Card>
);

export default PortfolioCardHorizontal;
