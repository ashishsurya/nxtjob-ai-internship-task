import { IoDocumentTextSharp } from 'react-icons/io5';
import * as Popover from '@radix-ui/react-popover';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GrClose } from 'react-icons/gr';

const CoverLetterPopover = () => {
  const [open, setOpen] = useState(false);

  // TODO make dropdown content

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button className='text-sm text-[#9E9E9E] border-dashed border rounded-full p-2 '>
          <IoDocumentTextSharp />
        </button>
      </Popover.Trigger>

      <AnimatePresence>
        {open && (
          <Popover.Portal forceMount>
            <Popover.Content asChild sideOffset={5}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className=' top-1 focus:outline-none shadow-md w-80 '
              >
                <div className='bg-white p-[0.625rem] rounded-lg focus:outline-none flex flex-col gap-[0.625rem] border border-slate-300'>
                  <div className='flex justify-between items-center'>
                    <p>Cover Letter</p>
                    <Popover.Close asChild>
                      <motion.button
                        whileHover={{ rotate: 90 }}
                        whileFocus={{ rotate: 90 }}
                      >
                        <GrClose className='w-4 h-4 ' />
                      </motion.button>
                    </Popover.Close>
                  </div>
                  <div className='grid grid-cols-2 gap-2'>
                    <input
                      type='text'
                      className='py-[0.875rem]
                         pl-[0.44rem] text-sm rounded-lg border focus:outline-none'
                      placeholder='Cover Letter Name'
                    />
                    <motion.button className=' bg-purple-500 py-[0.875rem] font-bold text-sm text-white rounded-lg'>
                      Create New
                    </motion.button>
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

export default CoverLetterPopover;
