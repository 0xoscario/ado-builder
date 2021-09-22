import React from 'react'

const Reciept = () => {
    return (
        <div id="reciept-panel" className="row">
        <div className="col-1"></div>
        <div id="inner-content-box" className="col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-2 p-4">
            <div className="custom-control custom-switch float-right">
                <input type="checkbox" className="custom-control-input" id="reciept-switch" data-toggle="collapse" data-target="#RecieptForm" aria-expanded="false" aria-controls="RecieptForm" />
                <label className="custom-control-label" htmlFor="reciept-switch"></label>
            </div>
            <p className="h4 pt-1 text-uppercase">Reciept</p>
            <p className="h6">Create a transaction record reciept.</p>
        </div>
        <div id="RecieptForm" className=" col-6 offset-lg-3 text-left collapse">
            <hr />
        </div>
    </div>
    )
}

export default Reciept