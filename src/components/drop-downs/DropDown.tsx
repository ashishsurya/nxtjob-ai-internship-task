import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

let DropdownContext = createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  open: false,
  setOpen: () => {},
});

export default function Dropdown({ children }: { children: ReactNode }) {
  let [open, setOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <RadixDropdownMenu.Root open={open} onOpenChange={setOpen}>
        {children}
      </RadixDropdownMenu.Root>
    </DropdownContext.Provider>
  );
}

function DropdownButton({ children }: { children: ReactNode }) {
  return (
    <RadixDropdownMenu.Trigger asChild>{children}</RadixDropdownMenu.Trigger>
  );
}

Dropdown.Button = DropdownButton;

function DropdownMenu({ children }: { children: ReactNode }) {
  let { open } = useContext(DropdownContext);
  let controls = useAnimationControls();

  return (
    <AnimatePresence>
      {open && (
        <RadixDropdownMenu.Portal forceMount>
          <RadixDropdownMenu.Content
            align='start'
            className='mt-1 overflow-hidden rounded bg-white/75 p-2 text-left shadow backdrop-blur'
            asChild
          >
            <motion.div
              initial='closed'
              animate={controls}
              exit='closed'
              variants={{
                open: {
                  opacity: 1,
                  transition: { ease: 'easeOut', duration: 0.1 },
                },
                closed: {
                  opacity: 0,
                  transition: { ease: 'easeIn', duration: 0.2 },
                },
              }}
            >
              {children}
            </motion.div>
          </RadixDropdownMenu.Content>
        </RadixDropdownMenu.Portal>
      )}
    </AnimatePresence>
  );
}

Dropdown.Menu = DropdownMenu;

function DropdownMenuItem({
  children,
}: {
  children: ReactNode;
  onSelect?: () => void;
}) {
  let controls = useAnimationControls();

  return (
    <RadixDropdownMenu.Item
      className='w-40 select-none rounded px-2 py-1.5 text-gray-700 data-[highlighted]:bg-sky-400 data-[highlighted]:text-white data-[highlighted]:focus:outline-none'
      asChild
    >
      <motion.div animate={controls}>{children}</motion.div>
    </RadixDropdownMenu.Item>
  );
}

Dropdown.MenuItem = DropdownMenuItem;
