import { IoDocumentTextSharp } from 'react-icons/io5';
import Dropdown from './DropDown';

const CoverLetterDropDown = () => {
  // TODO make dropdown content

  return (
    <Dropdown>
      <Dropdown.Button>
        <button className='text-sm text-[#9E9E9E] border-dashed border rounded-full p-2 '>
          <IoDocumentTextSharp />
        </button>
      </Dropdown.Button>
    </Dropdown>
  );
};

export default CoverLetterDropDown;
