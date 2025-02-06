import { useDisclosure } from '@mantine/hooks';
import { Button } from '@mantine/core';

export function HomePage() {
  const [isError, { toggle }] = useDisclosure();

  return (
    <div className="p-10">
      <h2>Home page</h2>
      <div className="flex flex-col items-center gap-6">
        <input type="text"  placeholder='Check Text' />
         <input type="text" placeholder='Check Text 2' />
        <Button onClick={toggle} className="w-32">
          Call error
        </Button>
      </div>
    </div>
  );
}