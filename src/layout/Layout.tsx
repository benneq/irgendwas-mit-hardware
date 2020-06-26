import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { CssBaseline, AppBar, Toolbar, IconButton, Typography, Drawer, useMediaQuery, Fab } from '@material-ui/core';
import { Menu as MenuIcon, Search as SearchIcon, KeyboardArrowUp as KeyboardArrowUpIcon } from '@material-ui/icons';
import Navigation from './Navigation';
import ScrollTop from './ScrollTop';
import HideOnScroll from './HideOnScroll';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
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
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

type Props = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
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
            <IconButton aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <nav className={classes.drawer} aria-label="mailbox folders">
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
        {props.children}
        <ScrollTop>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </main>
    </div>
  );
};

export default Layout;