import { Fragment, useState, useEffect, useCallback, useRef } from 'react';
import type { NextPage } from 'next';
import { Dialog, Transition } from '@headlessui/react';
import { CogIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { v4 as uuidv4 } from 'uuid';
import Layout from '@/components/DefaultLayout';
import useWarnIfUnsavedChanges from '@/hooks/useWarnIfUnsavedChanges';
import JsonSchemaForm from '@/packages/jsonschema-form/components/JsonSchemaForm';

/* Resolve typecheck failures when passing JSON props */
import { JSONSchema7 } from 'json-schema'; //Appropriate Type for props
import {
  generateSchemaPanels,
  removeSchemaPanels,
} from '@/packages/jsonschema-form/ado-panels/form-builder';
import { useCustomEventListener } from '@/packages/react-custom-events';
import AddPanel from '@/packages/jsonschema-form/components/Modal/AddPanel';
import SubmitPanels from '@/packages/jsonschema-form/components/Modal/SubmitPanels';

const SEARCH_PANELS: string[] = ['taxes', 'royalties'];

const NFT: NextPage = () => {
  const formDataRef = useRef(null);

  const [dirty, setDirty] = useState(false);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [schema, setSchema] = useState(null);
  const [uiSchema, setUiSchema] = useState(null);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const formPanels = generateSchemaPanels([
      { type: 'nft-details', id: uuidv4(), required: true },
      { type: 'metadata', id: uuidv4() },
      { type: 'whitelist', id: uuidv4() },
      { type: 'taxes', id: uuidv4() },
      { type: 'royalties', id: uuidv4() },
    ]);
    updateFormPanels(formPanels);
  }, []);

  useCustomEventListener('form:panel:delete', (data: any) => {
    removeModule(data.id);
  });

  useWarnIfUnsavedChanges(dirty);

  function updateFormPanels(form) {
    setSchema(form.schema);
    setUiSchema(form.uiSchema);
    setFormData(form.formData);
  }

  const removeModule = useCallback(
    (panelId: string) => {
      const formPanels = removeSchemaPanels([panelId], {
        schemaDefinitions: schema.definitions,
        schemaProperties: schema.properties,
        uiSchema: uiSchema,
        formData: { ...formData, ...formDataRef.current },
      });

      updateFormPanels(formPanels);
    },
    [schema, uiSchema, formData]
  );

  const addModule = useCallback(
    (panel: SchemaPanel) => {
      const formPanels = generateSchemaPanels([panel], {
        schemaDefinitions: schema.definitions,
        schemaProperties: schema.properties,
        uiSchema: uiSchema,
        formData: { ...formData, ...formDataRef.current },
      });
      updateFormPanels(formPanels);
    },
    [schema, uiSchema, formData]
  );

  function submitForm({ formData }) {
    setIsSubmitOpen(true);
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
            {schema && (
              <JsonSchemaForm
                schema={schema as JSONSchema7}
                uiSchema={uiSchema as JSONSchema7}
                formData={formData as JSONSchema7}
                onChange={({ formData }) => {
                  if (!dirty && formDataRef.current) {
                    setDirty(true);
                  }
                  formDataRef.current = formData;
                }}
                onSubmit={submitForm}
              >
                <div className="text-center border-4 border-dashed	border-gray-300">
                  <button
                    type="button"
                    className="my-8 inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-gray-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 sm:text-sm"
                    onClick={() => {
                      setIsSearchOpen(true);
                    }}
                  >
                    <PlusCircleIcon
                      className="-ml-0.5 mr-2 h-4 w-4"
                      aria-hidden="true"
                    />
                    Add ADO Panel
                  </button>
                </div>
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
            )}
          </div>
          {/** [BEGIN] MODALS **/}
          <AddPanel
            open={isSearchOpen}
            panelsId={SEARCH_PANELS}
            onClose={setIsSearchOpen}
            onSelect={(value) => {
              addModule(value);
              setIsSearchOpen(false);
            }}
          />
          <SubmitPanels open={isSubmitOpen} onClose={setIsSubmitOpen} />
          {/** [END] MODALS **/}
        </div>
      </section>
    </Layout>
  );
};

export default NFT;
