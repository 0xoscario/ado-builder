//Roaylties(Panels, setPanels) - Roaylties panel integrated in Mission-Builder
import React, {useState} from 'react'
import _ from 'lodash' //underscores '_.' reference lodash in code below and are not an operator

// Import components
import Notifications from '../../notification' //Notify popup component for adding & error catching

//Import Form Validators
import Validator from '../../../modules/validators'

const Taxes = (props) => {
    const [notify, setNotify] = useState({isOpen:false, message:'', type:''}) //Used to pass to notification to popup
    const [rateTypeSelected, setRateTypeSelected] = useState('percent') //shows related rate-type data entry form (default for Percentage-type)
    const [idCount, setIdCount] = useState("1")

    // Test accounts noted at: https://github.com/terra-money/localterra#accounts
    function addToTaxList() {
        //Uses form data to load address.

        // Validate form field
        // validator (descirption, rateType, rateAmount, Address)
        if (rateTypeSelected === "percent") {
            if (Validator.validateTax_Add(
                document.getElementById("TaxDescription").value, 
                document.getElementById("TaxRateType").value,
                document.getElementById("TaxRatePercent").value,
                document.getElementById("TaxAddress").value)
            ){
                setNotify({isOpen:true, message:'Entry added to tax distribution list.', type:'success'})
                setIdCount(idCount + "1")
                //document.getElementById("TaxRatePercentage").value = '' //clear form field
                
               /* Post validated data to Panel array "taxeslist" (for Perctage) */ 
                props.Panels.taxes.taxeslist = [...props.Panels.taxes.taxeslist, 
                    {
                        id: idCount,
                        description: document.getElementById("TaxDescription").value,
                        rateType: document.getElementById("TaxRateType").value,
                        amount: document.getElementById("TaxRatePercent").value,
                        denom: '',
                        address: document.getElementById("TaxAddress").value
                    }
                ]
                props.Panels.taxes.isValidated = true
            } else { 
                setNotify({isOpen:true, message:'Please provide more information.', type:'error'})
            }
        } else {
            if (Validator.validateTax_Add(
                document.getElementById("TaxDescription").value, 
                document.getElementById("TaxRateType").value,
                document.getElementById("TaxFlatAmount").value,
                document.getElementById("TaxAddress").value)
            ) {
                setNotify({isOpen:true, message:'Entry added to tax distribution list.', type:'success'})
                setIdCount(idCount + "1")
                //document.getElementById("TaxFlatAmount").value = '' //clear form field

                /* Post validated data to Panel array "taxeslist" (for Perctage) */ 
                props.Panels.taxes.taxeslist = [...props.Panels.taxes.taxeslist, 
                    {
                        id: idCount,
                        description: document.getElementById("TaxDescription").value,
                        rateType: document.getElementById("TaxRateType").value,
                        amount: document.getElementById("TaxFlatAmount").value,
                        denom: document.getElementById("TaxRateDenom").value,
                        address: document.getElementById("TaxAddress").value
                    }
                ]
                props.Panels.taxes.isValidated = true
            } else {
                setNotify({isOpen:true, message:'Please provide more information.', type:'error'})
            }
        }

        //Only once submitted
        document.getElementById("TaxAddress").value = '' //clear form field
        document.getElementById("TaxDescription").value = '' //clear form field
        document.getElementById("TaxDescription").focus() //place focus back to top of panel form

    }

    function removeFromList(tax) {
        props.Panels.taxes.taxeslist = _.reject(props.Panels.taxes.taxeslist, tax)
        if (props.Panels.taxes.taxeslist.length <= 0) {props.Panels.taxes.isValidated = false} //pull validation if no addresses left
   
        
        setNotify({isOpen:true, message: 'Entry removed from tax address list.', type:'warning'})
    }

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
                                        props.setPanels({...props.Panels, taxes:{...props.Panels.taxes, showPanel:false}})
                                    }}>
                                    X
                                </button>
                            </div>
                        }
                        {/* Show a validation indicator if the data has been validated */}
                        {props.Panels.taxes.isValidated?                     
                            <div className="validate-panel float-left">
                                <p className="text-danger fload-left small">Validated</p>
                            </div>
                        :   
                            null
                        }
                        <div className="custom-control custom-switch float-right">
                            <input type="checkbox" className="custom-control-input" id="taxes-switch" data-toggle="collapse" data-target="#TaxesForm" aria-expanded="false" aria-controls="TaxesForm"/>
                            <label className="custom-control-label" htmlFor="taxes-switch"></label>
                        </div>
                        <p className="h4 pt-1 text-uppercase">Add Built-In Taxes</p>
                        <p className="h6">Fees built into the NFT, applied upon its sale.</p>
                        <div id="TaxesForm" className=" col-6 offset-lg-3 text-left collapse">
                            <hr />
                                <div>
                                    <p className="row h6 text-primary my-4">What tax fee would you like applied to the sale of this asset?</p>
                                    <div className="form-group my-2">
                                        <div className="form-group">
                                            <label htmlFor="TaxDescription" className="lead">Tax Description</label>
                                            <input type="text" className="form-control" id="TaxDescription" placeholder="Reciever's Share" />
                                            <label htmlFor="TaxDescription" className="small">*Optional - Information is solely for organizational use.</label>
                                        </div>
                                        
                                        {/* Distribution type assignment for form by dropdown */}
                                        <label className="my-1 mr-2 lead" htmlFor="TaxRateType">Distribution Type</label>
                                        <select 
                                            id="TaxRateType"
                                            className="custom-select my-1 mr-sm-2"
                                            onChange={event => setRateTypeSelected(event.target.value)}
                                        >
                                            <option value="percent">By Percentage</option>
                                            <option value="flat">By Flat Fee</option>
                                        </select>

                                        <div className="row light-opacity rounded-lg p-3 mt-3">
                                            
                                            {rateTypeSelected === 'percent' && (
                                                <div>                                                                                    
                                                    <label htmlFor="TaxRatePercent" className="row lead">% fee of sale price</label>
                                                    <div className="row">
                                                        <input type="text" className="form-control col-5" id="TaxRatePercent" placeholder="5%" />
                                                    </div>
                                                </div>
                                            )}

                                            {rateTypeSelected === 'flat' && (
                                                <div className="row">
                                                    <div className="col pl-0">
                                                        <label htmlFor="TaxFlatAmount" className="lead">Flat fee</label>
                                                        <input type="text" id="TaxFlatAmount" className="form-control col" placeholder="$50.00" />
                                                    </div>
                                                    <div className="col">
                                                        <label htmlFor="TaxRateDenom" className="lead">Currency type</label>
                                                        {/* <input type="text" id="tax-rate-flat-denom" className="form-control col" placeholder="USD" /> 
                                                        <label className="my-1 mr-2 lead" htmlFor="rate-denom">Preference</label> */ }
                                                        <select id="TaxRateDenom"className="custom-select my-1 mr-sm-2">
                                                            <option value="USD">USD</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="form-group my-5">
                                            <p className="row h6 text-primary my-2">Reciever of this tax payout?</p>
                                            <label htmlFor="TaxAddress" className="row lead">Alphanumeric Terra Address</label>
                                            <div className="row">
                                                <input type="text" className="form-control col" id="TaxAddress" placeholder="terra14lxhx09fyemu9lw46c9m9jk63cg6u8wdc8pdu4" />
                                                <button 
                                                    type="button" 
                                                    htmlFor="TaxAddress" 
                                                    className="col-2 btn btn-primary ml-2"
                                                    onClick={
                                                        () => addToTaxList()
                                                    }>
                                                        Add
                                                </button>
                                            </div>
                                            <label htmlFor="formGroupExampleInput" className="small">Address recieving funds from tax.</label>
                                        </div>
                                    </div>
                                    <hr />
                                    <p className="h5">Tax Recipient</p>
                                    
                                    {props.Panels.taxes.taxeslist.map((tax) => (
                                        <div key={tax.id} className="row mid-opacity rounded-lg text-dark small p-3 mb-2">
                                            <div className="col text-left m-0">
                                                {tax.description? <p className="lead">{tax.description}</p> : null}
                                                {   //only show if ratetype is percentage
                                                    tax.rateType === "percent" && (<p><span className="small">Amount: </span>{tax.amount}% </p>) 
                                                }
                                                {   //only show if ratetype is flat
                                                    tax.rateType === "flat" && (<p><span className="small">Amount: </span>{tax.amount} {tax.denom}</p>) 
                                                }
                                                <p><span className="small">To: </span>{tax.address}</p>
                                            </div>
                                            <a className="col-2  text-danger" onClick={() => removeFromList(tax)}>Remove</a>
                                        </div>
                                    ))
                                    }
                                </div>
                        </div>
                    </div>
                    {notify? <Notifications notify={notify} setNotify={setNotify} /> : null }
                </div>
    )
}

export default Taxes