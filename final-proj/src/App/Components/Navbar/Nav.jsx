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
import { signInWithGoogle } from '../../Database/db';
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../../Database/db'

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
    const [user] = useAuthState(auth)
    const classes = useStyles();
    return (
        <nav className='nav'></nav>
    )
}

export default Nav
