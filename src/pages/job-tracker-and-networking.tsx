import * as Tabs from '@radix-ui/react-tabs';
import TabTriggers from '../components/OuterTabs/TabTriggers';
import TabContent from '@/components/OuterTabs/TabContent';
export default function JobTrackerAndNetworking() {
  return (
    <div className=' p-[20px]'>
      <Tabs.Root defaultValue='boards' className='flex gap-[20px]'>
        <TabTriggers />
        <TabContent />
      </Tabs.Root>
    </div>
  );
}
