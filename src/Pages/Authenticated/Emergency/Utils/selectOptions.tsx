import ISingleOption from "../../../../Components/Form/Select/Types/ISingleOption";

export const defaultPrivacyOptions: ISingleOption[] = [
    {
        label: 'Zgłoszenie administracyjne',
        value: 'ADMINISTRATION'
    },
    {
        label: 'Zgłoszenie serwisowe',
        value: 'SERVICE'
    },
    {
        label: 'Zgłoszenie sieciowe',
        value: 'NETWORK'
    }
];

export default defaultPrivacyOptions;