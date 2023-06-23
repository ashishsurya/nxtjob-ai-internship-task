import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { changeStatusOfJob } from '@/redux/slices/jobs/jobsSlice';
import type { Job } from '@/types';
import { useMemo } from 'react';
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from 'react-beautiful-dnd';
import { twMerge } from 'tailwind-merge';
import JobStageColumn from './JobColumn';

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
    <DragDropContext onDragEnd={handleDragEnd}>
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
    </DragDropContext>
  );
};

export default JobBoards;
