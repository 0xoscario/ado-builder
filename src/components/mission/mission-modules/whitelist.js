// Whitelist - Mission builder form panel for whitelisting
import React from 'react'

const Whitelist = (props) => {
    
    return (
                <div id="whitelist-panel" className="row">
                    <div className="col-1"></div>
                    <div id="inner-content-box" className="col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-2 p-4">
                        <div className="custom-control custom-switch float-right">
                            <input type="checkbox" className="custom-control-input" id="whitelist-switch" data-toggle="collapse" data-target="#WhitelistDetailForm" aria-expanded="false" aria-controls="WhitelistDetailForm"/>
                            <label className="custom-control-label" htmlFor="whitelist-switch"></label>
                        </div>
                        <p className="h4 pt-1 text-uppercase">Whitelist Addressess</p>
                        <p className="h6">A list of addresses allowed to interact with your NFT.</p>
                        <div id="WhitelistDetailForm" className=" col-6 offset-lg-3 text-left collapse">
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

export default Whitelist