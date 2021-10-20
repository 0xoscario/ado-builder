import { useWallet } from '@terra-money/wallet-provider';
import axios from 'axios';
import { useQuery } from 'react-query';

type Denom = string;
type Amount = string;
type GasPrices = Record<Denom, Amount>;

const useGasPrices = () => {
  const { network } = useWallet();

  return useQuery('gasPrices', async () => {
    const { data } = await axios.get<GasPrices>('/v1/txs/gas_prices', {
      baseURL: network.lcd.replace('lcd', 'fcd'),
    });

    return data;
  });
};

export const useGasPrice = (denom: Denom) => {
  const { data: gasPrices } = useGasPrices();
  return gasPrices ? gasPrices[denom] + denom : undefined;
};

export default useGasPrices;
