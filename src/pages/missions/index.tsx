import type { NextPage } from 'next';
import Layout from '@/components/DefaultLayout';
import { ArrowRightIcon } from '@heroicons/react/outline';

const Missions: NextPage = () => {
  return (
    <Layout title="My missions" currentNavIndex="2">
      <div className='text-center'>
        <h1 className='text-2xl font-bold text-gray-900'>My Missions</h1>
        <h1 className='text-2xl font-bold text-gray-500'>(In Development)</h1>
        <p>
          Missions is currently under development, but below, you'll find an
          example of what they are and how they might be utilized.
        </p>
        <div className='max-w-3xl mx-auto mt-3 mb-6'>
          <h2 className='text-red-500 font-bold'>EXAMPLE MISSION</h2>
          <p>
            An entity wants to accept funds and once a funding level is met,
            purchase an asset, hold the funds for 60 days, then split the funds
            among the depositers.
          </p>
          <p className='mt-2'>
            Missions will allow chained ADOs to execute complex sets of events.
          </p>
        </div>
        <div className='flex justify-between items-center max-w-4xl mx-auto my-8'>
            <div className='w-48 h-36 p-2.5 bg-white relative shadow-lg border-gray-300'>
                <h3 className='text-blue-900 text-xl font-bold'>Accept Funds</h3>
                <p className='text-blue-900 text-xs'>UUID 009930</p>
                <ArrowRightIcon className='w-8 text-gray-500 absolute top-1/2 -right-5 transform -translate-y-1/2' />
            </div>
            <div className='w-48 h-36 p-2.5 bg-white relative shadow-lg border-gray-300'>
                <h3 className='text-blue-900 text-xl font-bold'>Purchase Asset</h3>
                <p className='text-blue-900 text-xs'>UUID 017830</p>
                <ArrowRightIcon className='w-8 text-gray-500 absolute top-1/2 -right-5 transform -translate-y-1/2' />
            </div>
            <div className='w-48 h-36 p-2.5 bg-white relative shadow-lg border-gray-300'>
                <h3 className='text-blue-900 text-xl font-bold'>Timelock</h3>
                <p className='text-blue-900 text-xs'>UUID 083130</p>
                <ArrowRightIcon className='w-8 text-gray-500 absolute top-1/2 -right-5 transform -translate-y-1/2' />
            </div>
            <div className='w-48 h-36 p-2.5 bg-white relative shadow-lg border-gray-300'>
                <h3 className='text-blue-900 text-xl font-bold'>Splitter</h3>
                <p className='text-blue-900 text-xs'>UUID 049130</p>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default Missions;
