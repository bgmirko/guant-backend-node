import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, CssBaseline, Toolbar } from '@material-ui/core';
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Menu as MenuIcon } from '@material-ui/icons';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PeopleIcon from '@material-ui/icons/People';


const propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
        fontFamily: "\"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"sans-serif\""
    },
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    userLabel: {
        width: 200,
        paddingRight: 30,
        textAlign: 'right'
    }
});


const Page = (props) => {

    const [state, setState] = useState({
        open: false
    })

    const handleDrawerOpen = () => {
        setState({ open: true });
    };

    const handleDrawerClose = () => {
        setState({ open: false });
    };

    const onMenuItemClick = route => {
        switch (route) {
            case "login":
                props.history.push('/login');
                break;
            case "performers":
                props.history.push('/performers');
                break;
            default: props.history.push('/');
        }
    }

    const { classes, theme } = props;
    const { open } = state;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar disableGutters={!open}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        className={classNames(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        Quantox
                    </Typography>
                </Toolbar>
                <Typography className={classes.userLabel} variant="body1" color="inherit" noWrap>
                        {props.loggedUserName.charAt(0).toUpperCase() + props.loggedUserName.slice(1)}
                </Typography>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button onClick={() => onMenuItemClick("login")}>
                        <ListItemIcon><LockOpenIcon /></ListItemIcon>
                        <ListItemText primary="Login" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button onClick={() => onMenuItemClick("performers")}>
                        <ListItemIcon><PeopleIcon /></ListItemIcon>
                        <ListItemText primary="Performers" />
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
            <main
                className={classNames(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                {props.children}
            </main>
        </div>
    );
}

Page.propTypes = propTypes;

const mapStateToProps = state => ({
    loggedUserName: state.auth.user.name,
});

export default compose(
    connect(mapStateToProps),
    withRouter,
    withStyles(styles, { withTheme: true })
)(Page);
