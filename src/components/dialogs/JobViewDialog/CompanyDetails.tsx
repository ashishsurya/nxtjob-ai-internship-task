import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MdModeEdit } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

const CompanyDetails = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Tabs.Content value='company' asChild>
      <div className='p-5 space-y-5 text-sm'>
        <div className='flex justify-between text-[#212121]'>
          <h3 className='text-lg font-bold'>Company Info</h3>
          {isEditing ? (
            <div className='space-x-8 '>
              <button
                onClick={() => setIsEditing(false)}
                className='text-primary-3'
              >
                Cancel
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className='text-white bg-primary-3 px-8 py-2 font-bold rounded-lg'
              >
                Save
              </button>
            </div>
          ) : (
            <motion.button
              whileFocus={{ scale: 1.2 }}
              whileHover={{ scale: 1.2 }}
              className='text-purple-500'
              onClick={() => setIsEditing(true)}
            >
              <MdModeEdit className='w-5 h-5' />
            </motion.button>
          )}
        </div>

        <div className='flex items-center gap-5'>
          <Image
            src={'/company.svg'}
            width={72}
            height={72}
            alt='ui-ux.jpeg'
            className='rounded-lg'
          />
          <div className={twMerge(isEditing && 'flex flex-col')}>
            <h3 className='font-bold'>
              {isEditing ? 'Company Name' : 'PIXSTER STUDIO'}
            </h3>
            {isEditing && (
              <input
                type='text'
                placeholder='Pixer Studio'
                className='px-4 py-3 text-sm focus:outline-none border rounded-lg'
              />
            )}
          </div>
        </div>
        <div className={twMerge(isEditing && 'flex flex-col')}>
          {isEditing ? (
            <div className='space-y-2'>
              <p className='font-medium '>Description</p>
              <textarea
                rows={3}
                className='p-5 text-sm focus:outline-none border rounded-lg w-full'
                placeholder='Pixster Studio offers a complete array of Mobile & Web-based
          services ranging from development of iOS, Android, and Web
          applications all the way to front-end and back-end website
          solutions. We’ve more than 15 products and satisfied clients all
          around the world.'
              ></textarea>
            </div>
          ) : (
            <p className=''>
              Pixster Studio offers a complete array of Mobile & Web-based
              services ranging from development of iOS, Android, and Web
              applications all the way to front-end and back-end website
              solutions. We’ve more than 15 products and satisfied clients all
              around the world.
            </p>
          )}
        </div>

        <div
          className={twMerge(
            isEditing ? 'grid grid-cols-2' : 'flex flex-col',
            ' gap-[0.625rem]'
          )}
        >
          <div>
            <p className='font-medium text-sm'>Website</p>
            {isEditing ? (
              <input
                className='px-4 py-3 text-sm rounded-lg w-full focus:outline-none border'
                placeholder='https://www.linkedin.com/company/pixster-studio/life/'
              />
            ) : (
              <Link
                href={'https://www.linkedin.com/company/pixster-studio/life/'}
                className='text-primary-2 underline underline-offset-2'
              >
                https://www.linkedin.com/company/pixster-studio/life/
              </Link>
            )}
          </div>

          <div>
            <p className='font-medium'>Industry</p>
            {isEditing ? (
              <input
                type='text'
                placeholder='Information Technology & Services'
                className='px-4 py-3 text-sm rounded-lg w-full focus:outline-none border'
              />
            ) : (
              <p>Information Technology & Services</p>
            )}
          </div>
        </div>

        <div
          className={twMerge(
            isEditing ? 'grid grid-cols-2' : 'flex flex-col',
            ' gap-[0.625rem]'
          )}
        >
          <div>
            <p className='font-medium'>Employee Count</p>
            {isEditing ? (
              <input
                className='px-4 py-3 text-sm rounded-lg w-full focus:outline-none border'
                placeholder='11-50'
              />
            ) : (
              <p>11-50</p>
            )}
          </div>

          <div>
            <p className='font-medium'>Address</p>
            {isEditing ? (
              <input
                type='text'
                placeholder='Ahmedabad, Gujarat, India'
                className='px-4 py-3 text-sm rounded-lg w-full focus:outline-none border'
              />
            ) : (
              <p>Ahmedabad, Gujarat, India</p>
            )}
          </div>
        </div>
      </div>
    </Tabs.Content>
  );
};

export default CompanyDetails;
