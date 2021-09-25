// Blacklist - Mission builder form panel for blacklisting
import React, {useState} from 'react'

// Import components
import Notifications from '../../notification' //Notify popup component for adding & error catching

//Import Form Validators
import Validator from '../../../modules/validators'

const Blacklist = (props) => {
    const [notify, setNotify] = useState({isOpen:false, message:'', type:''}) //Used to pass to notification to popup

    // Test accounts noted at: https://github.com/terra-money/localterra#accounts
    function addToBlacklist() {
        //Uses form data to load address.

        // Validate form field
        Validator.validateBlacklist_Add(document.getElementById("blacklistAddAddress").value)?
            setNotify({isOpen:true, message:document.getElementById("blacklistAddAddress").value + ' added to blacklist.', type:'success'})
            : 
            setNotify({isOpen:true, message:'Please enter a valid alphanumeric Terra address.', type:'error'})
        document.getElementById("blacklistAddAddress").value = '' //clear form field
    }
    
    function removeFromBlacklist(address) {
        setNotify({isOpen:true, message:address + ' removed from blacklist.', type:'warning'})
    }

    return (
        <div id="blacklist-panel" className="row">
            <div className="col-1"></div>
            <div id="inner-content-box" className="col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-2 p-4">
                {/* Show removal button only if panel is not set to be required */}
                {props.Panels.blacklist.isRequired? 
                    null
                :   
                    <div className="remove-panel float-left">
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={() => {
                                props.setPanels({...props.Panels, blacklist:{...props.Panels.blacklist, showPanel:false}})
                            }}>
                            X
                        </button>
                    </div>
                }
                <div className="custom-control custom-switch float-right">
                    <input type="checkbox" className="custom-control-input" id="blacklist-switch" data-toggle="collapse" data-target="#BlacklistDetailForm" aria-expanded="false" aria-controls="BlacklistDetailForm"/>
                    <label className="custom-control-label" htmlFor="blacklist-switch"></label>
                </div>
                <p className="h4 pt-1 text-uppercase">Blacklist Addressess</p>
                <p className="h6">A list of addresses prohibited from interacting with your NFT.</p>
                <div id="BlacklistDetailForm" className=" col-6 offset-lg-3 text-left collapse">
                    <hr />
                    <div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput" className="lead">Alphanumeric Terra Address</label>
                            <div className="row">
                                <input type="text" className="form-control col" id="blacklistAddAddress" placeholder="terra14lxhx09fyemu9lw46c9m9jk63cg6u8wdc8pdu4" />
                                <button 
                                    type="button" 
                                    htmlFor="formGroupExampleInput" 
                                    className="col-2 btn btn-primary ml-2"
                                    onClick={
                                        ()=>{addToBlacklist()}
                                    }>
                                        Add
                                    </button>
                            </div>
                            <label htmlFor="formGroupExampleInput" className="small">Address prohibited from interaction with your NFT.</label>
                        </div>
                        <hr />
                        <p className="h5">Blacklisted</p>
                        <div key="AddedAddress1" className="row mid-opacity rounded-lg text-dark small p-3 mb-2">
                            <p className="col text-left m-0">terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v</p>
                            <a className="col-2  text-danger" onClick={() => removeFromBlacklist('terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v')}>Remove</a>
                        </div>
                        <div key="AddedAddress2" className="row mid-opacity rounded-lg text-dark small p-3">
                            <p className="col text-left m-0">terra17lmam6zguazs5q5u6z5mmx76uj63gldnse2pdp</p>
                            <a className="col-2  text-danger" onClick={() => removeFromBlacklist('terra17lmam6zguazs5q5u6z5mmx76uj63gldnse2pdp')}>Remove</a>
                        </div>
                    </div>
                </div>
            </div>
            {notify? <Notifications notify={notify} setNotify={setNotify} /> : null }
        </div>
    )
}

export default Blacklist