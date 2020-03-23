import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';

import useAxios from "axios-hooks";

import Rating from './Rating.js';
import DatePicker from './DatePicker.js'
import InputName from './InputName.js'
import InputManufacturer from './InputManufacturer.js'
import Selector from './Selector.js'
import MultiInput from './MultiInput.js'
import ImageUpload from './ImageUpload.js'
import Submit from './SubmitButton.js'

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

export default function CardEdit(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

const addDrinkToDatabase = () => {
  console.log("drink button works")
  console.log(props.reduxState)

  // {drinkManufacturer: "whatevertheuserenter"}

  // const [drinkInfo, setDrinkInfo] = useState(
  //   { drinkType: '', drinkName: '', drinkManufacturer: '', date:'', rating: '', comments: '', favorite: 'false'}
  // );
  // const handleChange = (event) => {
  //   setDrinkInfo({...drinkInfo, [event.target.name]: event.target.value})
  // }
  let drinkInfo = {
    type: "beer",
    name: "luis's beer",
    manufacturer: props.reduxState.manufacturer,
    rating: 5.0,
    date: "3/22/2020",
    description: "greatest beer ever",
    favorite: true
  }

  // const handleSubmit = (e) => {
    // e.preventDefault()
    console.log(drinkInfo)

    var postOptions = {
      method: 'POST',
      url: 'http://localhost:8080/drinks',
      // data: drinkInfo,
      headers: {
          'Content-Type': 'application/json',
          
      },
      json: true
    };

    axios.post( postOptions )
      .then(function (response) {
        console.log("this is a response")
        console.log(response)
      })
      .catch(function (error) {
        console.log("this is an error")
        console.log(error)
      })
}


  return (
    <div className = "addFancyDrink">
      <Card className={classes.root}>
        <h2 id="transition-modal-title">
          Tell us about your drink!
        </h2>
        <div className= "cardBackground">
          <div className="centerItems">
            <Selector  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/>
          </div>
          <InputName  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/>
          <InputManufacturer  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/>
      <CardHeader
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
        <div className="centerItems">
          <ImageUpload />
        </div>
        <div className="centerItems">
          <br/>
          <Rating  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/>
        </div>
        <div className="centerItems">
          <br/>
          <DatePicker  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/>
        </div>
          <CardContent>
          <MultiInput  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/>
          <FavoriteIcon/>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/>
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
             })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
          </IconButton>
          <button onClick = { addDrinkToDatabase } >Log Drink</button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
  
}
