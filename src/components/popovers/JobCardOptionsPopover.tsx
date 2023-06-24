import * as Popover from '@radix-ui/react-popover';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { AiOutlineMore } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';

interface JobCardOptionsPopoverProps {
  onDeleteHandle: () => void;
  className?: string;
}

const JobCardOptionsPopover: React.FC<JobCardOptionsPopoverProps> = ({
  onDeleteHandle,
  className,
}) => {
  const [dDOpen, setDDOpen] = useState(false);

  return (
    <Popover.Root open={dDOpen} onOpenChange={setDDOpen}>
      <Popover.Trigger asChild>
        <motion.div
          whileFocus={{ scaleY: 1.2 }}
          whileHover={{ scaleY: 1.2 }}
          className={twMerge(
            'absolute top-2 right-2 cursor-pointer',
            className
          )}
        >
          <AiOutlineMore className='w-5 h-5' />
        </motion.div>
      </Popover.Trigger>
      <AnimatePresence>
        {dDOpen && (
          <Popover.Portal forceMount>
            <Popover.Content asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='bg-white w-52 py-[2px] rounded-lg shadow-lg'
              >
                <motion.button
                  onClick={() => {
                    onDeleteHandle();
                    setDDOpen(false);
                  }}
                  type='button'
                  className='text-red-500 text-sm w-full flex gap-[12px]  items-center p-2  focus:outline-none rounded-lg hover:bg-[#f5f5f5]'
                >
                  <RiDeleteBin6Line />
                  <p>Delete</p>
                </motion.button>
              </motion.div>
            </Popover.Content>
          </Popover.Portal>
        )}
      </AnimatePresence>
    </Popover.Root>
  );
};

export default JobCardOptionsPopover;
