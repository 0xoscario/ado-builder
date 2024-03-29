import { Fragment, useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { Dialog, Transition } from '@headlessui/react';
import { CogIcon, CheckIcon } from '@heroicons/react/outline';
import Layout from '@/components/DefaultLayout';
import JsonSchemaForm from '@/packages/jsonschema-form/components/JsonSchemaForm';

import useUUID from '@/hooks/useUUID';
/* Resolve typecheck failures when passing JSON props */
import { JSONSchema7 } from 'json-schema'; //Appropriate Type for props
import { generateSchemaPanels } from '@/packages/jsonschema-form/ado-panels/form-builder';

const NFT: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  //List all available panels to be shown at one time for proofing all ado-panels
  const { schema, uiSchema, formData } = generateSchemaPanels([
    { type: 'nft-details', id: useUUID() },
    { type: 'metadata', id: useUUID() },
    { type: 'whitelist', id: useUUID() },
    { type: 'taxes', id: useUUID() },
    { type: 'royalties', id: useUUID() },
    { type: 'blacklist', id: useUUID() },
    { type: 'splitter', id: useUUID() },
    { type: 'timelock', id: useUUID() },
  ]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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
          <div className="mt-12 max-w-4xl mx-auto">
            <JsonSchemaForm
              schema={schema as JSONSchema7}
              uiSchema={uiSchema as JSONSchema7}
              formData={formData as JSONSchema7}
              /** 
              onChange={({ formData }) => {
                console.log('formData', formData);
              }}*/
              onSubmit={openModal}
            >
              <div className="text-center">
                <button
                  type="submit"
                  className="my-8 inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 sm:text-sm"
                >
                  <CogIcon
                    className="-ml-0.5 mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  Publish NFT
                </button>
              </div>
            </JsonSchemaForm>
          </div>
          <Transition.Root show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed z-10 inset-0 overflow-y-auto"
              onClose={closeModal}
            >
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                    <div>
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <CheckIcon
                          className="h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-lg leading-6 font-medium text-gray-900"
                        >
                          Payment successful
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequatur amet labore.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6 text-center">
                      <button
                        type="button"
                        className="my-8 inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 sm:text-sm"
                        onClick={closeModal}
                      >
                        Go back to my assets
                      </button>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        </div>
      </section>
    </Layout>
  );
};

export default NFT;
