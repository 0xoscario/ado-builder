// MissionDashboard(setShowDashboard, showMissionDashboard, setShowMissionDashboard)
// - Page used to develop, configure, and deploy custom ANDR contracts 
// (Utilises dynamic development to build custom WYSIWG)
import React from 'react'

//Load Content Components
import PrimaryHeaderBar from '../header-bar'
import ConnectionBar from '../connection-bar'
import ModuleSelection from './ModuleSelection'

//Dynamicly Loaded Data Modules
import NFTDetails from './mission-modules/nft-details'
import Whitelist from './mission-modules/whitelist'
import Blacklist from './mission-modules/blacklist'
import Royalties from './mission-modules/royalties'
import Taxes from './mission-modules/taxes'
import Splitter from './mission-modules/splitter'
import TimeLock from './mission-modules/time-lock'
import Metadata from './mission-modules/metadata'
import Reciept from './mission-modules/reciept'
import ESign from './mission-modules/e-sign'

const MissionDashboard = (props) => {

    return (
        <div id="mission-builder-wrapper" className="m-0">
            <ModuleSelection />
            <div id="header">
                <PrimaryHeaderBar />
                <ConnectionBar />
            </div>

            <div id="content-box" className="light-opacity rounded-lg text-light w-80 mt-4 mx-5 mb-2 px-2 py-4">
            
                <div className="col-12 text-right pb-5">
                    <a 
                        className="text-light"
                        onClick={() => {
                            props.setShowMissionDashboard(false),
                            props.setShowDashboard(true)
                        }}>
                        Cancel X
                    </a>
                </div>

                {props.showMissionDashboard === "Custom" && (
                    <div>
                        

                        <div id="content-header" className="col-12 text-center">
                            <p className="h2 text-uppercase">
                                Build A Custom Mission
                            </p>
                            <p className="h5">
                                Add and configure modules to build out your mission functionality.
                            </p>
                        </div>
                    </div>
                )}

                {props.showMissionDashboard !== "Custom" && (
                    <div id="content-header" className="col-12 text-center">
                        <p className="h2 text-uppercase">
                            {props.showMissionDashboard} Collectible
                        </p>
                        <p className="h5">
                            Configure draft of your NFT.
                        </p>
                    </div>
                )}

                
                
                {props.showMissionDashboard === "NFT" && (
                    <div>
                        <NFTDetails />
                    </div>
                )}
                {props.showMissionDashboard === "DeFi" && (
                    <div>
                        <NFTDetails />
                    </div>
                )}
                {props.showMissionDashboard === "Alternate" && (
                    <div>
                        <NFTDetails />
                    </div>
                )}

                {props.showMissionDashboard !== "Custom" && (
                    <div id="extension-header" className="col-12 text-center">
                        <p className="h2 text-uppercase">
                            Add Extensions
                        </p>
                        <p className="h5">
                            Build governance , rules, royalties, and other commercial terms directly into your NFT
                        </p>
                    </div>
                )}
                
                {props.showMissionDashboard === "NFT" && (
                    <div>
                        <Whitelist />
                        <Royalties />
                        <Blacklist />
                        <Taxes />
                        <Splitter />
                        <TimeLock />
                        <Metadata />
                        <Reciept />
                        <ESign />
                    </div>
                )}
                {props.showMissionDashboard === "DeFi" && (
                    <div>
                        <Royalties />
                        <Taxes />
                    </div>
                )}
                {props.showMissionDashboard === "Alternate" && (
                    <div>                        
                        <Taxes />
                        <Whitelist />
                    </div>
                )}

                <div id="add-module-bar" className="text-center p-3">
                    <a data-toggle="modal" data-target="#ModuleSelectionForm">
                        <img src="./images/add_dropshadow.png" className="" width="75" />
                    </a>
                </div>

            </div>
                <div className="text-center">
                    <img src="./images/curly-down-brace.png" />
                    <div className="text-center m-4">
                        <button type="button" className="btn btn-primary pad-btn">Build Contract</button>
                    </div>
                </div>
        </div>
    )
}

export default MissionDashboard