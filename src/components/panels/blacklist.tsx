// Blacklist - Mission builder form panel for blacklisting
import React, {useState } from 'react'
import _ from 'lodash' //underscores '_.' reference lodash in code below and are not an operator

//Load Module Classes
//import Messages from '../../../modules/messaging' //Messge Constructors
import Validator from '../../utils/validators' //Form Validators

// Import components
import Notifications from '../notification' //Notify popup component for adding & error catching

const Blacklist = (props) => {
    const [notify, setNotify] = useState({
        isOpen: false,
        message: '',
        type: '',
    }) //Used to pass to notification to popup

    /* Test data for dynamic adding addresses */
    //props.Panels.blacklist.toBlacklist =  ['terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v', 'terra17lmam6zguazs5q5u6z5mmx76uj63gldnse2pdp'] //Managed list of addresses for blacklisting

    // Test accounts noted at: https://github.com/terra-money/localterra#accounts
    function addToBlacklist() {
        //Uses form data to load address.

        // Validate form field
        if (
            Validator.validateBlacklist_Add(
                //document.getElementById('blacklistAddAddress').value
                (document.getElementById("blacklistAddAddress") as HTMLInputElement).value
            )
        ) {
            setNotify({
                isOpen: true,
                message:
                    //document.getElementById('blacklistAddAddress').value + ' added to blacklist.',
                    (document.getElementById('blacklistAddAddress') as HTMLInputElement).value + ' added to blacklist.',
                    type: 'success',
            })

            props.Panels.blacklist.toBlacklist = [
                {
                    id: props.Panels.blacklist.toBlacklist.length + 1,
                    address: (document.getElementById('blacklistAddAddress') as HTMLInputElement).value,
                },
                ...props.Panels.blacklist.toBlacklist,
            ]
            //props.Panels.blacklist.toBlacklist.unshift(document.getElementById("blacklistAddAddress").value)
            //console.info(props.Panels.blacklist.toBlacklist)
            props.Panels.blacklist.isValidated = true;
            //Messages.updateMessage(props.Panels)

            (document.getElementById('blacklistAddAddress') as HTMLInputElement).value = '' //clear form field
        } else {
            setNotify({
                isOpen: true,
                message: 'Please enter a valid alphanumeric Terra address.',
                type: 'error',
            })
        }

        document.getElementById('blacklistAddAddress').focus() //set the focus to the form field
    }

    function removeFromBlacklist(address) {
        props.Panels.blacklist.toBlacklist = _.reject(
            props.Panels.blacklist.toBlacklist,
            { address: address }
        )
        if (props.Panels.blacklist.toBlacklist.length <= 0) {
            props.Panels.blacklist.isValidated = false
        } //pull validation if no addresses left
        setNotify({
            isOpen: true,
            message: address + ' removed from blacklist.',
            type: 'warning',
        })
    }

    return (
        <div id='blacklist-panel' className='bg-white px-4 py-4 my-4'>
            <div
                id='inner-content-box'
                className={
                    props.Panels.blacklist.highlight
                        ? 'col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-5 p-4 border border-warning'
                        : 'col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-5 p-4'
                }
            >
                {/* Show removal button only if panel is not set to be required */}
                {props.Panels.blacklist.isRequired ? null : (
                    <div className='remove-panel float-left'>
                        <button
                            type='button'
                            className='inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 sm:text-sm'
                            onClick={() => {
                                props.setPanels({
                                    ...props.Panels,
                                    blacklist: {
                                        ...props.Panels.blacklist,
                                        showPanel: false,
                                    },
                                })
                            }}
                        >
                            X
                        </button>
                    </div>
                )}
                {/* Show a validation indicator if the data has been validated */}
                {props.Panels.blacklist.isValidated ? (
                    <div className='validate-panel float-left'>
                        <p className='text-danger fload-left small'>
                            Validated
                        </p>
                    </div>
                ) : null}
                <div className='custom-control custom-switch float-right'>
                    <input
                        type='checkbox'
                        className='custom-control-input'
                        id='blacklist-switch'
                        data-toggle='collapse'
                        data-target='#BlacklistDetailForm'
                        aria-expanded='false'
                        aria-controls='BlacklistDetailForm'
                    />
                    <label
                        className='custom-control-label'
                        htmlFor='blacklist-switch'
                    ></label>
                </div>
                <p className='h4 pt-1 text-uppercase'>Blacklist Addressess</p>
                <p className='h6'>
                    A list of addresses prohibited from interaction with your
                    NFT.
                </p>
                <div
                    id='BlacklistDetailForm'
                    className=' col-6 offset-lg-3 text-left collapse'
                >
                    <hr />
                    <div>
                        <div className='form-group'>
                            <label
                                htmlFor='formGroupExampleInput'
                                className='lead'
                            >
                                Alphanumeric Terra Address
                            </label>
                            <div className='row'>
                                <input
                                    type='text'
                                    className='form-control col'
                                    id='blacklistAddAddress'
                                    placeholder='terra14lxhx09fyemu9lw46c9m9jk63cg6u8wdc8pdu4'
                                />
                                <button
                                    type='button'
                                    className='col-2 btn btn-primary ml-2'
                                    onClick={() => {
                                        addToBlacklist()
                                    }}
                                >
                                    Add
                                </button>
                            </div>
                            <label
                                htmlFor='formGroupExampleInput'
                                className='small'
                            >
                                Address allowed to interact with your NFT.
                            </label>
                        </div>
                        <hr />
                        <p className='h5'>Blacklisted</p>

                        {props.Panels.blacklist.toBlacklist.map((tAddress) => (
                            <div
                                key={tAddress.id}
                                className='row mid-opacity rounded-lg text-dark small p-3 mb-2'
                            >
                                <p className='col text-left m-0'>
                                    {tAddress.address}
                                </p>
                                <a
                                    className='col-2  text-danger'
                                    onClick={() =>
                                        removeFromBlacklist(tAddress.address)
                                    }
                                >
                                    Remove
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {notify ? (
                <Notifications notify={notify} setNotify={setNotify} />
            ) : null}
        </div>
    )
}

export default Blacklist