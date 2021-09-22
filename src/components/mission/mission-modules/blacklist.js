// Whitelist - Mission builder form panel for whitelisting
import React from 'react'

const Blacklist = (props) => {
    <div id="blacklist-panel" className="row">
        <div className="col-1"></div>
        <div id="inner-content-box" className="col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-2 p-4">
            <div className="custom-control custom-switch float-right">
                <input type="checkbox" className="custom-control-input" id="whitelist-switch" data-toggle="collapse" data-target="#WhitelistDetailForm" aria-expanded="false" aria-controls="WhitelistDetailForm"/>
                <label className="custom-control-label" htmlFor="whitelist-switch"></label>
            </div>
            <p className="h4 pt-1 text-uppercase">Blacklist Addressess</p>
            <p className="h6">A list of addresses prohibited from interacting with your NFT.</p>
        </div>
        <hr />
    </div>
}

export default Blacklist