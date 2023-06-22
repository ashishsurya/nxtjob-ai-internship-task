import Dropdown from './DropDown';
import { IoDocumentAttach } from 'react-icons/io5';
const DocumentMatchDropDown = ({ percentage }: { percentage: number }) => {
  // TODO make dropdown content
  return (
    <Dropdown>
      <Dropdown.Button>
        <button className='text-green-600 flex text-xs cursor-pointer items-center gap-[8px] px-[5px] py-[8px] bg-green-100 rounded-md'>
          <IoDocumentAttach />
          <p>{percentage}%</p>
        </button>
      </Dropdown.Button>
    </Dropdown>
  );
};

export default DocumentMatchDropDown;
