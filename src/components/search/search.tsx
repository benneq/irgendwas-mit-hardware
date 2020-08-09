import React, { useRef } from 'react';
import { makeStyles, fade, TextField, InputAdornment } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { navigate } from 'gatsby';



const useStyles = makeStyles(theme => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	inputRoot: {
		color: 'inherit',
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(1),
	},
	inputInput: {
		caretColor: 'inherit',
		padding: theme.spacing(1, 1, 1, 0),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

type Props = {
	autofocus: boolean
	onSubmit: () => void
}

const Search: React.FunctionComponent<Props> = (props) => {
	const { autofocus, onSubmit } = props;
	const classes = useStyles();
	const [value, setValue] = React.useState('');
	const inputEl = useRef(null);

	const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		switch(e.key) {
			case 'Enter':
				clear();
				if(value) {
					navigate(`/search?${new URLSearchParams({q: value}).toString()}`);
				}
				break;
			
			case 'Escape':
				inputEl.current.blur();
				break;
		}
	};

	const clear = () => {
		onSubmit();
		setValue('');
	};

	return (
		<TextField
			className={classes.search}
			placeholder="Suche..."
			value={value}
			onChange={handleValueChange}
			onKeyDown={handleKeyDown}
			onBlur={clear}
			inputRef={inputEl}
			autoFocus={autofocus}
			InputProps={{
				disableUnderline: true,
				classes: {
					root: classes.inputRoot,
					input: classes.inputInput
				},
				startAdornment:
					<InputAdornment position="start">
						<SearchIcon />
					</InputAdornment>
			}}
		/>
	);
};

export default Search;