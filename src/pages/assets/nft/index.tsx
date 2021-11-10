import { useState } from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/DefaultLayout';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/outline';

const Detail: NextPage = () => {
  const [showWhiteList, setShowWhiteList] = useState(false);
  const [showBlackList, setShowBlackList] = useState(true);
  const [showItemActivity, setShowItemActivity] = useState(false);
  return (
    <Layout title="Assets detail">
      <div className="flex mb-3 pb-3 border-b border-grey-500 justify-between">
        <h1 className="text-2xl font-medium text-gray-700 m-3">
          My Assets &gt; Space Ape 827
        </h1>
        <Link href="/assets/">
          <a className="border border-gray-900 w-32 h-8 rounded-md flex items-center self-center justify-center font-medium text-xs">
            Back to Assets
          </a>
        </Link>
      </div>
      <div className="flex px-6 py-3 justify-between bg-yellow-50 rounded-md">
        <div className="flex justify-between items-center">
          <CheckCircleIcon className="w-5 h-5 ml-auto" />
          <h2 className="font-medium text-gray-700 m-3 font-medium text-xs">
            You have a new offer on this asset!
          </h2>
        </div>

        <Link href="#">
          <a className="border border-gray-900 w-32 h-8 rounded-md flex items-center self-center justify-center font-medium text-xs">
            View Offers
          </a>
        </Link>
      </div>
      <div className="bg-white mt-3 rounded shadow-lg p-4">
        <div className="flex">
          <div className="xs:w-full w-2/5 p-3">
            <div className="bg-black h-full" />
          </div>
          <div className="xs:w-full w-3/5 p-3">
            <div className="flex justify-between items-start flex-wrap">
              <div>
                <p className="font-medium text-sm text-gray-400 mb-2">
                  NFT Collection Asset
                </p>
                <h1 className="font-medium text-gray-600 mb-2 text-2xl">
                  Space APE 817
                </h1>
                <p className="font-medium text-sm text-gray-400 mb-2">
                  Owned by <span className="text-blue-500">0x...</span>
                </p>
              </div>
              <div className="bg-black shadow-xl px-8 py-2 rounded-md">
                <p className="text-white text-xs">Actions</p>
              </div>
            </div>
            <div className="bg-white mt-3 border-gray-300 border shadow-lg rounded p-4">
              <p className="font-medium text-xs text-gray-400 mb-2">
                Current Price
              </p>
              <h1 className="font-medium text-gray-600 mb-2 text-2xl">89.99</h1>
              <p className="font-medium text-xs text-gray-400 mb-2">
                Asset Status
              </p>
              <h2 className="text-green-400 mb-2 text-base">
                Listed on marketplace
              </h2>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="xs:w-full w-2/5 p-3">
            <div className="bg-white border-gray-300 border shadow-lg rounded p-4">
              <h3 className="font-medium text-gray-900 text-base">
                Description
              </h3>
              <p className="text-gray-600 text-sm">
                Vastness is description.{' '}
                <a href="/" className="text-blue-500 text-sm">
                  read more
                </a>
              </p>
            </div>
            <div className="bg-white mt-6 border-gray-300 border shadow-lg rounded p-4">
              <h3 className="font-medium text-gray-900 text-base">Meta data</h3>
              <div className="flex mt-4">
                <div className="w-1/2 pr-4">
                  <h4 className="font-medium text-gray-900 text-sm">
                    External URL
                  </h4>
                  <a
                    href="https://www.google.com"
                    className="font-medium text-blue-500 text-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.google.com
                  </a>
                </div>
                <div className="w-1/2 pl-4">
                  <h4 className="font-medium text-gray-900 text-sm">
                    Data Type
                  </h4>
                  <p className="text-gray-600 text-sm">value</p>
                </div>
              </div>
              <div className="flex mt-4">
                <div className="w-1/2 pr-4">
                  <h4 className="font-medium text-gray-900 text-sm">
                    Data URL
                  </h4>
                  <a href="/" className="font-medium text-blue-500 text-sm">
                    https://spaceape.io...
                  </a>
                </div>
                <div className="w-1/2 pl-4">
                  <h4 className="font-medium text-gray-900 text-sm">Data1</h4>
                  <p className="text-gray-600 text-sm">value</p>
                </div>
              </div>
            </div>
            <div className="bg-white mt-6 border-gray-300 border shadow-lg rounded p-4">
              <h3 className="font-medium text-gray-900 text-base">Royalties</h3>
              <div className="flex mt-4">
                <div className="w-1/2 pr-6">
                  <h4 className="font-medium text-gray-900 text-sm">
                    Flat rate
                  </h4>
                  <p className="text-gray-600 text-sm">20.00 UST</p>
                </div>
                <div className="w-1/2">
                  <h4 className="font-medium text-gray-900 text-sm">
                    Royalty receipient
                  </h4>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="font-medium text-blue-500 text-sm"
                    rel="noreferrer"
                  >
                    terrra...
                  </a>
                </div>
              </div>
              <div className="flex mt-4">
                <div className="w-1/2 pr-6">
                  <h4 className="font-medium text-gray-900 text-sm">
                    Percentage
                  </h4>
                  <p className="text-gray-600 text-sm">2%</p>
                </div>
                <div className="w-1/2">
                  <h4 className="font-medium text-gray-900 text-sm">
                    Royalty receipient
                  </h4>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="text-blue-500 text-sm"
                    rel="noreferrer"
                  >
                    terrra...
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white mt-6 border-gray-300 border shadow-lg rounded p-4">
              <h3 className="font-medium text-gray-600 text-xl">Taxes</h3>
              <div className="flex mt-4">
                <div className="w-1/2 pr-6">
                  <h4 className="font-medium text-gray-900 text-sm">Percent</h4>
                  <p className="text-gray-600 text-sm">2%</p>
                </div>
                <div className="w-1/2">
                  <h4 className="font-medium text-gray-900 text-sm">
                    Tax receipient
                  </h4>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="text-blue-500 text-sm"
                    rel="noreferrer"
                  >
                    terrra...
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="xs:w-full w-3/5 p-3">
            <div className="bg-white border-gray-300 border shadow-lg rounded p-4">
              <h3 className="font-medium text-gray-900 text-base">Details</h3>
              <div className="flex justify-between mt-4">
                <div className="mr-4">
                  <h4 className="font-medium text-gray-900 text-sm">
                    Link to asset
                  </h4>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="text-blue-500 text-sm"
                    rel="noreferrer"
                  >
                    terrra...
                  </a>
                </div>
                <div className="mr-4">
                  <h4 className="font-medium text-gray-900 text-sm">Symbol</h4>
                  <p className="text-gray-900 text-sm">SA827</p>
                </div>
                <div className="mr-4">
                  <h4 className="font-medium text-gray-900 text-sm">
                    Token ID
                  </h4>
                  <p className="text-gray-900 text-sm">SA827</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">
                    Contract Address
                  </h4>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="text-blue-500 text-sm"
                    rel="noreferrer"
                  >
                    terrra...
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white mt-6 border-gray-300 border shadow-lg rounded">
              <div className="flex justify-between p-4">
                <h2 className="font-medium text-gray-900 text-base">
                  Whitelist
                </h2>
                <div
                  className="cursor-pointer"
                  onClick={() => setShowWhiteList(!showWhiteList)}
                >
                  Arrow
                </div>
              </div>
              {showWhiteList && (
                <div className="p-4 border-t-2 border-gray-300 flex items-start justify-between flex-wrap">
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">
                      Whitelist Addresses
                    </h4>
                    <p className="mt-4">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="text-blue-500 text-sm"
                        rel="noreferrer"
                      >
                        terrra...
                      </a>
                    </p>
                    <p className="mt-4">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="text-blue-500 text-sm"
                        rel="noreferrer"
                      >
                        terrra...
                      </a>
                    </p>
                    <p className="mt-4">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="text-blue-500 text-sm"
                        rel="noreferrer"
                      >
                        terrra...
                      </a>
                    </p>
                    <p className="mt-4">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="text-blue-500 text-sm"
                        rel="noreferrer"
                      >
                        terrra...
                      </a>
                    </p>
                  </div>
                  <div className="bg-black shadow-xl px-8 py-2 rounded-md">
                    <p className="text-white text-xs">Edit List</p>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-white mt-6 border-gray-300 border shadow-lg rounded">
              <div className="flex justify-between p-4">
                <h2 className="font-medium text-gray-600 text-base">
                  BlackList
                </h2>
                <div
                  className="cursor-pointer"
                  onClick={() => setShowBlackList(!showBlackList)}
                >
                  Arrow
                </div>
              </div>
              {showBlackList && (
                <div className="p-4 border-t-2 border-gray-300 flex items-start justify-between flex-wrap">
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">
                      BlackList Addresses
                    </h4>
                    <p className="mt-4">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="text-blue-500 text-sm"
                        rel="noreferrer"
                      >
                        terrra...
                      </a>
                    </p>
                    <p className="mt-4">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="text-blue-500 text-sm"
                        rel="noreferrer"
                      >
                        terrra...
                      </a>
                    </p>
                    <p className="mt-4">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="text-blue-500 text-sm"
                        rel="noreferrer"
                      >
                        terrra...
                      </a>
                    </p>
                    <p className="mt-4">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="text-blue-500 text-sm"
                        rel="noreferrer"
                      >
                        terrra...
                      </a>
                    </p>
                  </div>
                  <div className="bg-black shadow-xl px-8 py-2 rounded-md">
                    <p className="text-white text-xs">Edit List</p>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-white mt-6 border-gray-300 border shadow-lg rounded">
              <div className="flex justify-between p-4">
                <h2 className="font-medium text-gray-600 text-base">
                  Item Activity
                </h2>
                <div
                  className="cursor-pointer"
                  onClick={() => setShowItemActivity(!showItemActivity)}
                >
                  Arrow
                </div>
              </div>
              {showItemActivity && (
                <div className="p-4 border-t-2 border-gray-300 flex items-start justify-between flex-wrap">
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">
                      Item activity
                    </h4>
                    <p className="mt-4">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="text-blue-500 text-sm"
                        rel="noreferrer"
                      >
                        terrra...
                      </a>
                    </p>
                    <p className="mt-4">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="text-blue-500 text-sm"
                        rel="noreferrer"
                      >
                        terrra...
                      </a>
                    </p>
                    <p className="mt-4">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="text-blue-500 text-sm"
                        rel="noreferrer"
                      >
                        terrra...
                      </a>
                    </p>
                    <p className="mt-4">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="text-blue-500 text-sm"
                        rel="noreferrer"
                      >
                        terrra...
                      </a>
                    </p>
                  </div>
                  <div className="bg-black shadow-xl px-8 py-2 rounded-md">
                    <p className="text-white text-xs">Edit List</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
