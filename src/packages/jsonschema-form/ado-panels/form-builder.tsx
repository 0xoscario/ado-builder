import { JSONSchema7 } from 'json-schema';

const schemasADO = {
  blacklist: require('./blacklist.json'),
  metadata: require('./metadata.json'),
  'nft-details': require('./nft-details.json'),
  royalties: require('./royalties.json'),
  splitter: require('./splitter.json'),
  taxes: require('./taxes.json'),
  timelock: require('./timelock.json'),
  whitelist: require('./whitelist.json'),
};

export const getTitleSchemaPanel = (panel: SchemaPanel): string => {
  return schemasADO[panel.type]['schema']['title'];
};

export const getDescriptionSchemaPanel = (panel: SchemaPanel): string => {
  return schemasADO[panel.type]['schema']['description'];
};

/**
 *
 * @param panels
 * @param defaults
 * @returns
 */
export const generateSchemaPanels = (
  panels: SchemaPanel[],
  defaults?: any
): any => {
  const schemaDefinitions = defaults?.schemaDefinitions || {};
  const schemaProperties = defaults?.schemaProperties || {};

  const uiSchema = defaults?.uiSchema || {};
  const formData = defaults?.formData || {};

  for (const panel of panels) {
    const schemaADO = schemasADO[panel.type];
    console.log('panel', panel);

    // schema
    schemaDefinitions[`${panel.id}`] = schemaADO['schema'];
    schemaDefinitions[`${panel.id}`]['ui:panel'] = true;
    schemaDefinitions[`${panel.id}`]['properties']['$type'] = {
      type: 'string',
      default: panel.type,
    };
    schemaDefinitions[`${panel.id}`]['properties']['$open'] = {
      type: 'boolean',
      default: panel.open || panel.required,
    };
    if (!panel.required) {
      schemaDefinitions[`${panel.id}`]['ui:toggle'] = true;
      schemaDefinitions[`${panel.id}`]['properties']['$enabled'] = {
        type: 'boolean',
        default: false,
        'ui:toggle': true,
      };

      /** 
      
      Support for if, else, then rules
      @see https://github.com/rjsf-team/react-jsonschema-form/pull/2506

      schemaDefinitions[`${panel.id}`]['if'] = {};
      schemaDefinitions[`${panel.id}`]['if']['properties'] = {
        $enabled: {
          enum: [true],
        },
      };
      schemaDefinitions[`${panel.id}`]['then'] = {};
      schemaDefinitions[`${panel.id}`]['then']['required'] =
        schemaDefinitions[`${panel.id}`]['required'];

      schemaDefinitions[`${panel.id}`]['else'] = {};
      schemaDefinitions[`${panel.id}`]['else']['required'] = [];

      schemaDefinitions[`${panel.id}`]['required'] = [];

      */
    }

    if (panel.removable) {
      console.log('removable!!');
      schemaDefinitions[`${panel.id}`]['properties']['$removable'] = {
        type: 'boolean',
        default: panel.removable,
      };
    }

    schemaProperties[`${panel.id}`] = { $ref: `#/definitions/${panel.id}` };

    // ui-schema
    uiSchema[`${panel.id}`] = schemaADO['ui-schema'];
    uiSchema[`${panel.id}`]['$type'] = { 'ui:widget': 'hidden' };
    uiSchema[`${panel.id}`]['$open'] = { 'ui:widget': 'hidden' };
    if (panel.removable) {
      uiSchema[`${panel.id}`]['$removable'] = { 'ui:widget': 'hidden' };
    }

    // form-data
    formData[`${panel.id}`] = schemaADO['form-data'];
    formData[`${panel.id}`]['$enabled'] = panel.enabled;
    if (panel.removable) {
      formData[`${panel.id}`]['$removable'] = true;
    }
  }

  const schema = {
    definitions: schemaDefinitions,
    type: 'object',
    properties: schemaProperties,
  };

  console.log('schema', schema);

  return { schema, uiSchema, formData };
};

/**
 *
 * @param panelsId
 * @param defaults
 * @returns
 */
export const removeSchemaPanels = (panelsId: string[], defaults?: any): any => {
  const schemaDefinitions = defaults?.schemaDefinitions || {};
  const schemaProperties = defaults?.schemaProperties || {};

  const uiSchema = defaults?.uiSchema || {};
  const formData = defaults?.formData || {};

  for (const panelId of panelsId) {
    const id = panelId.split('_').pop();
    delete schemaDefinitions[`${id}`];
    delete schemaProperties[`${id}`];
    delete uiSchema[`${id}`];
    delete formData[`${id}`];
  }

  const schema = {
    definitions: schemaDefinitions,
    type: 'object',
    properties: schemaProperties,
  };

  return { schema, uiSchema, formData };
};
