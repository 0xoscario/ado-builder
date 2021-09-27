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
        } else {
            /* Post failure notices on validation */
            Panels.validateFault.hasFailed = true //Trigger Error Popups in Mission-Builder
            Panels.validateFault.messages = [...Panels.validateFault.messages, {isOpen:true, message:'NFT details panel requires validation!', type:'error'}] //Add error to pool
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
        } else if (Panels.whitelist.isRequired) {
            /* Post failure notices on validation */
            Panels.validateFault.hasFailed = true //Trigger Error Popups in Mission-Builder
            Panels.validateFault.messages = [...Panels.validateFault.messages, {isOpen:true, message:'Whitelist panel requires validation!', type:'error'}] //Add error to pool

        }

        this.data += '    ]\n' //close modules
        
        
        //Load message to the console
        //console.clear()
        //console.info(this.data)
    }
}

const Messages = new Messaging()
export default Messages