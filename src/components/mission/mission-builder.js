import React, {useState} from 'react';

//Load Content Components
import AddedModuleButtons from './AddedModuleButtons'
import ModuleSearchForm from './ModuleSearchForm'

//Load Interface Components & Iconography

//Operational Variables
const title = "My Projects"
const missionName = "Mission Name"

const MissionBuilder = () => {

    return ( 
        <div id="container" className="row">     
            <div id="sidebar" className="col-3 p-5">
                <h2 className="text-light">{title}</h2>
                <hr className="bg-light" />
                <h4 className="text-primary">{missionName}</h4>
                <AddedModuleButtons />
            </div>

            <div id="main" className="col p-1 pt-5 pr-5">
                <h3 className="text-light">Assemble modules to achieve your goal</h3>
                <p className="text-light">Search our Library for pre-made templates that acomplish a series of tasks.</p>

                <div className="main-moduleselection  border border-primary rounded-lg p-4 text-light">
                    <h3>Search Modules</h3>
                    <p>Andromeda Logic Library</p> 
                    <ModuleSearchForm />
                </div>
            </div>
        </div>
    ) //return
} //App
    

export default MissionBuilder