import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Paper } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}))

const Footer = ({ muscles, category, onSelect }) => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    useEffect(() => {

        const newValue = category
            ? muscles.findIndex(muscle => muscle === category) + 1
            : 0

        setValue(newValue)

    }, [muscles, category])

    const handleChange = (event, newValue) => {

        const selectedMuscle = newValue === 0
            ? ''
            : muscles[newValue - 1]

        onSelect(selectedMuscle)

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

                <Tab label="All" />
                {muscles.map((muscle, index) =>
                    <Tab
                        label={muscle}
                        key={index}
                    />
                )}

            </Tabs>
        </Paper>
    )
}

export default Footer