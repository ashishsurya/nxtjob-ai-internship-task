/* eslint-disable react/no-unescaped-entities */
import * as Tabs from '@radix-ui/react-tabs';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useTransition } from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { MdModeEditOutline } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Notes = () => {
  const [_, startTransition] = useTransition();
  const [isEditing, setIsEditing] = useState(false);
  const [noteInput, setNoteInput] = useState('');
  const [notes, setNotes] = useState<
    {
      id: string;
      note: string;
      createdAt: string;
    }[]
  >([]);
  return (
    <Tabs.Content value='note' asChild>
      <div className='p-5 space-y-5'>
        <div className='flex justify-between  items-center'>
          <h3 className='font-bold text-lg'>Notes</h3>
          <button
            onClick={() => setIsEditing(true)}
            className='font-bold bg-primary-3 text-white text-sm px-8 rounded-lg py-2'
          >
            Create New Note
          </button>
        </div>

        {isEditing && (
          <form
            onSubmit={(e) => {
              e.preventDefault();

              startTransition(() => {
                setNotes((prev) => [
                  {
                    id: new Date().toISOString(),
                    note: noteInput,
                    createdAt: new Date().toString(),
                  },
                  ...prev,
                ]);

                setNoteInput('');
              });
              setIsEditing(false);
            }}
            className='flex flex-col gap-[0.625rem]'
          >
            <p className='text-sm font-semibold'>Add Note</p>
            <textarea
              value={noteInput}
              onChange={(e) => setNoteInput(e.target.value)}
              className='bg-white border border-primary-2 rounded-lg p-1'
              rows={5}
            />
            <div className='self-end'>
              <button
                type='button'
                onClick={() => setIsEditing(false)}
                className='text-primary-3 px-8 py-[0.375rem] rounded-lg'
              >
                Cancel
              </button>
              <button
                type='submit'
                className='bg-primary-3 px-8 py-[0.375rem] rounded-lg text-white'
              >
                Save
              </button>
            </div>
          </form>
        )}

        {notes.length === 0 && !isEditing && (
          <div className='flex flex-col mt-3 items-center gap-12'>
            <IoDocumentTextOutline className='w-40 h-52 text-purple-200' />
            <div className='flex flex-col gap-2 items-center'>
              <p className='text-2xl text-[#5a5a5a] font-semibold'>
                No notes created
              </p>
              <p className='text-sm'>
                You can tap the "Create New Notes" Button to start taking notes!
              </p>
            </div>
          </div>
        )}

        {notes.length > 0 && !isEditing && (
          <div className='space-y-5 '>
            <AnimatePresence>
              {notes.map((note) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={note.id}
                  className='p-4 bg-white flex flex-col gap-5 rounded-lg shadow-md'
                >
                  <p className='whitespace-pre'>{note.note}</p>
                  <hr />
                  <div className='flex items-center justify-between'>
                    <p>few seconds ago</p>
                    <div className='flex items-center gap-4'>
                      <MdModeEditOutline className='w-5 h-5 text-primary-2' />
                      <button
                        onClick={() => {
                          setNotes((prev) =>
                            prev.filter((n) => n.id !== note.id)
                          );
                        }}
                      >
                        <RiDeleteBin6Line className='w-5 h-5 text-red-500' />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </Tabs.Content>
  );
};

export default Notes;
