import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Rating from './Rating.js';
import DatePicker from './DatePicker.js'
import InputName from './InputName.js'
import InputManufacturer from './InputManufacturer.js'
import Selector from './Selector.js'
import MultiInput from './MultiInput.js'
import ImageUpload from './ImageUpload.js'
import TemporaryRating from './TempRating.jsx'
import TemporaryFavorite from './TempFavorite.jsx'
import CancelIcon from '@material-ui/icons/Cancel';
import Submit from './SubmitButton.js'

import tellUs from '../images/tellUs.png'

import UploadDrinkFail from './DrinkUploadFail'
import UploadDrinkSuccess from './DrinkUploadSuccess'

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

const addDrinkToDatabase = () => {

  console.log("props.reduxState is", props.reduxState)

  let drinkInfo = {
    type: props.reduxState.type,
    name:  props.reduxState.name,
    manufacturer: props.reduxState.manufacturer,
    rating: props.reduxState.rating,
    date: props.reduxState.date,
    description: props.reduxState.description,
    favorite: props.reduxState.favorite
  }

    console.log("CardEdit says this is the info: ", drinkInfo)

    var options = {
      method: 'POST',
      url: 'http://localhost:8080/drinks',
      data: drinkInfo
    };

    const closeModal = function() {
       props.onClose()
       alert("Drink added to your board!")
       return <UploadDrinkSuccess/>
    }

    axios.request(options)
      .then(response => {
        console.log("My response", response);
        closeModal()
      })
      .catch(error => {
        console.log("MyError:", error);
        // closeDialog(this)
      })
}
  console.log("kdd")
  console.log(props.onClose)

  return (
    <div className = "addFancyDrink">
      <Container>
        <Row>
          <Col>
            <Card className={classes.root} aria-labelledby="cardEdit">
            <div className= "cardBackground">
              {/* { CancelIcon } */}
              <img src={tellUs} className = "tellUs" />
              <div className="centerItems">
                {/* TYPE SELECTOR DROPDOWN */}
                <Selector  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/>
              </div>
                {/* NAME INPUT */}
               <InputName  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/>
                {/* MANUFACTURER INPUT */}
                <InputManufacturer  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/>
              <div className="centerItems">
                {/* <ImageUpload /> */}
              </div>
              <div className="centerItems">
                <br/>
                {/* STAR RATING INPUT */}
                {/* <Rating  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/> */}
                <TemporaryRating reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/>
              </div>
              <div className="centerItems">
              <br/>
              {/* DATE SELECTOR INPUT */}
              <DatePicker  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/>
              </div>
                {/* COMMENT SECTION INPUT */}
              <MultiInput  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/>
                {/* FAVORITE SELECTION BUTTON */}
                <TemporaryFavorite reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState} />

              {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState} onClick = {console.log("this button")}/> */}
              {/* </IconButton> */}

            {/* <button onClick = { closeDialog(this) } >Cancel</button> */}
              <button onClick = { addDrinkToDatabase } className="logDrinkBtn" >Log Drink</button>
              </div>
            </Card>
          </Col>
        </Row>
        <UploadDrinkFail />
        <UploadDrinkSuccess />
      </Container>
    </div>
  );
}
