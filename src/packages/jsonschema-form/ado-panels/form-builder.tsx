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

export const generateSchemaPanels = (panels: SchemaPanel[]): any => {
  const schemaDefinitions = {};
  const schemaProperties = {};

  const uiSchema = {};
  const formData = {};

  for (const panel of panels) {
    const schemaADO = schemasADO[panel.type];

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
    }

    schemaProperties[`${panel.id}`] = { $ref: `#/definitions/${panel.id}` };

    // ui-schema
    uiSchema[`${panel.id}`] = schemaADO['ui-schema'];
    uiSchema[`${panel.id}`]['$type'] = { 'ui:widget': 'hidden' };
    uiSchema[`${panel.id}`]['$open'] = { 'ui:widget': 'hidden' };

    // form-data
    formData[`${panel.id}`] = schemaADO['form-data'];
  }

  const schema = {
    definitions: schemaDefinitions,
    type: 'object',
    properties: schemaProperties,
  };

  return { schema, uiSchema, formData };
};
