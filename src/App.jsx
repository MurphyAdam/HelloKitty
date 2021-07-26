import React from 'react';
import Cats from './containers/Cats';
import { MuiThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Grid, CssBaseline } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))

// This is the main app

export default function App() {
    const classes = useStyles();

    return (
        <MuiThemeProvider>
            <CssBaseline />
            <Grid component="main" className={classes.root}>
                <Cats />
            </Grid>
        </MuiThemeProvider>
    )
}
