import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import LeftPane from './LeftPane';

const Exercises = ({
    exercises,
    exercise,
    exercise: { id, title, description },
    category,
    onSelect,
}) => {

    const classes = {
        paperContainer: {
            padding: 20,
            marginTop: 10,
            marginBottom: 10,
            height: 500,
            overflowY: 'auto'
        }
    }

    return (
        <Grid container>

            <Grid item xs={6}>
                <Paper style={classes.paperContainer}>
                    {exercises.map(([group, exercises], index) => {
                        return (
                            <Fragment key={index}>
                                {(!category || category === group) &&
                                    <>
                                        <Typography
                                            variant='h6'
                                            style={{ textTransform: 'capitalize' }}
                                        >
                                            {group}
                                        </Typography>
                                        {exercises.map(({ title, id }) => (
                                            <List
                                                key={id}
                                                component="ul"
                                                aria-label="secondary mailbox folders"
                                            >
                                                <ListItem
                                                    button
                                                    onClick={() => onSelect(id)}
                                                    selected={id === exercise.id}
                                                >
                                                    <ListItemText
                                                        primary={title}
                                                    />
                                                </ListItem>
                                            </List>
                                        ))}
                                    </>
                                }
                            </Fragment>
                        )
                    })}
                </Paper>
            </Grid>

            <Grid item xs={6}>
                <Paper style={classes.paperContainer}>
                    
                    {id &&
                        <LeftPane
                            title={title}
                            description={description}
                        />
                    }
                    {!id &&
                        <LeftPane
                            title='Welcome'
                            description='Please select an exercise i the list on the left'
                        />
                    }

                </Paper>
            </Grid>

        </Grid>
    )

}

export default Exercises