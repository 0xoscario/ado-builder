// TO BE SWAPPED FOR FINAL SECTION & TITLE
// BurnPage - Placeholder for Component

import React from 'react'

const ArchivePage = (props) => {
    return (
        <div id='archiveWrapper' className='text-center text-light m-5 p-5 '>
            <p className='h3'>Contracts</p>
            <button
                className='btn btn-primary m-3 p-2'
                onClick={() => {
                    props.setShowDash(true)
                }}
            >
                Close Page
            </button>
        </div>
    )
}

export default ArchivePage
