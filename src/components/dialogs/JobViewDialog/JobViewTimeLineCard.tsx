import { FC } from 'react';

interface JobViewTimeLineCardProps {}

const JobViewTimeLineCard: FC<JobViewTimeLineCardProps> = ({}) => {
  return (
    <div className='pl-5 border-dashed border-l gap-[0.625rem] border-blue-400 flex flex-col pb-8 relative'>
      <div className='absolute w-4 h-4 bg-primary-3 -left-2 rounded-full'></div>

      <p className='text-[0.625rem] text-[#9E9E9E] '>Today 1:12 PM</p>
      <div className='bg-[#E4F2FF] p-[0.625rem] rounded-[4px] flex flex-col gap-[2px]'>
        <p className='text-xs text-[#5A5A5A] font-bold'>Moved to Saved</p>
        <p className='text-[0.625rem]'>
          You moved this job from Applied to saved
        </p>
      </div>
    </div>
  );
};

export default JobViewTimeLineCard;
