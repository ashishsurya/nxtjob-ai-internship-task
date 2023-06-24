import { FC } from 'react';
import JobViewTimeLineCard from './JobViewTimeLineCard';

interface JobViewTimeLineProps {}

const JobViewTimeLine: FC<JobViewTimeLineProps> = ({}) => {
  return (
    <div className='mr-10 bg-[#F9F8F8] rounded-lg h-fit p-5'>
      <h3 className='text-base font-bold text-[#5a5a5a]'>Time Line</h3>
      <div className='flex flex-col mt-5 [&>*:last-child]:border-none'>
        <JobViewTimeLineCard />
        <JobViewTimeLineCard />
        <JobViewTimeLineCard />
      </div>
    </div>
  );
};

export default JobViewTimeLine;
