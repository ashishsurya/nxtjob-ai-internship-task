import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { BiBuildingHouse } from 'react-icons/bi';
import { HiLocationMarker, HiCurrencyRupee } from 'react-icons/hi';

const JobViewDialogHeader = () => {
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

      <div className='flex justify-end  gap-2 flex-1 px-10'>
        <button className='py-1 px-11 bg-red-500 text-white rounded-lg font-bold'>
          Delete
        </button>
        <button className='py-1 px-11 border rounded-lg flex items-center justify-center gap-2 text-sm'>
          <p>Saved</p>
          <AiFillCaretDown />
        </button>
      </div>
    </div>
  );
};

export default JobViewDialogHeader;
