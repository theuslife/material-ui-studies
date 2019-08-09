import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, IconButton } from '@material-ui/core'
import MenuButton from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
    container: {
        flexGrow: 1,
        margin: 10,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    titleHeader: {
        margin: 10
    }
}))


const Header = (props) => {

    const classes = useStyles()

    return (
        <AppBar color={'primary'} position={'static'}>
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu" 
                >
                    <MenuButton />
                </IconButton>
                <Typography
                    className={classes.titleHeader}
                    variant="h6"
                    color="inherit"
                >
                    Material UI
                </Typography>
            </Toolbar>
        </AppBar>

    )
}

export default Header