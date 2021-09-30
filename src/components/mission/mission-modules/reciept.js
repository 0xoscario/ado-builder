import React from 'react'

const Reciept = (props) => {
    return (
        <div id='reciept-panel' className='row'>
            <div className='col-1'></div>
            <div
                id='inner-content-box'
                className='col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-2 p-4'
            >
                {/* Show removal button only if panel is not set to be required */}
                {props.Panels.reciept.isRequired ? null : (
                    <div className='remove-panel float-left'>
                        <button
                            type='button'
                            className='btn btn-danger'
                            onClick={() => {
                                props.setPanels({
                                    ...props.Panels,
                                    reciept: {
                                        ...props.Panels.reciept,
                                        showPanel: false,
                                    },
                                })
                            }}
                        >
                            X
                        </button>
                    </div>
                )}
                <div className='custom-control custom-switch float-right'>
                    <input
                        type='checkbox'
                        className='custom-control-input'
                        id='reciept-switch'
                        data-toggle='collapse'
                        data-target='#RecieptForm'
                        aria-expanded='false'
                        aria-controls='RecieptForm'
                    />
                    <label
                        className='custom-control-label'
                        htmlFor='reciept-switch'
                    ></label>
                </div>
                <p className='h4 pt-1 text-uppercase'>Reciept</p>
                <p className='h6'>Create a transaction record reciept.</p>
            </div>
            <div
                id='RecieptForm'
                className=' col-6 offset-lg-3 text-left collapse'
            >
                <hr />
            </div>
        </div>
    )
}

export default Reciept
