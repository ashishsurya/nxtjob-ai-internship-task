/* eslint-disable react/no-unescaped-entities */
import { FC, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { AnimatePresence, motion } from 'framer-motion';
import { BsCheckCircle } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import { IoIosCopy } from 'react-icons/io';
import {FaLinkedinIn} from "react-icons/fa"

interface NPCStatusPopoverProps {
  children: React.ReactNode;
}

const NPCStatusPopover: FC<NPCStatusPopoverProps> = ({ children }) => {
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
                className='px-5 py-4 w-56 bg-white text-sm shadow-md rounded-lg space-y-5'
              >
                <div className='flex gap-[0.625rem] items-center'>
                  <div className='bg-green-100 w-fit rounded-full'>
                    <BsCheckCircle className='w-4 h-4 text-green-600' />
                  </div>
                  <p>Like 1 Post</p>
                </div>
                <div className='flex gap-[0.625rem] items-center'>
                  <div className=' w-fit rounded-full'>
                    <BsCheckCircle className='w-4 h-4 text-gray-600' />
                  </div>
                  <p>Send a Message</p>
                </div>

                <div className='px-5 py-[0.625rem] space-y-[0.625rem]'>
                  <p className='font-semibold '>
                    To a ux designer who works at Google
                  </p>
                  <p className='text-[0.625rem]'>
                    Hi [Name], I'm Gopal Sapara and I am currently working as a
                    UX designer. Being passionate about user experience, I am
                    interested in exploring the opportunity of becoming part of
                    Google's UX team. Could you provide me with some insights on
                    how to initiate this process? Thank you for your time!
                  </p>

                  <div className='text-[#9e9e9e] flex justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                      <MdModeEdit className='w-3 h-3' />
                      <IoIosCopy className='w-3 h-3' />
                    </div>
                    <div className='p-[5px] bg-blue-600 rounded-md'>
                      <FaLinkedinIn className='text-white'/>
                    </div>
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

export default NPCStatusPopover;
