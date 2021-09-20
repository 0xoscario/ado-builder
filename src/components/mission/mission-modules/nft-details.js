import React from "react"

const NFTDetails = (props) => {
    return (
                <div id="NFTD-details" className="row">
                    <div className="col-1"></div>
                    <div id="inner-content-box" className="col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-5 p-4">
                        <p className="h4 pt-5">DETAILS</p>
                        <p className="h6">Tell us about what you're creating.</p>
                        <hr />
                        <div id="detailForm" className=" col-6 offset-lg-3 text-left">
                            <form id="mainForm">
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput" className="lead">Name your NFT</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="NFT Name" />
                                        <label htmlFor="formGroupExampleInput" className="small">Give your creation a name you'll easily identify it with.</label>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput-2" className="lead">Create a NFT symbol</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput-2" placeholder="TT" />
                                        <label htmlFor="formGroupExampleInput-2" className="small">A publicly searchable identifier.</label>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput-2" className="lead">External link / url to image</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput-2" placeholder="http://myewebsite.io/asset" />
                                        <label htmlFor="formGroupExampleInput-2" className="small">Where users will go to loearn more about this item.</label>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput-2" className="lead">Description</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Provide a detailed description" rows="3"></textarea>
                                        <label htmlFor="formGroupExampleInput-2" className="small">This will be included on the item's detail page. - Markdown syntax is supported.</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
    )
}

export default NFTDetails