import React, { useState, useEffect, lazy } from 'react';
import {
    Grid,
    Paper,
    Typography,
    MenuItem,
    Select,
    makeStyles
} from '@material-ui/core';
import { fetchCats } from "../services/cat-api";

// we use lazy loading to load out CatView component
const CatView = lazy(() => import('../components/Cats/CatView'));

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
    titleTypo: {
        padding: theme.spacing(1)
    }
}))

export default function Cats() {
    const classes = useStyles();
    // we hold cats array in the local React state
    const [cats, setCats] = useState([])
    // isLoading, error and success are for UI/ UX
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const [limit, setLimit] = useState(25);
    const limitOptions = [10, 25, 50, 100];

    const getCats = () => {
        // let user know we are loading data
        setIsLoading(true);
        // we set error in case it was set to true in the previous load
        setError(false);
        fetchCats(limit)
            .then(response => {
                setCats(response.data);
                setSuccess(true);
            })
            .catch(error => {
                setError('Something went wrong. Please try again later.');
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {
        // if the condition below is true, it means 
        // we have not yet performed a request, so we go ahead and do so
        // otherwise we avoid that as we are either waiting for a response 
        // or we got an error (which we inform the user about)
        if (!success && !error && !isLoading) {
            getCats();
        }
        // when the user changes a parameter, we call getCats with the new 
        // parameter(s) - only if getCats is not already loading.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error, success, isLoading])

    useEffect(() => {
        getCats(limit);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [limit])

    return (
        <div className={classes.root}>
            <Grid container component={Paper} spacing={2}>
                <Grid item xs={4}>
                    <Typography variant="h5"
                        component="h1"
                        className={classes.titleTypo}
                    >
                        Hello, Kitty!
                    </Typography>
                </Grid>
                <Grid item xs={4} align="center">
                    <Typography variant="h5"
                        component="span"
                        className={classes.titleTypo}
                    >
                        Limit
                    </Typography>
                    <Select
                        labelId="Limit"
                        id="limit"
                        value={limit}
                        onChange={({ target: { value } }) => setLimit(value)}
                        fullWidth
                    >
                        {limitOptions.map(limit => {
                            return (
                                <MenuItem key={limit} value={limit} disabled={isLoading}>
                                    {limit}
                                </MenuItem>
                            )
                        })}
                    </Select>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h5"
                        align="right"
                        component="h2"
                        className={classes.titleTypo}
                    >
                        A meow API
                    </Typography>
                </Grid>
                {isLoading
                    &&
                    (
                        <Grid item xs={12}>
                            <Typography variant="h5"
                                component="h2"
                                align="center"
                                className={classes.titleTypo}
                            >
                                Loading a limit of {limit} cats...
                            </Typography>
                        </Grid>
                    )

                }
                {!isLoading && !!cats.length
                    ?
                    (
                        <React.Suspense
                            fallback="Please wait while we load a place for kitties..."
                        >
                            {cats.map(cat => {
                                return (
                                    <CatView key={cat.id} cat={cat} />
                                )
                            })

                            }
                        </React.Suspense>
                    )
                    :
                    (
                        error
                            ?
                            (
                                <Grid item xs={12}>
                                    <Typography variant="h6"
                                        component="h2"
                                        align="center"
                                        className={classes.titleTypo}
                                    >
                                        Something went wrong
                                    </Typography>
                                    <Typography variant="body"
                                        align="center"
                                    >
                                        {error}
                                    </Typography>
                                </Grid>
                            )
                            : null
                    )
                }
            </Grid>
        </div>
    )
}
