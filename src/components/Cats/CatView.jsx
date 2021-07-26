import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import PetsIcon from '@material-ui/icons/Pets';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import ChildCareIcon from '@material-ui/icons/ChildCare';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 260,
    },
    subheader: {
        padding: theme.spacing(1, 0)
    },
    description: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.8rem !important',
        },
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        WebkitLineClamp: 4,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
    },
    title: {
        textDecoration: 'none'
    },
    chip: {
        margin: theme.spacing(1),
    },
    heartIcon: {
        color: 'red'
    },
    pawsIcon: {
        color: 'skyblue'
    },
    natureIcon: {
        color: 'green'
    },
    childIcon: {
        color: 'black',
    }
}));

export default function PostCard(props) {
    const { cat } = props
    const classes = useStyles();

    return (
        <Grid item xl={4} md={4} sm={6} xs={12} >
            <Card>
                <CardMedia
                    className={classes.media}
                    image={cat.image?.url}
                    title={`Click to read more on ${cat.name} on Wikipedia`}
                    component="a"
                    href={cat.wikipedia_url}
                    target="_blank"
                    rel="noopener noreferrer"
                />
                <CardContent>
                    <Typography variant="h5"
                        color={'primary'}
                        component='a'
                        className={classes.title}
                        href={cat.wikipedia_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        gutterBottom>
                        {cat.name}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        component="div"
                        variant="caption"
                        className={classes.subheader}
                    >
                        <Chip
                            className={classes.chip}
                            size="small"
                            icon={<FavoriteIcon className={classes.heartIcon} />}
                            label={`Affection level: ${cat.affection_level}`}
                        />
                        <Chip
                            className={classes.chip}
                            size="small"
                            icon={<PetsIcon className={classes.pawsIcon} />}
                            label={`Short legs: ${!!cat.short_legs ? 'Yes' : 'No'}`}
                        />
                        <Chip
                            className={classes.chip}
                            size="small"
                            icon={<EmojiNatureIcon className={classes.natureIcon} />}
                            label={`Natural: ${!!cat.natural ? 'Yes' : 'No'}`}
                        />
                        <Chip
                            className={classes.chip}
                            size="small"
                            icon={<ChildCareIcon className={classes.childIcon} />}
                            label={`Child friendly: ${!!cat.child_friendly ? 'Yes' : 'No'}`}
                        />
                    </Typography>

                    <Typography variant="body2"
                        color="textSecondary"
                        className={classes.description}
                        component="p" >
                        {cat.description
                            ?
                            cat.description
                            :
                            "No description"
                        }
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

