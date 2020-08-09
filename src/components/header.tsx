import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import { Menu as MenuIcon, Search as SearchIcon, ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import Search from './search/search';
import HideOnScroll from './hideOnScroll';



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
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
    arrowBackButton: {
        marginRight: theme.spacing(1),
    },
	grow: {
		flexGrow: 1,
	},
}));

type Props = {
    onMenuClick: () => void
}

const Header: React.FunctionComponent<Props> = (props) => {
    const { onMenuClick } = props;
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const [open, setOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        onMenuClick();
    };
    
    const handleOpen = () => {
		setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <HideOnScroll>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    {!open &&
                        <>
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
                        </>
                    }

                    {(!open && isMobile) &&
                        <IconButton
                            edge="end"
                            aria-label="search"
                            color="inherit"
                            onClick={handleOpen}
                        >
                            <SearchIcon />
                        </IconButton>
                    }

                    {(open && isMobile) &&
                        <IconButton
                            edge="start"
                            color="inherit"
                            className={classes.arrowBackButton}
                            onClick={handleClose}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                    }

                    {(open || !isMobile) &&
                        <Search autofocus={isMobile} onSubmit={handleClose} />
                    }
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};

export default Header;
