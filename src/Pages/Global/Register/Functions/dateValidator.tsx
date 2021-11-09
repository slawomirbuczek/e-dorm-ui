import IInputValidatorMessages from "../Types/IInputValidatorMessages";

const dateValidator = (key: string, value: string) => {
    const requirementsArray: IInputValidatorMessages[] = [];

    requirementsArray.push({
        label: 'At least 3 characters',
        status: value.length >= 3
    });

    requirementsArray.push({
        label: `Correct ${key} value`,
        status: isDate(value)
    });

    return requirementsArray;
};

const isDate = (date: string) => {
    const parsedDate = Date.parse(date);
    return (isNaN(Number(date)) && !isNaN(parsedDate));
}

export default dateValidator;