import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Toolbar, IconButton, Drawer, useMediaQuery } from '@material-ui/core';
import { Search as SearchIcon, ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import SearchSuggestions from './SearchSuggestions';
import SearchInput from './SearchInput';

const Search: React.FunctionComponent = () => {
	const theme = useTheme();
	const [searchTerm, setSearchTerm] = React.useState('');
	const [open, setOpen] = React.useState(false);
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleSearchTermChange = (val: string) => {
		setSearchTerm(val);
	};

	const handleSearchTermEnter = () => {
		
	};

	const handleSuggestionClick = (val: string) => {

	};

	const handleInheritClick = (val: string) => {
		setSearchTerm(val);
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
					<SearchInput value={searchTerm} onChange={handleSearchTermChange} onEnter={handleSearchTermEnter} />
					<IconButton edge="end" onClick={handleSearchTermEnter}>
						<SearchIcon />
					</IconButton>
				</Toolbar>
				<SearchSuggestions
					value={[]}
					onSuggestionClick={handleSuggestionClick}
					onInheritClick={handleInheritClick}
				/>
			</Drawer>

			{isMobile
				? <IconButton edge="end" aria-label="search" color="inherit" onClick={handleDrawerOpen}><SearchIcon /></IconButton>
				: <SearchInput value={searchTerm} onChange={handleSearchTermChange} onEnter={handleSearchTermEnter} />
			}
		</>
	);
};

export default Search;