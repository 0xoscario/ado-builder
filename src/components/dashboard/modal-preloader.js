// Preloader - Shows the dashboard preloader along with loading information
import React, { useState } from 'react'

//Load Pre-load Animation Icons from MaterialUI
import CircularProgress from '@material-ui/core/CircularProgress'

const Preloader = (props) => {
    return (
        <div
            id='modal-preloader'
            className='modal-preloader col-4 offset-lg-4 light-opacity rounded-lg text-light p-5'
        >
            <CircularProgress />
            {/* <CircularProgress variant="determinate" value={props.loadProgress} /> */}
            <p id='loadLable' className='h4'>
                Loading Dashboard
            </p>
            <p>{props.confirmSwapRate.toString()}</p>
        </div>
    )
}
$('.modal-preloader').show()

export default Preloader
