import React from 'react';
import { useScrollTrigger, Slide, useTheme, useMediaQuery } from '@material-ui/core';

type Props = {
    children: React.ReactElement;
}

const HideOnScroll: React.FunctionComponent<Props> = (props) => {
    const { children } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!isMobile || !trigger}>
            {children}
        </Slide>
    );
};

export default HideOnScroll;