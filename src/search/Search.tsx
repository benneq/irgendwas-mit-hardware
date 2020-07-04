import React from 'react';
import { IconButton, Drawer, Toolbar, useTheme, useMediaQuery } from '@material-ui/core';
import { Search as SearchIcon, ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import SearchAutocomplete from './SearchAutocomplete';
import { isString } from 'util';



const Search: React.FunctionComponent = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
	const [inputValue, setInputValue] = React.useState('');
	const [open, setOpen] = React.useState(false);
	const history = useHistory();

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleInputValueChange = (val: string) => {
		setInputValue(val);
	};

	const handleSubmit = (val: string | React.MouseEvent) => {
		if(!isString(val)) {
			val = inputValue;
		}
		setOpen(false);
		history.push({
			pathname: '/search',
			search: new URLSearchParams({q: val}).toString()
		});
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
					<SearchAutocomplete
						value={inputValue}
						onChange={handleInputValueChange}
						onSubmit={handleSubmit}
					/>
					<IconButton edge="end" onClick={handleSubmit}>
						<SearchIcon />
					</IconButton>
				</Toolbar>
			</Drawer>

			{isMobile
				? <IconButton edge="end" aria-label="search" color="inherit" onClick={handleDrawerOpen}><SearchIcon /></IconButton>
				: <SearchAutocomplete value={inputValue} onChange={handleInputValueChange} onSubmit={handleSubmit} showSearchIcon />
			}
		</>
	);
};

export default Search;