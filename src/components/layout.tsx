import React, { useEffect } from 'react';
import { PageProps } from 'gatsby';
import './layout.css';
import { makeStyles, CssBaseline, useTheme, useMediaQuery, Drawer, Fab } from '@material-ui/core';
import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@material-ui/icons';
import Navigation from './navigation';
import ScrollTop from './scrollTop';
import SEO from './seo';
import Header from './header';



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
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: theme.spacing(4),
		boxSizing: 'content-box',
		width: `calc(100% - ${theme.spacing(2)}px)`, // for horizontal table scroll
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
			<Header onMenuClick={handleDrawerToggle} />
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
