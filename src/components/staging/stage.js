// Stage() - Component for staging multiple releases with the use of 
import React from 'react'

//Load Content Components
import PrimaryHeaderBar from '../header-bar'
import ConnectionBar from '../connection-bar'


const Stage = (props) => {

    return (
        <div id="stageWrapper" className="text-center text-light m-0 p-0">
            <PrimaryHeaderBar />
            <ConnectionBar />
            
            <p className="h3">Staged Release</p>
            <p className="lead">Provide a filled-in version of our staging spreadsheet to start developing your release plan.</p>
            {/* Upload Section */}
            <div id="uploadWrapper" className="light-opacity rounded-lg m-5 p-4">
                <div className="col-12 text-right">
                    <a 
                        className="text-light"
                        onClick={() => {
                            props.setShowDash(true)
                        }}>
                        Cancel X
                    </a>
                </div>
                <div>
                    <p className="h3">Drag and drop your file here.</p>
                    <p className="">or choose your file.</p>
                    <p className=""><button type="button" className="btn btn-primary">Select File</button></p>
                </div>
            </div>
            
            {/* Stage Proofing */}
            <div id="stageProof" className="mid-opacity rounded-lg m-5 p-4">
                <p className="h1">This is where the proofing preview appears after file upload.</p>
            </div>

            <button 
                                className="btn btn-primary m-3 p-2"
                                onClick={() => {
                                    props.setShowDash(true)
                                }}    
                            >Close Page</button>
        </div>
    )
}

export default Stage