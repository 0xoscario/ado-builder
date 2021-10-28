// Import Hooks
import useAddress from './useConnectedAddress';
import useLCDClient from './useLCDClient';
import useGasPrices from './useGasPrices'; //to be integrated into making costs

// Import Terra-Money
import { 
    MsgExecuteContract,
} from '@terra-money/terra.js';

import {
    useConnectedWallet,
    UserDenied,
    CreateTxFailed,
    TxFailed,
    Timeout,
    TxUnspecifiedError
  } from '@terra-money/wallet-provider';

const useExecuteContract = async (contractAddr, executeMsg, coins={}) => {
    const connectedWallet = useConnectedWallet();
    
    const txResult = {
        txResult: null,
        txHash: null,
        txError: null
    };

    const executeContractMsg = [
        new MsgExecuteContract(
        connectedWallet.walletAddress,                
        contractAddr,                   
        JSON.parse(executeMsg),
        coins
        ),  
    ]

    /* assign gas costs */
    const gasPrices = { uusd: 0.0123 }; //false number needs to be adjsuted to true pricing
    const feeDenoms = ["uusd"];
    const costs = await useLCDClient().tx.estimateFee(
        connectedWallet.walletAddress, 
        executeContractMsg, 
        { gasPrices: gasPrices, feeDenoms: feeDenoms }
      )
      .catch((error) => {
        throw `Costs Fee Error: ${error instanceof Error ? error.message : String(error)}`;
      })

    await connectedWallet.post({
        msgs: executeContractMsg,
        fee: costs
    }).then(async (result) => {
        txResult.txResult = result
        txResult.txHash = result.result.txhash
        //txResult.txInfo = await retrieveTxInfo(result.result.txhash)

    }).catch((error) => {
        if (error instanceof UserDenied) {
        throw 'User Denied';
        } else if (error instanceof CreateTxFailed) {
        throw `Create Tx Failed: ${error.message}`;
        } else if (error instanceof TxFailed) {
        throw `Tx Failed: ${error.message}`;
        } else if (error instanceof Timeout) {
        throw 'Timeout';
        } else if (error instanceof TxUnspecifiedError) {
        throw `Unspecified Error: ${error.message}`;
        } else {
        throw `Unknown Error: ${error instanceof Error ? error.message : String(error)}`;
        }
})


return txResult
}

export default useExecuteContract;