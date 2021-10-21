// Notifications( ) - Shows passed notification popups and errors
//Uses popupDuration variable below to set the duration a popup should be up for
//Stylization types of: error | info | success | warning

import React from 'react'
import { Snackbar, Alert } from '@mui/material'

const Notifications = (props) => {
    const popupDuration = 1500 //time in milliseconds to display popup

    // On Snackbar close
    /* const closeNotify = (e, reason)=> { //original passing event and reason */
    const closeNotify = ()=> {
        props.setNotify({ ...props.notify, isOpen: false }) //only need to change property 'isOpen' to false
    }

    return (
        <Snackbar
            open={props.notify.isOpen}
            autoHideDuration={popupDuration}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={closeNotify}
        >
            <Alert severity={props.notify.type} onClose={closeNotify}>
                {props.notify.message}
            </Alert>
        </Snackbar>
    )
}

export default Notifications