import React, { useEffect } from 'react'
import { PageProps } from 'gatsby';
import { makeStyles, CssBaseline, useTheme, useMediaQuery, AppBar, Toolbar, IconButton, Typography, Drawer, Fab } from '@material-ui/core';
import { Menu as MenuIcon, KeyboardArrowUp as KeyboardArrowUpIcon } from '@material-ui/icons';
import Navigation from './navigation';
import HideOnScroll from './hideOnScroll';
import ScrollTop from './scrollTop';
import SEO from './seo';
import Search from './search/search';



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		// ...theme.typography.body1,
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	grow: {
		flexGrow: 1,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: theme.spacing(4),
		boxSizing: 'content-box',
		maxWidth: '100ch',
		flexGrow: 1,
		padding: theme.spacing(1),
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(3),
		},
	},
}));

const Layout: React.FunctionComponent<PageProps<object, { frontmatter?: {[key: string]: any} }>> = (props) => {
    const { children, location, pageContext } = props;
    const classes = useStyles();
    const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    useEffect(() => {
		setMobileOpen(false);
	}, [location]);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

    return (
        <div className={classes.root}>
			<CssBaseline />
			<SEO title={pageContext.frontmatter?.title} />
			<HideOnScroll>
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							className={classes.menuButton}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" noWrap className={classes.grow}>
							Irgendwas mit Hardware
            			</Typography>
						<Search />
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<nav className={classes.drawer}>
				<Drawer
					variant={isMobile ? "temporary" : "permanent"}
					anchor={isMobile && theme.direction === 'rtl' ? 'right' : 'left'}
					open={mobileOpen}
					onClose={handleDrawerToggle}
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true,
					}}
				>
					<Navigation />
				</Drawer>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} id="back-to-top-anchor" />
				{children}
				<ScrollTop>
					<Fab color="secondary" size="small" aria-label="scroll back to top">
						<KeyboardArrowUpIcon />
					</Fab>
				</ScrollTop>
			</main>
		</div>
    )
}

export default Layout
