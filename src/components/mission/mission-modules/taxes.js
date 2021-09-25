import React from "react"

const Taxes = (props) => {
    
    return (
                <div id="taxes-panel" className="row">
                    <div className="col-1"></div>
                    <div id="inner-content-box" className="col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-2 p-4">
                        {/* Show removal button only if panel is not set to be required */}
                        {props.Panels.taxes.isRequired? 
                            null
                        :   
                            <div className="remove-panel float-left">
                                <button 
                                    type="button" 
                                    className="btn btn-danger"
                                    onClick={() => {
                                        props.setPanels({...props.Panels, taxes:{...props.Panels.taxes, showPanel:false, isRequired:false}})
                                    }}>
                                    X
                                </button>
                            </div>
                        }
                        <div className="custom-control custom-switch float-right">
                            <input type="checkbox" className="custom-control-input" id="taxes-switch" data-toggle="collapse" data-target="#TaxesForm" aria-expanded="false" aria-controls="TaxesForm"/>
                            <label className="custom-control-label" htmlFor="taxes-switch"></label>
                        </div>
                        <p className="h4 pt-1 text-uppercase">Add Built-In Taxes</p>
                        <p className="h6">Fees built into the NFT applied upon it's sale.</p>
                        <div id="TaxesForm" className=" col-6 offset-lg-3 text-left collapse">
                            <hr />                                
                        </div>
                    </div>
                </div>
    )
}

export default Taxes