interface SchemaPanel {
  id: string;
  type: SchemaPanelType;
  open?: boolean;
  required?: boolean;
  enabled?: boolean;
  removable?: boolean;
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
