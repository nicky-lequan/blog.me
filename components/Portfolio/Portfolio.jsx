import SectionWrapper from '../hoc/SectionWrapper';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@/providers/AppProvider';
import PortfolioCard from './PortfolioCard';
import {TABS} from './constants';

function Portfolio() {
  return (
    <>
      <p className="md:text-[1rem] text-[0.75rem] text-gray-700 dark:text-gray-500 uppercase tracking-wider">
        Art gallery
      </p>
      <h1 className="text-text font-black md:text-[3.125rem] sm:text-[2.625rem] text-[1.875rem]">
        Portfolio
      </h1>

      <div className="mt-8">
        <Tabs value={TABS[0].id}>
          <TabsHeader
            indicatorProps={{
              className: 'rounded-lg bg-primary/70 shadow-inner font-extrabold',
            }}
            className="bg-slate-200 dark:bg-zinc-950/40 shadow-xl">
            {TABS.map(({id, label, icon, items}) => (
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
            {TABS.map(({id, items}) => (
              <TabPanel
                key={id}
                value={id}
                className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map(
                  ({title, thumbnailSrc, githubUrl, demoUrl, desc}) => (
                    <PortfolioCard
                      key={title}
                      title={title}
                      thumbnailSrc={thumbnailSrc}
                      githubUrl={githubUrl}
                      demoUrl={demoUrl}
                      desc={desc}
                    />
                  )
                )}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
}

export default SectionWrapper(Portfolio, 'portfolio');
