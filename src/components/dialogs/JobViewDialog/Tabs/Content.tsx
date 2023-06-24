/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import JobCardOptionsPopover from '@/components/popovers/JobCardOptionsPopover';
import NPCStatusPopover from '@/components/popovers/NPCStatusPopover';
import Image from 'next/image';
import {
  BsChatSquareTextFill,
  BsFillExclamationTriangleFill,
} from 'react-icons/bs';
import {
  TbCircleArrowLeftFilled,
  TbCircleArrowRightFilled,
} from 'react-icons/tb';
import CompanyDetails from '../CompanyDetails';
import NetworkDetails from '../NetworkDetails';
import Notes from '../Notes';

import JobDescriptionEditorToolbar from '../JobDescriptionEditorToolbar';
import JobDescription from '../JobDescription';

interface ContentProps {}

const Content: FC<ContentProps> = ({}) => {
  return (
    <>
      <JobDescription />
      <CompanyDetails />
      <NetworkDetails />
      <Notes />
    </>
  );
};

export const NetworkProfileCard = ({
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

export const FormattedText = ({ isEditing }: { isEditing: boolean }) => {
  return (
    <div className={twMerge(isEditing && 'bg-white px-5 rounded-lg mt-5')}>
      {isEditing && <JobDescriptionEditorToolbar />}
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
