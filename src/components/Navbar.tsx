import Image from 'next/image';
import Link from 'next/link';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BsFillBellFill } from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const router = useRouter();

  const path = router.pathname;

  console.log(path);

  return (
    <nav className='px-8 py-6 shadow-md bg-white flex items-center gap-12'>
      <div>
        <Link href={'/'}>
          <Image
            src={'/logo.svg'}
            alt='logo'
            width={0}
            height={0}
            className='h-12 w-36'
          />
        </Link>
      </div>

      <div className='flex items-center gap-7 flex-1'>
        <Navlink href='resume-builder' />
        <Navlink href='cover-letter' />
        <Navlink href='linkedIn-review' />
        <Navlink href='interview' />
        <Navlink
          href='job-tracker-and-networking'
          active={path === '/job-tracker-and-networking'}
        />
      </div>

      <div className='flex items-center gap-6'>
        <motion.div whileHover={{ scale: 1.2 }} className='cursor-pointer'>
          <BsFillBellFill className='w-5 h-6' />
        </motion.div>
        <Avatar className='w-11 h-11 inline-flex items-center justify-center  '>
          <AvatarFallback className='w-full h-full flex items-center justify-center bg-[#57A4F2] font-bold text-white rounded-full'>
            GS
          </AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

const Navlink = ({ href, active }: { href: string; active?: boolean }) => {
  return (
    <Link
      href={href === 'job-tracker-and-networking' ? href : '#'}
      className={twMerge(
        'flex items-center gap-3 text-sm text-[#212121]',
        active &&
          'bg-[#F7F3FF] px-[20px] py-[10px] text-[#8246FD] font-bold rounded-lg'
      )}
    >
      <p className='capitalize'>{href.replace('-', ' ')}</p>
      <RiArrowDropDownLine />
    </Link>
  );
};
