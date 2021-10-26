import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { CogIcon } from '@heroicons/react/outline';
import { Switch } from '@headlessui/react';
import { classnames } from '@/utils/styles';
import Layout from '@/components/DefaultLayout';
import JsonSchemaForm from '@/packages/jsonschema-form/components/JsonSchemaForm';

import useUUID from '@/hooks/useUUID';
/* Resolve typecheck failures when passing JSON props */
import { JSONSchema7 } from 'json-schema'; //Appropriate Type for props
import { generateSchema } from '@/packages/jsonschema-form/ado-panels/form-builder';

const NFT: NextPage = () => {
  const { schema, uiSchema, formData } = generateSchema([
    { type: 'nft-details', id: useUUID() },
    { type: 'whitelist', id: useUUID() },
    { type: 'taxes', id: useUUID() },
    { type: 'royalties', id: useUUID() },
    { type: 'blacklist', id: useUUID() },
    { type: 'splitter', id: useUUID() },
    { type: 'timelock', id: useUUID() },
  ]);

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
              onSubmit={() => console.log('form submitted')}
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
        </div>
      </section>
    </Layout>
  );
};

export default NFT;
