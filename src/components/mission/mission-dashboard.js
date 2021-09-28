// MissionDashboard(setShowDashboard, showMissionDashboard, setShowMissionDashboard)
// - Page used to develop, configure, and deploy custom ANDR contracts 
// (Utilises dynamic development to build custom WYSIWG)
import React, {useState, useEffect} from 'react'

//Load Module Classes
import Messages from '../../modules/messaging'

//Load Content Components
import PrimaryHeaderBar from '../header-bar'
import ConnectionBar from '../connection-bar'
import ModuleSelection from './ModuleSelection'
import Notifications from '../notification' //Notify popup component for adding & error catching

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
    const [notify, setNotify] = useState({isOpen:false, message:'', type:''}) //Used to pass to notification to popup
    const [msgProof, setMsgeProof] = useState("")

    //Declare Panel State & Data for use throughout Mission-Builder
    //State is not reset here, but in setPanels()
    /* --Params
        showPanel - Toggles loaded to MB | isOpen - Toggles Collapse State | isRequired - Toggle Enabled of Panel Removal | 
        dependentOn - Other Panels which must be present prior to adding (to be implemented)|
        isValidated - visual validation toggle for failing validation on submission (border highlighting problem panels)|
        Declared $VARIBLES - Panel specific data for passing to messaging and validators (e.g. Array toWhitelist[address1, address2])
    */
    const [nftdetailsPanel, setNftdetailsPanel] = useState({showPanel: false, isOpen: false, isRequired:false, depedentOn:'', isValidated: false, name:'', symbol:'', url:'', desc:''})
    const [whitelistPanel, setWhitelistPanel] = useState({showPanel: false, isOpen: false, isRequired:false, depedentOn:'', isValidated: false, toWhitelist: []})
    const [blacklistPanel, setBlacklistPanel] = useState({showPanel: false, isOpen: false, isRequired:false, depedentOn:'', isValidated: false, toBlacklist: []})
    const [royaltiesPanel, setRoyaltiesPanel] = useState({showPanel: false, isOpen: false, isRequired:false, depedentOn:'', isValidated: false, royaltieslist: [] })
    const [taxesPanel, setTaxesPanel] = useState({showPanel: false, isOpen: false, isRequired:false, depedentOn:'', isValidated: false })
    const [splitterPanel, setSplitterPanel] = useState({showPanel: false, isOpen: false, isRequired:false, depedentOn:'', isValidated: false })
    const [timelockPanel, setTimelockPanel] = useState({showPanel: false, isOpen: false, isRequired:false, depedentOn:'', isValidated: false })
    const [metadataPanel, setMetadataPanel] = useState({showPanel: false, isOpen: false, isRequired:false, depedentOn:'', isValidated: false })
    const [recieptPanel, setRecieptPanel] = useState({showPanel: false, isOpen: false, isRequired:false, depedentOn:'', isValidated: false })
    const [esignPanel, setEsignPanel] = useState({showPanel: false, isOpen: false, isRequired:false, depedentOn:'', isValidated: false })
   
    /* For Validator routine to push error messages on build contract errors */
    const [validationFault, setValidationFault] = useState({hasFailed: false, messages: []})
   
    //Compile declare panels into stack for prop-drilling through mission-builder
    const [Panels,setPanels] = useState({ 
        nftdetails:nftdetailsPanel,
        whitelist:whitelistPanel,
        blacklist:blacklistPanel,
        royalties:royaltiesPanel,
        taxes:taxesPanel,
        splitter:splitterPanel,
        timelock:timelockPanel,
        metadata:metadataPanel,
        reciept:recieptPanel,
        esign:esignPanel,

        validateFault:validationFault
    } )
    
    //Debugging toggles 
    //console.info(Panels) //show Panel structure for review in console

    /* Template configurations only need be run on initial render (this patches overrides on isRequired showPanel reconfigures by user*/
    //useEffect(() => {
        if (props.showMissionDashboard === "NFT") {
            Panels.nftdetails.showPanel=true
            Panels.nftdetails.isRequired=true
            Panels.whitelist.showPanel=true
            Panels.whitelist.isRequired=true
            Panels.royalties.showPanel=true
            Panels.royalties.isRequired=true
            Panels.taxes.showPanel=true
            Panels.taxes.isRequired=true //currently fails
        }
        if (props.showMissionDashboard === "DeFi") {
            Panels.royalties.showPanel=true
            Panels.royalties.isRequired=true
            Panels.taxes.showPanel=true
            Panels.taxes.isRequired=true
        }
    //},[]);

    return (
        <div id="mission-builder-wrapper" className="m-0">
            <ModuleSelection Panels={Panels} setPanels={setPanels}/>
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

                
            {/*                
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
            */}

                
                
                {props.showMissionDashboard === "Alternate" && (
                    <div>                        
                        <Taxes />
                        <Whitelist />
                    </div>
                )}

                <div>
                    {Panels.nftdetails.showPanel? <NFTDetails Panels={Panels} setPanels={setPanels}/> : null }
                    
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
                    
                    {Panels.whitelist.showPanel? <Whitelist Panels={Panels} setPanels={setPanels}/> : null }
                    {Panels.royalties.showPanel? <Royalties Panels={Panels} setPanels={setPanels}/> : null }
                    {Panels.taxes.showPanel? <Taxes Panels={Panels} setPanels={setPanels}/> : null }
                    {Panels.blacklist.showPanel? <Blacklist Panels={Panels} setPanels={setPanels}/> : null }
                    {Panels.splitter.showPanel? <Splitter Panels={Panels} setPanels={setPanels}/> : null }
                    {Panels.timelock.showPanel? <TimeLock Panels={Panels} setPanels={setPanels}/> : null }
                    {Panels.metadata.showPanel? <Metadata Panels={Panels} setPanels={setPanels}/> : null }
                    {Panels.reciept.showPanel? <Reciept Panels={Panels} setPanels={setPanels}/> : null }
                    {Panels.esign.showPanel? <ESign Panels={Panels} setPanels={setPanels}/> : null }
                </div>

                <div id="add-module-bar" className="text-center p-3">
                    <a data-toggle="modal" data-target="#ModuleSelectionForm">
                        <img src="./images/add_dropshadow.png" className="" width="75" />
                    </a>
                </div>

            </div>
                

                
                <div className="text-center">
                    <img src="./images/curly-down-brace.png" />
                    
                    {/* Basic display proofing for message construction */}    
                    <div className="text-center m-4">
                        <button 
                            type="button" 
                            className="btn btn-warning pad-btn" 
                            onClick={() => {
                                Messages.updateMessage(Panels)
                                
                                if(Panels.validateFault.hasFailed) {
                                    /* Push pop-up errors if validation failures */
                                    Panels.validateFault.messages.map((msg) => {
                                        setNotify(msg)
                                    });
                                    //console.info(Panels.validateFault)
                                } else {
                                    alert(Messages.data)
                                    setMsgeProof(Messages.data)
                                }
                            }}>
                                Proof Message
                        </button>
                    </div>

                    <div className="text-center  m-4">
                        <button type="button" className="btn btn-primary pad-btn disabled">Build Contract</button>
                    </div>
                    
                {/*
                    <div className="col-8 offset-lg-2 text-left mid-opacity text-light rounded-lg m-5 p-4">
                        <code><pre>{msgProof}</pre></code>
                    </div>
                */}
                </div>
            {notify? <Notifications notify={notify} setNotify={setNotify} /> : null }
        </div>
    )
}

export default MissionDashboard