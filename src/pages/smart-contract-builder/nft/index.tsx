import { useState } from 'react';
import type { NextPage } from 'next';
import { CogIcon } from '@heroicons/react/outline';
import { Switch } from '@headlessui/react';
import { classnames } from '@/utils/styles';
import Layout from '@/components/DefaultLayout';
import JsonSchemaForm from '@/components/JsonSchemaForm/JsonSchemaForm';

import schema from './schema.json';
import uiSchema from './ui-schema.json';
import givenFormData from './form-data.json';

const NFT: NextPage = () => {
  const [formData, setFormData] = useState(givenFormData);
  return (
    <Layout title="Andromeda">
      <section className="text-gray-600">
        <div className="container mx-auto">
          <JsonSchemaForm
            schema={schema}
            uiSchema={uiSchema}
            formData={formData}
            onChange={({ formData }) => setFormData(formData)}
            onSubmit={() => console.log('form submitted')}
          >
            <div className="text-center">
              <button
                type="submit"
                className="my-8 inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 sm:text-sm"
              >
                <CogIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                Publish NFT
              </button>
            </div>
          </JsonSchemaForm>
        </div>
      </section>
    </Layout>
  );
};

export default NFT;
