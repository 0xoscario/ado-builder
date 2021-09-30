// PrimaryHeaderBar - Component which shows graphical header to tops of pages
import React from 'react'

const PrimaryHeaderBar = () => {
    return (
        <div
            id='headerBar'
            className='container-fluid d-flex align-items-center dark-opacity text-light p-2 mb-3'
        >
            <img
                src='./images/adp-logo.png'
                height='40'
                className='float-left pl-3 pb-2'
            />
            <p className='h1' className='float-left display-4 ml-4 mr-4 p-2'>
                Andromeda
            </p>
            <p className='h4' className='pt-4'>
                Functional Terra NFTs
            </p>
        </div>
    )
}

export default PrimaryHeaderBar
