import { FC } from 'react';
import { IoMdChatbubbles } from 'react-icons/io';
import { IoDocumentAttach, IoDocumentTextSharp } from 'react-icons/io5';
import JobViewDialogPopover from "@/components/popovers/JobViewDialogPopover"

interface JobViewDialogPopoversProps {}

const JobViewDialogPopovers: FC<JobViewDialogPopoversProps> = ({}) => {
  return (
    <div className='px-10 py-5 flex items-center gap-[0.625rem] text-xs'>
      <JobViewDialogPopover>
        <button className='text-green-600 flex text-xs cursor-pointer items-center gap-[8px] px-[5px] py-[8px] bg-green-100 rounded-md focus:outline-green-300'>
          <IoDocumentAttach />
          <p>Resume Name 75%</p>
        </button>
      </JobViewDialogPopover>
      <JobViewDialogPopover>
        <button className=' text-[#9E9E9E] items-center  border rounded-lg p-2 flex gap-[0.625rem]'>
          <IoDocumentTextSharp />
          <p>Cover Letter Name</p>
        </button>
      </JobViewDialogPopover>
      <JobViewDialogPopover>
        <button
          className={
            ' text-[#9E9E9E]  border rounded-lg p-2 items-center flex gap-[0.625rem]'
          }
        >
          <IoMdChatbubbles />
          <p>Mock Interview</p>
        </button>
      </JobViewDialogPopover>
    </div>
  );
};

export default JobViewDialogPopovers;
