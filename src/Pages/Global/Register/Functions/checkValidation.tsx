import IInputValidatorMessages from "../Types/IInputValidatorMessages"
import emailValidator from "./emailValidator"
import newPasswordValidator from "./newPasswordValidator"
import phoneValidator from "./phoneValidator"
import repeatPasswordValidator from "./repeatPasswordValidator"
import textFieldValidator from "./textFieldValidator"
import passwordValidator from "./passwordValidator"
import dateValidator from "./dateValidator"

const checkValidation = (key: string, value: string, value1?: string, value2?: string) => {
    let requirementsArray: IInputValidatorMessages[]

    if (key === 'password') {
        requirementsArray = passwordValidator(value)
    } else if (key === 'email') {
        requirementsArray = emailValidator(value)
    } else if (key === 'repeat-password') {
        requirementsArray = repeatPasswordValidator(value, value1 ? value1 : '')
    } else if (key === 'new-password') {
        requirementsArray = newPasswordValidator(value, value1 ? value1 : '', value2 ? value2 : '')
    } else if (key === 'phoneNumber') {
        requirementsArray = phoneValidator(value)
    } else if (key === 'birthday') {
        requirementsArray = dateValidator(key, value)
    } else {
        requirementsArray = textFieldValidator(key, value)
    }

    return requirementsArray
}

export default checkValidation