import React from 'react'

const PreviewPage = (props) => {
    return (
        <div id='previewWrapper'>
            <p className='h3'>Preview Page</p>
            <button
                className='btn btn-primary float-right pad-btn'
                onClick={() => {
                    props.setShowDash(true)
                }}
            >
                Close Page
            </button>
        </div>
    )
}

export default PreviewPage
