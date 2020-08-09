import React from 'react';
import { IconButton, Drawer, Toolbar, useTheme, useMediaQuery } from '@material-ui/core';
import { Search as SearchIcon, ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import { navigate } from 'gatsby';
import SearchInput from './searchInput';



const Search: React.FunctionComponent = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
	const [inputValue, setInputValue] = React.useState('');
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleInputValueChange = (val: string) => {
		setInputValue(val);
	};

	const handleSubmit = () => {
		setOpen(false);
		if(inputValue) {
			navigate(`/search?${new URLSearchParams({q: inputValue}).toString()}`);
		}
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
					<SearchInput
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
                : <SearchInput value={inputValue} onChange={handleInputValueChange} onSubmit={handleSubmit} showSearchIcon />
			}
		</>
	);
};

export default Search;