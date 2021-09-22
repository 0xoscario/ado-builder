import React from 'react'

const ESign = () => {
    return (
        <div id="timelock-panel" className="row">
        <div className="col-1"></div>
        <div id="inner-content-box" className="col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-2 p-4">
            <div className="custom-control custom-switch float-right">
                <input type="checkbox" className="custom-control-input" id="esign-switch" data-toggle="collapse" data-target="#ESignForm" aria-expanded="false" aria-controls="ESignForm" />
                <label className="custom-control-label" htmlFor="esign-switch"></label>
            </div>
            <p className="h4 pt-1 text-uppercase">E-Signature</p>
            <p className="h6">Sign with an electronic signature.</p>
        </div>
        <div id="ESignForm" className=" col-6 offset-lg-3 text-left collapse">
            <hr />
        </div>
    </div>
    )
}

export default ESign