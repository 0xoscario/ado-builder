// TO BE SWAPPED FOR FINAL SECTION & TITLE
// BurnPage - Placeholder for Component

import React from "react";

const BurnPage = (props) => {

    return (
        <div id="burnWrapper" className="text-center text-light m-5 p-5 ">
            <p className="h3">My Projects</p>
            <button 
                                className="btn btn-primary m-3 p-2"
                                onClick={() => {
                                    props.setShowDash(true)
                                }}    
                            >Close Page</button>
        </div>
    )
}

export default BurnPage