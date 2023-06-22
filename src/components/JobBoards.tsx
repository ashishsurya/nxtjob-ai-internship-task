import { twMerge } from 'tailwind-merge';
import JobCardOptionsDropDown from './drop-downs/JobCardOptionsDropDown';
import { motion } from 'framer-motion';
import { Job } from '@/types';
const JobBoards = () => {
  return (
    <div className=' h-[70vh] w-auto  grid grid-flow-col pl-[20px]  gap-[20px] overflow-scroll '>
      <JobStageColumn title='Saved' />
      <JobStageColumn title='Applied' />
      <JobStageColumn title='Interviewing' />
      <JobStageColumn title='Offer' />
      <JobStageColumn title='Rejected' className='bg-purple-200' />
      <button className='w-80 bg-sky-500/90 h-fit text-white text-center py-[20px] rounded-lg text-xl'>
        + Add New List
      </button>
    </div>
  );
};

interface JobStageColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  jobs? : Job[]
}

const JobStageColumn: React.FC<JobStageColumnProps> = ({
  title,
  className,
}) => {
  return (
    <div
      className={twMerge(
        'h-full flex flex-col gap-[20px] bg-stone-200/50  rounded-lg w-80 p-[20px]',
        className
      )}
    >
      <div className='flex justify-between items-center '>
        <h3 className='font-semibold text-lg'>{title}</h3>
        <p className='text-[#212121] text-sm'>4 Jobs</p>
      </div>
      <div className='overflow-scroll space-y-[20px] '>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};

interface JobCardProps {
  job?: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className='shadow-sm w-[275px] mr-auto p-[10px] bg-white rounded-lg relative'>
      <JobCardOptionsDropDown onDeleteHandle={() => null} />
    </div>
  );
};

export default JobBoards;
