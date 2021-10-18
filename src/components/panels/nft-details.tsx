// NFTDetails(Panels) - NFT construct information entry form
import React from 'react'

//Load Module Classes
//import Messages from '../../../modules/messaging' //Messge Constructors
import Validator from '../../utils/validators' //Form Validators

const NFTDetails = (props) => {
    function setValues() {
        // Validate form field from Validator.function()
        /* Need to assign validation routines to Validator */
        if (
            Validator.validateNftDetails(
                (document.getElementById('nftName') as HTMLInputElement).value,
                (document.getElementById('nftSymbol') as HTMLInputElement).value,
                (document.getElementById('nftURL') as HTMLInputElement).value,
                (document.getElementById('nftDescription') as HTMLInputElement).value
            )
        ) {
            props.Panels.nftdetails.isValidated = true
            //console.info('Valid: ' + props.Panels.nftdetails.isValidated)
        } else {
            props.Panels.nftdetails.isValidated = false
            //console.info('Invalid: ' + props.Panels.nftdetails.isValidated )
        }

        //Assign values to Panel data (should be nested in validation returns)
        props.Panels.nftdetails.name = (document.getElementById('nftName') as HTMLInputElement).value
        props.Panels.nftdetails.symbol = (document.getElementById('nftSymbol') as HTMLInputElement).value
        props.Panels.nftdetails.url = (document.getElementById('nftURL') as HTMLInputElement).value
        props.Panels.nftdetails.desc = (document.getElementById('nftDescription') as HTMLInputElement).value
    }

    return (
        <div id='NFTD-details' className="shadow sm:rounded-md sm:overflow-hidden text-left my-4">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div
                        id='inner-content-box'
                        className={
                            props.Panels.nftdetails.highlight
                                ? 'col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-5 p-4 border border-warning'
                                : 'col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-5 p-4'
                        }
                    >
                        {/* Show removal button only if panel is not set to be required */}
                        {props.Panels.nftdetails.isRequired ? null : (
                            <div className='remove-panel float-left'>
                                <button
                                    type='button'
                                    className='btn btn-danger'
                                    onClick={() => {
                                        props.setPanels({
                                            ...props.Panels,
                                            nftdetails: {
                                                ...props.Panels.nftdetails,
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
                        {props.Panels.nftdetails.isValidated ? (
                            <div className='validate-panel float-left'>
                                <p className='text-danger fload-left small'>
                                    Validated
                                </p>
                            </div>
                        ) : null}
                        <h4 className='h4 pt-5'>DETAILS</h4>
                        <h6 className='h6'>Tell us about what you're creating.</h6>
                        <hr />
                        <div id='detailForm' className=' col-6 offset-lg-3 text-left'>
                            {/* <form id='mainForm'> */}
                                <div>
                                    <div className='form-group'>
                                        <label
                                            htmlFor='formGroupExampleInput'
                                            className='lead'
                                        >
                                            Name your NFT
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='nftName'
                                            placeholder='NFT Name'
                                            onBlur={() => {
                                                setValues()
                                            }}
                                        />
                                        <label
                                            htmlFor='formGroupExampleInput'
                                            className='small'
                                        >
                                            Give your creation a name you'll easily
                                            identify it with.
                                        </label>
                                    </div>
                                    <div className='form-group'>
                                        <label
                                            htmlFor='formGroupExampleInput-2'
                                            className='lead'
                                        >
                                            Create a NFT symbol
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='nftSymbol'
                                            placeholder='TT'
                                            onBlur={() => {
                                                setValues()
                                            }}
                                        />
                                        <label
                                            htmlFor='formGroupExampleInput-2'
                                            className='small'
                                        >
                                            A publicly searchable identifier.
                                        </label>
                                    </div>
                                    <div className='form-group'>
                                        <label
                                            htmlFor='formGroupExampleInput-2'
                                            className='lead'
                                        >
                                            External link / url to image
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='nftURL'
                                            placeholder='http://myewebsite.io/asset'
                                            onBlur={() => {
                                                setValues()
                                            }}
                                        />
                                        <label
                                            htmlFor='formGroupExampleInput-2'
                                            className='small'
                                        >
                                            Where users will go to loearn more about
                                            this item.
                                        </label>
                                    </div>
                                    <div className='form-group'>
                                        <label
                                            htmlFor='formGroupExampleInput-2'
                                            className='lead'
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            className='form-control'
                                            id='nftDescription'
                                            placeholder='Provide a detailed description'
                                            rows={3}
                                            onBlur={() => {
                                                setValues()
                                            }}
                                        ></textarea>
                                        <label
                                            htmlFor='formGroupExampleInput-2'
                                            className='small'
                                        >
                                            This will be included on the item&apos;s detail
                                            page. - Markdown syntax is supported.
                                        </label>
                                    </div>
                                </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTDetails