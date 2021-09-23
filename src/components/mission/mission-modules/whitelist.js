// Whitelist - Mission builder form panel for whitelisting
import React, {useState} from 'react'

// Import components
import Notifications from '../../notification' //Notify popup component for adding & error catching


const Whitelist = (props) => {
    const [notify, setNotify] = useState({isOpen:false, message:'', type:''}) //Used to pass to notification to popup

    // Test accounts noted at: https://github.com/terra-money/localterra#accounts
    function addToWhitelist() {
        //Uses form data to load address.
//Needs validator!
        // impolement with document.getElementById("whitelistAddAddress").value
        setNotify({isOpen:true, message:document.getElementById("whitelistAddAddress").value + ' added to whitelist.', type:'success'})
        document.getElementById("whitelistAddAddress").value = '' //clear form field
    }
    
    function removeFromWhitelist(address) {
        setNotify({isOpen:true, message:address + ' removed from whitelist.', type:'warning'})
    }

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
                                    <input type="text" className="form-control col" id="whitelistAddAddress" placeholder="terra14lxhx09fyemu9lw46c9m9jk63cg6u8wdc8pdu4" />
                                    <button 
                                        type="button" 
                                        htmlFor="formGroupExampleInput" 
                                        className="col-2 btn btn-primary ml-2"
                                        onClick={
                                            ()=>{addToWhitelist()}
                                        }
                                    >
                                        Add
                                    </button>
                                </div>
                                <label htmlFor="formGroupExampleInput" className="small">Address allowed to interact with your NFT.</label>
                            </div>
                            <hr />
                            <p className="h5">Whitelisted</p>
                            <div key="AddedAddress1" className="row mid-opacity rounded-lg text-dark small p-3 mb-2">
                                <p className="col text-left m-0">terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v</p>
                                <a className="col-2  text-danger" onClick={() => removeFromWhitelist('terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v')}>Remove</a>
                            </div>
                            <div key="AddedAddress2" className="row mid-opacity rounded-lg text-dark small p-3">
                                <p className="col text-left m-0">terra17lmam6zguazs5q5u6z5mmx76uj63gldnse2pdp</p>
                                <a className="col-2  text-danger" onClick={() => removeFromWhitelist('terra17lmam6zguazs5q5u6z5mmx76uj63gldnse2pdp')}>Remove</a>
                            </div>
                        </div>
                </div>
            </div>
            {notify? <Notifications notify={notify} setNotify={setNotify} /> : null }
        </div>
    )
   
}

export default Whitelist