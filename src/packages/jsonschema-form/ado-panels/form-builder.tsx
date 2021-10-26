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

export const generateSchema = (panels: SchemaPanel[]): any => {
  const schemaDefinitions = [];
  const schemaProperties = [];

  const uiSchema = [];
  const formData = [];

  for (const panel of panels) {
    const schemaADO = schemasADO[panel.type];

    schemaDefinitions[`${panel.id}`] = schemaADO['schema'];
    schemaProperties[`${panel.id}`] = { $ref: `#/definitions/${panel.id}` };

    uiSchema[`${panel.id}`] = schemaADO['ui-schema'];
    formData[`${panel.id}`] = schemaADO['form-data'];
  }

  const schema = {
    definitions: schemaDefinitions,
    type: 'object',
    properties: schemaProperties,
  };

  return { schema, uiSchema, formData };
};
