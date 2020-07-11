import React from 'react';
import NumberFormat from 'react-number-format';


type Props = {
    value: number
}

const NumberFormatter: React.FunctionComponent<Props> = (props) => {
    const { value } = props;

    return (
        <NumberFormat value={value} displayType="text" thousandSeparator="." decimalSeparator="," />
    );
};

export default NumberFormatter;
