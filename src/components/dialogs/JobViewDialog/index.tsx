import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { handleJobViewDialog } from '@/redux/slices/dialogs/jobViewDiologSlice';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { GrClose } from 'react-icons/gr';
import JobViewDialogHeader from './JobViewDialogHeader';
import JobViewDialogPopovers from './JobViewDialogPopovers';
import * as Tabs from '@radix-ui/react-tabs';
import { RiDashboardLine } from 'react-icons/ri';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IoIosPeople } from 'react-icons/io';
import { BiBuildingHouse } from 'react-icons/bi';
import JobViewTimeLine from './JobViewTimeLine';
import Triggers from './Tabs/Triggers';
import Content from './Tabs/Content';

const JobViewDialog = () => {
  const { open } = useAppSelector((state) => state.jobViewDialog);
  const dispatch = useAppDispatch();
  return (
    <Dialog.Root
      open={open}
      onOpenChange={(x) => dispatch(handleJobViewDialog(x))}
    >
      <AnimatePresence>
        {open && (
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
                className='w-4/5 h-[90%] overflow-auto  top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 rounded-lg  bg-white focus:outline-none flex flex-col'
              >
                <Dialog.Close asChild>
                  <motion.button
                    whileHover={{ rotate: 90 }}
                    className='absolute right-4 top-4'
                  >
                    <GrClose className='w-5 h-5' />
                  </motion.button>
                </Dialog.Close>

                <JobViewDialogHeader />
                <hr />
                <JobViewDialogPopovers />
                <hr />

                <Tabs.Root
                  defaultValue='job-description'
                  className='grid grid-cols-[213px_1fr_233px] grid-flow-col py-5 gap-5 flex-1'
                >
                  <div className='py-5 px-[0.625rem] border-r'>
                    <Triggers />
                  </div>
                  <div className=' rounded-lg bg-purple-50'>
                    <Content />
                  </div>
                  <JobViewTimeLine />
                </Tabs.Root>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default JobViewDialog;
