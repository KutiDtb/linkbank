import apisauce from 'apisauce'

var client = apisauce.create({
    baseURL: 'http://54.255.234.104:3000/',
    headers: {
        // 'SMP-DeviceId': Operator.getDeviceID(),
        // 'SMP-PhoneNo': '01694084333'
    },
    timeout: 30000
})

function setHeaderToken(token) {
    client.setHeader('x-access-token', token)
    console.log("Update x-access-token: success")
}

const login = (phone, pass) => {
    let params = {
        phone: phone,
        password: pass,
    }
    return {
        send: () => client.post('user/login/local', params)
    }
}

const accountCheckPhone = (phone, name) => {
    let params = {
        phone,
        name,
    }
    return {
        send: () => client.post('user/check-phone', params)
    }
}

const accountSetPass = (phone, password, name) => {
    let params = {
        phone,
        password,
        name
    }
    return {
        send: () => client.post('user/register', params)
    }
}

const accountCheckOtp = (phone, otp) => {
    let params = {
        phone,
        otp,
    }
    return {
        send: () => client.post('user/active-user', params)
    }
}

const accountLoadProfile = () => {
    return {
        send: () => client.get('user/load-profile')
    }
}

const accountInfoOne = (profile) => {
    let params = {
        user: {
            profile,
        }
    }
    return {
        send: () => client.post('user/update-profile', params)
    }
}

const accountInfoTwo = (profile) => {
    let params = {
        user: {
            profile,
        }
    }
    return {
        send: () => client.post('user/update-profile', params)
    }
}

const accountInfoWork = (occupation) => {
    let params = {
        user: {
            occupation,
        }
    }
    return {
        send: () => client.post('user/update-profile', params)
    }
}

const accountInfoRelations = (relations) => {
    let params = {
        user: {
            relations,
        }
    }
    return {
        send: () => client.post('user/update-profile', params)
    }
}
const accountInfoAddPhones = (additional_phone_number) => {
    let params = {
        user: {
            additional_phone_number,
        }
    }
    return {
        send: () => client.post('user/update-profile', params)
    }
}

// const paymentCashout = (amount, receiverName, bankAccount, bankName, bankName) => {
//     let params = {
//         amount,
//         receiverName,
//         bankAccount,
//         bankName,
//         bankName
//     }
//     return {
//         send: () => client.post('user/active-user', params)
//     }
// }

const paymentBuyCredit = (total_amount, return_url, cancel_url) => {
    let params = {
        total_amount,
        return_url,
        cancel_url,
    }
    return {
        send: () => client.post('payment/request-payment', params)
    }
}

const paymentLoanRegister = (loan_type, loan_deadline_min, loan_deadline_max, loan_range_min, loan_range_max) => {
    let params = {
        type: 1,
        loan_type,
        loan_deadline_min,
        loan_deadline_max,
        loan_range_max,
        loan_range_min,
    }
    return {
        send: () => client.post('loan/new', params)
    }
}

const paymentCreateCreditCard = (loan_type, publisher, loan_range_min, loan_range_max) => {
    let params = {
        type: 2,
        loan_type,
        publisher,
        loan_range_max,
        loan_range_min,
    }
    return {
        send: () => client.post('loan/new', params)
    }
}

export default {
    setHeaderToken,
    login, accountCheckPhone, accountSetPass, accountCheckOtp,
    accountInfoOne, accountLoadProfile, accountInfoTwo, accountInfoWork, accountInfoRelations, accountInfoAddPhones,
    paymentBuyCredit, paymentLoanRegister, paymentCreateCreditCard,
}
