// ModuleSearchResults(searchText, categoryFilter)
// - A component returning a filtered list of the dynamicly populated addable ADOs
import React from 'react'
import _ from 'lodash' //underscores '_.' reference lodash in code below and are not an operator

//Load Interface Components & Iconography
import ModuleBar from '/components/mission/ModuleBar'

//Load Module Info to Operate Form From
const moduleList = [
    {id: 1, name: 'Send / Recieve Funds', desc: 'Specify who, what, when, where, why.', category: "splitters", icon: './images/module-icons/import-export.jpg'},
    {id: 2, name: 'Execute A Trade', desc: 'Specify a value, when, a frequency, and a price.', category: "validator", icon: './images/module-icons/exchange.jpg'},
    {id: 3, name: 'Hold Funds', desc: 'Specify how long, and when to release.', category: "pollers", icon: './images/module-icons/import-export.jpg'},
    {id: 4, name: 'Distribute Funds', desc: 'Specify who, calculate percentages, and when.', category: "tickler", icon: './images/module-icons/import-export.jpg'},
    {id: 5, name: 'Split Funds', desc: 'Specify who, calculate percentages, and when.', category: "splitters", icon: './images/module-icons/exchange.jpg'},
    {id: 6, name: 'Contract PDF Signature', desc: 'Enforce a contract to be executed/verified by oracle.', category: "oracles", icon: './images/module-icons/placeholder.jpg'},
    {id: 7, name: 'Taxes', desc: 'Add additional funds based on % and pass them to a third party.', category: "requestors", icon: './images/module-icons/placeholder.jpg'},
    {id: 8, name: 'Receipts', desc: 'An NFT that has the bill of sale, with terms of sale attached for future reference.', category: "royalties", icon: './images/module-icons/placeholder.jpg'},
    {id: 9, name: 'Subscriptions', desc: 'Whitelist automation through a subscription/routine payment by week, month, quarter, year, etc.', category: "validator", icon: './images/module-icons/placeholder.jpg'}
  ];


const ModuleSearchResults = (props) => {    
    let filteredModuleList = moduleList
    
    //Sort by categoryFilter when not set as "all"
    if(props.categoryFilter !== "all") {
        filteredModuleList = _.filter(moduleList, {'category':props.categoryFilter})
    }
    
    // Assemble ModuleBar for each array element
    const showModules = filteredModuleList.map((module) => 
            <ModuleBar key={module.id} id={module.id} name={module.name} desc={module.desc} icon={module.icon} searchText={props.searchText}/>
    )

    //Tag search terms to result listings (when not empty)
    function tagSearch() {
        if (props.searchText !== "") {
            return (
                'Searching for "'+props.searchText+'" in '
            )
        } else {
            return(null)
        }
    }
    
    return (
        <div id="ModuleSearchResults">
            <div className="text-center">
                <p>
                    <small>
                        {tagSearch()}{filteredModuleList.length} Search Results
                    </small>
                </p>
            </div>
            
            {showModules}

        </div>
    )
}

export default ModuleSearchResults