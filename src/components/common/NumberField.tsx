import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import NumberFormat, { NumberFormatValues } from 'react-number-format';

type Props = Omit<TextFieldProps, 'type' | 'value' | 'InputProps'> & {
    value: number
    onValueChange?: (val?: number) => void
    allowNegative?: boolean
    decimalScale?: number
    InputProps?: Omit<TextFieldProps["InputProps"], 'inputComponent'>
}

const NumberFormatCustom = React.memo((props: any) => {
    const { inputRef, onValueChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={onValueChange}
            thousandSeparator={'.'}
            decimalSeparator={','}
        />
    );
});

const NumberField: React.FunctionComponent<Props> = (props) => {
    const { onValueChange, inputProps, InputProps, allowNegative, decimalScale, ...rest } = props;

    const handleValueChange = (values: NumberFormatValues) => {
        onValueChange && onValueChange(values.floatValue);
    };

    return (
        <TextField
            inputProps={{
                ...inputProps,
                onValueChange: handleValueChange,
                allowNegative: allowNegative,
                decimalScale: decimalScale
            }}
            InputProps={{
                ...InputProps,
                inputComponent: NumberFormatCustom
            }}
            {...rest}
        />
    );
};

export default NumberField;
