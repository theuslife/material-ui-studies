import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText, List } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

export default withRouter(props => {

    const classes = useStyles()

    return (
        <div
            className={classes.list}
            role="presentation"
        >

            <List>
                <ListItem
                    button
                    selected={props.location.pathname === '/'}
                    onClick={async () => {
                        props.setDrawer(false)
                        props.history.replace('/')
                    }}
                >
                    <ListItemText primary='Home' />
                </ListItem>

                <ListItem
                    button
                    selected={props.location.pathname === '/news'}
                    onClick={async () => {
                        props.setDrawer(false)
                        props.history.replace('/news')
                    }}
                >
                    <ListItemText primary='News' />
                </ListItem>

            </List>
        </div>
    )
})

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

