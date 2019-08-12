import React from 'react'
import { Typography } from '@material-ui/core';

export default props => (
    <>
        <Typography
            variant="h4"
            component='h2'
        >
            {props.title}
        </Typography>

        <Typography
            style={{ marginTop: 20 }}
            variant='subtitle1'
        >
            {props.description}
        </Typography>
    </>
)