import { Job } from '@/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Draggable } from 'react-beautiful-dnd';
import { BiBuildingHouse } from 'react-icons/bi';
import { RxDragHandleDots2 } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';
import CoverLetterPopover from '../popovers/CoverLetterPopover';
import DocumentMatchPopover from '../popovers/DocumentMatchPopover';
import InterviewPopover from '../popovers/InterviewPopover';
import JobCardOptionsPopover from '../popovers/JobCardOptionsPopover';
import { useAppDispatch } from '@/redux/hooks';
import { openJobViewDialog } from '@/redux/slices/dialogs/jobViewDiologSlice';

interface JobCardProps {
  job: Job;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  const dispatch = useAppDispatch();
  return (
    <Draggable draggableId={job.id} index={index}>
      {(provided, snapshot) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          whileDrag={{ scale: 1.2 }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={twMerge(
            'shadow-sm w-[275px] mr-auto p-[0.625rem] bg-white rounded-lg relative flex flex-col gap-[0.625rem] pl-[2rem] ',
            snapshot.isDragging && 'shadow-lg '
          )}
        >
          <div className='absolute left-2' {...provided.dragHandleProps}>
            <RxDragHandleDots2 className='text-slate-600' />
          </div>
          <JobCardOptionsPopover onDeleteHandle={() => null} />
          {job?.isSavedByLoop && (
            <div className='flex gap-[0.625rem] items-center'>
              <p className='text-sky-400 text-xs font-bold'>Saved by Loop</p>
              <p className='text-[0.625rem]'>Expires in 2 days</p>
            </div>
          )}

          <div className='flex  gap-[0.625rem] items-center'>
            <div>
              <Image
                src={'/job-card-logo.png'}
                alt='company-logo'
                width={24}
                height={24}
              />
            </div>

            <div
              className='flex flex-col cursor-pointer'
              onClick={() => dispatch(openJobViewDialog())}
            >
              <p className='text-sm'>UI/UX Designer</p>
              <div className='flex gap-[0.625rem] items-center'>
                <BiBuildingHouse className='w-4 h-3' />
                <p className='text-xs text-slate-400'>Ajmera Infotech Inc.</p>
              </div>
            </div>
          </div>

          <div className='flex items-center gap-[0.625rem]'>
            <DocumentMatchPopover percentage={75} />
            <CoverLetterPopover />
            <InterviewPopover percentage={job?.mockInterViewPercentage || 0} />
          </div>
        </motion.div>
      )}
    </Draggable>
  );
};

export default JobCard;
