'use client';

import {ThemeProvider} from 'next-themes';
import AlertProvider from './AlertProvider';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Avatar,
  Alert,
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Carousel,
  Typography,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  TimelineHeader,
  TimelineBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Tooltip,
} from '@material-tailwind/react';

export {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Avatar,
  Alert,
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Carousel,
  Typography,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  TimelineHeader,
  TimelineBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Tooltip,
};

export default function AppProvider({children}) {
  return (
    <ThemeProvider attribute="class">
      <AlertProvider>{children}</AlertProvider>
    </ThemeProvider>
  );
}
