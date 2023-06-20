import { useAppDispatch } from '@/redux/hooks';
import { set } from '@/redux/slices/dialogs/newJobDialogSlice';
import React from 'react';

const NewJobForm = () => {
  const dispatch = useAppDispatch();
  return (
    <form
      className='flex flex-col gap-[10px]'
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className='focus:outline-none  h-full rounded-lg px-[20px] py-[12px] border w-full'
        placeholder='Company Name'
      />
      <input
        className='focus:outline-none  h-full rounded-lg px-[20px] py-[12px] border w-full'
        placeholder='Job Title'
      />
      <input
        className='focus:outline-none  h-full rounded-lg px-[20px] py-[12px] border w-full'
        placeholder='Job Url'
      />
      <select className='focus:outline-none  h-full rounded-lg px-[20px] py-[12px] border w-full'>
        <option value='saved'>Saved</option>
      </select>

      <div className='flex mt-10 gap-[10px]'>
        <button
          className='flex-1 py-4  rounded-lg border'
          onClick={() => dispatch(set(false))}
        >
          Cancel
        </button>
        <button className='flex-1 py-4  rounded-lg bg-primary-1 font-semibold text-white'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewJobForm;
