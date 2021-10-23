//Roaylties(Panels, setPanels) - Roaylties panel integrated in Mission-Builder
import React, { useState, useEffect } from 'react';
import _ from 'lodash'; //underscores '_.' reference lodash in code below and are not an operator

// Import components
import Notifications from '../notification'; //Notify popup component for adding & error catching

//Import Form Validators
import Validator from '../../utils/validators';

const Royalties = (props) => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: '',
  }); //Used to pass to notification to popup
  const [rateTypeSelected, setRateTypeSelected] = useState('percent'); //shows related rate-type data entry form (default for Percentage-type)
  const [idCount, setIdCount] = useState('1');

  // Test accounts noted at: https://github.com/terra-money/localterra#accounts
  function addToRoyaltyList() {
    //Uses form data to load address.

    // Validate form field
    // validator (descirption, rateType, rateAmount, Address)
    if (rateTypeSelected === 'percent') {
      if (
        Validator.validateRoyalty_Add(
          (document.getElementById('RoyaltyDescription') as HTMLInputElement)
            .value,
          (document.getElementById('RoyaltyRateType') as HTMLInputElement)
            .value,
          (document.getElementById('RoyaltyRatePercent') as HTMLInputElement)
            .value,
          (document.getElementById('RoyaltyAddress') as HTMLInputElement).value
        )
      ) {
        setNotify({
          isOpen: true,
          message: 'Entry added to royalty distribution list.',
          type: 'success',
        });
        setIdCount(idCount + '1');
        //document.getElementById("RoyaltyRatePercentage") as HTMLInputElement).value = '' //clear form field

        /* Post validated data to Panel array "royaltieslist" (for Perctage) */
        props.Panels.royalties.royaltieslist = [
          ...props.Panels.royalties.royaltieslist,
          {
            id: idCount,
            description: (
              document.getElementById('RoyaltyDescription') as HTMLInputElement
            ).value,
            rateType: (
              document.getElementById('RoyaltyRateType') as HTMLInputElement
            ).value,
            amount: (
              document.getElementById('RoyaltyRatePercent') as HTMLInputElement
            ).value,
            denom: '',
            address: (
              document.getElementById('RoyaltyAddress') as HTMLInputElement
            ).value,
          },
        ];
        props.Panels.royalties.isValidated = true;
      } else {
        setNotify({
          isOpen: true,
          message: 'Please provide more information.',
          type: 'error',
        });
      }
    } else {
      if (
        Validator.validateRoyalty_Add(
          (document.getElementById('RoyaltyDescription') as HTMLInputElement)
            .value,
          (document.getElementById('RoyaltyRateType') as HTMLInputElement)
            .value,
          (document.getElementById('RoyaltyFlatAmount') as HTMLInputElement)
            .value,
          (document.getElementById('RoyaltyAddress') as HTMLInputElement).value
        )
      ) {
        setNotify({
          isOpen: true,
          message: 'Entry added to royalty distribution list.',
          type: 'success',
        });
        setIdCount(idCount + '1');
        //document.getElementById("RoyaltyFlatAmount") as HTMLInputElement).value = '' //clear form field

        /* Post validated data to Panel array "royaltieslist" (for Perctage) */
        props.Panels.royalties.royaltieslist = [
          ...props.Panels.royalties.royaltieslist,
          {
            id: idCount,
            description: (
              document.getElementById('RoyaltyDescription') as HTMLInputElement
            ).value,
            rateType: (
              document.getElementById('RoyaltyRateType') as HTMLInputElement
            ).value,
            amount: (
              document.getElementById('RoyaltyFlatAmount') as HTMLInputElement
            ).value,
            denom: (
              document.getElementById('RoyaltyRateDenom') as HTMLInputElement
            ).value,
            address: (
              document.getElementById('RoyaltyAddress') as HTMLInputElement
            ).value,
          },
        ];
        props.Panels.royalties.isValidated = true;
      } else {
        setNotify({
          isOpen: true,
          message: 'Please provide more information.',
          type: 'error',
        });
      }
    }

    //Only once submitted
    (document.getElementById('RoyaltyAddress') as HTMLInputElement).value = ''; //clear form field
    (document.getElementById('RoyaltyDescription') as HTMLInputElement).value =
      ''; //clear form field
    document.getElementById('RoyaltyDescription').focus(); //place focus back to top of panel form
  }

  function removeFromList(royalty) {
    props.Panels.royalties.royaltieslist = _.reject(
      props.Panels.royalties.royaltieslist,
      royalty
    );
    if (props.Panels.royalties.royaltieslist.length <= 0) {
      props.Panels.royalties.isValidated = false;
    } //pull validation if no addresses left

    setNotify({
      isOpen: true,
      message: 'Entry removed from royalty address list.',
      type: 'warning',
    });
  }

  return (
    <div
      id="royalties-panel"
      className="bg-white shadow sm:rounded-md sm:overflow-hidden px-4 py-4 my-4"
    >
      <div className="col-1"></div>
      <div
        id="inner-content-box"
        className={
          props.Panels.royalties.highlight
            ? 'col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-5 p-4 border border-warning'
            : 'col-9 mid-opacity rounded-lg text-light text-center mt-4 mx-5 mb-5 p-4'
        }
      >
        {/* Show removal button only if panel is not set to be required */}
        {props.Panels.royalties.isRequired ? null : (
          <div className="remove-panel float-left">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                props.setPanels({
                  ...props.Panels,
                  royalties: {
                    ...props.Panels.royalties,
                    showPanel: false,
                  },
                });
              }}
            >
              X
            </button>
          </div>
        )}
        {/* Show a validation indicator if the data has been validated */}
        {props.Panels.royalties.isValidated ? (
          <div className="validate-panel float-left">
            <p className="text-danger fload-left small">Validated</p>
          </div>
        ) : null}
        <div className="custom-control custom-switch float-right">
          <input
            type="checkbox"
            className="custom-control-input"
            id="royalties-switch"
            data-toggle="collapse"
            data-target="#RoyaltiesForm"
            aria-expanded="false"
            aria-controls="RoyaltiesForm"
          />
          <label
            className="custom-control-label"
            htmlFor="royalties-switch"
          ></label>
        </div>
        <p className="h4 pt-1 text-uppercase">Setup Royalties</p>
        <p className="h6">
          Fees paid to the author, owner of the NFT. By percentage or flat fee.
        </p>
        <div
          id="RoyaltiesForm"
          className=" col-6 offset-lg-3 text-left collapse"
        >
          <hr />
          <div>
            <p className="row h6 text-primary my-4">
              What royalty fee would you like applied to the sale of this asset?
            </p>
            <div className="form-group my-2">
              <div className="form-group">
                <label htmlFor="RoyaltyDescription" className="lead">
                  Royalty Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="RoyaltyDescription"
                  placeholder="Creator's Share"
                />
                <label htmlFor="RoyaltyDescription" className="small">
                  *Optional - Information is solely for organizational use.
                </label>
              </div>

              {/* Distribution type assignment for form by dropdown */}
              <label className="my-1 mr-2 lead" htmlFor="RoyaltyRateType">
                Distribution Type
              </label>
              <select
                id="RoyaltyRateType"
                className="custom-select my-1 mr-sm-2"
                onChange={(event) => setRateTypeSelected(event.target.value)}
              >
                <option value="percent">By Percentage</option>
                <option value="flat">By Flat Fee</option>
              </select>

              <div className="row light-opacity rounded-lg p-3 mt-3">
                {rateTypeSelected === 'percent' && (
                  <div>
                    <label htmlFor="RoyaltyRatePercent" className="row lead">
                      % fee of sale price
                    </label>
                    <div className="row">
                      <input
                        type="text"
                        className="form-control col-5"
                        id="RoyaltyRatePercent"
                        placeholder="5%"
                      />
                    </div>
                  </div>
                )}

                {rateTypeSelected === 'flat' && (
                  <div className="row">
                    <div className="col pl-0">
                      <label htmlFor="RoyaltyFlatAmount" className="lead">
                        Flat fee
                      </label>
                      <input
                        type="text"
                        id="RoyaltyFlatAmount"
                        className="form-control col"
                        placeholder="$50.00"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="RoyaltyRateDenom" className="lead">
                        Currency type
                      </label>
                      {/* <input type="text" id="royalty-rate-flat-denom" className="form-control col" placeholder="USD" /> 
                                                        <label className="my-1 mr-2 lead" htmlFor="rate-denom">Preference</label> */}
                      <select
                        id="RoyaltyRateDenom"
                        className="custom-select my-1 mr-sm-2"
                      >
                        <option value="USD">USD</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              <div className="form-group my-5">
                <p className="row h6 text-primary my-2">
                  Reciever of this royalty payout?
                </p>
                <label htmlFor="RoyaltyAddress" className="row lead">
                  Alphanumeric Terra Address
                </label>
                <div className="row">
                  <input
                    type="text"
                    className="form-control col"
                    id="RoyaltyAddress"
                    placeholder="terra14lxhx09fyemu9lw46c9m9jk63cg6u8wdc8pdu4"
                  />
                  <button
                    type="button"
                    className="col-2 btn btn-primary ml-2"
                    onClick={() => addToRoyaltyList()}
                  >
                    Add
                  </button>
                </div>
                <label htmlFor="formGroupExampleInput" className="small">
                  Address recieving funds from royalty.
                </label>
              </div>
            </div>
            <hr />
            <p className="h5">Royalty Recipient</p>

            {props.Panels.royalties.royaltieslist.map((royalty) => (
              <div
                key={royalty.id}
                className="row mid-opacity rounded-lg text-dark small p-3 mb-2"
              >
                <div className="col text-left m-0">
                  {royalty.description ? (
                    <p className="lead">{royalty.description}</p>
                  ) : null}
                  {
                    //only show if ratetype is percentage
                    royalty.rateType === 'percent' && (
                      <p>
                        <span className="small">Amount: </span>
                        {royalty.amount}%{' '}
                      </p>
                    )
                  }
                  {
                    //only show if ratetype is flat
                    royalty.rateType === 'flat' && (
                      <p>
                        <span className="small">Amount: </span>
                        {royalty.amount} {royalty.denom}
                      </p>
                    )
                  }
                  <p>
                    <span className="small">To: </span>
                    {royalty.address}
                  </p>
                </div>
                <a
                  className="col-2  text-danger"
                  onClick={() => removeFromList(royalty)}
                >
                  Remove
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {notify ? <Notifications notify={notify} setNotify={setNotify} /> : null}
    </div>
  );
};

export default Royalties;
