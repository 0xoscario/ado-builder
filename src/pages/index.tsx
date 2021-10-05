import type { NextPage } from 'next';
import Head from 'next/head';

import { LibraryIcon } from '@heroicons/react/outline';

import Layout from '@/components/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Andromeda">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="max-w-xl text-sm text-gray-500">
              <div className="flex items-center">
                <span className="rounded-lg inline-flex p-3 ring-4 ring-white text-gray-600 bg-gray-50">
                  <LibraryIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="md:inline-block md:px-4">
                  Create an NFT Collectible, DeFI Instrument or other smart
                  contract
                </p>
              </div>
            </div>
            <div className="sm:flex-shrink-0 sm:flex sm:items-center">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 sm:text-sm"
              >
                Launch builder
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="max-w-6xl mx-auto mt-8 text-lg leading-6 font-medium text-gray-900">
        Recent activity
      </h2>
    </Layout>
  );
};

export default Home;
