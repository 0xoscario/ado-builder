interface SchemaPanel {
  id: string;
  type: SchemaPanelType;
  open?: boolean;
  required?: boolean;
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
