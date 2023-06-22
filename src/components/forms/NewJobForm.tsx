import { useAppDispatch } from '@/redux/hooks';
import { set } from '@/redux/slices/dialogs/newJobDialogSlice';
import React, { useState } from 'react';
import * as Select from '@radix-ui/react-select';
import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';

const NewJobForm = () => {
  const dispatch = useAppDispatch();

  return (
    <form
      className='flex flex-col gap-[0.625rem]'
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className='focus:outline-none  h-full rounded-lg px-[1.25rem] py-[12px] border w-full'
        placeholder='Company Name'
      />
      <input
        className='focus:outline-none  h-full rounded-lg px-[1.25rem] py-[12px] border w-full'
        placeholder='Job Title'
      />
      <input
        className='focus:outline-none  h-full rounded-lg px-[1.25rem] py-[12px] border w-full'
        placeholder='Job Url'
      />

      <Select.Root>
        <Select.Trigger className='flex justify-between px-[1.25rem] py-[12px] border rounded-lg items-center  text-[#5a5a5a]'>
          <Select.Value placeholder='Select status' />
          <Select.Icon>
            <FiChevronDown />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content asChild>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='bg-white top-14 left-0 absolute  p-[0.625rem] w-4/5 shadow-lg rounded-lg border'
            >
              <Select.Viewport>
                <Select.Group className='flex flex-col gap-[0.625rem] items-start'>
                  <CustomSelectItem textValue='Saved' value='saved' />
                  <CustomSelectItem
                    textValue='Interviewing'
                    value='interviewing'
                  />
                </Select.Group>
              </Select.Viewport>
            </motion.div>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      <div className='flex mt-10 gap-[0.625rem]'>
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

const CustomSelectItem = ({
  value,
  textValue,
}: {
  value: string;
  textValue: string;
}) => {
  return (
    <Select.Item
      className={
        'cursor-pointer w-full p-[0.625rem] data-[state=unchecked]:hover:bg-[#f5f5f5] data-[state=checked]:bg-purple-600 data-[state=checked]:text-white rounded-lg duration-200; text-sm'
      }
      value={value}
    >
      <Select.ItemText>{textValue}</Select.ItemText>
    </Select.Item>
  );
};

export default NewJobForm;
