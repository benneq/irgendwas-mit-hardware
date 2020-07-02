import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Toolbar, IconButton, Drawer, useMediaQuery, InputAdornment, fade, InputBase } from '@material-ui/core';
import { Search as SearchIcon, ArrowBack as ArrowBackIcon } from '@material-ui/icons';

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
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

const SearchInput: React.FunctionComponent = () => {
	const classes = useStyles();
	const [search, setSearch] = React.useState('');

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if(e.key === 'Escape') {
			setSearch('');
			e.currentTarget.blur();
		}
	};

	return (
		<div className={classes.search}>
			<InputBase
				value={search}
				onChange={handleSearchChange}
				onKeyDown={handleKeyDown}
				placeholder="Suche..."
				fullWidth
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput,
				}}
				startAdornment={
					<InputAdornment position="start">
						<SearchIcon />
					</InputAdornment>
				}
				inputProps={{ 'aria-label': 'search' }}
			/>
		</div>
	)
};

const Search: React.FunctionComponent = () => {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Drawer
				anchor="top"
				open={isMobile && open}
				onClose={handleDrawerClose}
			>
				<Toolbar>
					<IconButton
						edge="start"
						onClick={handleDrawerClose}
					>
						<ArrowBackIcon />
					</IconButton>
					<SearchInput />
				</Toolbar>
			</Drawer>

			{isMobile
				? <IconButton aria-label="search" color="inherit" onClick={handleDrawerOpen}><SearchIcon /></IconButton>
				: <SearchInput />
			}
		</>
	);
};

export default Search;