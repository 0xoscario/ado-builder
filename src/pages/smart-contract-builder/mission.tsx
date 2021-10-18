// MissionDashboard(template)
// - Page used to develop, configure, and deploy custom ANDR contracts
// - Uses "template" prop (string) for loading pre-defined mission templates
// (Utilises dynamic development to build custom WYSIWG)

import { useState } from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/DefaultLayout';


/* To be adapted for responsive loading  and perhaps pushed to "constants"*/
//Load Panels to Use in Mission Builder
import Title from '../../components/panels/title'
import Subtitle from '../../components/panels/subtitle'
import NFTDetails from '../../components/panels/nft-details'
import Whitelist from '../../components/panels/whitelist'
import Blacklist from '../../components/panels/blacklist'
import Royalties from '../../components/panels/royalties'
import Taxes from '../../components/panels/taxes'
import Splitter from '../../components/panels/splitter'
import TimeLock from '../../components/panels/time-lock'
import Metadata from '../../components/panels/metadata'
import Reciept from '../../components/panels/reciept'
import ESign from '../../components/panels/e-sign'

// Load Utility Classes
import Messages from '../../utils/messaging' //Message Constructors

/* See .getInitialProps() below for pre-loading configurations and data */
const Mission: NextPage = (props) => {
    const [Panels, setPanels] = useState(props.Panels)
    
    return (
        <Layout title="Andromeda Mission Builder">
            <section className="text-gray-600">
                <div className="container mx-auto ">
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-gray-200 space-y-6 sm:p-6">

                            <form action="#" method="POST" className="mt-12 max-w-4xl mx-auto">
                                {/** {Profile} */}
                                {props.Panels.title.showPanel ? (
                                    <Title Panels={Panels} setPanels={setPanels}/>
                                ) : null}
                                {props.Panels.nftdetails.showPanel ? (
                                    <NFTDetails Panels={Panels} setPanels={setPanels}/>
                                ) : null}

                                {props.Panels.subtitle.showPanel ? (
                                    <Subtitle Panels={Panels} setPanels={setPanels}/>
                                ) : null}

                                {Panels.whitelist.showPanel ? (
                                    <Whitelist Panels={Panels} setPanels={setPanels} />
                                ) : null}
                                {Panels.royalties.showPanel ? (
                                    <Royalties Panels={Panels} setPanels={setPanels} />
                                ) : null}
                                {Panels.taxes.showPanel ? (
                                    <Taxes Panels={Panels} setPanels={setPanels} />
                                ) : null}
                                {Panels.blacklist.showPanel ? (
                                    <Blacklist Panels={Panels} setPanels={setPanels} />
                                ) : null}
                                {Panels.splitter.showPanel ? (
                                    <Splitter Panels={Panels} setPanels={setPanels} />
                                ) : null}
                                {Panels.timelock.showPanel ? (
                                    <TimeLock Panels={Panels} setPanels={setPanels} />
                                ) : null}
                                {Panels.metadata.showPanel ? (
                                    <Metadata Panels={Panels} setPanels={setPanels} />
                                ) : null}
                                {Panels.reciept.showPanel ? (
                                    <Reciept Panels={Panels} setPanels={setPanels} />
                                ) : null}
                                {Panels.esign.showPanel ? (
                                    <ESign Panels={Panels} setPanels={setPanels} />
                                ) : null}
                            </form>

                        </div>
                    </div>

                </div>
            </section>
        </Layout>
    );
};

Mission.getInitialProps = async (ctx) => {
    const {query} = ctx;
// set case to lowercase to remove case sensitivity
    const template = query.template.toString().toLowerCase()

/* Panel data devlarations to be moved to JSON loading */
    //Declare Panel State & Data for use throughout Mission-Builder
    //State is not reset here, but in setPanels()
    /* --Params
        showPanel - Toggles loaded to MB | isOpen - Toggles Collapse State | isRequired - Toggle Enabled of Panel Removal | 
        dependentOn - Other Panels which must be present prior to adding (to be implemented)|
        isValidated - visual validation toggle for failing validation on submission (border highlighting problem panels)|
        Declared $VARIBLES - Panel specific data for passing to messaging and validators (e.g. Array toWhitelist[address1, address2])
    */
        const titlePanel = {
            showPanel: false,
            isOpen: false,
            isRequired: false,
            depedentOn: '',
            isValidated: false,
            highlight: false,
            title: '',
            description: '',
        }
        const subtitlePanel = {
            showPanel: false,
            isOpen: false,
            isRequired: false,
            depedentOn: '',
            isValidated: false,
            highlight: false,
            title: '',
            description: '',
        }
        const nftdetailsPanel = {
            showPanel: false,
            isOpen: false,
            isRequired: false,
            depedentOn: '',
            isValidated: false,
            highlight: false,
            name: '',
            symbol: '',
            url: '',
            desc: '',
        }
        const whitelistPanel = {
            showPanel: false,
            isOpen: false,
            isRequired: false,
            depedentOn: '',
            isValidated: false,
            highlight: false,
            toWhitelist: [],
        }
        const blacklistPanel = {
            showPanel: false,
            isOpen: false,
            isRequired: false,
            depedentOn: '',
            isValidated: false,
            highlight: false,
            toBlacklist: [],
        }
        const royaltiesPanel = {
            showPanel: false,
            isOpen: false,
            isRequired: false,
            depedentOn: '',
            isValidated: false,
            highlight: false,
            royaltieslist: [],
        }
        const taxesPanel = {
            showPanel: false,
            isOpen: false,
            isRequired: false,
            depedentOn: '',
            isValidated: false,
            highlight: false,
            taxeslist: [],
        }
        const splitterPanel = {
            showPanel: false,
            isOpen: false,
            isRequired: false,
            depedentOn: '',
            isValidated: false,
            highlight: false,
        }
        const timelockPanel = {
            showPanel: false,
            isOpen: false,
            isRequired: false,
            depedentOn: '',
            isValidated: false,
            highlight: false,
        }
        const metadataPanel = {
            showPanel: false,
            isOpen: false,
            isRequired: false,
            depedentOn: '',
            isValidated: false,
            highlight: false,
        }
        const recieptPanel = {
            showPanel: false,
            isOpen: false,
            isRequired: false,
            depedentOn: '',
            isValidated: false,
            highlight: false,
        }
        const esignPanel = {
            showPanel: false,
            isOpen: false,
            isRequired: false,
            depedentOn: '',
            isValidated: false,
            highlight: false,
        }
        
        /* For Validator routine to push error messages on build contract errors */
        const validationFault = {
            hasFailed: false,
            messages: [],
        } 
        // end-of panel data declarations


        // Compile declare panels into stack for use through-out mission-builder
        const Panels = {
            title: titlePanel,
            subtitle: subtitlePanel,
            nftdetails: nftdetailsPanel,
            whitelist: whitelistPanel,
            blacklist: blacklistPanel,
            royalties: royaltiesPanel,
            taxes: taxesPanel,
            splitter: splitterPanel,
            timelock: timelockPanel,
            metadata: metadataPanel,
            reciept: recieptPanel,
            esign: esignPanel,

            validateFault: validationFault,
        }

    // To be adapted for JSON loading
        /* //////////////////// Load Template Presets /////////////////////////// */
        // Use lowercase "case" comparisons as template variable is adjusted to lowercase to remove case sensitivity
        /* Template configurations only need be run on initial render (this patches overrides on isRequired showPanel reconfigures by user*/
    
        if (template === 'all') {
            Panels.title.showPanel = true
            Panels.title.title = template.toUpperCase()
            Panels.title.description = "Showing all available templates."

            Panels.subtitle.showPanel = true
            Panels.subtitle.title = "Subtitle"
            Panels.subtitle.description = "The subtitle panel."

            Panels.nftdetails.showPanel = true
            Panels.whitelist.showPanel = true
            Panels.royalties.showPanel = true
            Panels.taxes.showPanel = true
            Panels.blacklist.showPanel = true
            Panels.timelock.showPanel = true
            Panels.esign.showPanel = true
            Panels.metadata.showPanel = true
            Panels.reciept.showPanel = true
        }

        if (template === 'nft') {
            Panels.title.title = "NFT Collectible"
            Panels.title.description = "Configure draft of your NFT."
            Panels.title.showPanel = true
            Panels.title.isRequired = true

            Panels.nftdetails.showPanel = true
            Panels.nftdetails.isRequired = true

            Panels.subtitle.showPanel = true
            Panels.subtitle.title = "ADD EXTENSIONS"
            Panels.subtitle.description = "Build governance , rules, royalties, and other commercial terms directly into your NFT."

            Panels.whitelist.showPanel = true
            Panels.whitelist.isRequired = true

            Panels.royalties.showPanel = true
            Panels.royalties.isRequired = true

            Panels.taxes.showPanel = true
            Panels.taxes.isRequired = true

            Panels.blacklist.showPanel = true
            Panels.blacklist.isRequired = false
        }


    return {Panels: Panels, template: template}
}

export default Mission;