import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Paper } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}))


const Footer = (props) => {

    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        return setValue(newValue)
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>
        </Paper>
    )
}

export default Footer