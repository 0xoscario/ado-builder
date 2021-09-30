//CoinBalance(dspType, coinData) - Exports token data from active wallet
//dspType - Used to set preformated text return (e.g. "Dash")
import React from 'react'
import usrWalletData from '../modules/walletData'

const CoinBalance = (props) => {
    usrWalletData.setValue(props.coinData)
    //usrWalletData.showValue()

    // Setup Currency Icon Path
    const currencyIcon =
        './images/currency-icons/currency-icons_' +
        `${usrWalletData.denomTitle.toUpperCase()}` +
        '.png'

    //Preformated data for integration into the Dashboard component
    if (props.dspType === 'Dash') {
        //props.setAccountValue(usrWalletData.acctValue)
        return (
            <div>
                <div className='row'>
                    <img src={currencyIcon} className='h-100 col-2' />
                    <p className='col-5 h4 text-uppercase'>
                        {usrWalletData.denomTitle}
                    </p>
                    <p className='col-5 h5 text-right'>
                        {Math.trunc(usrWalletData.amt * Math.pow(10, 4)) /
                            Math.pow(10, 4)}
                    </p>
                </div>
                <hr />
                <div id='titles' className='row mt-4'>
                    <p className='col-6 h5 text-dark'>Price</p>
                    <p className='col-6 h5 text-dark text-right pr-3'>
                        Balance
                    </p>
                </div>
                <div id='titles' className='row'>
                    <p className='col-6 primary'>
                        {usrWalletData.currency(usrWalletData.swapRate)}
                    </p>
                    <p className='col-6 text-right'>
                        {usrWalletData.currency(usrWalletData.worth)}
                    </p>
                    {usrWalletData.accumulate(usrWalletData.worth)}
                </div>
            </div>
        )
        //Section to preformat data for integration into other components
    } else if (props.dspType === 'Total') {
        return <p>{usrWalletData.currency(usrWalletData.acctValue)}</p>
    } else {
        return null
    }
}

export default CoinBalance
