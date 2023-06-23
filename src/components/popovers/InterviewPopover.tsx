import * as Popover from '@radix-ui/react-popover';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { IoMdChatbubbles } from 'react-icons/io';
import { twMerge } from 'tailwind-merge';

const InterviewPopover = ({ percentage }: { percentage: number }) => {
  const [open, setOpen] = useState(false);

  // TODO make dropdown content

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          className={twMerge(
            'text-sm text-[#9E9E9E] border-dashed border rounded-full p-2 ',
            percentage > 0 &&
              'bg-red-100 text-xs flex items-center text-red-600 gap-[8px] rounded-md'
          )}
        >
          <IoMdChatbubbles />
          {percentage > 0 && <p>{percentage}%</p>}
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
              >
                {percentage === 0 && (
                  <div className='bg-white p-[0.625rem] rounded-lg focus:outline-none flex flex-col gap-[0.625rem] border border-slate-300 shadow-lg'>
                    <div className='flex justify-between items-center'>
                      <p className='text-[#212121]'>Mock Interview</p>
                      <motion.button
                        whileHover={{ rotate: 90 }}
                        whileFocus={{ rotate: 90 }}
                        onClick={() => setOpen(false)}
                      >
                        <GrClose className='w-4 h-4 ' />
                      </motion.button>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                      <input
                        type='text'
                        className='py-[0.875rem]
                         pl-[0.44rem] text-sm rounded-lg border focus:outline-none'
                        placeholder='Mock Interview Name'
                      />
                      <motion.button className=' bg-purple-500 py-[0.875rem] font-bold text-sm text-white rounded-lg'>
                        Create New
                      </motion.button>
                    </div>
                  </div>
                )}

                {percentage > 0 && (
                  <div className='bg-[url(/popover-bg.jpeg)] backdrop-blur-md w-56 h-72 bg-cover bg-center rounded-lg shadow-lg flex flex-col'>
                    <div className='flex-[4] bg-black/50 text-white rounded-t-lg grid place-items-center'>
                      <BsPlayCircle className='w-10 h-10' />
                    </div>
                    <div className='flex-[3] text-sm bg-white rounded-b-lg flex flex-col'>
                      <div className='p-[0.625rem] flex-1'>
                        <p className='text-[#212121]'>UI/UX Designer</p>
                        <p className='text-green-600'>25%</p>
                      </div>

                      <div className='bg-gray-200 p-[0.625rem]'>
                        <button className='bg-purple-500 font-bold text-sm text-white w-full py-[6px] rounded-lg'>
                          Give Mock Interview
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </Popover.Content>
          </Popover.Portal>
        )}
      </AnimatePresence>
    </Popover.Root>
  );
};

export default InterviewPopover;
