import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';

type Props = Omit<TextFieldProps, 'onChange'> & {
    value: number
    onChange?: (e: Omit<React.ChangeEvent<HTMLInputElement>, 'target'> & { target: { value: number }}) => void
}

const NumberField: React.FunctionComponent<Props> = (props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange({
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
            onChange={handleChange}
        />
    );
};

export default NumberField;
