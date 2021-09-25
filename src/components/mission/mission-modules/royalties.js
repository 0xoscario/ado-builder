//Roaylties(Panels, setPanels) - Roaylties panel integrated in Mission-Builder
import React, {useState} from 'react'

// Import components
import Notifications from '../../notification' //Notify popup component for adding & error catching

//Import Form Validators
import Validator from '../../../modules/validators'

const Royalties = (props) => {
    const [notify, setNotify] = useState({isOpen:false, message:'', type:''}) //Used to pass to notification to popup

    // Test accounts noted at: https://github.com/terra-money/localterra#accounts
    function addToRoyaltyAddressList() {
        //Uses form data to load address.

        // Validate form field
        Validator.validateRoyalty_Add(document.getElementById("royaltyAddAddress").value)?
            setNotify({isOpen:true, message:document.getElementById("royaltyAddAddress").value + ' added to royalty address list.', type:'success'})
            : 
            setNotify({isOpen:true, message:'Please enter a valid alphanumeric Terra address.', type:'error'})
        document.getElementById("royaltyAddAddress").value = '' //clear form field
    }

    function removeFromList(address) {
        setNotify({isOpen:true, message:address + ' removed from royalty address list.', type:'warning'})
    }

    return (
                <div id="royalties-panel" className="row">
                    <div className="col-1"></div>
                    <div id="inner-content-box" className="col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-2 p-4">
                        {/* Show removal button only if panel is not set to be required */}
                        {props.Panels.royalties.isRequired? 
                            null
                        :   
                            <div className="remove-panel float-left">
                                <button 
                                    type="button" 
                                    className="btn btn-danger"
                                    onClick={() => {
                                        props.setPanels({...props.Panels, royalties:{...props.Panels.royalties, showPanel:false}})
                                    }}>
                                    X
                                </button>
                            </div>
                        }
                        <div className="custom-control custom-switch float-right">
                            <input type="checkbox" className="custom-control-input" id="royalties-switch" data-toggle="collapse" data-target="#RoyaltiesForm" aria-expanded="false" aria-controls="RoyaltiesForm"/>
                            <label className="custom-control-label" htmlFor="royalties-switch"></label>
                        </div>
                        <p className="h4 pt-1 text-uppercase">Setup Royalties</p>
                        <p className="h6">Fees paid to the author owner of the NFT. % or $ amt.</p>
                        <div id="RoyaltiesForm" className=" col-6 offset-lg-3 text-left collapse">
                            <hr />
                                <div>
                                    <p className="row h6 text-primary my-4">What royalty fee would you like applied to the sale of this asset?</p>
                                    <div className="form-group my-2">
                                        <div>                                                                                    
                                            <label htmlFor="formGroupExampleInput" className="row lead">% fee of sale price</label>
                                            <div className="row">
                                                <input type="text" className="form-control col-5" id="formGroupExampleInput" placeholder="5%" />
                                            </div>
                                        </div>

                                        <div className="row my-4">
                                            <div className="col pl-0">
                                                <label htmlFor="formGroupExampleInput" className="lead">Flat fee</label>
                                                <input type="text" id="formGroupExampleInput" className="form-control col" placeholder="$50.00" />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="formGroupExampleInput" className="lead">Currency type</label>
                                                <input type="text" id="formGroupExampleInput" className="form-control col" placeholder="USD" />
                                            </div>
                                        </div>

                                        <div className="form-group my-5">
                                            <p className="row h6 text-primary my-2">Reciever of this royalty payout?</p>
                                            <label htmlFor="formGroupExampleInput" className="row lead">Alphanumeric Terra Address</label>
                                            <div className="row">
                                                <input type="text" className="form-control col" id="royaltyAddAddress" placeholder="terra14lxhx09fyemu9lw46c9m9jk63cg6u8wdc8pdu4" />
                                                <button 
                                                    type="button" 
                                                    htmlFor="formGroupExampleInput" 
                                                    className="col-2 btn btn-primary ml-2"
                                                    onClick={
                                                        () => addToRoyaltyAddressList()
                                                    }>
                                                        Add
                                                </button>
                                            </div>
                                            <label htmlFor="formGroupExampleInput" className="small">Address recieving funds from royalty.</label>
                                        </div>
                                    </div>
                                    <hr />
                                    <p className="h5">Royalty Recipient</p>
                                    <div key="AddedAddress1" className="row mid-opacity rounded-lg text-dark small p-3 mb-2">
                                        <p className="col text-left m-0">terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v</p>
                                        <a className="col-2  text-danger" onClick={() => removeFromList('terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v')}>Remove</a>
                                    </div>
                                    <div key="AddedAddress2" className="row mid-opacity rounded-lg text-dark small p-3">
                                        <p className="col text-left m-0">terra17lmam6zguazs5q5u6z5mmx76uj63gldnse2pdp</p>
                                        <a className="col-2  text-danger" onClick={() => removeFromList('terra17lmam6zguazs5q5u6z5mmx76uj63gldnse2pdp')}>Remove</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    {notify? <Notifications notify={notify} setNotify={setNotify} /> : null }
                </div>
    )
}

export default Royalties