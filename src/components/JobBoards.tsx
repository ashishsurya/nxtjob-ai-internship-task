import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import type { Job } from '@/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
} from 'react-beautiful-dnd';
import { BiBuildingHouse } from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';
import CoverLetterDropDown from './drop-downs/CoverLetterDropDown';
import DocumentMatchDropDown from './drop-downs/DocumentMatchDropDown';
import InterviewDropDown from './drop-downs/InterviewDropDown';
import JobCardOptionsDropDown from './drop-downs/JobCardOptionsDropDown';
import { changeStatusOfJob } from '@/redux/slices/jobs/jobsSlice';

const JobBoards = () => {
  const { jobs } = useAppSelector((state) => state.jobs);
  const { status_arr } = useAppSelector((state) => state.status);

  const dispatch = useAppDispatch();

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
  /*
  handler for dragEnd 
  */
  const handleDragEnd: OnDragEndResponder = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      return;
    }

    dispatch(
      changeStatusOfJob({
        changedStatus: destination.droppableId,
        intialStatus: source.droppableId,
        jobId: draggableId,
        status_arr,
      })
    );
  };

  return (
    <div className=' h-[70vh] w-full  grid grid-flow-col pl-[1.25rem]  gap-[1.25rem] overflow-scroll '>
      <DragDropContext onDragEnd={handleDragEnd}>
        {jobsByStatus.map((jobColumn) => (
          <JobStageColumn
            key={jobColumn.id}
            title={jobColumn.title}
            jobs={jobColumn.jobs}
            className={twMerge(
              jobColumn.title === 'rejected' && 'bg-red-300/75'
            )}
          />
        ))}
      </DragDropContext>
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
      <Droppable droppableId={title}>
        {(provided, snapshot) => (
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

interface JobCardProps {
  job: Job;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  return (
    <Draggable draggableId={job.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <motion.div
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className={twMerge(
              'shadow-sm w-[275px] mr-auto p-[0.625rem] bg-white rounded-lg relative flex flex-col gap-[0.625rem]',
              snapshot.isDragging && 'bg-stone-200'
            )}
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
              <InterviewDropDown
                percentage={job?.mockInterViewPercentage || 0}
              />
            </div>
          </motion.div>
        </div>
      )}
    </Draggable>
  );
};

export default JobBoards;
