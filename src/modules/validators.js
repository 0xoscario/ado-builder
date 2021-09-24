//Validators - Class used to provide validation routines for Mission-Builder panel forms

class Validators {
    constructor() {
        this.passed = false
    }

    validateWhitelist_Add(value) {
        // When value field is blank?
        if (!value) {
            return false
        } else {
            return true
        }
    }
}

const Validator = new Validators()
export default Validator