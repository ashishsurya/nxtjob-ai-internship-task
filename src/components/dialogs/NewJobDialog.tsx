import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { set as setNewJobDialogState } from '@/redux/slices/dialogs/newJobDialogSlice';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import NewJobForm from '../forms/NewJobForm';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { twMerge } from 'tailwind-merge';
import { font } from '@/pages/_app';

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
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className='fixed inset-0 bg-black/25 '
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              ></motion.div>
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={twMerge('w-[500px] bg-white top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 p-10 flex flex-col gap-[40px] rounded-lg shadow-lg font-sans', font.variable)}
              >
                <div className='flex flex-col items-center gap-[6px]'>
                  <h2 className=' text-3xl font-semibold'>Add job</h2>
                  <p className='text-[#5a5a5a]'>
                    Create job card to track that job.
                  </p>
                </div>

                <div>
                  <NewJobForm />
                </div>

                <div className='bg-purple-100  relative rounded-lg'>
                  <AiOutlineInfoCircle className='absolute text-purple-700 top-3 left-2' />
                  <p className='text-[0.625rem] text-[#5a5a5a] p-[0.625rem] pl-[35px]'>
                    Did yoy know? You can save job directly from our Extension
                    and have all the data imported in a simple click! It takes
                    just a few seconds,
                  </p>
                </div>
                <Dialog.Close asChild>
                  <motion.button
                    whileHover={{ rotate: 90 }}
                    className='absolute right-4 top-4'
                  >
                    <GrClose className='w-5 h-5' />
                  </motion.button>
                </Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default NewJobDialog;
