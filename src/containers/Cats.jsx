import React, { useState, useEffect, lazy } from 'react';
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core';
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
    // isLoading and error are for UI/ UX
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const getCats = () => {
        // let user know we are loading data
        setIsLoading(true);
        // we set error in case it was set to true in the previous load
        setError(false);
        fetchCats()
            .then(response => {
                setCats(response.data)
            })
            .catch(error => {
                setError('Something went wrong. Please try again later');
                console.log(error)
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
        if (!cats.length && !isLoading && !error) {
            getCats();
        }
    }, [cats, error, isLoading])

    return (
        <div className={classes.root}>
            <Grid container component={Paper} spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="h5"
                        component="h1"
                        className={classes.titleTypo}
                    >
                        Hello, Kitty!
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5"
                        align="right"
                        component="h1"
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
                                Loading cats...
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
                                    <Typography
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
