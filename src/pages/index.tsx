import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col h-screen items-center justify-center font-medium text-2xl'>
      <p className='text-4xl'>This website is built for an internship task.</p>
      <p className=''>
        Go{' '}
        <Link
          className='text-blue-500 underline underline-offset-4'
          href={'/job-tracker-and-networking'}
        >
          here
        </Link>{' '}
        to view the actual work done.
      </p>
    </main>
  );
}
