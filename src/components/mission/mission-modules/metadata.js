import React from 'react'

const Metadata = (props) => {
    return (
        <div id='metadata-panel' className='row'>
            <div className='col-1'></div>
            <div
                id='inner-content-box'
                className='col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-2 p-4'
            >
                {/* Show removal button only if panel is not set to be required */}
                {props.Panels.metadata.isRequired ? null : (
                    <div className='remove-panel float-left'>
                        <button
                            type='button'
                            className='btn btn-danger'
                            onClick={() => {
                                props.setPanels({
                                    ...props.Panels,
                                    metadata: {
                                        ...props.Panels.metadata,
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
                        id='metadata-switch'
                        data-toggle='collapse'
                        data-target='#MetadataForm'
                        aria-expanded='false'
                        aria-controls='MetadataForm'
                    />
                    <label
                        className='custom-control-label'
                        htmlFor='metadata-switch'
                    ></label>
                </div>
                <p className='h4 pt-1 text-uppercase'>Metadata</p>
                <p className='h6'>Add the metadata information for your NFT.</p>
            </div>
            <div
                id='MetadataForm'
                className=' col-6 offset-lg-3 text-left collapse'
            >
                <hr />
            </div>
        </div>
    )
}

export default Metadata
