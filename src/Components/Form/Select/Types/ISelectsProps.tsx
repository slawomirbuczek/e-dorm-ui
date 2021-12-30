import ISingleOption from "./ISingleOption"

export default interface ISelectsProps {
    onChange: (value: string | number) => void
    options: ISingleOption[]
    header: string
}