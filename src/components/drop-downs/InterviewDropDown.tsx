import { IoMdChatbubbles } from 'react-icons/io';
import Dropdown from './DropDown';
import { twMerge } from 'tailwind-merge';

const InterviewDropDown = ({ percentage }: { percentage: number }) => {
  // TODO make dropdown content

  return (
    <Dropdown>
      <Dropdown.Button>
        <button
          className={twMerge(
            'text-sm text-[#9E9E9E] border-dashed border rounded-full p-2 ',
            percentage > 0 &&
              'bg-red-100 text-xs flex items-center text-red-600 gap-[8px] rounded-md'
          )}
        >
          <IoMdChatbubbles />
          {percentage > 0 && <p>{percentage}%</p>}
        </button>
      </Dropdown.Button>
    </Dropdown>
  );
};

export default InterviewDropDown;
