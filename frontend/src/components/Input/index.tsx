import React, { InputHTMLAttributes } from 'react';
import { InputBlock } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    type: string;
}

const Input: React.FC<Props> = ({ label, name, type, ...rest }) => {
    return (
        <InputBlock>
            <label htmlFor={name}> {label} </label>
            <input type={type} id={name} {...rest} />
        </InputBlock>
    )
}

export default Input
