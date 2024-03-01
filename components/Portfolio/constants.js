import {
  BlockchainIcon,
  BrainIcon,
  CloudIcon,
  GlobeIcon,
  WrenchScrewdriverIcon,
} from '../Icons';

export const TABS = [
  {
    id: 'web',
    label: 'Web',
    icon: <GlobeIcon />,
    items: [
      {
        title: 'Spring Boot API Server Template',
        thumbnailSrc: '/assets/images/portfolio/springapiservertemplate.png',
        demoUrl: '',
        githubUrl: 'https://github.com/jooncco/spring-api-server-template',
        desc: 'Spring Boot api server template. Provides example of a production-level REST APIs for productivity boost🔥.',
      },
      {
        title: 'about-jooncco',
        thumbnailSrc: '/assets/images/portfolio/about-jooncco.png',
        demoUrl: 'https://jooncco.me',
        githubUrl: 'https://github.com/jooncco/about-jooncco',
        desc: 'A portfolio page made with Next.js 14, tailwindcss, and 💜. Fork this repo for your own portfolio page.',
      },
      {
        title: 'jooncco.github.io',
        thumbnailSrc: '/assets/images/portfolio/jooncco.github.io.png',
        demoUrl: 'https://jooncco.github.io',
        githubUrl: 'https://github.com/jooncco/jooncco.github.io',
        desc: "A dev blog🤓 based on github pages and jekyll template 'Minimal Mistakes'.",
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
        thumbnailSrc: '/assets/images/portfolio/bitcoinpricepredictor.png',
        demoUrl: '',
        githubUrl: 'https://github.com/jooncco/bitcoin-price-predictor',
        desc: '[Undergraduate] Bitcoin price prediction with market indicators and google trend using regression models & LSTM RNN',
      },
      {
        title: 'Coindrop Game AI Agent',
        thumbnailSrc: '/assets/images/portfolio/coindropgameaiagent.png',
        demoUrl: '',
        githubUrl: 'https://github.com/jooncco/coindrop-game-ai-agent',
        desc: '[Undergraduate] Reflex agent trained with reinforcement learning(Q-learning). This agent plays coin drop game implemented using pygame module.',
      },
      {
        title: '"is a" Relationship Teller',
        thumbnailSrc: '/assets/images/portfolio/isarelationshipteller.png',
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
        thumbnailSrc: '/assets/images/portfolio/kakaotalkchatexporter.png',
        demoUrl: '',
        githubUrl: 'https://github.com/jooncco/kakaotalk-chat-exporter',
        desc: 'Simple macro for Kakaotalk messenger app built with OpenCV library. Periodically exports content of a chat room.',
      },
      {
        title: 'CP Snippet Java',
        thumbnailSrc: '/assets/images/portfolio/cpsnippetjava.png',
        demoUrl: '',
        githubUrl: 'https://github.com/jooncco/cp-snippet-java',
        desc: 'Json config file for java code snippets. Extremly useful when competitive programming.',
      },
      {
        title: 'CP Stamper C++',
        thumbnailSrc: '/assets/images/portfolio/cpstampercpp.png',
        demoUrl: '',
        githubUrl: 'https://github.com/jooncco/cp-stamper-cpp',
        desc: 'Simple comment writer. The comment generated contains author and timestamp.',
      },
    ],
  },
];
