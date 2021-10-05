import {
  StaticWalletProvider,
  WalletProvider,
} from '@terra-money/wallet-provider';

const mainnet = {
  name: 'mainnet',
  chainID: 'columbus-4',
  lcd: 'https://lcd.terra.dev',
};

const testnet = {
  name: 'testnet',
  chainID: 'tequila-0004',
  lcd: 'https://tequila-lcd.terra.dev',
};

export default function AppProviders({ children }) {
  return process.browser ? (
    <WalletProvider
      defaultNetwork={mainnet}
      walletConnectChainIds={{
        0: testnet,
        1: mainnet,
      }}
    >
      {children}
    </WalletProvider>
  ) : (
    <StaticWalletProvider defaultNetwork={mainnet}>
      {children}
    </StaticWalletProvider>
  );
}
