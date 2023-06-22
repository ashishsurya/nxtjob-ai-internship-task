import * as Tabs from '@radix-ui/react-tabs';
import TabTriggers from '../components/OuterTabs/TabTriggers';
import TabContent from '@/components/OuterTabs/TabContent';
import NewJobDialog from '@/components/dialogs/NewJobDialog';
import Head from 'next/head';
import { useEffect } from 'react';
export default function JobTrackerAndNetworking() {
  useEffect(() => {
    const jobsFromLocalStorage = localStorage.getItem('jobs');
    if (!jobsFromLocalStorage) {
      
    }
  }, []);

  return (
    <div className=''>
      <Head>
        <title>Job Tracker and Networking - NxtJob.ai</title>
      </Head>
      <>
        <Tabs.Root defaultValue='boards' className='flex gap-[20px]'>
          <TabTriggers />
          <TabContent />
        </Tabs.Root>
      </>
      <NewJobDialog />
    </div>
  );
}
