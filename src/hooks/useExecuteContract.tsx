// Import Hooks
import useAddress from './useConnectedAddress';
import useLCDClient from './useLCDClient';
import {useGasPrice} from './useGasPrices'; //to be integrated into making costs

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
    
    const tx = {
        costs: null,
        gasPrice: null,
        address: useAddress(),
    }
    tx.gasPrice = useGasPrice("uusd") //reolve for type memo conflicts?

    const txResult = {
        txResult: null,
        txHash: null,
        txError: null
    };

    const executeContractMsg = [
        new MsgExecuteContract(
        tx.address,                
        contractAddr,                   
        JSON.parse(executeMsg),
        coins
        ),  
    ]

    /* assign gas costs 
    const gasPrices = { uusd: 0.0123 }; //false number needs to be adjsuted to true pricing
    const feeDenoms = ["uusd"];
    */
    
    try {
        const costs = await useLCDClient().tx.estimateFee(
            tx.address, 
            executeContractMsg, 
            tx.gasPrice
            //{ gasPrices: gasPrices, feeDenoms: feeDenoms }
        )
        tx.costs = costs
    } catch (error) {
        console.error(`Costs Fee Error: ${error instanceof Error ? error.message : String(error)}`);
    }

    try {
        const result = await connectedWallet.post({
            msgs: executeContractMsg,
            fee: tx.costs
        })
        txResult.txResult = result
        txResult.txHash = result.result.txhash
    } catch (error) {
        if (error instanceof UserDenied) {
            console.error('User Denied');
        } else if (error instanceof CreateTxFailed) {
            console.error(`Failed to create the transaction: ${error.message}`);
        } else if (error instanceof TxFailed) {
            console.error(`Transaction Failed: ${error.message}`);
        } else if (error instanceof Timeout) {
            console.error('Timeout');
        } else if (error instanceof TxUnspecifiedError) {
            console.error(`Unspecified Error: ${error.message}`);
        } else {
            console.error(`Unknown Error: ${error instanceof Error ? error.message : String(error)}`);
        }
    };

return txResult;
}

export default useExecuteContract;