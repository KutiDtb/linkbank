import appConfig from '../../config/app-config'

function checkArrayNull(variable) {
    if (variable instanceof Array) {
        return false;
    } else {
        return true;
    }
}

export function checkPhoneVN(phone) {
    if (phone.length < 10) {
        return -2;
    } else if (10 === phone.length) {
        var listMatch = phone.match(appConfig.VALIDATE.REGREX.PHONE_NUMBER_10);
        if (checkArrayNull(listMatch)) {
            return 0;
        } else {
            return 1;
        }
    } else {
        return -1;
    }
}

export function checkValidString(value) {
    if (value === '' || value === null || value === undefined) {
        return false
    }
    return true
}