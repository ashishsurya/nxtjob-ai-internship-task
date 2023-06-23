import { Job } from '@/types';
import { motion } from 'framer-motion';
import { Droppable } from 'react-beautiful-dnd';
import { twMerge } from 'tailwind-merge';
import JobCard from './JobCard';

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

      <Droppable droppableId={title}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={twMerge(
              'overflow-scroll space-y-[1.25rem] h-full pt-[0.625rem]'
            )}
          >
            {jobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </motion.div>
  );
};

export default JobStageColumn;
