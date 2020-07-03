import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, fade, useTheme, useMediaQuery, Input } from '@material-ui/core';
import { Search as SearchIcon, Clear as ClearIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
        paddingLeft: theme.spacing(2),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	inputRoot: {
		color: 'inherit',
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
	onEnter: () => void
}

const SearchInput = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { value, onChange, onEnter } = props;

    const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
	const classes = useStyles();

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
    };

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if(e.key === 'Escape') {
			onChange('');
			e.currentTarget.blur();
		} else if(e.key === 'Enter') {
			onEnter();
			e.preventDefault();
		}
    };
    
    const handleClearClick = () => {
        onChange('');
    };

	return (
        <>
            <div className={classes.search} ref={ref}>
                <Input
                    value={value}
                    onChange={handleSearchChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Suche..."
                    fullWidth
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    disableUnderline={!isMobile}
                    startAdornment={!isMobile && 
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                    endAdornment={isMobile && !!value &&
                        <InputAdornment position="end" onClick={handleClearClick}>
                            <ClearIcon />
                        </InputAdornment>
                    }
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
        </>
	)
});

export default SearchInput;