import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { FunctionComponent, ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@/packages/apollo/apolloClient';
import {
  StaticWalletProvider,
  WalletProvider,
} from '@terra-money/wallet-provider';

const MAINNET = {
  name: 'mainnet',
  chainID: 'columbus-4',
  lcd: 'https://lcd.terra.dev',
};

const TESTNET = {
  name: 'testnet',
  chainID: 'bombay-12',
  lcd: 'https://bombay-lcd.terra.dev',
};

// app

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  const apolloClient = useApollo(pageProps);

  return (
    <WalletProviders>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </WalletProviders>
  );
}
export default MyApp;

// wallet

type Props = {
  children?: ReactNode;
};

const WalletProviders: FunctionComponent<Props> = ({ children }) => {
  return process.browser ? (
    <WalletProvider
      defaultNetwork={TESTNET}
      walletConnectChainIds={{
        0: TESTNET,
        /** 1: MAINNET, **/
      }}
    >
      {children}
    </WalletProvider>
  ) : (
    <StaticWalletProvider defaultNetwork={TESTNET}>
      {children}
    </StaticWalletProvider>
  );
};
