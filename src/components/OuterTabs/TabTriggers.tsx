import * as Tabs from '@radix-ui/react-tabs';
import { RiDashboardFill, RiInboxArchiveFill } from 'react-icons/ri';
import { IoIosPeople } from 'react-icons/io';
import { TfiLoop } from 'react-icons/tfi';
import { HiLightBulb } from 'react-icons/hi';
import { AiFillBug } from 'react-icons/ai';

const TabTriggers = () => {
  return (
    <Tabs.List className='flex flex-col py-[20px] px-[10px] bg-white gap-[10px] rounded-lg m-[20px] h-fit w-52'>
      <Tabs.Trigger
        value='boards'
        className='p-[10px] data-[state=active]:bg-[#8246FD] data-[state=active]:text-white flex gap-[10px] items-center rounded-lg data-[state=inactive]:hover:bg-[#F5F5F5] duration-200 text-[#212121]'
      >
        <RiDashboardFill className='w-7 h-7' />
        <p className='text-xs'>Boards</p>
      </Tabs.Trigger>
      <Tabs.Trigger
        value='networking'
        className='p-[10px] data-[state=active]:bg-[#8246FD] data-[state=active]:text-white flex gap-[10px] items-center rounded-lg data-[state=inactive]:hover:bg-[#F5F5F5] duration-200 text-[#212121]'
      >
        <IoIosPeople className='w-7 h-7' />
        <p className='text-xs'>Networking</p>
      </Tabs.Trigger>
      <Tabs.Trigger
        value='archive-jobs'
        className='p-[10px] data-[state=active]:bg-[#8246FD] data-[state=active]:text-white flex gap-[10px] items-center rounded-lg data-[state=inactive]:hover:bg-[#F5F5F5] duration-200 text-[#212121]'
      >
        <RiInboxArchiveFill className='w-7 h-7' />
        <p className='text-xs'>Archive Jobs</p>
      </Tabs.Trigger>
      <Tabs.Trigger
        value='loop-settings'
        className='p-[10px] data-[state=active]:bg-[#8246FD] data-[state=active]:text-white flex gap-[10px] items-center rounded-lg data-[state=inactive]:hover:bg-[#F5F5F5] duration-200 text-[#212121]'
      >
        <TfiLoop className='w-7 h-7' />
        <p className='text-xs'>Loop Settings</p>
      </Tabs.Trigger>
      <hr />
      <Tabs.Trigger
        value='suggest-a-feature'
        className='p-[10px] data-[state=active]:bg-[#8246FD] data-[state=active]:text-white flex gap-[10px] items-center rounded-lg data-[state=inactive]:hover:bg-[#F5F5F5] duration-200 text-[#212121]'
      >
        <HiLightBulb className='w-7 h-7' />
        <p className='text-xs'>Suggest a feature</p>
      </Tabs.Trigger>
      <Tabs.Trigger
        value='report-an-issue'
        className='p-[10px] data-[state=active]:bg-[#8246FD] data-[state=active]:text-white flex gap-[10px] items-center rounded-lg data-[state=inactive]:hover:bg-[#F5F5F5] duration-200 text-[#212121]'
      >
        <AiFillBug className='w-7 h-7' />
        <p className='text-xs'>Report an issue</p>
      </Tabs.Trigger>
    </Tabs.List>
  );
};

export default TabTriggers;
