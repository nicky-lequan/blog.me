'use client';

import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {SectionWrapper} from './hoc';
import {fadeIn, textVariant} from '@/utils/motion';
import {styles} from '@/app/styles';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
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
        title: 'jooncco.dev',
        thumbnail: '/img/portfolio/jooncco.dev-fe.png',
        linkUrl: 'https://github.com/jooncco/jooncco.dev-fe',
        tags: ['blog', 'next.js', 'tailwindcss', 'material-tailwind'],
      },
      {
        title: 'NFT Marketplace',
        thumbnail: '/img/portfolio/nftmarketplace.png',
        linkUrl: 'https://naemo.io',
        tags: [
          'marketplace',
          'react.js',
          'mobx',
          'nft',
          'blockchain',
          'ethereum',
          'solana',
        ],
      },
      {
        title: 'Spring API Server Template',
        thumbnail: '/img/portfolio/springapiservertemplate.png',
        linkUrl: 'https://github.com/jooncco/spring-api-server-template',
        tags: [
          'api-server',
          'template',
          'spring-boot',
          'java',
          'flyway',
          'mybatis',
        ],
      },
      {
        title: 'jooncco.com',
        thumbnail: '/img/portfolio/jooncco.com.png',
        linkUrl: 'https://github.com/jooncco/jooncco.dev-fe',
        tags: [
          'deprecated',
          'blog',
          'github-pages',
          'jekyll',
          'html',
          'css',
          'javascript',
        ],
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
        linkUrl: 'https://github.com/jooncco/bitcoin-price-predictor',
        tags: ['ai', 'python', 'lstm-rnn', 'linear-regression'],
      },
      {
        title: 'Coindrop Game AI Agent',
        thumbnail: '/img/portfolio/coindropgameaiagent.png',
        linkUrl: 'https://github.com/jooncco/coindrop-game-ai-agent',
        tags: ['ai', 'python', 'reinforcement-learning', 'q-learning'],
      },
      {
        title: '"is a" Relationship Teller',
        thumbnail: '/img/portfolio/isarelationshipteller.png',
        linkUrl: 'https://github.com/jooncco/is-A-relationship-teller',
        tags: ['ai', 'python', 'nlp', 'fast-text'],
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
        linkUrl: 'https://github.com/jooncco/kakaotalk-chat-exporter',
        tags: ['scrapper', 'python', 'open-cv', 'macro', 'automation'],
      },
      {
        title: 'CP Snippet Java',
        thumbnail: '/img/portfolio/cpsnippetjava.png',
        linkUrl: 'https://github.com/jooncco/cp-snippet-java',
        tags: ['snippets', 'java', 'competitive-programming', 'vs-code'],
      },
      {
        title: 'CP Stamper C++',
        thumbnail: '/img/portfolio/cpstampercpp.png',
        linkUrl: 'https://github.com/jooncco/cp-stamper-cpp',
        tags: ['comment-writer', 'cpp', 'competitive-programming'],
      },
    ],
  },
];

const Portfolio = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My works</p>
      <h1 className={styles.sectionHeadText}>Portfolio</h1>
    </motion.div>

    <motion.div className="mt-8" variants={fadeIn('left', 'tween', 0, 1)}>
      <Tabs value={tabs[0].id} className="rounded-lg">
        <TabsHeader
          indicatorProps={{
            className: 'rounded-lg bg-primary/40 shadow-inner',
          }}
          className="bg-neutral bg-base/60">
          {tabs.map(({id, label, icon, items}) => (
            <Tab
              key={id}
              value={id}
              className={`rounded-lg font-semibold text-text hover:bg-neutral2/80 hover:shadow-inner ${
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
          className="rounded-lg bg-primary/5 shadow-inner">
          {tabs.map(({id, items}) => (
            <TabPanel
              key={id}
              value={id}
              className="p-6 flex flex-wrap gap-x-6 gap-y-4">
              {items.map(({title, thumbnail, linkUrl, tags}, index) => (
                <PortfolioCard
                  key={index}
                  title={title}
                  thumbnail={thumbnail}
                  linkUrl={linkUrl}
                  tags={tags}
                />
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </motion.div>
  </>
);

export default SectionWrapper(Portfolio, 'portfolio');
