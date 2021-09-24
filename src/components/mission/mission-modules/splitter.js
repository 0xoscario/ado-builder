import React from 'react'

const Splitter = (props) => {
    return (
        <div id="splitter-panel" className="row">
        <div className="col-1"></div>
        <div id="inner-content-box" className="col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-2 p-4">
            {/* Show removal button only if panel is not set to be required */}
            {props.Panels.splitter.isRequired? 
                    null
                :   
                    <div className="remove-panel float-left">
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={() => {
                                props.setPanels({...props.Panels, splitter:{...props.Panels.splitter, showPanel:false}})
                            }}>
                            X
                        </button>
                    </div>
                }
            <div className="custom-control custom-switch float-right">
                <input type="checkbox" className="custom-control-input" id="splitter-switch" data-toggle="collapse" data-target="#SplitterForm" aria-expanded="false" aria-controls="SplitterForm" />
                <label className="custom-control-label" htmlFor="splitter-switch"></label>
            </div>
            <p className="h4 pt-1 text-uppercase">Splitting</p>
            <p className="h6">Assign a percentage to certain recipients.</p>
        </div>
        <div id="SplitterForm" className=" col-6 offset-lg-3 text-left collapse">
            <hr />
        </div>
    </div>
    )
}

export default Splitter