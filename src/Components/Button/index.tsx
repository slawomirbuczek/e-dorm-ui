import React from 'react';
import IButton from './Types/IButton';
import './Styles/Button.scss';
import ImageDisplay from "./Components/ImageDisplay";

const Button = (props: IButton) => {
    const {value, onClick, disabled, type} = props;

    return (
        <div className="button-wrapper">
            <button onClick={onClick} disabled={disabled} className={type}>
                <ImageDisplay {...props}/>
                {value}
            </button>
        </div>
    );
};

export default Button;