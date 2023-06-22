import { twMerge } from 'tailwind-merge';
import JobCardOptionsDropDown from './drop-downs/JobCardOptionsDropDown';
import { motion } from 'framer-motion';
import type { Job } from '@/types';
import { useAppSelector } from '@/redux/hooks';
import { useMemo } from 'react';
import Image from 'next/image';
import { BiBuildingHouse } from 'react-icons/bi';
import DocumentMatchDropDown from './drop-downs/DocumentMatchDropDown';
import CoverLetterDropDown from './drop-downs/CoverLetterDropDown';
import InterviewDropDown from './drop-downs/InterviewDropDown';

const JobBoards = () => {
  const { jobs } = useAppSelector((state) => state.jobs);
  const { status_arr } = useAppSelector((state) => state.status);

  // @ashishsurya
  const getJobsByColumn = (jobs: Job[], status_arr: string[]) => {
    const returnValue: { id: string; title: string; jobs: Job[] }[] = [];

    status_arr.forEach((status) => {
      const jobByStatus = jobs.filter((job) => job.status === status);
      // @ts-ignore
      returnValue.push({ id: status, title: status, jobs: jobByStatus });
    });

    return returnValue;
  };

  const jobsByStatus = useMemo(
    () => getJobsByColumn(jobs, status_arr),
    [jobs, status_arr]
  );

  return (
    <div className=' h-[70vh] w-full  grid grid-flow-col pl-[1.25rem]  gap-[1.25rem] overflow-scroll '>
      {jobsByStatus.map((jobColumn) => (
        <JobStageColumn
          key={jobColumn.id}
          title={jobColumn.title}
          jobs={jobColumn.jobs}
          className={twMerge(
            jobColumn.title === 'rejected' && 'bg-purple-200/75'
          )}
        />
      ))}
      <button className='w-80 bg-sky-500/90 h-fit text-white text-center py-[1.25rem] rounded-lg text-xl mr-[1.25rem]'>
        + Add New List
      </button>
    </div>
  );
};

interface JobStageColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  jobs: Job[];
}

const JobStageColumn: React.FC<JobStageColumnProps> = ({
  title,
  className,
  jobs,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      className={twMerge(
        'h-full flex flex-col gap-[1.25rem] bg-stone-200/50  rounded-lg w-80 p-[1.25rem] overflow-hidden',
        className
      )}
    >
      <div className='flex justify-between items-center '>
        <h3 className='font-semibold text-lg capitalize'>{title}</h3>
        <p className='text-[#212121] text-sm'>{jobs.length} Jobs</p>
      </div>
      <div className='overflow-scroll space-y-[1.25rem] h-full pt-[0.625rem]'>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </motion.div>
  );
};

interface JobCardProps {
  job?: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='shadow-sm w-[275px] mr-auto p-[0.625rem] bg-white rounded-lg relative flex flex-col gap-[0.625rem]'
    >
      <JobCardOptionsDropDown onDeleteHandle={() => null} />
      {job?.isSavedByLoop && (
        <div className='flex gap-[0.625rem] items-center'>
          <p className='text-sky-400 text-xs font-bold'>Saved by Loop</p>
          <p className='text-[0.625rem]'>Expires in 2 days</p>
        </div>
      )}

      <div className='flex  gap-[0.625rem] items-center'>
        <div>
          <Image
            src={'/company-logo.svg'}
            alt='company-logo'
            width={24}
            height={24}
          />
        </div>

        <div className='flex flex-col'>
          <p className='text-sm'>UI/UX Designer</p>
          <div className='flex gap-[0.625rem] items-center'>
            <BiBuildingHouse className='w-4 h-3' />
            <p className='text-xs text-slate-400'>Ajmera Infotech Inc.</p>
          </div>
        </div>
      </div>

      <div className='flex items-center gap-[0.625rem]'>
        <DocumentMatchDropDown percentage={75} />
        <CoverLetterDropDown />
        <InterviewDropDown percentage={job?.mockInterViewPercentage || 0} />
      </div>
    </motion.div>
  );
};

export default JobBoards;
