import React from "react"

const Taxes = (props) => {
    
    return (
                <div id="NFTD-details" className="row">
                    <div className="col-1"></div>
                    <div id="inner-content-box" className="col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-2 p-4">
                        <div className="custom-control custom-switch float-right">
                            <input type="checkbox" className="custom-control-input" id="taxes-switch" data-toggle="collapse" data-target="#TaxesForm" aria-expanded="false" aria-controls="TaxesForm"/>
                            <label className="custom-control-label" htmlFor="taxes-switch"></label>
                        </div>
                        <p className="h4 pt-1 text-uppercase">Add Built-In Taxes</p>
                        <p className="h6">Fees built into the NFT applied upon it's sale.</p>
                        <div id="TaxesForm" className=" col-6 offset-lg-3 text-left collapse">
                            <hr />
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput" className="lead">Alphanumeric Terra Address</label>
                                        <div className="row">
                                            <input type="text" className="form-control col" id="formGroupExampleInput" placeholder="terra14lxhx09fyemu9lw46c9m9jk63cg6u8wdc8pdu4" />
                                            <button type="button" htmlFor="formGroupExampleInput" className="col-2 btn btn-primary ml-2">Add</button>
                                        </div>
                                        <label htmlFor="formGroupExampleInput" className="small">Address allowed to interact with your NFT.</label>
                                    </div>
                                    <hr />
                                    <p className="h5">Whitelisted</p>
                                    <div key="AddedAddress1" className="row mid-opacity rounded-lg text-dark small p-3 mb-2">
                                        <p className="col text-left m-0">terra14lxhx09fyemu9lw46c9m9jk63cg6u8wdc8pdu4</p>
                                        <a className="col-2  text-danger" onClick={() => {return(null)}}>Remove</a>
                                    </div>
                                    <div key="AddedAddress2" className="row mid-opacity rounded-lg text-dark small p-3">
                                        <p className="col text-left m-0">terra14lxhx09fyemu9lw46c9m9jk63cg6u8wdc8pdu4</p>
                                        <a className="col-2  text-danger" onClick={() => {return(null)}}>Remove</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
    )
}

export default Taxes