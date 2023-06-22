import JobBoards from '../JobBoards';
import JobSeacrhBar from '../JobSeacrhBar';
import * as Tabs from '@radix-ui/react-tabs';

const TabContent = () => {
  return (
    <div className='flex-1 space-y-[20px] pl-[20px] '>
      <JobSeacrhBar />
      <Tabs.Content value='boards' className='flex-1 '>
        <JobBoards />
      </Tabs.Content>
    </div>
  );
};

export default TabContent;
