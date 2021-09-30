// WalletData - Class passing information and data from wallet and chain
import React from 'react'

//Load Terra-Money Modules
import { LCDClient, Coin } from '@terra-money/terra.js'
import {
    NetworkInfo,
    WalletProvider,
    ConnectType,
    useWallet,
    useConnectedWallet,
    WalletStatus,
} from '@terra-money/wallet-provider'

/*{JSON.stringify(
    {
        status,
        network,
        wallets,
        availableConnectTypes,
        availableInstallTypes,
    },
    null,
    2,
)} */

// connect to soju testnet
//const terra = new LCDClient({
//    URL: 'https://tequila-lcd.terra.dev',
//    chainID: 'tequila-0004',
//  });

// LocalTerra
// const terra = new LCDClient({
//   URL: 'http://localhost:1317',
//   chainID: 'localterra'
// });

class WalletData {
    constructor() {
        //Holds Accumulators
        this.acctValue = 0
        this.tokensCounted = 0

        //Used for Parsing Denominations
        this.truncSize = ''
        this.truncTitle = ''
        this.denom = ''
        this.denomTitle = ''

        //Holds Swap Rates for Calculations
        this.swapRatesLoaded = false
        this.lunaSwapRate = ''
        this.krwSwapRate = ''
        this.sdrSwapRate = ''
        this.usdSwapRate = ''

        //Holds Token Values
        this.microAmt = ''
        this.amt = ''
        this.microSwapRate = ''
        this.swapRate = ''
        this.worth = ''

        //this.fetchSwapRates('uusd')
    }

    resetAccumulators() {
        this.acctValue = 0
        this.tokensCounted = 0
    }

    accumulate(value) {
        this.acctValue = this.acctValue + value
        this.tokensCounted = this.tokensCounted + 1
        //console.log("Tokens Counted: " + this.tokensCounted)
    }

    confirmSwapRate() {
        return this.swapRatesLoaded
    }

    setValue(coinData) {
        //Set Truncation Variables for Parsing Value
        this.truncSize = '-4'
        this.truncTitle = '-3' //Reduced by 1 because of 'u' in microtags
        if (coinData.slice(this.truncSize) === 'luna') {
            this.truncSize = '-5' //offsets for uLuna denomination
            this.truncTitle = '-4'
        }
        this.denom = coinData.slice(this.truncSize)
        this.denomTitle = coinData.slice(this.truncTitle)

        //Extract Coin Amounts
        this.microAmt = coinData.slice('0', this.truncSize)
        this.amt = this.microAmt * 0.000001

        //this.getSwapRate('uluna', 'uusd', '1000000')
        /*
        // Removed for async loading
        if (this.denom == "ukrw") {
            this.getSwapRate('ukrw', 'uusd', '1000000')
            console.log("Denom: " + this.denom)
        } else if (this.denom == "usdr") {
            await this.getSwapRate('usdr', 'uusd', '1000000')
            console.log("Denom: " + this.denom)
        } else if (this.denom == "uusd") {
            //same denomination
            //this.getSwapRate('uusd', 'uusd', '1000000')
            console.log("Denom: " + this.denom)
        } else if (this.denom == "uluna") {
            await this.getSwapRate('uluna', 'uusd', '1000000')
            console.log("Denom: " + this.denom)
        }
        console.log("Data Loaded")
*/

        //Pull supported coin swap rates from chain and post to app
        //this.fetchSwapRates('uusd')

        if (this.denom == 'ukrw') {
            this.swapRate = this.krwSwapRate
        } else if (this.denom == 'usdr') {
            this.swapRate = this.sdrSwapRate
        } else if (this.denom == 'uusd') {
            this.swapRate = this.usdSwapRate
        } else if (this.denom == 'uluna') {
            this.swapRate = this.lunaSwapRate
        }
        this.microSwapRate = this.swapRate / 0.000001

        //this.swapRate = this.microSwapRate * 0.000001
        //console.log(this.getSwapRate(this.denom, 'uusd', '1000000'))

        //Calculate Balance
        this.worth = this.amt * this.swapRate

        /* Moved to Coin-Balance Component */
        //Add to accumulator
        //this.acctValue = this.acctValue + this.worth
    }

    async fetchSwapRates(endDenom) {
        const { network } = useWallet()

        // connect to wallets network
        const terra = new LCDClient({
            URL: network.lcd,
            chainID: network.chainID,
        })

        //Declare using LET for loose data assignment
        let offerCoin = new Coin('uluna', '1000000')
        let response = ''

        //Calculate Luna Swap Rate
        offerCoin = new Coin('uluna', '1000000')
        response = await terra.market.swapRate(offerCoin, endDenom)
        this.lunaSwapRate = (response.amount * 0.000001).toString()

        //Calculate SDR Swap Rate
        offerCoin = new Coin('usdr', '1000000')
        response = await terra.market.swapRate(offerCoin, endDenom)
        this.sdrSwapRate = (response.amount * 0.000001).toString()

        //Calculate KRW Swap Rate
        offerCoin = new Coin('ukrw', '1000000')
        response = await terra.market.swapRate(offerCoin, endDenom)
        this.krwSwapRate = (response.amount * 0.000001).toString()

        //Don't retrieve if the output denomination is the same as source (default build for uusd)
        if (endDenom === 'uusd') {
            this.usdSwapRate = 1 //one unit = one unit
        } else {
            //Calculate KRW Swap Rate
            offerCoin = new Coin('uusd', '1000000')
            response = await terra.market.swapRate(offerCoin, endDenom)
            this.usdSwapRate = (response.amount * 0.000001).toString()
        }

        /*Calculate USD Swap Rate 
        offerCoin = new Coin('uusd', '1000000')
        terra.market.swapRate(offerCoin, endDenom).then(c => {
            //console.log(`${offerCoin.toString()} = ${c.toString()}`)
            this.usdSwapRate = (c.amount * 0.000001).toString()
        });
        */
        this.swapRatesLoaded = true
        //setShowPreloader(false)
        console.log('SwapRate Data Loading Complete: ' + this.confirmSwapRate())

        //Async Await HACK on passing state back to calling component
        //console.log("State Update HACK through console log= " + setShowDash(true) + setShowPreloader(false))
    }
    ///////////

    async getSwapRate(startDenom, endDenom, swapAmt) {
        const {
            network,
            wallets,
            availableConnectTypes,
            availableInstallTypes,
        } = useWallet()

        // connect to wallets network
        const terra = new LCDClient({
            URL: network.lcd,
            chainID: network.chainID,
        })
        try {
            const offerCoin = new Coin(startDenom, swapAmt)
            const response = await terra.market.swapRate(offerCoin, endDenom)
            this.microSwapRate = response.amount.toString()
            this.swapRate = (response.amount * 0.000001).toString() //Convert from Micro with Multiplier
            console.log(
                'Response: ' +
                    response.amount +
                    ' | ' +
                    this.microSwapRate +
                    ' | ' +
                    this.swapRate
            )
            /*
        //Calculate the swap rate and assign to both micro & regular rate variables 
        const offerCoin = new Coin(startDenom, swapAmt)
        terra.market.swapRate(offerCoin, endDenom).then(c => {
            //console.log(`${offerCoin.toString()} = ${c.toString()}`)
            this.microSwapRate = c.amount.toString()
            this.swapRate = (c.amount * 0.000001).toString()
        });
        */
        } catch (e) {
            console.log('Event:' + e)
        }
        //console.log(this.swapRate)
    }

    showValue() {
        console.log('Denomination: ' + this.denomTitle + ' | ' + this.denom)
        console.log('Amount: ' + this.amt + ' | ' + this.microAmt)
        console.log(
            'USD Swap Rate: ' + this.swapRate + ' | ' + this.microSwapRate
        )
        //console.log("Coin Data: " + coinData)
    }

    //Setup currency format converter (defaulting at USD)
    currency(number) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        }).format(number)
        /* Needs case select options if other than US currency is used */
        //return new Intl.NumberFormat('en-IN', {style: 'currency',currency: 'INR', minimumFractionDigits: 2}).format(number);
    }
}

const usrWalletData = new WalletData()
export default usrWalletData
