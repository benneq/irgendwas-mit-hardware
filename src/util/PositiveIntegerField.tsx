import React from 'react';
import { TextFieldProps } from '@material-ui/core';
import NumberField from './NumberField';

type Props = Omit<TextFieldProps, 'type' | 'value' | 'InputProps'> & {
    value: number
    onValueChange?: (val?: number) => void
    InputProps?: Omit<TextFieldProps["InputProps"], 'inputComponent'>
}

const PositiveIntegerField: React.FunctionComponent<Props> = (props) => {
    return (
        <NumberField
            {...props}
            allowNegative={false}
            decimalScale={0}
        />
    );
};

export default PositiveIntegerField;
