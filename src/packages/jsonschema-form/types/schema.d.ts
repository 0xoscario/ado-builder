interface SchemaPanel {
  id: string;
  type: SchemaPanelType;
  data?: any;
}

type SchemaPanelType =
  | 'blacklist'
  | 'metadata'
  | 'nft-details'
  | 'royalties'
  | 'splitter'
  | 'taxes'
  | 'timelock'
  | 'whitelist';
