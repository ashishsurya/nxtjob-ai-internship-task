import JobBoards from '../JobBoards';
import JobSeacrhBar from '../JobSeacrhBar';
import * as Tabs from '@radix-ui/react-tabs';

const TabContent = () => {
  return (
    <div className='flex-1 space-y-[1.25rem] pl-[1.25rem] '>
      <JobSeacrhBar />
      <Tabs.Content value='boards' className='flex-1 '>
        <JobBoards />
      </Tabs.Content>
    </div>
  );
};

export default TabContent;
