//Main page shown on app launch or when wallet disconnect occurs

import React from 'react'

//Load Terra-Money Modules
import { LCDClient, Coin } from '@terra-money/terra.js'
import {
    NetworkInfo,
    WalletProvider,
    ConnectType,
    useWallet,
    WalletStatus,
} from '@terra-money/wallet-provider'

//Load Content Components
import PrimaryHeaderBar from '../header-bar'
import LoginBox from './LoginBox'

//Load Interface Components & Iconography

//Operational Variables

const LoginPage = (props) => {
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
        <div id='container' className='row m-0'>
            <PrimaryHeaderBar />
            <LoginBox
                setShowLogin={props.setShowLogin}
                setShowDashboard={props.setShowDashboard}
            />
        </div>
    ) //return
} //App

export default LoginPage
