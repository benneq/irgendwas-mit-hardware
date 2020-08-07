import React from 'react';


type Props = {
    value: React.ReactNode[]
    separator: React.ReactNode
}

const ArrayJoin: React.FunctionComponent<Props> = (props) => {
    const { value, separator } = props;

    return (
        <>
            {value.map((val, i) =>
                <React.Fragment key={i}>
                    {val}
                    {i < value.length - 1 && separator}
                </React.Fragment>
            )}
        </>
    );
};

export default ArrayJoin;
