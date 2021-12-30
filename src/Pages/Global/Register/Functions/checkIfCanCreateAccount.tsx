import IValidators from "../Types/IValidators"

const checkIfCanCreateAccount = ({
                                     email,
                                     password,
                                     firstName,
                                     lastName,
                                     phoneNumber,
                                     birthday
                                 }: IValidators): boolean => {
    const emailValidation = email.filter(({status}) => status).length === email.length
    const passwordValidation = password.filter(({status}) => status).length === password.length
    const firstNameValidation = firstName.filter(({status}) => status).length === firstName.length
    const lastNameValidation = lastName.filter(({status}) => status).length === lastName.length
    const phoneNumberValidation = phoneNumber.filter(({status}) => status).length === phoneNumber.length
    const birthdayValidation = birthday.filter(({status}) => status).length === birthday.length

    return (emailValidation && passwordValidation && firstNameValidation && lastNameValidation && phoneNumberValidation && birthdayValidation)
}

export default checkIfCanCreateAccount