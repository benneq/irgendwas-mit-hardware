import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, List } from '@material-ui/core';
import NavigationItem from './NavigationItem';

const useStyles = makeStyles(theme => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

const Navigation: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <>
        <div className={classes.toolbar} />
        <Divider />
        <List>
            <NavigationItem
                text="Home"
                to="/home"
            />
            <NavigationItem
                text="Netzwerk"
                to="/network"
            />
            <NavigationItem
                text="RAM"
                to="/memory"
            />
        </List>
    </>
  );
};

export default Navigation;