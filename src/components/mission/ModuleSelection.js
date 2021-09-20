// ModuleSelection - A modal display page used to add new ADOs to the MissionDashboard
import React from 'react'

//Import Components
import ModuleSearchForm from './ModuleSearchForm'


const ModuleSelection = (props) => {
    return (
        <div id="ModuleSelectionForm" tabIndex="-1" className="modal p-5" aria-hidden="true">
            <div id="MSF-Wrapper" className="col-8 offset-lg-2 rounded-lg modal-opacity p-4">
                <div id="Modal-Header">
                    <div className="col-12 text-right">
                        <a 
                            className="text-dark"
                            data-toggle="modal" 
                            data-target="#ModuleSelectionForm"
                            onClick={() => {
                                //action
                            }}>
                            Cancel X
                        </a>
                        
                    </div>
                    <p className="col-12 text-center h2 text-dark pb-2">
                        Find A Module to Add
                    </p>
                </div>
                <ModuleSearchForm />
            </div>
        </div>
    )
}

export default ModuleSelection