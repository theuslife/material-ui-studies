import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core';

const Exercicies = (props) => {

    const classes = {
        paperContainer: {
            padding: 20,
            marginTop: 10,
            marginBottom: 10
        }
    }

    return (
        <Grid container>

            <Grid item xs={6}>
                <Paper style={classes.paperContainer}>
                    <Typography
                        variant="h6"
                        color="inherit"
                    >
                        Exercicies 1
                    </Typography>
                </Paper>
            </Grid>

            <Grid item xs={6} >
                <Paper style={classes.paperContainer}>
                    <Typography
                        variant="h6"
                        color="inherit"
                    >
                        Exercicies 2
                    </Typography>
                </Paper>
            </Grid>

        </Grid>
    )

}

export default Exercicies