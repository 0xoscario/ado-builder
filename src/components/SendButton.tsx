import { useWallet } from '@terra-money/wallet-provider';
import { MsgSend } from '@terra-money/terra.js';
import useConnectedAddress from '../hooks/useConnectedAddress';
import { useGasPrice } from '../hooks/useGasPrices';

const SendButton = () => {
  const { post } = useWallet();
  const address = useConnectedAddress();
  const gasPrices = useGasPrice('uluna');

  if (!gasPrices) return null;

  const send = async () => {
    const msgs = [new MsgSend(address, address, `1uluna`)];
    const memo = 'Test';
    const txOptions = { msgs, memo, gasPrices };
    const response = await post(txOptions);
    console.log(response);
  };

  return <button onClick={send}>Send</button>;
};

export default SendButton;
