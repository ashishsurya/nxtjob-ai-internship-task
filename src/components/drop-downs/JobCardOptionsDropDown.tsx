import React, { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineMore } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface JobCardOptionsDropDownProps {
  onDeleteHandle: () => void;
}

const JobCardOptionsDropDown: React.FC<JobCardOptionsDropDownProps> = ({
  onDeleteHandle,
}) => {
  const [dDOpen, setDDOpen] = useState(false);

  return (
    <DropdownMenu.Root open={dDOpen} onOpenChange={setDDOpen}>
      <DropdownMenu.Trigger asChild>
        <motion.div
          whileFocus={{ scaleY: 1.2 }}
          whileHover={{ scaleY: 1.2 }}
          className='absolute top-2 right-2 cursor-pointer'
        >
          <AiOutlineMore className='w-5 h-5' />
        </motion.div>
      </DropdownMenu.Trigger>
      <AnimatePresence>
        {dDOpen && (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='bg-white w-52 p-[10px] rounded-lg'
              >
                <DropdownMenu.Item asChild>
                  <motion.button
                    onClick={onDeleteHandle}
                    className='text-red-500 w-full flex gap-[12px]  items-center p-2  focus:outline-none rounded-lg hover:bg-[#f5f5f5]'
                  >
                    <RiDeleteBin6Line />
                    <p>Delete</p>
                  </motion.button>
                </DropdownMenu.Item>
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        )}
      </AnimatePresence>
    </DropdownMenu.Root>
  );
};

export default JobCardOptionsDropDown;
