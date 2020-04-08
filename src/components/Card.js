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
import DatePicker from './DatePicker.js'
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

export default function InfoCard(props) {
  const classes = useStyles();

//   props = JSON.parse(props)
// props.each(function (drink) {
//  console.log(drink.name);
// });



// type,
// name,
// manufacturer,
// rating,
// date,
// description,
// favorite

  //   type: this.state.drinks.type,
  //   name:  this.state.drinks.name,
  //   manufacturer: this.state.drinks.manufacturer,
  //   rating: this.state.drinks.rating,
  //   date: this.state.drinks.date,
  //   description: this.state.drinks.description,
  //   favorite: this.state.drinks.favorite


// if( props.length <= 0 )  {
//     return (<div></div>);
// } else {
  
// console.log("props are here")
// console.log( props  )

// console.log("props dot name")
// console.log ( props.name )
// }

console.log("props are here")
console.log( props  )

console.log("props dot name")
console.log ( props.drinks[0] )

// console.log(props.filter(
//   console.log(props)
//   drinks = props))

// console.log(props[2].name)

// const Component = ({ beverages }) => {
//   return beverages.map(...)
// }

// function displayFavoriteIcon () {
//   if
// }

  return (
    <div class = "cardComponent">
    <Card className= {classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            B
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <EditIcon />
          </IconButton>
        }
        // title = {props}
        // subheader="September 14, 2016"
        // title = { NameThisDrink }
        // title = { props.name }
        
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
        <div className="centerItems">
        <Rating />
        </div>
        <DatePicker />
        <br/>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {/* {description} */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
    </div>
  );
}