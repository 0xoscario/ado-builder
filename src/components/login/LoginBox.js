// LoginBox - Component showing the install and connection options for linking TerraWallet to App
import React from 'react'

//Load Terra-Money Modules
import {
    NetworkInfo,
    WalletProvider,
    ConnectType,
    useWallet,
    WalletStatus,
} from '@terra-money/wallet-provider'

const LoginBox = (props) => {
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

    return (
        <div id='wrapper' className='col-8 offset-lg-2'>
            <div id='loginbox' className='light-opacity rounded-lg m-5 p-5'>
                <div id='login-header' className='text-center text-light'>
                    <img
                        src='./images/adp-logo_labeled.png'
                        className='m-2'
                        height='90'
                    />
                    <p className='h2'>Functional Smart Contracts</p>
                    <div className=''>
                        <p>
                            NFTs and Contracts embeded with governance, rules,
                            royalties, and other commercial terms
                        </p>
                    </div>
                </div>

                <div id='wrapper-buttons' className='col-10 offset-lg-2'>
                    <div id='extension-button-box' className='row'>
                        <div className='col justify-content-center'>
                            {availableInstallTypes.length ? (
                                <button
                                    className='btn btn-primary w-75 mt-3 mb-4 p-3'
                                    onClick={() => {
                                        install('CHROME_EXTENSION')
                                    }}
                                >
                                    <span className='float-left mt-2'>
                                        Install Terra Station Extension
                                    </span>
                                    <img
                                        src='./images/connect-icons_extension.png'
                                        width='42'
                                        className='float-right'
                                    />
                                </button>
                            ) : (
                                status ===
                                    WalletStatus.WALLET_NOT_CONNECTED && (
                                    <button
                                        className='btn btn-primary w-75 mt-3 mb-4 p-3'
                                        onClick={() => {
                                            connect('CHROME_EXTENSION')
                                            //props.setShowDashboard(true)
                                        }}
                                    >
                                        <span className='float-left mt-2'>
                                            Connect Terra Station Extension
                                        </span>
                                        <img
                                            src='./images/connect-icons_extension.png'
                                            width='42'
                                            className='float-right'
                                        />
                                    </button>
                                )
                            )}
                        </div>
                    </div>

                    <div id='mobile-button-box' className='row'>
                        <div className='col justify-content-center'>
                            <button
                                className='btn btn-primary w-75 p-3'
                                onClick={() => {
                                    connect('WALLETCONNECT')
                                }}
                            >
                                <span className='float-left mt-2'>
                                    Connect Terra Station Mobile
                                </span>
                                <img
                                    src='./images/connect-icons_mobile.png'
                                    width='42'
                                    className='float-right'
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginBox
