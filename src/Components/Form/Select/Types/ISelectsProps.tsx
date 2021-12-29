import ISingleOption from "./ISingleOption";

export default interface ISelectsProps {
    onChange: (value: string) => void;
    options: ISingleOption[];
    header: string;
}