//Validators - Class used to provide validation routines for Mission-Builder panel forms
//exports as Validator

class Validators {
    constructor() {
        this.passed = false
    }

    validateNftDetails(name, symbol, url, desc) {
        //when fields are not empty
        //console.info(name + " , " + symbol + " , " + url + " , " + desc)
        if (!name || !symbol || !url || !desc) {
            //if(!name && !symbol && !url && !desc) {
            return false
        } else {
            return true
        }
    }

    validateWhitelist_Add(value) {
        // When value field is blank?
        if (!value) {
            return false
        } else {
            return true
        }
    }

    validateBlacklist_Add(value) {
        // When value field is blank?
        if (!value) {
            return false
        } else {
            return true
        }
    }

    validateRoyalty_Add(description, rateType, rateAmount, address) {
        // When value field is blank?
        if (!rateAmount || !address) {
            return false
        } else {
            return true
        }
    }

    validateTax_Add(description, rateType, rateAmount, address) {
        // When value field is blank?
        if (!rateAmount || !address) {
            return false
        } else {
            return true
        }
    }
}

const Validator = new Validators()
export default Validator