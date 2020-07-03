import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Toolbar, IconButton, Drawer, useMediaQuery, Popper, Paper } from '@material-ui/core';
import { Search as SearchIcon, ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import SearchSuggestions from './SearchSuggestions';
import SearchInput from './SearchInput';
import { useHistory } from 'react-router-dom';

const Search: React.FunctionComponent = () => {
	const theme = useTheme();
	const [searchTerm, setSearchTerm] = React.useState('');
	const [open, setOpen] = React.useState(false);
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
	const anchorEl = React.useRef<HTMLDivElement>(null);
	const history = useHistory();

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
		executeSearch(searchTerm);
	};

	const handleSuggestionClick = (val: string) => {
		executeSearch(val);
	};

	const handleInheritClick = (val: string) => {
		setSearchTerm(val);
	};

	const executeSearch = (val: string) => {
		history.push({
			pathname: '/search',
			search: new URLSearchParams({q: val}).toString()
		});
		setSearchTerm('');
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

			<Popper
				open={!isMobile && !!searchTerm}
				anchorEl={anchorEl.current}
				style={{
					width: anchorEl.current ? anchorEl.current.clientWidth : undefined,
					zIndex: 9001
				}}
			>
				<Paper>
					<SearchSuggestions
						value={[]}
						onSuggestionClick={handleSuggestionClick}
						onInheritClick={handleInheritClick}
					/>
				</Paper>
			</Popper>

			{isMobile
				? <IconButton edge="end" aria-label="search" color="inherit" onClick={handleDrawerOpen}><SearchIcon /></IconButton>
				: <SearchInput ref={anchorEl} value={searchTerm} onChange={handleSearchTermChange} onEnter={handleSearchTermEnter} />
			}
		</>
	);
};

export default Search;