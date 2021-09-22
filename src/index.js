import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// Load Bootstrap Configuration Override SCSS
import './scss/custom.scss'

/* Deprecated for Transition from Parcel (resolved Parcel conflict)
//Patch ASync Regenerator Conflicts in Parcel
import 'regenerator-runtime/runtime'
*/

//Load Terra-Money Modules
import {NetworkInfo, WalletProvider, ConnectType, useWallet, WalletStatus} from '@terra-money/wallet-provider';

//Load Content Components
import LoginPage from './components/login/login-page'
import MissionBuilder from './components/mission/mission-builder'
import Dashboard from './components/dashboard/dashboard';
import MissionDashboard from './components/mission/mission-dashboard'


//Wallet Network Options
const testnet = {
    name: 'testnet',
    chainID: 'tequila-0004',
    lcd: 'https://tequila-lcd.terra.dev',
  };

// WalletConnect separates chainId by number.
const walletConnectChainIds = [{Record: 1, NetworkInfo: "testnet"}];


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const App = () => {
    const {status, network, wallets, availableConnectTypes, availableInstallTypes, connect, install, disconnect} = useWallet();

    /* Navigation State Toggles */
    const [showLogin, setShowLogin] = useState(true)
    const [showDashboard, setShowDashboard] = useState(true)
    const [showMissionDashboard, setShowMissionDashboard] = useState("")

    /* Hide All Open Content Components */
    /* Triggered with navbar onclick() along with state change for selected navitem */
    const hideAll = () => {
        setShowLogin(false)
        setShowDashboard(false)
        setShowMissionDashboard("")
    }

    return ( 

        <div id="app-panel-swap">
            {status === WalletStatus.WALLET_NOT_CONNECTED && (
                <LoginPage setShowLogin={setShowLogin} setShowDashboard={setShowDashboard}/>)
            }
            {status === WalletStatus.WALLET_CONNECTED && (
                showDashboard? <Dashboard setShowDashboard={setShowDashboard} setShowMissionDashboard={setShowMissionDashboard} /> : null
            )}
            {status === WalletStatus.WALLET_CONNECTED && (
                showMissionDashboard? <MissionDashboard setShowDashboard={setShowDashboard} showMissionDashboard={showMissionDashboard} setShowMissionDashboard={setShowMissionDashboard} /> : null
            )}
,
                
        </div>
    ) //return
} //App
    
ReactDOM.render(
    <WalletProvider defaultNetwork={testnet}
        walletConnectChainIds={walletConnectChainIds}>
            <App/>
        </WalletProvider>,
    document.getElementById('root')
) //render