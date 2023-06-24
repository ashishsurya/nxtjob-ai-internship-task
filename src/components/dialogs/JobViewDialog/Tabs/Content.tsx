/* eslint-disable react/no-unescaped-entities */
import { FC, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import { MdModeEdit } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import {
  BsChatSquareTextFill,
  BsFillExclamationTriangleFill,
} from 'react-icons/bs';
import {
  TbCircleArrowLeftFilled,
  TbCircleArrowRightFilled,
} from 'react-icons/tb';
import NPCStatusPopover from '@/components/popovers/NPCStatusPopover';
import JobCardOptionsPopover from '@/components/popovers/JobCardOptionsPopover';
import { AiOutlineCaretDown } from 'react-icons/ai';

interface ContentProps {}

const Content: FC<ContentProps> = ({}) => {
  return (
    <>
      <JobDescription />
      <Company />
      <Network />
    </>
  );
};

const JobDescription = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Tabs.Content value='job-description' asChild>
      <div className='p-5 flex flex-col text-[#212121]  overflow-scroll'>
        <div className='flex justify-between  h-8 '>
          <p className='text-lg font-bold text-[#212121]'>Description</p>
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

        <FormattedText isEditing={isEditing} />
      </div>
    </Tabs.Content>
  );
};

const Company = () => {
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
            src={'/ui-ux.jpeg'}
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
            <textarea
              rows={3}
              className='p-5 text-sm focus:outline-none border rounded-lg'
              placeholder='Pixster Studio offers a complete array of Mobile & Web-based
            services ranging from development of iOS, Android, and Web
            applications all the way to front-end and back-end website
            solutions. We’ve more than 15 products and satisfied clients all
            around the world.'
            ></textarea>
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
            <p className='font-bold'>Website</p>
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
            <p className='font-bold'>Industry</p>
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
            <p className='font-bold'>Employee Count</p>
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
            <p className='font-bold'>Address</p>
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

const Network = () => {
  return (
    <Tabs.Content value='network' asChild>
      <div className='p-5 space-y-5 text-sm text-[#212121]'>
        <div className='flex gap-5'>
          <h3 className='font-bold text-lg flex-1'>Your Network</h3>
          <div className='py-[0.625rem] bg-white pl-12 relative rounded-lg'>
            <BiSearch className='absolute w-5 h-5 left-4 ' />
            <input
              type='text'
              placeholder='Search'
              className='focus:outline-none bg-transparent'
            />
          </div>
          <button className='bg-primary-3 font-bold text-white rounded-lg px-6'>
            Create New
          </button>
        </div>
        <div className='flex items-center gap-2'>
          <AiOutlineCaretDown className='w-4 h-4' />
          <p>Follow-Up 1</p>
        </div>
        <NetworkProfileCard status='inprocess' />
        <NetworkProfileCard status='success' />

        <div className='flex items-center gap-2'>
          <AiOutlineCaretDown className='w-4 h-4' />
          <p>Follow-Up 2</p>
        </div>

        <NetworkProfileCard status='reject' />
        <NetworkProfileCard status='inprocess' />

        <div className='flex items-center gap-2'>
          <AiOutlineCaretDown className='w-4 h-4' />
          <p>Follow-Up 3</p>
        </div>
        <NetworkProfileCard status='inprocess' />
        <NetworkProfileCard status='inprocess' />
      </div>
    </Tabs.Content>
  );
};

const NetworkProfileCard = ({
  status,
}: {
  status: 'success' | 'reject' | 'inprocess';
}) => {
  return (
    <div className='px-5 py-3 bg-white flex justify-between rounded-lg items-center text-[#212121] text-[0.625rem]'>
      <div className='flex gap-[0.625rem]'>
        <Image src={'/avatar.svg'} alt='avatar' width={32} height={32} />
        <div className='flex flex-col text-sm'>
          <p className='font-bold'>Monisha Raut</p>
          <p className='text-[0.625rem]'>UI/UX Designer at Crisil</p>
        </div>
      </div>
      <p className='text-[#9e9e9e]'>Name of Company</p>
      <p className='text-[#9e9e9e]'>17 June, 2023</p>

      <div className='flex items-center gap-3'>
        {status === 'inprocess' && (
          <NPCStatusPopover>
            <button>
              <BsFillExclamationTriangleFill className='w-5 h-5 text-yellow-400' />
            </button>
          </NPCStatusPopover>
        )}
        {status === 'reject' && (
          <NPCStatusPopover>
            <button>
              <TbCircleArrowLeftFilled className='w-5 h-5 text-red-500' />
            </button>
          </NPCStatusPopover>
        )}

        {status === 'success' && (
          <NPCStatusPopover>
            <button>
              <TbCircleArrowRightFilled className='w-5 h-5 text-green-500' />
            </button>
          </NPCStatusPopover>
        )}

        <button>
          <BsChatSquareTextFill className='w-5 h-5 text-gray-400' />
        </button>
        <JobCardOptionsPopover
          onDeleteHandle={() => null}
          className='relative top-0 right-0'
        />
      </div>
    </div>
  );
};

const FormattedText = ({ isEditing }: { isEditing: boolean }) => {
  return (
    <div className={twMerge(isEditing && 'bg-white px-5 rounded-lg mt-5')}>
      {isEditing && <div></div>}
      <p className='mt-5 mb-[0.625rem] font-medium'>About the job</p>
      <p
        className={twMerge(
          'text-sm whitespace-pre-line text-justify order-1 overflow-clip leading-5'
        )}
      >
        Are you passionate about UI/UX design and eager to gain hands-on
        experience working with a prestigious Management Consulting firm?
        TalentKompass Deutschland, a top Human Resources company based in
        Germany, is searching for a motivated UI/UX Design Intern to join our
        esteemed client. This remote position offers an extraordinary chance for
        someone who is excited to learn and develop their skills in a dynamic
        and fast-paced environment. <br />
        <br />
        As a UI/UX Design Intern, you will work closely with the consulting and
        design teams, where you will be responsible for a range of tasks,
        including user research, wireframing, prototyping, and usability
        testing. You will have the unique opportunity to learn from experienced
        professionals who will provide mentorship and guidance throughout the
        internship. With this internship, you will gain valuable experience in
        UI/UX design, design thinking, and teamwork – all essential skills for a
        successful career in this field. <br />
        <br />
        <strong>Responsibilities: </strong>{' '}
        <li>
          Assist in the research, design, and prototyping of user interfaces and
          experiences
        </li>{' '}
        <li>
          Conduct user research and develop personas, user stories, and user
          flows
        </li>{' '}
        <li>
          Create wireframes, mockups, and prototypes to effectively communicate
          design ideas
        </li>{' '}
        <li>
          Collaborate with cross-functional teams to gather requirements and
          develop solutions
        </li>{' '}
        <li>
          Participate in usability testing and incorporate feedback into design
          iterations
        </li>{' '}
        <li>Support the team with general administrative tasks as needed</li>
        <li>
          Contribute to the creation of design documentation and style guides{' '}
        </li>
        <br />
        <strong>Requirements: </strong>
        <li>Basic understanding of UI/UX design principles and practices</li>
        <li>
          Familiarity with design tools, such as Sketch, Adobe XD, Figma is a
          plus
        </li>{' '}
        <li>Excellent written and verbal communication skills in English</li>{' '}
        <li>Ability to work independently and as part of a team</li>{' '}
        <li>Strong analytical and problem-solving skills</li>{' '}
        <li>Knowledge of web and mobile design best practices is a plus</li>{' '}
        <li>
          Experience with user research methodologies and usability testing is a
          plus
        </li>{' '}
        <li>
          At TalentKompass Deutschland, we are committed to helping our interns
          develop their skills and reach their full potential.
        </li>{' '}
        <li>
          Our client is a reputable Management Consulting firm that will provide
          invaluable experience in a competitive industry.
        </li>{' '}
        <li>
          Don't miss this incredible opportunity to kick-start your career in
          UI/UX design.
        </li>
      </p>
    </div>
  );
};

export default Content;

// Website
// https://www.linkedin.com/company/pixster-studio/life/

// Industry
// Information Technology & Services

// Employee Count
// 11-50

// Address
// Ahmedabad, Gujarat, India
