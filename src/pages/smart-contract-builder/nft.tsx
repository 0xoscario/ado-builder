//import { useState } from 'react';
import type { NextPage } from 'next';
import { CogIcon } from '@heroicons/react/outline';
import { Switch } from '@headlessui/react';
import { classnames } from '@/utils/styles';
import Layout from '@/components/DefaultLayout';

const NFT: NextPage = () => {
  return (
    <Layout title="Andromeda">
      <section className="text-gray-600">
        <div className="container mx-auto">
          <div className="flex flex-col text-center w-full mt-4 mb-8">
            <h1 className="pb-0 sm:text-2xl text-xl font-medium title-font text-gray-900">
              NFT Collectible
            </h1>
            <p className="text-sm text-gray-500">
              Configure draft of your NFT.
            </p>
          </div>
          <form action="#" method="POST" className="mt-12 max-w-4xl mx-auto">
            {/** {Profile} */}
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Profile
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      This information will be displayed publicly so be careful
                      what you share.
                    </p>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="grid gap-y-6 ">
                      {/** Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name your NFT
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="mt-1 py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                        <p className="text-xs mt-2 text-gray-400">
                          Give your creation a name you’ll easily identify it
                          with.
                        </p>
                      </div>
                      {/** Symbol */}
                      <div>
                        <label
                          htmlFor="symbol"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Create a NFT symbol
                        </label>
                        <input
                          type="text"
                          name="symbol"
                          id="symbol"
                          className="mt-1 py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                        <p className="text-xs mt-2 text-gray-400">
                          A publicly searchable identifier.
                        </p>
                      </div>
                      {/** Link Image */}
                      <div>
                        <label
                          htmlFor="url"
                          className="block text-sm font-medium text-gray-700"
                        >
                          External link / url to image
                        </label>
                        <input
                          type="text"
                          name="url"
                          id="url"
                          className="mt-1 py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                        <p className="text-xs mt-2 text-gray-400">
                          Where users will go to loearn more about this item.
                        </p>
                      </div>
                      <div>
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Message
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          rows={4}
                          className="mt-1 py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                          defaultValue={''}
                        />
                        <p className="text-xs mt-2 text-gray-400">
                          This will be included on the item&apos;s detail page. -
                          Markdown syntax is supported.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="my-8 inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 sm:text-sm"
              >
                <CogIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                Publish NFT
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default NFT;
