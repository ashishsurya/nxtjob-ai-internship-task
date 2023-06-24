import { FC } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { RiDashboardLine } from 'react-icons/ri';
import { BiBuildingHouse } from 'react-icons/bi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IoIosPeople } from 'react-icons/io';

interface TriggersProps {}

const Triggers: FC<TriggersProps> = ({}) => {
  return (
    <Tabs.List className='text-gray-600'>
      <Tabs.Trigger value='job-description' asChild>
        <div className='flex px-3 py-2 gap-3 cursor-pointer data-[state=active]:bg-purple-100 data-[state=active]:text-primary-2 rounded-lg'>
          <RiDashboardLine className='w-5 h-5' />
          <p className='text-xs'>Job Description</p>
        </div>
      </Tabs.Trigger>
      <Tabs.Trigger value='company' asChild>
        <div className='flex px-3 py-2 gap-3 cursor-pointer data-[state=active]:bg-purple-100 data-[state=active]:text-primary-2 rounded-lg'>
          <BiBuildingHouse className='w-5 h-5' />
          <p className='text-xs'>Company</p>
        </div>
      </Tabs.Trigger>
      <Tabs.Trigger value='note' asChild>
        <div className='flex px-3 py-2 gap-3 cursor-pointer data-[state=active]:bg-purple-100 data-[state=active]:text-primary-2 rounded-lg'>
          <HiOutlineDocumentText className='w-5 h-5' />
          <p className='text-xs'>Note</p>
        </div>
      </Tabs.Trigger>
      <Tabs.Trigger value='network' asChild>
        <div className='flex px-3 py-2 gap-3 cursor-pointer data-[state=active]:bg-purple-100 data-[state=active]:text-primary-2 rounded-lg'>
          <IoIosPeople className='w-5 h-5' />
          <p className='text-xs'>Networking</p>
        </div>
      </Tabs.Trigger>
    </Tabs.List>
  );
};

export default Triggers;
