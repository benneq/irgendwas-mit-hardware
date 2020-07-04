import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import { ArrowUpward as ArrowUpwardIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
	arrowIcon: {
		transform: "rotate(-45deg)"
	},
}));

type Props = {
    value: string[]
    onSuggestionClick: (val: string) => void
    onInheritClick: (val: string) => void
}

const SearchSuggestions: React.FunctionComponent<Props> = (props) => {
    const { value, onSuggestionClick, onInheritClick } = props;

    const classes = useStyles();

    const handleSuggestionClick = (val: string) => () => {
        onSuggestionClick(val);
    };

	const handleArrowClick = (val: string) => () => {
		onInheritClick(val);
	};

	return (
		<List disablePadding>
            {value.map((suggestion, i) =>
                <ListItem key={i} button onClick={handleSuggestionClick(suggestion)}>
                    <ListItemText primary={suggestion} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" onClick={handleArrowClick(suggestion)}>
                            <ArrowUpwardIcon className={classes.arrowIcon} />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            )}
		</List>
	);
};

export default SearchSuggestions;