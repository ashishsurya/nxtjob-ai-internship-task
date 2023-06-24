import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { BiBuildingHouse } from 'react-icons/bi';
import { HiLocationMarker, HiCurrencyRupee } from 'react-icons/hi';
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import * as Select from '@radix-ui/react-select';
import { FiChevronDown } from 'react-icons/fi';
import { CustomSelectItem } from '@/components/forms/NewJobForm';

const JobViewDialogHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='flex justify-between items-start p-10 pb-5'>
      <div className='flex gap-[0.625rem]'>
        <Image
          src={'/ui-ux.jpeg'}
          alt='company-logo'
          width={72}
          height={72}
          className='rounded-lg'
        />
        <div className='flex flex-col gap-[6px]'>
          <p className='text-xl font-bold'>UI/UX Designer (Mobile Apps)</p>
          <div className='flex items-center gap-3 text-xs text-[#5a5a5a]'>
            <div className='flex items-center gap-1'>
              <span>
                <BiBuildingHouse className='w-4 h-4' />
              </span>
              <p className=''>PIXSTER STUDIO</p>
            </div>
            <div className='flex items-center gap-1'>
              <span>
                <HiLocationMarker className='w-4 h-4' />
              </span>
              <p className=''>Ahmedabad, Gujarat, India</p>
            </div>
            <div className='flex items-center gap-1'>
              <span>
                <HiCurrencyRupee className='w-4 h-4' />
              </span>
              <p className=''>Ahmedabad, Gujarat, India</p>
            </div>
            <Link href={'#'} className='text-purple-600 font-bold'>
              View Job Details
            </Link>
          </div>
          <p className='text-xs text-gray-500'>
            Job added from linkedin.com on Tue May 30 2023.
          </p>
        </div>
      </div>

      <div className='flex justify-end  gap-2 flex-1 px-10 text-sm'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className='py-1 px-11 bg-red-500 text-base text-white rounded-lg font-bold'
        >
          Delete
        </motion.button>
        <Select.Root defaultValue='saved'>
          <Select.Trigger className='flex  px-6 py-1 border rounded-lg items-center  text-[#5a5a5a] gap-3 '>
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
                className='bg-white top-14 h-fit left-0 absolute  p-[0.625rem] w-full shadow-lg rounded-lg border'
              >
                <Select.Viewport>
                  <Select.Group className='flex flex-col gap-[0.625rem] items-start'>
                    <CustomSelectItem textValue='Saved' value='saved' />
                    <CustomSelectItem
                      textValue='Interviewing'
                      value='interviewing'
                    />
                    <CustomSelectItem textValue='Applied' value='applied' />
                    <CustomSelectItem textValue='Offer' value='offer' />
                    <CustomSelectItem textValue='Rejected' value='rejected' />
                  </Select.Group>
                </Select.Viewport>
              </motion.div>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
    </div>
  );
};

export default JobViewDialogHeader;
