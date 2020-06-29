import React from 'react';
import { List } from '@material-ui/core';
import NavigationItem from './NavigationItem';



type Props = {
    component: React.ElementType
    nested?: boolean
    value: any[]
}

const NavigationList: React.FunctionComponent<Props> = (props) => {
    const { component, value, nested } = props;

    return (
        <List component={component} disablePadding={nested}>
            {value.map((item, i) =>
                <NavigationItem key={i}
                    text={item.text}
                    to={item.to}
                    nested={nested}
                    children={item.children}
                />
            )}
        </List>
    );
};

export default NavigationList;
