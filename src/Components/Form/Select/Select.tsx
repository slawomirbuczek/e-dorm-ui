import "./Styles/Select.scss"
import ISelectsProps from "./Types/ISelectsProps"
import {ChangeEvent, useState} from "react"

const Select = ({onChange, options, header}: ISelectsProps): JSX.Element => {
    const [value, setValue] = useState<string | number>(options[0].value)

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const eventValue = event.target.value
        onChange(eventValue)
        setValue(eventValue)
    }

    return (
        <label className="select-wrapper">
            <p>{header}</p>
            <select value={value} onChange={event => handleChange(event)}>
                {
                    options && options.map(
                        (option) => (
                            <option value={option.value}>{option.label}</option>
                        )
                    )
                }
            </select>
        </label>
    )
}

export default Select