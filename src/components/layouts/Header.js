import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, IconButton } from '@material-ui/core'
import MenuButton from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer';
import LeftDrawer from './LeftDrawer';
import { withRouter } from 'react-router-dom'

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

    const [drawer, setDrawer] = useState(false);

    return (
        <AppBar color={'primary'} position={'static'}>
            <Toolbar>
                <Drawer
                    open={drawer}
                    onClose={() => setDrawer(false)}
                >
                    <LeftDrawer
                        setDrawer={setDrawer}
                    />
                </Drawer>

                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setDrawer(!drawer)}
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

export default withRouter(Header)