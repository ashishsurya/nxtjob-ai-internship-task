import { motion } from 'framer-motion';
import { useState } from 'react';
import { MdModeEdit } from 'react-icons/md';
import * as Tabs from '@radix-ui/react-tabs';
import { FormattedText } from './Tabs/Content';

const JobDescription = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Tabs.Content value='job-description' asChild>
      <div className='p-5 flex flex-col text-[#212121]  overflow-scroll'>
        <div className='flex justify-between  h-8 '>
          <p className='text-lg font-bold text-[#212121]'>Description</p>
          {isEditing ? (
            <div className='space-x-8 '>
              <button
                onClick={() => setIsEditing(false)}
                className='text-primary-3'
              >
                Cancel
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className='text-white bg-primary-3 px-8 py-2 font-bold rounded-lg'
              >
                Save
              </button>
            </div>
          ) : (
            <motion.button
              whileFocus={{ scale: 1.2 }}
              whileHover={{ scale: 1.2 }}
              className='text-purple-500'
              onClick={() => setIsEditing(true)}
            >
              <MdModeEdit className='w-5 h-5' />
            </motion.button>
          )}
        </div>

        <FormattedText isEditing={isEditing} />
      </div>
    </Tabs.Content>
  );
};


export default JobDescription