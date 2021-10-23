import {
  Fragment,
  useState,
  useEffect,
  ReactNode,
  useMemo,
  FunctionComponent,
} from 'react';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import { Popover } from '@headlessui/react';

import { LCDClient, Coin } from '@terra-money/terra.js';
import {
  useWallet,
  WalletStatus,
  useConnectedWallet,
  ConnectType,
} from '@terra-money/wallet-provider';
import { LightningBoltIcon } from '@heroicons/react/outline';
import { AnimatePresence, motion } from 'framer-motion';

import Terra from '@/assets/terra.svg';
import WalletConnect from '@/assets/walletconnect.svg';
import { TERRA_TOKENS, DENOM_UNIT } from '@/constants/terra';
import { formatAddressShort } from '@/utils/address';

const size = { width: 24, height: 24 };

type Props = {
  label?: string;
};

const ConnectedButton: FunctionComponent<Props> = ({ label = 'Connect' }) => {
  const {
    status,
    availableConnectTypes,
    availableInstallTypes,
    install,
    connect,
    disconnect,
  } = useWallet();

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const connectedWallet = useConnectedWallet();

  const [showConnectOptions, setShowConnectOptions] = useState(false);
  const [bank, setBank] = useState('');

  const lcd = useMemo(() => {
    if (!connectedWallet) {
      return null;
    }

    return new LCDClient({
      URL: connectedWallet.network.lcd,
      chainID: connectedWallet.network.chainID,
    });
  }, [connectedWallet]);

  useEffect(() => {
    if (connectedWallet && lcd) {
      setShowConnectOptions(false);

      const balances: Record<string, number> = {};
      lcd.bank.balance(connectedWallet.walletAddress).then((coins) => {
        coins.toArray().forEach(async (coin: Coin) => {
          const item = coin.toData();
          const denom = item.denom;
          const amount = parseFloat(item.amount) / DENOM_UNIT;
          const symbol = TERRA_TOKENS[denom];
          balances[symbol] = amount;
        });
        const ust = balances['UST']?.toFixed(2).toString() ?? '0.00';
        setBank(ust);
      });
    } else {
      setBank('');
    }
  }, [connectedWallet, lcd]);

  type Button = { label: string; image: ReactNode; onClick: () => void };
  const buttons = ([] as Button[])
    .concat(
      availableInstallTypes.includes(ConnectType.CHROME_EXTENSION)
        ? {
            label: 'Terra Station Extension',
            image: <Terra {...size} />,
            onClick: () => install(ConnectType.CHROME_EXTENSION),
          }
        : []
    )
    .concat(
      availableConnectTypes.includes(ConnectType.WEBEXTENSION)
        ? {
            label: 'Terra Station Extension',
            image: <Terra {...size} />,
            onClick: () => connect(ConnectType.WEBEXTENSION),
          }
        : availableConnectTypes.includes(ConnectType.CHROME_EXTENSION)
        ? {
            label: 'Terra Station Extension',
            image: <Terra {...size} />,
            onClick: () => connect(ConnectType.CHROME_EXTENSION),
          }
        : []
    )
    .concat(
      availableConnectTypes.includes(ConnectType.WALLETCONNECT)
        ? {
            label: 'Terra Station Mobile',
            image: <WalletConnect {...size} />,
            onClick: () => connect(ConnectType.WALLETCONNECT),
          }
        : []
    );

  /* Wallet Connected / Not Connected Button Display */
  return (
    <>
      {status === WalletStatus.WALLET_NOT_CONNECTED ? (
        <>
          <button
            type="button"
            className="inline-flex items-center m-4 px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 sm:text-sm"
            onClick={() => setShowConnectOptions(true)}
          >
            <LightningBoltIcon className="h-5 w-8" aria-hidden="true" />
            <span className="mr-4">{label}</span>
          </button>
        </>
      ) : status === WalletStatus.WALLET_CONNECTED ? (
        <>
          <Popover className="relative">
            <Popover.Button className="inline-flex m-4 items-center py-1.5 border-transparent font-medium rounded border text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 shadow">
              <span className="text-xs mx-4">
                {formatAddressShort(connectedWallet.walletAddress)}
              </span>
            </Popover.Button>

            <Popover.Panel className="absolute z-10">
              <div className="bg-white p-4">
                <button onClick={() => disconnect()}>Disconnect</button>
              </div>
            </Popover.Panel>
          </Popover>
        </>
      ) : null}

      <DialogOverlay
        isOpen={showConnectOptions}
        onDismiss={(): void => setShowConnectOptions(false)}
        aria-label="dialog"
        className="fixed bg-black bg-opacity-70 shadow-2xl top-0 right-0 bottom-0 left-0 z-10 overflow-y-scroll"
      >
        <AnimatePresence>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{
              ease: 'easeInOut',
              duration: 0.5,
            }}
          >
            <DialogContent
              aria-label="dialog"
              className="m-auto focus:outline-none"
            >
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <div className="inline-block align-bottom rounded-lg px-2  pb-4 bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                  <div className="pb-6 pt-2 text-center leading-6 font-medium text-gray-900">
                    <span>
                      <LightningBoltIcon
                        className="h-5 w-8 inline"
                        aria-hidden="true"
                      />
                      Connect to a wallet
                    </span>
                  </div>
                  <div>
                    <>
                      {Object.entries(buttons).map(
                        ([key, { label, image, onClick }]) => (
                          <button
                            className="inline-flex ml-2 my-2 px-4 py-4 w-80 items-center  border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 sm:text-sm"
                            onClick={onClick}
                            key={key}
                          >
                            <span className="ml-4 mr-6">{image}</span>
                            <span>{label}</span>
                          </button>
                        )
                      )}
                    </>
                  </div>
                </div>
              </div>
            </DialogContent>
          </motion.div>
        </AnimatePresence>
      </DialogOverlay>
    </>
  );
};

export default ConnectedButton;
