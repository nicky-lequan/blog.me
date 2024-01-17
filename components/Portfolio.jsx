'use client';

import {motion} from 'framer-motion';
import SectionWrapper from './hoc/SectionWrapper';
import {fadeIn, textVariant} from '@/utils/motion';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@/providers/AppProvider';
import PortfolioCard from './PortfolioCard';
import {
  BlockchainIcon,
  BrainIcon,
  CloudIcon,
  GlobeIcon,
  WrenchScrewdriverIcon,
} from './Icons';

const tabs = [
  {
    id: 'web',
    label: 'Web',
    icon: <GlobeIcon />,
    items: [
      {
        title: 'jooncco.dev-fe',
        thumbnail: '/img/portfolio/jooncco.dev-fe.png',
        demoUrl: '',
        githubUrl: 'https://github.com/jooncco/jooncco.dev-fe',
        desc: "Jooncco's knowledge base front end, built with Next.js 14.",
      },
      {
        title: 'Spring Boot API Server Template',
        thumbnail: '/img/portfolio/springapiservertemplate.png',
        demoUrl: '',
        githubUrl: 'https://github.com/jooncco/spring-api-server-template',
        desc: 'Spring Boot api server example. The main goal here is to showcase best practices in a production-level server.',
      },
      {
        title: 'jooncco.github.io',
        thumbnail: '/img/portfolio/jooncco.github.io.png',
        demoUrl: 'https://jooncco.github.io',
        githubUrl: 'https://github.com/jooncco/jooncco.github.io',
        desc: "[Legacy] A blog based on github.io and jekyll template 'Minimal Mistakes'.",
      },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud',
    icon: <CloudIcon />,
    items: [],
  },
  {
    id: 'blockchain',
    label: 'Blockchain',
    icon: <BlockchainIcon />,
    items: [],
  },
  {
    id: 'ml',
    label: 'ML',
    icon: <BrainIcon />,
    items: [
      {
        title: 'Bitcoin Price Predictor',
        thumbnail: '/img/portfolio/bitcoinpricepredictor.png',
        demoUrl: '',
        githubUrl: 'https://github.com/jooncco/bitcoin-price-predictor',
        desc: '[Undergraduate] Bitcoin price prediction with market indicators and google trend using regression models & LSTM RNN',
      },
      {
        title: 'Coindrop Game AI Agent',
        thumbnail: '/img/portfolio/coindropgameaiagent.png',
        demoUrl: '',
        githubUrl: 'https://github.com/jooncco/coindrop-game-ai-agent',
        desc: '[Undergraduate] Reflex agent trained with reinforcement learning(Q-learning). This agent plays coin drop game implemented using pygame module.',
      },
      {
        title: '"is a" Relationship Teller',
        thumbnail: '/img/portfolio/isarelationshipteller.png',
        demoUrl: '',
        githubUrl: 'https://github.com/jooncco/is-A-relationship-teller',
        desc: '[Undergraduate] NLP for Korean words. Returns whether a given {Entity, Concept} pair is in "is-a" relationship or not.',
      },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: <WrenchScrewdriverIcon />,
    items: [
      {
        title: 'Kakaotalk Chat Exporter',
        thumbnail: '/img/portfolio/kakaotalkchatexporter.png',
        demoUrl: '',
        githubUrl: 'https://github.com/jooncco/kakaotalk-chat-exporter',
        desc: 'Simple macro for Kakaotalk messenger app. Exports contents of a chat Uses OpenCV library.',
      },
      {
        title: 'CP Snippet Java',
        thumbnail: '/img/portfolio/cpsnippetjava.png',
        demoUrl: '',
        githubUrl: 'https://github.com/jooncco/cp-snippet-java',
        desc: 'Json for java code snippets. Extremly useful when competitive programming.',
      },
      {
        title: 'CP Stamper C++',
        thumbnail: '/img/portfolio/cpstampercpp.png',
        demoUrl: '',
        githubUrl: 'https://github.com/jooncco/cp-stamper-cpp',
        desc: 'Simple comment writer. The comment generated contains author and timestamp.',
      },
    ],
  },
];

function Portfolio() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="md:text-[16px] text-[12px] text-gray-700 dark:text-gray-500 uppercase tracking-wider">
          Art gallery
        </p>
        <h1 className="text-text font-black md:text-[50px] sm:text-[42px] text-[30px]">
          Portfolio
        </h1>
      </motion.div>

      <motion.div className="mt-8" variants={fadeIn('left', 'tween', 0, 1)}>
        <Tabs value={tabs[0].id}>
          <TabsHeader
            indicatorProps={{
              className: 'rounded-lg bg-primary/70 shadow-inner font-extrabold',
            }}
            className="bg-slate-200 dark:bg-zinc-950/40 shadow-xl">
            {tabs.map(({id, label, icon, items}) => (
              <Tab
                key={id}
                value={id}
                className={`rounded-lg font-bold text-text hover:bg-primary/40 hover:shadow-inner ${
                  items.length === 0 ? 'hidden' : ''
                }`}>
                <div className="flex gap-x-2 items-center">
                  <div className="hidden sm:block">{icon}</div>
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: {y: 250},
              mount: {y: 0},
              unmount: {y: 250},
            }}
            className="rounded-lg bg-slate-200 dark:bg-stone-950 shadow-inner">
            {tabs.map(({id, items}) => (
              <TabPanel
                key={id}
                value={id}
                className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map(({title, thumbnail, githubUrl, demoUrl, desc}) => (
                  <PortfolioCard
                    key={title}
                    title={title}
                    thumbnail={thumbnail}
                    githubUrl={githubUrl}
                    demoUrl={demoUrl}
                    desc={desc}
                  />
                ))}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </motion.div>
    </>
  );
}

export default SectionWrapper(Portfolio, 'portfolio');
