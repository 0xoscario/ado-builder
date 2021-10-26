import { v4 as uuidv4 } from 'uuid';
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

export const generateSchema = (panels: string[]): any => {
  const schemaDefinitions = [];
  const schemaProperties = [];

  const uiSchema = [];
  const formData = [];

  for (const panel of panels) {
    const schemaADO = schemasADO[panel];
    const panelID = uuidv4();

    schemaDefinitions[`${panelID}`] = schemaADO['schema'];
    schemaProperties[`${panelID}`] = { $ref: `#/definitions/${panelID}` };

    uiSchema[`${panelID}`] = schemaADO['ui-schema'];
    formData[`${panelID}`] = schemaADO['form-data'];
  }

  const schema = {
    definitions: schemaDefinitions,
    type: 'object',
    properties: schemaProperties,
  };

  return { schema, uiSchema, formData };
};
