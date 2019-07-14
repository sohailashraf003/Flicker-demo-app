/**
 * 
 */
class CustomErrorHandler extends Error {

    constructor(errorCode, errorMsg) {
        super();
        this.errorCode = errorCode;
        this.errorMsg = errorMsg;
    }

}

module.exports = CustomErrorHandler;