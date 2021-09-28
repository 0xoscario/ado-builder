//Messaging - Class to construct user data to construct messaging for contract interaction
// exports as Messages

class Messaging {
    constructor() {
        this.data = ''
    }

    //Recieves panel data for processing into message example
    updateMessage(Panels) {
        Panels.validateFault.hasFailed = false //clear validation faulting
        Panels.validateFault.messages = [] //clear error messages
        this.data = '' //clear previous message

/* Set validation failure routine to push error message popups from mission-dashboard (Tests against ifRequired?) */

    //Load Initial Contract Sample Data
        //Load when there is a validated nftDetails
        if (Panels.nftdetails.isValidated) {
            this.data += '"name": "' + Panels.nftdetails.name + '",\n'
            this.data += '"symbol": "' + Panels.nftdetails.symbol + '",\n'
            this.data += '"minter": "terra1...",\n'
            this.data += '    "modules": [\n'
        } else if (Panels.nftdetails.showPanel) {
            /* Post failure notices on validation */
            Panels.validateFault.hasFailed = true //Trigger Error Popups in Mission-Builder
            Panels.validateFault.messages = [{isOpen:true, message:'NFT details panel requires validation!', type:'error'}, ...Panels.validateFault.messages] //Add error to pool

            document.getElementById("nftName").focus() //set focus on first line item of NFTDetails Panel
        }

        //Load when there is a validated whitelist
        if (Panels.whitelist.isValidated) {
            this.data += '      "whitelist": {\n'
            this.data += '          "moderators": ['
            Panels.whitelist.toWhitelist.map((wl) => (
                this.data += '"' + wl.address + '", '
            ))
            this.data += ']\n'
            this.data += '      }\n'
        } else if (Panels.whitelist.showPanel) {
            /* Post failure notices on validation */
            Panels.validateFault.hasFailed = true //Trigger Error Popups in Mission-Builder
            Panels.validateFault.messages = [{isOpen:true, message:'Whitelist panel requires validation!', type:'error'}, ...Panels.validateFault.messages] //Add error to pool

            document.getElementById("whitelistAddAddress").focus() //set the focus to the whitelist
        }

        //Load when there is a validated Royalty List
        if (Panels.royalties.isValidated) {
            Panels.royalties.royaltieslist.map((royalty) => (
                this.data += '        "royalty": {\n',
                this.data += '            "rate": {\n',
                royalty.rateType === "percent" && (
                    this.data += '                "' + royalty.rateType + '": ' + royalty.amount,
                    this.data += '\n    }\n'
                ),
                royalty.rateType === "flat" && (
                    this.data += '          "' + royalty.rateType + '": {\n',
                    this.data += '              "amount": ' + royalty.amount + '\n',
                    this.data += '              "denom": "' + royalty.denom + '"\n',
                    this.data += '\n        }\n'
                ),
                this.data += '          "recievers": ["' + royalty.address + '"] \n',
                this.data += '          "description": "' + royalty.description +'" \n',
                this.data += '          }\n',
                this.data += '      }\n'
            ))
        } else if (Panels.royalties.showPanel) {
            /* Post failure notices on validation */
            Panels.validateFault.hasFailed = true //Trigger Error Popups in Mission-Builder
            Panels.validateFault.messages = [{isOpen:true, message:'Royalties panel requires validation!', type:'error'}, ...Panels.validateFault.messages] //Add error to pool

            document.getElementById("RoyaltyDescription").focus() //set the focus to the Royalty description if panel is open
        }

        //Load when there is a validated blacklist
        if (Panels.blacklist.isValidated) {
            this.data += '      "blacklist": {\n'
            this.data += '          "moderators": ['
            Panels.blacklist.toBlacklist.map((wl) => (
                this.data += '"' + wl.address + '", '
            ))
            this.data += ']\n'
            this.data += '      }\n'
        } else if (Panels.blacklist.showPanel) {
            /* Post failure notices on validation */
            Panels.validateFault.hasFailed = true //Trigger Error Popups in Mission-Builder
            Panels.validateFault.messages = [{isOpen:true, message:'Blacklist panel requires validation!', type:'error'}, ...Panels.validateFault.messages] //Add error to pool

            document.getElementById("blacklistAddAddress").focus() //set the focus to the blacklist
        }

        this.data += '    ]\n' //close modules
        
        
        //Load message to the console
        //console.clear()
        //console.info(this.data)
    }
}

const Messages = new Messaging()
export default Messages