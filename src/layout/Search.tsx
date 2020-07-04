import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Toolbar, IconButton, Drawer, useMediaQuery, Popper, Paper, AppBar, ClickAwayListener } from '@material-ui/core';
import { Search as SearchIcon, ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import SearchSuggestions from '../search/SearchSuggestions';
import SearchInput from './SearchInput';
import { useHistory } from 'react-router-dom';
import { filterKeywords } from '../search/search.util';

const Search: React.FunctionComponent = () => {
	const theme = useTheme();
	const [searchTerm, setSearchTerm] = React.useState('');
	const [suggestions, setSuggestions] = React.useState<string[]>([]);
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
		setSuggestions(filterKeywords(val));
	};

	const handleSearchTermEnter = () => {
		executeSearch(searchTerm);
	};

	const handleSuggestionClick = (val: string) => {
		executeSearch(val);
	};

	const handleClickAway = () => {
		setSearchTerm('');
		setSuggestions([]);
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
				<AppBar position="fixed" color="inherit" component="div">
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
				</AppBar>
				<div style={{ maxHeight: '40vh' }}>
					<Toolbar />
					<SearchSuggestions
						value={suggestions}
						onSuggestionClick={handleSuggestionClick}
						onInheritClick={handleSearchTermChange}
					/>
				</div>
			</Drawer>

			<Popper
				open={!isMobile && !!searchTerm}
				anchorEl={anchorEl.current}
				style={{
					width: anchorEl.current ? anchorEl.current.clientWidth : undefined,
					zIndex: theme.zIndex.modal
				}}
			>
				<ClickAwayListener onClickAway={handleClickAway}>
					<Paper style={{
						maxHeight: '40vh',
						overflow: 'auto',
					}}>
						<SearchSuggestions
							value={suggestions}
							onSuggestionClick={handleSuggestionClick}
							onInheritClick={handleSearchTermChange}
						/>
					</Paper>
				</ClickAwayListener>
			</Popper>

			{isMobile
				? <IconButton edge="end" aria-label="search" color="inherit" onClick={handleDrawerOpen}><SearchIcon /></IconButton>
				: <SearchInput ref={anchorEl} value={searchTerm} onChange={handleSearchTermChange} onEnter={handleSearchTermEnter} />
			}
		</>
	);
};

export default Search;