import { FC } from 'react';
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdFormatSize,
  MdOutlineFormatColorText,
  MdOutlineFormatListNumbered,
  MdOutlineFormatListBulleted,
  MdOutlineFormatAlignRight,
  MdOutlineFormatAlignLeft,
  MdOutlineFormatAlignJustify,
  MdOutlineFormatAlignCenter,
  MdOutlineFormatColorReset,
} from 'react-icons/md';

import { CgFormatStrike, CgFormatUppercase } from 'react-icons/cg';
import * as Toolbar from '@radix-ui/react-toolbar';
import { BiLink } from 'react-icons/bi';

interface JobDescriptionEditorToolbarProps {}

const JobDescriptionEditorToolbar: FC<
  JobDescriptionEditorToolbarProps
> = ({}) => {
  return (
    <Toolbar.Root className='py-5 border-b text-primary-2 space-x-3'>
      <Toolbar.Button className=' p-1 bg-purple-200 rounded-md'>
        <MdFormatBold className='w-6 h-6' />
      </Toolbar.Button>
      <Toolbar.Button className=' '>
        <MdFormatItalic className='w-6 h-6 text-primary-2' />
      </Toolbar.Button>
      <Toolbar.Button className=' '>
        <MdFormatUnderlined className='w-6 h-6 text-primary-2' />
      </Toolbar.Button>
      <Toolbar.Button className=' '>
        <MdFormatSize className='w-6 h-6 text-primary-2' />
      </Toolbar.Button>
      <Toolbar.Button className=' '>
        <CgFormatStrike className='w-6 h-6 text-primary-2' />
      </Toolbar.Button>
      <Toolbar.Button className=' '>
        <CgFormatUppercase className='w-6 h-6 text-primary-2' />
      </Toolbar.Button>
      <Toolbar.Button className=' '>
        <MdOutlineFormatColorText className='w-6 h-6 text-primary-2 rotat' />
      </Toolbar.Button>
      <Toolbar.Button className=' '>
        <MdOutlineFormatListNumbered className='w-6 h-6 text-primary-2 rotat' />
      </Toolbar.Button>
      <Toolbar.Button className=' '>
        <MdOutlineFormatListBulleted className='w-6 h-6 text-primary-2 rotat' />
      </Toolbar.Button>
      <Toolbar.Button className=' '>
        <MdOutlineFormatAlignRight className='w-6 h-6 text-primary-2 rotat' />
      </Toolbar.Button>
      <Toolbar.Button className=' '>
        <MdOutlineFormatAlignLeft className='w-6 h-6 text-primary-2 rotat' />
      </Toolbar.Button>
      <Toolbar.Button className=' '>
        <MdOutlineFormatAlignJustify className='w-6 h-6 text-primary-2 rotat' />
      </Toolbar.Button>
      <Toolbar.Button className=' '>
        <MdOutlineFormatAlignCenter className='w-6 h-6 text-primary-2 rotat' />
      </Toolbar.Button>
      <Toolbar.Button className=' '>
        <MdOutlineFormatColorReset className='w-6 h-6 text-primary-2 rotat' />
      </Toolbar.Button>
      <Toolbar.Button className=' '>
        <BiLink className='w-6 h-6 text-primary-2 rotat' />
      </Toolbar.Button>
    </Toolbar.Root>
  );
};

export default JobDescriptionEditorToolbar;
