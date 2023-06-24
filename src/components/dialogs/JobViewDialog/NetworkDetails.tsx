import * as Tabs from '@radix-ui/react-tabs';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { NetworkProfileCard } from './Tabs/Content';

const NetworkDetails = () => {
  return (
    <Tabs.Content value='network' asChild>
      <div className='p-5 space-y-5 text-sm text-[#212121]'>
        <div className='flex gap-5'>
          <h3 className='font-bold text-lg flex-1'>Your Network</h3>
          <div className='py-[0.625rem] bg-white pl-12 relative rounded-lg'>
            <BiSearch className='absolute w-5 h-5 left-4 ' />
            <input
              type='text'
              placeholder='Search'
              className='focus:outline-none bg-transparent'
            />
          </div>
          <button className='bg-primary-3 font-bold text-white rounded-lg px-6'>
            Create New
          </button>
        </div>
        <div className='flex items-center gap-2'>
          <AiOutlineCaretDown className='w-4 h-4' />
          <p>Follow-Up 1</p>
        </div>
        <NetworkProfileCard status='inprocess' />
        <NetworkProfileCard status='success' />

        <div className='flex items-center gap-2'>
          <AiOutlineCaretDown className='w-4 h-4' />
          <p>Follow-Up 2</p>
        </div>

        <NetworkProfileCard status='reject' />
        <NetworkProfileCard status='inprocess' />

        <div className='flex items-center gap-2'>
          <AiOutlineCaretDown className='w-4 h-4' />
          <p>Follow-Up 3</p>
        </div>
        <NetworkProfileCard status='inprocess' />
        <NetworkProfileCard status='inprocess' />
      </div>
    </Tabs.Content>
  );
};

export default NetworkDetails;