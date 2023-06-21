import { FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useAppDispatch } from '@/redux/hooks';
import { set } from '@/redux/slices/dialogs/newJobDialogSlice';

const JobSeacrhBar = () => {
  const dispatch = useAppDispatch();

  return (
    <div className='flex px-[20px] py-[10px] items-center bg-white rounded-lg justify-between mt-[20px] mr-[20px]'>
      <h3 className='font-semibold'>My 2023 Job Search</h3>

      <div className='flex items-stretch gap-[10px]'>
        <div className='relative border flex items-center w-[320px] rounded-lg'>
          <FiSearch className='absolute top-4 left-2 w-4 h-4' />
          <input
            type='text'
            className='focus:outline-none pl-[32px] h-full rounded-lg'
            placeholder='Search'
          />
        </div>

        {/* TODO acts as trigger for creating new job dialog */}
        <motion.button
          whileHover={{
            scaleX: 1.05,
          }}
          className='bg-primary-1 py-[12px] px-[18px] text-white rounded-lg font-bold'
          onClick={() => dispatch(set(true))}
        >
          Create
        </motion.button>
      </div>
    </div>
  );
};

export default JobSeacrhBar;
