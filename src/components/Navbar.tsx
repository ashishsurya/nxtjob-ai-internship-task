import Image from 'next/image';
import Link from 'next/link';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BsFillBellFill } from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';

export const Navbar = () => {
  return (
    <nav className='px-8 py-6 shadow-md bg-white flex items-center gap-12'>
      <div>
        <Image
          src={'/logo.svg'}
          alt='logo'
          width={0}
          height={0}
          className='h-12 w-36'
        />
      </div>

      <div className='flex items-center gap-7 flex-1'>
        <Navlink title='Resume Builder' />
        <Navlink title='Cover Letter' />
        <Navlink title='LinkedIn Review' />
        <Navlink title='Interview' />
        <Navlink title='Job Tracker and Networking' active />
      </div>

      <div className='flex items-center gap-6'>
        <BsFillBellFill className='w-5 h-6' />
        <Avatar className='w-11 h-11 inline-flex items-center justify-center  '>
          <AvatarFallback className='w-full h-full flex items-center justify-center bg-[#57A4F2] font-bold text-white rounded-full'>
            GS
          </AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

const Navlink = ({ title, active }: { title: string; active?: boolean }) => {
  return (
    <Link
      href={'#'}
      className={twMerge(
        'flex items-center gap-3 text-sm text-[#212121]',
        active &&
          'bg-[#F7F3FF] px-[20px] py-[10px] text-[#8246FD] font-bold rounded-lg'
      )}
    >
      <p>{title}</p>
      <RiArrowDropDownLine />
    </Link>
  );
};
