import React from 'react'

const Splitter = (props) => {
    return (
        <div id='splitter-panel' className='bg-white shadow sm:rounded-md sm:overflow-hidden px-4 py-4 my-4'>
            <div
                id='inner-content-box'
                className='col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-2 p-4'
            >
                {/* Show removal button only if panel is not set to be required */}
                {props.Panels.splitter.isRequired ? null : (
                    <div className='remove-panel float-left'>
                        <button
                            type='button'
                            className='inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 sm:text-sm'
                            onClick={() => {
                                props.setPanels({
                                    ...props.Panels,
                                    splitter: {
                                        ...props.Panels.splitter,
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
                        id='splitter-switch'
                        data-toggle='collapse'
                        data-target='#SplitterForm'
                        aria-expanded='false'
                        aria-controls='SplitterForm'
                    />
                    <label
                        className='custom-control-label'
                        htmlFor='splitter-switch'
                    ></label>
                </div>
                <p className='h4 pt-1 text-uppercase'>Splitting</p>
                <p className='h6'>Assign a percentage to certain recipients.</p>
            </div>
            <div
                id='SplitterForm'
                className=' col-6 offset-lg-3 text-left collapse'
            >
                <hr />
            </div>
        </div>
    )
}

export default Splitter