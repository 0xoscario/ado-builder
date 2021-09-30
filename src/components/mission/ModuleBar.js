// ModuleBar(key, id, name, desc, icon, searchText)
// - A component providing a panel showing the module information provided
import React from 'react'
import _ from 'lodash' //underscores '_.' reference lodash in code below and are not an operator

/* Deprecated for URL passing under props.icon
    //Load Interface Components & Iconography
    import SendRecieveIcon from '@material-ui/icons/SwapVertOutlined'
    import ArrowDownwardOutlined from '@material-ui/icons/SwapVertOutlined'
    import SwapHorizontalCircleOutlinedIcon from '@material-ui/icons/SwapHorizontalCircleOutlined'
*/

function ModuleBar(props) {
    // Search result counts are not reset as we want the user to recognize they are filtering available ADOs by their text entered (possibly including a space)

    //Only when search text is present and true should you show results
    if (
        _.includes(props.name.toUpperCase(), props.searchText.toUpperCase()) ||
        _.includes(props.desc.toUpperCase(), props.searchText.toUpperCase())
    ) {
        return (
            <div key={props.id}>
                <div className='row bg-light border border-primary rounded-lg m-0 mb-2 p-4 align-middle text-dark'>
                    <div className='col-1 mr-3'>
                        <div className='rounded-lg'>
                            <img src={props.icon} />
                        </div>
                    </div>
                    <div className='col'>
                        <p className='h5 mb-1'>{props.name}</p>
                        <p className='m-0'>{props.desc}</p>
                    </div>
                    <div className='col-3'>
                        {/* Only offer Add Module button if not currently present */}

                        <button
                            type='button'
                            className={
                                props.Panels[props.action.toString()].showPanel
                                    ? 'btn btn-warning disabled float-right w-100'
                                    : 'btn btn-primary btn-custom float-right w-100'
                            }
                            data-toggle='modal'
                            data-target='#ModuleSelectionForm'
                            onClick={() => {
                                props.setPanels({
                                    ...props.Panels,
                                    [props.action.toString()]: {
                                        ...props.Panels[
                                            props.action.toString()
                                        ],
                                        showPanel: true,
                                    },
                                })
                            }}
                        >
                            {/* props.setPanels({...props.Panels, whitelist:{...props.Panels.whitelist, showPanel:true}})} */}
                            {props.Panels[props.action.toString()].showPanel
                                ? 'In Mission'
                                : 'Add Module'}
                        </button>
                        {/* Adding this disabled toggle to button breaks the modal trigger of 
                                disabled={props.Panels[props.action.toString()].showPanel} 
                            */}
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default ModuleBar
