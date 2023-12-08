import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioCard = ({title, thumbnail, linkUrl, desc}) => (
  <Card className="w-full sm:w-[250px] bg-neutral2 justify-between shadow-2xl">
    <div>
      <CardHeader shadow={false} floated={false} className="h-32 sm:h-40">
        <Image
          width={100}
          height={100}
          src={thumbnail}
          alt={title}
          className="w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2">
          <Typography className="font-semibold text-text">{title}</Typography>
        </div>
        <div className="flex flex-wrap gap-x-1">
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75">
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
          className="bg-blue-gray-200/30 text-text shadow-none hover:scale-105 hover:shadow-none">
          TAKE A LOOK
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export default PortfolioCard;
