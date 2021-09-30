//ConnectionBar - Shows a bar referencing wallet in use and button to disconnect
import React from 'react'

//Load Terra-Money Modules
import {
    NetworkInfo,
    WalletProvider,
    ConnectType,
    useWallet,
    WalletStatus,
} from '@terra-money/wallet-provider'

const ConnectionBar = (props) => {
    const {
        status,
        network,
        wallets,
        availableConnectTypes,
        availableInstallTypes,
        connect,
        install,
        disconnect,
    } = useWallet()

    //Parse Address for Display
    const walletData = JSON.parse(JSON.stringify(wallets))
    const dispAddress =
        walletData[0].terraAddress.slice(0, 11) +
        '...' +
        walletData[0].terraAddress.slice(-4)

    return (
        <div id='connection-bar' className='col m-2'>
            <div className='col text-right'>
                <span className='text-light mr-3'>
                    <small>{dispAddress}</small>
                </span>
                {status === WalletStatus.WALLET_CONNECTED && (
                    <button
                        className='btn btn-primary p-1'
                        onClick={() => {
                            disconnect()
                        }}
                    >
                        <img
                            src='./images/connect-icons_extension.png'
                            width='22'
                            className='mr-0'
                        />
                        <span className='pr-1'>Disconnect</span>
                    </button>
                )}
            </div>
        </div>
    )
}

export default ConnectionBar
