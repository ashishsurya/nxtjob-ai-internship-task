import { FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useAppDispatch } from '@/redux/hooks';
import { set } from '@/redux/slices/dialogs/newJobDialogSlice';

const JobSeacrhBar = () => {
  const dispatch = useAppDispatch();

  return (
    <div className='flex px-[1.25rem] py-[0.625rem] items-center bg-white rounded-lg justify-between mt-[1.25rem] mr-[1.25rem]'>
      <h3 className='font-semibold'>My 2023 Job Search</h3>

      <div className='flex items-stretch gap-[0.625rem]'>
        <div className='relative border flex items-center w-[31.25rem] rounded-lg'>
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
