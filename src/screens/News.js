import React from 'react'
import Header from '../components/layouts/Header'
import { Typography } from '@material-ui/core';

export default props => {

    return (
        <div>
            <Header />
            <div style={styles.message}>
                <Typography variant='h5' style={{padding: 20}}>
                    News Page
                </Typography>
            </div>
        </div>
    )
}


const styles = {
    message: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}