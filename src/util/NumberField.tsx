import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';

type Props = Omit<TextFieldProps, 'value' | 'onChange'> & {
    value: number
    onChange?: (e: React.ChangeEvent<{ value: unknown }>) => void
}

const NumberField: React.FunctionComponent<Props> = (props) => {
    const { value, onChange } = props;

    const textFieldValue = isFinite(value) ? value.toString() : '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange({
            ...e,
            target: {
                ...e.target,
                value: parseFloat(e.target.value)
            }
        })
    };

    return (
        <TextField
            {...props}
            value={textFieldValue}
            onChange={handleChange}
        />
    );
};

export default NumberField;
