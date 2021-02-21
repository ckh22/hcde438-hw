import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#cccccc',
        color: 'black'
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }

}));

const Nav = () => {
    const classes = useStyles();
    return (
        <AppBar position="static"
            className={
                classes.root
        }>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu"
                    className={
                        classes.menuButton
                }>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6"
                    className={
                        classes.title
                }>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Nav
