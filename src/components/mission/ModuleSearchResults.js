// ModuleSearchResults(searchText, categoryFilter)
// - A component returning a filtered list of the dynamicly populated addable ADOs
import React from 'react'
import _ from 'lodash' //underscores '_.' reference lodash in code below and are not an operator

//Load Interface Components & Iconography
import ModuleBar from './ModuleBar'

//Load Module Info to Operate Form From
/* --Parameters 
    name - Title | desc - displayed description | category - classifiers | icon - url path to image | action - panel name in mission-builder being referenced
*/
const moduleList = [
    {
        id: 0,
        name: 'Whitelist Addressess',
        desc: 'Set addresses allowed to allow interaction',
        category: 'splitters',
        icon: './images/module-icons/import-export.jpg',
        action: 'whitelist',
    },
    {
        id: 1,
        name: 'Royalties',
        desc: 'Fees paid to the author owner of the NFT. % or $ amt.',
        category: 'splitters',
        icon: './images/module-icons/import-export.jpg',
        action: 'royalties',
    },
    {
        id: 2,
        name: 'Blacklist Addresses',
        desc: 'A list of addresses prohibited from interacting with your NFT.',
        category: 'splitters',
        icon: './images/module-icons/import-export.jpg',
        action: 'blacklist',
    },
    {
        id: 3,
        name: 'Built-In Taxes',
        desc: "Fees built into the NFT applied upon it's sale.",
        category: 'splitters',
        icon: './images/module-icons/import-export.jpg',
        action: 'taxes',
    },
    {
        id: 4,
        name: 'Splitting',
        desc: 'Assign a percentage to certain recipients.',
        category: 'splitters',
        icon: './images/module-icons/import-export.jpg',
        action: 'splitter',
    },
    {
        id: 5,
        name: 'Timelock',
        desc: 'Lock actions for a specified duration.',
        category: 'splitters',
        icon: './images/module-icons/import-export.jpg',
        action: 'timelock',
    },
    {
        id: 6,
        name: 'Metadata',
        desc: 'Create a transaction record reciept.',
        category: 'splitters',
        icon: './images/module-icons/import-export.jpg',
        action: 'metadata',
    },
    {
        id: 7,
        name: 'Reciept',
        desc: 'Add the metadata information for your NFT.',
        category: 'splitters',
        icon: './images/module-icons/import-export.jpg',
        action: 'reciept',
    },
    {
        id: 8,
        name: 'Electronic Signature',
        desc: 'Sign with an electronic signature.',
        category: 'splitters',
        icon: './images/module-icons/import-export.jpg',
        action: 'esign',
    },

    /* Example Modules from Prototype 
    {id: 32, name: 'Execute A Trade', desc: 'Specify a value, when, a frequency, and a price.', category: "validator", icon: './images/module-icons/exchange.jpg', action:'whitelist'},
    {id: 33, name: 'Hold Funds', desc: 'Specify how long, and when to release.', category: "pollers", icon: './images/module-icons/import-export.jpg', action:'whitelist'},
    {id: 34, name: 'Distribute Funds', desc: 'Specify who, calculate percentages, and when.', category: "tickler", icon: './images/module-icons/import-export.jpg', action:'whitelist'},
    {id: 35, name: 'Split Funds', desc: 'Specify who, calculate percentages, and when.', category: "splitters", icon: './images/module-icons/exchange.jpg', action:'whitelist'},
    {id: 36, name: 'Contract PDF Signature', desc: 'Enforce a contract to be executed/verified by oracle.', category: "oracles", icon: './images/module-icons/placeholder.jpg', action:'whitelist'},
    {id: 37, name: 'Taxes', desc: 'Add additional funds based on % and pass them to a third party.', category: "requestors", icon: './images/module-icons/placeholder.jpg', action:'whitelist'},
    {id: 38, name: 'Receipts', desc: 'An NFT that has the bill of sale, with terms of sale attached for future reference.', category: "royalties", icon: './images/module-icons/placeholder.jpg', action:'whitelist'},
    {id: 39, name: 'Subscriptions', desc: 'Whitelist automation through a subscription/routine payment by week, month, quarter, year, etc.', category: "validator", icon: './images/module-icons/placeholder.jpg', action:'whitelist'},
    {id: 310, name: 'Send / Recieve Funds', desc: 'Specify who, what, when, where, why.', category: "splitters", icon: './images/module-icons/import-export.jpg', action:'whitelist'}
    */
]

const ModuleSearchResults = (props) => {
    let filteredModuleList = moduleList

    //Sort by categoryFilter when not set as "all"
    if (props.categoryFilter !== 'all') {
        filteredModuleList = _.filter(moduleList, {
            category: props.categoryFilter,
        })
    }

    // Assemble ModuleBar for each array element
    const showModules = filteredModuleList.map((module) => (
        <ModuleBar
            key={module.id}
            id={module.id}
            name={module.name}
            desc={module.desc}
            icon={module.icon}
            action={module.action}
            searchText={props.searchText}
            Panels={props.Panels}
            setPanels={props.setPanels}
        />
    ))

    //Tag search terms to result listings (when not empty)
    function tagSearch() {
        if (props.searchText !== '') {
            return 'Searching for "' + props.searchText + '" in '
        } else {
            return null
        }
    }

    return (
        <div id='ModuleSearchResults'>
            <div className='text-center'>
                <p>
                    <small>
                        {tagSearch()}
                        {filteredModuleList.length} Search Results
                    </small>
                </p>
            </div>

            {showModules}
        </div>
    )
}

export default ModuleSearchResults
