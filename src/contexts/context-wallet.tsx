import { ConnectedWallet } from '@terra-money/wallet-provider';
import { createContext } from 'react';

export const WalletContext = createContext<ConnectedWallet>(undefined!);
