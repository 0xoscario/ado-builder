// Mission(Panels, template, stager)
// - Page used to develop, configure, and deploy custom ANDR contracts
// - Uses "URL?template="(string) for path loading pre-defined mission templates
// (Utilises dynamic development to build custom WYSIWG)

import { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

// Load Visual Layouts & Assetts
import Layout from '@/components/DefaultLayout';
import {FolderIcon} from '@heroicons/react/outline';

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
//import Messages from '../../utils/messaging' //Message Constructors

/* See .getInitialProps() below for pre-loading configurations and data */
const Mission: NextPage = (props) => {
    
    /* Assign Props to variables (ignoring TS conflicts for moment)*/
    //@ts-ignore
    const [Panels, setPanels] = useState(props.Panels)
    //@ts-ignore
    const stager = props.stager
    //@ts-ignore
    const template = props.template
    
    return (
        <Layout title="Andromeda Mission Builder">
            {/* When staging is available show a notice bar for launching the related stager information */}

            {stager?
                <div className="bg-white shadow sm:rounded-lg">
                    <div className="mb-5 px-4 py-5 sm:p-6">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <div className="max-w-xl text-sm text-gray-500">
                                <div className="flex items-center">
                                    <span className="rounded-lg inline-flex p-3 ring-4 ring-white text-gray-600 bg-gray-50">
                                    <FolderIcon className="h-6 w-6" aria-hidden="true" />
                                    </span>
                                    <p className="md:inline-block md:px-4">
                                    Do you need to run this template more than a few times? There is a &quot;Stager&quot; available for the {template.toUpperCase()} template.
                                    </p>
                                </div>
                            </div>
                            <div className="sm:flex-shrink-0 sm:flex sm:items-center">
                                <Link href="#">
                                    <a className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 sm:text-sm">
                                    Launch Stager
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            :
                null
            }

            <section className="text-gray-600">
                <div className="container mx-auto ">
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-gray-200 space-y-6 sm:p-6">

                        

                            <form action="#" method="POST" className="mt-12 max-w-4xl mx-auto">
                                {/** {Profile} */}
                                {Panels.title.showPanel ? (
                                    <Title Panels={Panels} setPanels={setPanels}/>
                                ) : null}
                                {Panels.nftdetails.showPanel ? (
                                    <NFTDetails Panels={Panels} setPanels={setPanels}/>
                                ) : null}

                                {Panels.subtitle.showPanel ? (
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

    // Shows the staging info / launch panel if one is declared as available in template
    let stagerAvailable = false

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
            stagerAvailable = true //show panel as there is a stager available for this mission
            
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


    return {Panels: Panels, template: template, stager: stagerAvailable}
}

export default Mission;