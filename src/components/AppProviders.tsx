import { FunctionComponent, ReactNode } from 'react';

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
  chainID: 'bombay-12',
  lcd: 'https://bombay-lcd.terra.dev',
};

type Props = {
  children?: ReactNode;
};

const AppProviders: FunctionComponent<Props> = ({ children }) => {
  return process.browser ? (
    <WalletProvider
      defaultNetwork={testnet}
      walletConnectChainIds={{
        0: testnet,
        /** 1: mainnet, **/
      }}
    >
      {children}
    </WalletProvider>
  ) : (
    <StaticWalletProvider defaultNetwork={testnet}>
      {children}
    </StaticWalletProvider>
  );
};

export default AppProviders;
