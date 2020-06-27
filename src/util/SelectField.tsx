import React from 'react';
import { TextFieldProps, MenuItem, TextField } from '@material-ui/core';

type Props<T> = Omit<TextFieldProps, 'value' | 'onChange' | 'select'> & {
    value: T
    options: T[]
    renderOption?: (value: T) => React.ReactNode
    onChange?: (e: React.ChangeEvent<{ value: unknown }>) => void
}

const SelectField: <T>(props: Props<T>) => React.ReactElement<Props<T>> = (props) => {
    const { value, options, renderOption, onChange, children, ...rest } = props;

    const selectedIdx = options.indexOf(value);

    const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        onChange && onChange({
            ...e,
            target: {
                ...e.target,
                value: options[e.target.value as number]
            }
        })
    };

    return (
        <TextField
            {...rest}
            value={selectedIdx}
            onChange={handleChange}
            select
        >
            {children && <MenuItem disabled value={-1}>{children}</MenuItem>}
            {options.map((option, i) =>
                <MenuItem key={i} value={i}>
                    {renderOption ? renderOption(option) : option}
                </MenuItem>
            )}
        </TextField>
    );
};

export default SelectField;
