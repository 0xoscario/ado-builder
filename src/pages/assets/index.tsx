import type { NextPage } from 'next';
import Layout from '@/components/DefaultLayout';
import { Tab } from '@headlessui/react';
import { LightningBoltIcon } from '@heroicons/react/outline';

const Assets: NextPage = () => {
  return (
    <Layout title="My assets">
      <div className="m-3 pb-3">
        <h1 className="text-2xl font-medium text-gray-700">My Assets</h1>
        <p className="text-gray-900">
          Locate and interact with your ADOs, NFTs, tokens, currencies, and more
        </p>
      </div>
      <div className="ml-3">
        <Tab.Group
          onChange={(index) => {
            console.log('Changed selected tab to:', index);
          }}
        >
          <div className="flex items-center">
            <p className="text-gray-600 font-bold">SHOW</p>
            <Tab.List className="ml-3">
              <Tab className="px-3 border-l-0 border-t-0 border-b-0 border-r border-gray-500">ALL</Tab>
              <Tab className="px-3 border-l-0 border-t-0 border-b-0 border-r border-gray-500">NFTs</Tab>
              <Tab className="px-3 border-l-0 border-t-0 border-b-0 border-r border-gray-500">ADOs</Tab>
              <Tab className="px-3 border-l-0 border-t-0 border-b-0 border-r border-gray-500">Tokens</Tab>
              <Tab className="px-3 border-l-0 border-t-0 border-b-0 border-r border-gray-500">Digital Currencies</Tab>
              <Tab className="px-3">Contracts</Tab>
            </Tab.List>
          </div>

          <Tab.Panels className="mt-3 bg-white rounded-lg shadow-md px-6 py-4">
            <h1 className="text-md font-bold">CW-721 Assets</h1>
            <Tab.Panel className="mt-3 flex items-center justify-between bg-white rounded-lg shadow-md px-6 py-4">
              <div className="flex items-center">
                <div className="w-8 h-8 mr-4 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">NFT</h3>
                <p className="text-gray-500 font-bold text-xs ml-3">Digital Art</p>
              </div>
              <div className="flex items-center">
                <h3 className="text-xl font-bold">Space Ape 827</h3>
                <button className="text-white bg-gray-800 w-28 h-8 ml-3 rounded-md flex items-center justify-center"><LightningBoltIcon className="w-5 h-5 mr-1" />Detail</button>
              </div>
            </Tab.Panel>
            <Tab.Panel>Content nfts</Tab.Panel>
            <Tab.Panel>Content ados</Tab.Panel>
            <Tab.Panel>Content tokens</Tab.Panel>
            <Tab.Panel>Content currencies</Tab.Panel>
            <Tab.Panel>Content contracts</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Layout>
  );
};

export default Assets;

