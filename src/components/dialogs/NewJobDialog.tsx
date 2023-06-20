import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { set as setNewJobDialogState } from '@/redux/slices/dialogs/newJobDialogSlice';
import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import NewJobForm from '../forms/NewJobForm';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
export const dialogVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const NewJobDialog = () => {
  const isOpen = useAppSelector((state) => state.newJobDialog.open);
  const dispatch = useAppDispatch();

  return (
    <Dialog.Root
      open={isOpen}
      defaultOpen={false}
      onOpenChange={(x) => {
        dispatch(setNewJobDialogState(x));
      }}
    >
      <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
      <Dialog.Content asChild>
        <motion.div
          variants={dialogVariant}
          initial='hidden'
          animate='visible'
          exit='exit'
          className='w-[500px] bg-white top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 p-10 flex flex-col gap-[40px] rounded-lg shadow-lg '
        >
          <div className='flex flex-col items-center gap-[6px]'>
            <h2 className=' text-3xl font-semibold'>Add job</h2>
            <p className='text-[#5a5a5a]'>Create job card to track that job.</p>
          </div>

          <div>
            <NewJobForm />
          </div>

          <div className='bg-purple-100  relative rounded-lg'>
            <AiOutlineInfoCircle className='absolute text-purple-700 top-3 left-2' />
            <p className='text-[10px] text-[#5a5a5a] p-[10px] pl-[35px]'>
              Did yoy know? You can save job directly from our Extension and
              have all the data imported in a simple click! It takes just a few
              seconds,
            </p>
          </div>
          <Dialog.Close asChild>
            <motion.button
              whileHover={{ rotate: 90 }}
              className='absolute right-4 top-4'
            >
              <GrClose className='w-5 h-5'/>
            </motion.button>
          </Dialog.Close>
        </motion.div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default NewJobDialog;
