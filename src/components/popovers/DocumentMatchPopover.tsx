import { IoDocumentAttach } from 'react-icons/io5';
import * as PopOver from '@radix-ui/react-popover';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const DocumentMatchPopover = ({ percentage }: { percentage: number }) => {
  const [open, setOpen] = useState(false);
  // TODO make dropdown content
  return (
    <PopOver.Root open={open} onOpenChange={setOpen}>
      <PopOver.Trigger asChild>
        <button className='text-green-600 flex text-xs cursor-pointer items-center gap-[8px] px-[5px] py-[8px] bg-green-100 rounded-md focus:outline-green-300'>
          <IoDocumentAttach />
          <p>{percentage}%</p>
        </button>
      </PopOver.Trigger>

      <AnimatePresence>
        {open && (
          <PopOver.Portal forceMount>
            <PopOver.Content asChild sideOffset={5}>
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
            </PopOver.Content>
          </PopOver.Portal>
        )}
      </AnimatePresence>
    </PopOver.Root>
  );
};

export default DocumentMatchPopover;
