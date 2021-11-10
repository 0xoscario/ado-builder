import { Fragment } from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/DefaultLayout';
import { Tab, Menu, Transition } from '@headlessui/react';
import { LightningBoltIcon } from '@heroicons/react/outline';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import Link from 'next/link';

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
            <p className="text-gray-600 font-medium">SHOW</p>
            <Tab.List className="ml-3">
              <Tab className="px-3 border-l-0 border-t-0 border-b-0 border-r border-gray-500">
                ALL
              </Tab>
              <Tab className="px-3 border-l-0 border-t-0 border-b-0 border-r border-gray-500">
                NFTs
              </Tab>
              <Tab className="px-3 border-l-0 border-t-0 border-b-0 border-r border-gray-500">
                ADOs
              </Tab>
              <Tab className="px-3 border-l-0 border-t-0 border-b-0 border-r border-gray-500">
                Tokens
              </Tab>
              <Tab className="px-3 border-l-0 border-t-0 border-b-0 border-r border-gray-500">
                Digital Currencies
              </Tab>
              <Tab className="px-3">Contracts</Tab>
            </Tab.List>
          </div>

          <Tab.Panels className="mt-3 bg-white rounded-lg shadow-md px-6 py-4">
            <h1 className="text-md font-medium">CW-721 Assets</h1>
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
                <h3 className="text-xl font-medium">NFT</h3>
                <p className="text-gray-500 font-medium text-xs ml-3">
                  Digital Art
                </p>
              </div>
              <div className="flex items-center">
                <h3 className="text-xl font-medium">Space Ape 827</h3>
                <Link href="/assets/nft">
                  <a className="text-white bg-gray-800 w-28 h-8 ml-3 rounded-md flex items-center justify-center">
                    <LightningBoltIcon className="w-5 h-5 mr-1" />
                    Detail
                  </a>
                </Link>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="text-white bg-gray-800 w-8 h-8 ml-3 rounded-md">
                      <DotsVerticalIcon className="w-5 h-5 mx-auto" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-32 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-violet-500 text-gray-300'
                                  : 'text-gray-900'
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              Mint
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-violet-500 text-gray-300'
                                  : 'text-gray-900'
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              Burn
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-violet-500 text-gray-300'
                                  : 'text-gray-900'
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              Archive
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-violet-500 text-gray-300'
                                  : 'text-gray-900'
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              Sell
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
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
