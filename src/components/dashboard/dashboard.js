// Dashboard(setShowDashboard, setShowMissionDashboard) - Display page for summary information and app section launching

import React, {useState, useEffect} from 'react'

//Load Content Components
//import Preloader from './modal-preloader'
import ConnectionBar from '../connection-bar'
import CoinBalance from '../coin-balance' //parses coin data for displaying
import AssetGallery from '../asset-gallery'
import ANDRChart from '../charts/andr-value'
//sub-pages
import TemplatePage from './templates'
import PreviewPage from './preview'
import TransactionsPage from './transactions'
import BurnPage from './burn'
import ArchivePage from './archive'


//Load Terra-Money Modules
import { LCDClient, Coin } from '@terra-money/terra.js';
import {NetworkInfo, WalletProvider, ConnectType, useWallet, useConnectedWallet, WalletStatus} from '@terra-money/wallet-provider';
import usrWalletData from '../../modules/walletData'
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Dashboard = (props) => {

    //Load Wallet Information for Retrieval
    //const {status, network, wallets, availableConnectTypes, availableInstallTypes, connect, install, disconnect} = useWallet();
    const {network, wallets, availableConnectTypes, availableInstallTypes} = useWallet();
    const userWallet = useConnectedWallet()
    const [balance, setBalance] = useState("")

    //Connect to network declared in the connected wallet
    const terra = new LCDClient({
        URL: network.lcd,
        chainID: network.chainID,
    });

    /* //connect to soju testnet
    const terra = new LCDClient({
        URL: 'https://tequila-lcd.terra.dev',
        chainID: 'tequila-0004',
    });
     */

    const bank =  terra.bank.balance(userWallet.walletAddress).then((coins) => {
        setBalance(coins.toString())
      });
    
    const usrBalance = balance.split(',')

    //Load swap rates from wallet connected chain
    usrWalletData.fetchSwapRates('uusd')
    //usrWalletData.fetchSwapRates('uusd', setShowPreloader, setShowDash)
    
    //Assign Accumulator for Total Account Balance
    const [accountValue, setAccountValue] = useState("0")

    /* Navigation State Toggles */
    const [showPreloader, setShowPreloader] = useState(false)
    const [showDash, setShowDash] = useState(true)
    const [showTemplates, setShowTemplates] = useState(false)
    const [showTransactions, setShowTransactions] = useState(false)
    const [showPreview, setShowPreview] = useState(false)
    const [showBurn, setShowBurn] = useState(false)
    const [showArchive, setShowArchive] = useState(false)

    /* Hide All Open Content Components */
    /* Triggered with navbar and button onclick() along with state change for selected navitem */
    function hideAll() {
        setShowPreloader(false)
        setShowDash(false)
        setShowTemplates(false)
        setShowTransactions(false)
        setShowPreview(false)
        setShowBurn(false)
        setShowArchive(false)
    }

    //Date object for Use in Dashboard
    const [connectionDate, setConnectionDate] = useState(new Date())

    //Preloader Update Managers
    const [loadProgress, setLoadProgress] = useState(false)

    // one run options
    useEffect(() => {
        //Reset account accumulator
        usrWalletData.resetAccumulators()
        // usrWalletData.acctValue = 0 /* Deprecated for resetAccumulators */
    },[]);
/*
    
    useEffect(() => {
        console.log("Change in Status")
        return(<p>CHange!</p>)
    },[usrWalletData.swapRatesLoaded]);
    

    useEffect(() => {
        console.log("Content: " + loadProgress)
        return (<p>Content return</p>)
    });
    */


            return (
                <div id="wrapper" className="m-0">
                    {showDash? 
                    <div id="dashWrapper" className="dash-wrapper row m-0 h-100">
                        <div id="sidebar" className="col-3 dark-opacity text-light pt-5 p-3">
                        <div id="headerBar" className="container-fluid text-center text-light">
                            <img src="./images/adp-logo.png" height="40" className="pl-2 pb-2" />
                            <p className="h1" className="display-4 pb-0 mb-0">Andromeda</p>
                            <p className="h3" className="">Functional Terra NFTs</p>
                        </div>
                        <div id="assets" className="pt-4">
                            <p className="h2" className="">My Assets</p>
                            <hr className="text-light" />
                            
                            { /*
                            <div id="nfts" className="">
                                <p className="h5" className="text-light display-6">NFTs</p>
                                <div id="NFTs" className="light-opacity rounded-lg p-4 mb-3">
                                    <div>
                                        <div className="row">
                                            <p className="h5" className="col">NFT Title</p>
                                            <p className="h6" className="col-5 text-right">
                                                <button type="button" className="btn btn-primary small p1">Details</button>
                                            </p>
                                        </div>
                                        <hr />
                                        <div id="titles" className="row mt-4">
                                            <p className="h5" className="col-6 text-dark">Owner</p>
                                            <p className="h5" className="col-6 text-dark text-right pr-3">Value</p>
                                        </div>
                                        <div id="titles" className="row">
                                            <p className="col-6 primary">Digital Art</p>
                                            <p className="col-6 text-right">$8,000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            */}
                            
                            <div id="tokens" className="">
                                <p className="h5" className="text-light display-6">Tokens</p>                                
                            {/* TEMP-HACK : Using Token Count Doubler to patch in over accumulation issue with DeSync Component Loading */}
                                {usrWalletData.tokensCounted >= (usrBalance.length * 2) && (
                                    <span>{usrWalletData.resetAccumulators()}</span>
                                )}
                                {usrBalance.map((coinBalance) => (
                                        <div key={coinBalance} id="coins" className="light-opacity rounded-lg p-4 mb-3">
                                            <CoinBalance dspType="Dash" coinData={coinBalance} setAccountValue={setAccountValue}/>
                                        </div>  
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                        <div id="content" className="col">
                            <div id="topbar" className="row mb-0">
                                <ConnectionBar />
                            </div>
                            <div id="topnavbar" className="row ml-4 mb-0 p-0">
                                <nav className="navbar navbar-expand-lg navbar-dark h5">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav">
                                            <li className="nav-item pr-3 border-right active">
                                                <a 
                                                    className="nav-link" 
                                                    onClick={() => {
                                                        setShowDash(true)
                                                    }}
                                                    href="/">
                                                    Dashboard <span className="sr-only">(current)</span>
                                                </a>
                                            </li>
                                            <li className="nav-item pl-3 pr-3 border-right">
                                                <a className="nav-link disabled" href="#">Marketplace</a>
                                            </li>
                                            {/*
                                            <li className="nav-item pl-3 pr-3 border-right">
                                                <a 
                                                    className="nav-link" 
                                                    onClick={() => {
                                                        hideAll(),
                                                        setShowTransactions(true)
                                                    }}   
                                                    href="#">
                                                    Transactions
                                                </a>
                                            </li>
                                                */}
                                            <li className="nav-item pl-3 pr-3 border-right">
                                                <a 
                                                    className="nav-link" 
                                                    onClick={() => {
                                                        hideAll(),
                                                        setShowBurn(true)
                                                    }}
                                                    href="#"
                                                    >
                                                    My Projects
                                                </a>
                                            </li>
                                            <li className="nav-item pl-3">
                                                <a 
                                                    className="nav-link" 
                                                    onClick={() => {
                                                        hideAll(),
                                                        setShowArchive(true)
                                                    }}
                                                    href="#"
                                                    >
                                                    Contracts
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
    
                            <div className="row  text-light ml-4 mr-4 mt-1">
                                <div className="col rounded-lg light-opacity p-4">
                                    <img src="./images/connect-icons_mobile.png" width="40" className="float-left" />
                                    <p className="h5 float-left p-2">Create an NFT Collectible, DeFi Instrument or other smart contract</p>
                                    <button 
                                        className="btn btn-primary float-right pad-btn"
                                        onClick={() => {
                                            hideAll(),
                                            setShowTemplates(true)
                                        }}    
                                    >Launch Builder</button>
                                </div>
                            </div>
                            
                            <div className="row text-light m-4">
                                <p className="h3 col-12 display-5 mt-3">Recent Account Activity</p>
                                <div className="col rounded-lg light-opacity p-4">
                                    <span className="">Wallet connected to Andromeda Protocol</span>
                                    <span className="float-right"><b>{connectionDate.toDateString()}</b></span><span className="float-right ml-4 mr-4">|</span> <span className="float-right">{connectionDate.toTimeString()}</span>
                                </div>
                            </div>
    
                            <div id="value-review" className="row text-light m-3">
                                <div className="col-6">
                                    <p className="col-12 h3 display-5 mt-3">Account Value</p>
                                    <div className="light-opacity rounded-lg p-4">
                                        <p className="col-12 h3 display-5 mt-3">{usrWalletData.currency(usrWalletData.acctValue)}<span className="disabled"> USD</span></p>
                                    </div>
    
                                    <p className="col-12 h3 display-5 mt-3">Total Active Missions</p>
                                    <div className="light-opacity rounded-lg p-4">
                                        <p className="col-12 h3 display-5 mt-3">#</p>
                                    </div>
    
                                    <p className="col-12 h3 display-5 mt-3">Total Tokens Minted</p>
                                    <div className="light-opacity rounded-lg p-4">
                                        <p className="col-12 h3 display-5 mt-3">#</p>
                                    </div>
    
                                </div>
                                <div className="col-6">
                                    <div className="row d-flex">
                                        <p className="col h3 display-5 mt-3">ANDR Price</p>
                                    </div>
                                    <div className="light-opacity rounded-lg p-4">
                                        <div className="bright-opacity rounded-lg p-2">
                                            <span className="col-2 offset-10 text-success">+0.54</span>
                                            <ANDRChart />
                                        </div>
                                    </div>
    
                                    <p className="col-12 h3 display-5 mt-3">Terra Status</p>
                                    <div className="light-opacity rounded-lg p-4">
                                        <div className="text-light m-1">
                                            <span><small>
                                                {JSON.stringify(
                                                    {
                                                        status,
                                                        network,
                                                        wallets,
                                                        availableConnectTypes,
                                                        availableInstallTypes,
                                                    },
                                                    null,
                                                    2,
                                                )}
                                            </small></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div id="mission-review" className="row text-light m-3">
                                <div className="col-6">
                                    <p className="col-12 h3 display-5 mt-3">Data Box</p>
                                    <div className="light-opacity rounded-lg p-4">
                                        <p className="col-12 h3 display-5 mt-3"> </p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <p className="col-12 h3 display-5 mt-3">Data Box</p>
                                    <div className="light-opacity rounded-lg p-4">
                                        <p className="col-12 h3 display-5 mt-3"> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div id="subPageWrapper" className="m-0 p-0">
                        
                        {showTemplates? <TemplatePage setShowDash={setShowDash} setShowDashboard={props.setShowDashboard} setShowMissionDashboard={props.setShowMissionDashboard}/> : null}
                        {showTransactions? <TransactionsPage setShowDash={setShowDash}/> : null}
                        {showBurn? <BurnPage setShowDash={setShowDash}/> : null}
                        {showArchive? <ArchivePage setShowDash={setShowDash}/> : null}
                    </div>
                    }
                </div>
            )                        
}
// {/* showPreloader? <Preloader confirmSwapRate={usrWalletData.confirmSwapRate()} /> : null */}


export default Dashboard