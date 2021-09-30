//AddedModuleButton -
import React, { useState } from 'react'

//Load Interface Components & Iconography
import SettingsIcon from '@material-ui/icons/SettingsOutlined'
import DownArrowIcon from '@material-ui/icons/ArrowDownwardOutlined'

// Check if is first module button added & include drop arrow above if true
// Map the modules provided to create a series of buttons to apply to current project

//Apply Props of Added Modules
const addedModuleName = 'Module Name'

const AddedModuleButton = () => {
    return (
        <div className='text-center'>
            <button
                type='button'
                className='btn btn-light w-100'
                onClick={() => {
                    return false
                }}
            >
                <span className='float-left'>{addedModuleName}</span>
                <span className='float-right'>
                    <SettingsIcon />
                </span>
            </button>

            <div className='m-2 text-center'>
                <DownArrowIcon fontSize='large' color='action' />
            </div>

            <button
                type='button'
                className='btn btn-light w-100'
                onClick={() => {
                    return false
                }}
            >
                <span className='float-left'>{addedModuleName}</span>
                <span className='float-right'>
                    <SettingsIcon />
                </span>
            </button>
        </div>
    ) /* return */
}

export default AddedModuleButton
