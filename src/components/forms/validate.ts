

export const validateSignUp = (values: any) => {
    const errors: any = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    }
    else if(values.firstName.length < 2){
        errors.firstName = 'Must be at least 2 characters'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if(values.lastName.length < 2){
        errors.lastName = 'Must be at least 2 characters'
    }

    return errors

}
export const validateLastName = (values: any) => {
    const errors: any = {}
    if (!values.lastName) {
        errors.lastName = 'Required'
    }
    else if(values.lastName.length < 2){
        errors.lastName = 'Must be at least 2 characters'
    }
    return errors
}
export const validateFirstName = (values: any) => {
    const errors: any = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    }
    else if(values.firstName.length < 2){
        errors.firstName = 'Must be at least 2 characters'
    }
    return errors
}

export const validateLogin = (values: any) => {
    const errors: any = {}
    if (!values.email) {
        errors.email = 'Required'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors
}
export const validateCounty = (values: any) => {
    const errors: any = {}
    if (!values.county) {
        errors.county = 'Required'
    }
    else if(values.county !== 'northumberland'){
        errors.county = `We haven't got services in ${values.county} yet, please email info@northernneckgarbage.com to find
        out when we will be in your area.`
    }
    return errors
}
export const validateService = (values: any) => {
    const errors: any = {}
    if (!values.services) {
        errors.name = 'Must select at least one service'
    }
    return errors
}

export const validatePhone = (values: any) => {
    const errors: any = {}
    const phoneNumberRegex = /\d{3}-\d{3}-\d{4}/;
    if( !phoneNumberRegex.test(values.phone)){
        errors.phone = 'Invalid phone number, must be 10 digits (xxx-xxx-xxxx)'
    }
    return errors
}

export const validateAddress = (values: any) => {
    const errors: any = {}

    if (!values.houseNumber) {
        errors.address = 'Required'
    }
    if (!values.streetName) {
        errors.streetName = 'Required'
    }
    if (!values.city) {
        errors.city = 'Required'
    }
    if (!values.state) {
        errors.state = 'Required'
    }
    else if(values.state.length < 2){
        errors.state = 'State Value must be 2 characters'
    }
    else if(values.state !== 'va'){
        errors.state = 'We only service Virginia at this time'
    }
    if (!values.zipCode) {
        errors.zipCode = 'Required'
    }
    else if(values.zipCode.length < 5){
        errors.zipCode = 'Must be at least 5 characters'
    }
    return errors
}