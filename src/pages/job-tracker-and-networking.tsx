import * as Tabs from '@radix-ui/react-tabs';
import TabTriggers from '../components/OuterTabs/TabTriggers';
import TabContent from '@/components/OuterTabs/TabContent';
import NewJobDialog from '@/components/dialogs/NewJobDialog';
import Head from 'next/head';
import { useEffect } from 'react';
import { data } from '@/data/initialData';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setJobsToRedux } from '@/redux/slices/jobs/jobsSlice';
import { Job } from '@/types';
export default function JobTrackerAndNetworking() {
  const dispatch = useAppDispatch();
  const { jobs } = useAppSelector((state) => state.jobs);

  useEffect(() => {
    // if there is nothing in cache, create
    if (!localStorage.getItem('jobs')) {
      localStorage.setItem('jobs', JSON.stringify(data));
    }

    // else use it

    const jobsFromCache = JSON.parse(localStorage.getItem('jobs')!) as Job[];

    dispatch(setJobsToRedux({ jobs: jobsFromCache }));
  }, [dispatch]);

  console.log(jobs);

  return (
    <div className=''>
      <Head>
        <title>Job Tracker and Networking - NxtJob.ai</title>
      </Head>
      <>
        <Tabs.Root
          defaultValue='boards'
          className='grid grid-flow-col grid-cols-[208px_calc(100vw_-_228px)] gap-[1.25rem]'
        >
          <TabTriggers />
          <TabContent />
        </Tabs.Root>
      </>
      <NewJobDialog />
    </div>
  );
}
