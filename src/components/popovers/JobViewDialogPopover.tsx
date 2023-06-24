import React, { FC, PropsWithChildren, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { AnimatePresence, motion } from 'framer-motion';

interface JobViewDialogPopoverProps {
  children: React.ReactNode;
}

const JobViewDialogPopover: FC<JobViewDialogPopoverProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>{children}</Popover.Trigger>

      <AnimatePresence>
        {open && (
          <Popover.Portal forceMount>
            <Popover.Content asChild sideOffset={5}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className=' top-1 focus:outline-none shadow-md'
              >
                <div className='border-2 border-gray-200 rounded-lg bg-white focus:outline-none'>
                  <div className='p-[0.625rem]'>
                    <p className='text-sm text-[#212121]'>Gopal_Sapara_V1</p>
                    <p className='text-xs text-green-400 mt-1'>
                      75% match with job description
                    </p>
                  </div>

                  <div className='bg-gray-200 p-[0.625rem] rounded-b-lg'>
                    <button className='bg-purple-500 font-bold text-sm text-white w-full py-[6px] rounded-lg'>
                      Customize it
                    </button>
                  </div>
                </div>
              </motion.div>
            </Popover.Content>
          </Popover.Portal>
        )}
      </AnimatePresence>
    </Popover.Root>
  );
};

export default JobViewDialogPopover;
