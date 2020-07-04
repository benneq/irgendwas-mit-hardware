import React from 'react';
import { IconButton, TextField, makeStyles, fade, InputAdornment } from '@material-ui/core';
import { Search as SearchIcon, ArrowUpward as ArrowUpwardIcon } from '@material-ui/icons';
import { Autocomplete, FilterOptionsState } from '@material-ui/lab';
import { keywords } from './search-data';



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
	option: {
		paddingTop: 0,
		paddingBottom: 0
	},
	optionText: {
		flexGrow: 1
	},
	arrowIcon: {
		transform: "rotate(-45deg)"
	},
	clearIndicator: {
		color: 'inherit',
		marginRight: theme.spacing(1)
	}
}));

type Props = {
    value: string
    onChange: (val: string) => void
    onSubmit: (val: string) => void
    showSearchIcon?: boolean
}

const SearchAutocomplete: React.FunctionComponent<Props> = (props) => {
    const { value, onChange, onSubmit, showSearchIcon } = props;
	const classes = useStyles();

	const handleChange = (e: React.ChangeEvent<{}>, val: string | null) => {
		if(val) {
            onChange(val);
            onSubmit(val);
		}
	};

	const handleInputValueChange = (e: React.ChangeEvent<{}>, val: string) => {
        onChange(val);
	};

	const handleArrowClick = (val: string) => (e: React.MouseEvent) => {
		e.stopPropagation();
		onChange(val);
	};

	const filterOptions = (options: string[], state: FilterOptionsState<string>): string[] => {
		const inputValue = state.inputValue.toLowerCase();
		if(!inputValue) {
			return [];
		}
		return options.filter(option => option.toLowerCase().startsWith(state.inputValue));
	};

	return (
		<Autocomplete
			className={classes.search}
			inputValue={value}
			onInputChange={handleInputValueChange}
			onChange={handleChange}
			options={keywords}
			clearOnEscape
			freeSolo
			filterOptions={filterOptions}
			renderInput={({ InputProps: { className, ...InputPropsRest }, ...propsRest }) =>
				<TextField
					placeholder="Suche..."
					InputProps={{
						...InputPropsRest,
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
					{...propsRest}		
				/>
			}
			renderOption={(option) =>
				<>
					<div className={classes.optionText}>
						{option}
					</div>
					<IconButton edge="end" onClick={handleArrowClick(option)}>
						<ArrowUpwardIcon className={classes.arrowIcon} />
					</IconButton>
				</>
			}
			classes={{
				option: classes.option,
				clearIndicator: classes.clearIndicator
			}}
		/>
	);
};

export default SearchAutocomplete;