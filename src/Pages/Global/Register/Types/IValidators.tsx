import IInputValidatorMessages from "./IInputValidatorMessages";

export default interface IValidators {
    email: IInputValidatorMessages[] | [];
    password: IInputValidatorMessages[] | [];
    firstName: IInputValidatorMessages[] | [];
    lastName: IInputValidatorMessages[] | [];
    phoneNumber: IInputValidatorMessages[] | [];
    birthday: IInputValidatorMessages[] | [];
}