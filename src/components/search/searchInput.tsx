import React from 'react';
import { TextField, makeStyles, fade, InputAdornment } from '@material-ui/core';
import { Search as SearchIcon} from '@material-ui/icons';



const useStyles = makeStyles(theme => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		// paddingLeft: theme.spacing(2),
		// paddingRight: theme.spacing(1),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	inputRoot: {
		color: 'inherit',
		paddingLeft: theme.spacing(2),
		// paddingRight: theme.spacing(1),
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			// width: '12ch',
			// '&:focus': {
			// 	width: '20ch',
			// },
			width: '20ch'
		},
	},
}));

type Props = {
    value: string
    onChange: (val: string) => void
    onSubmit: () => void
    showSearchIcon?: boolean
}

const SearchInput: React.FunctionComponent<Props> = (props) => {
    const { value, onChange, onSubmit, showSearchIcon } = props;
	const classes = useStyles();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if(e.key === 'Enter') {
			onSubmit();
		}
	};

	return (
		<TextField
			className={classes.search}
			placeholder="Suche..."
			value={value}
			onChange={handleChange}
			onKeyDown={handleKeyDown}
			InputProps={{
				disableUnderline: true,
				classes: {
					root: classes.inputRoot,
					input: classes.inputInput
				},
				startAdornment: showSearchIcon &&
					<InputAdornment position="start">
						<SearchIcon />
					</InputAdornment>
			}}
		/>
	);
};

export default SearchInput;