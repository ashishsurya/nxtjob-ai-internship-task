import JobSeacrhBar from '../JobSeacrhBar';
import * as Tabs from '@radix-ui/react-tabs';

const TabContent = () => {
  return (
    <div className='flex-1 flex flex-col gap-[20px]'>
      <JobSeacrhBar />
      <Tabs.Content value='boards'>dvheybgyuerg</Tabs.Content>
    </div>
  );
};

export default TabContent;
