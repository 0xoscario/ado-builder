import React from 'react'

const TimeLock = (props) => {
    return (
        <div id='timelock-panel' className='row'>
            <div className='col-1'></div>
            <div
                id='inner-content-box'
                className='col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-2 p-4'
            >
                {/* Show removal button only if panel is not set to be required */}
                {props.Panels.timelock.isRequired ? null : (
                    <div className='remove-panel float-left'>
                        <button
                            type='button'
                            className='btn btn-danger'
                            onClick={() => {
                                props.setPanels({
                                    ...props.Panels,
                                    timelock: {
                                        ...props.Panels.timelock,
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
                        id='timelock-switch'
                        data-toggle='collapse'
                        data-target='#TimeLockForm'
                        aria-expanded='false'
                        aria-controls='TimeLockForm'
                    />
                    <label
                        className='custom-control-label'
                        htmlFor='timelock-switch'
                    ></label>
                </div>
                <p className='h4 pt-1 text-uppercase'>Time Lock</p>
                <p className='h6'>Lock actions for a specified duration.</p>
            </div>
            <div
                id='TimeLockForm'
                className=' col-6 offset-lg-3 text-left collapse'
            >
                <hr />
            </div>
        </div>
    )
}

export default TimeLock
