import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';

import Rating from './Rating.js';
import  ImageSelector  from  './ImageSelector.js'
import Favorite from './Favorite.js'
import RatingDisplay from './RatingDisplay.js'
import AvatarCard from './AvatarCard.js'
// import CardEdit from './CardEdit.js'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function InfoCard(  props ) {
const classes = useStyles();

console.log("props are here")
console.log( props  )

  return (
    <div class = "cardComponent">
    <Card className= {classes.root}>
    {/* <AvatarCard drinkType = {props.drinks[props.i].type}  /> */}
      <CardHeader
      
        avatar={
          <AvatarCard drinkType = {props.drinks[props.i].type}  />
        }
        AvatarCard
        action={
          <IconButton aria-label="settings">
            <EditIcon />
          </IconButton>
        }
        title = { props.drinks[props.i].name }
        subheader = { props.drinks[props.i].manufacturer }
      />
        <CardContent>
        <Typography variant="body2" gutterBottom>
        <div className="centerItems">
        <ImageSelector drinkType = {props.drinks[props.i].type} />
        </div>
        <div className="centerItems">
        <RatingDisplay drinkRating = {props.drinks[props.i].rating}/>
        </div>
        <br />
        Date Consumed:
        <br/>
        { props.drinks[props.i].date }
        <br/>
        </Typography>
        </CardContent>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          { props.drinks[props.i].description }
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite favorite = {props.drinks[props.i].favorite} />
        </IconButton>
      </CardActions>
    </Card>
    </div>
  );
}