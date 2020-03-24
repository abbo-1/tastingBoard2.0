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
    type: props.reduxState.type,
    name:  props.reduxState.name,
    manufacturer: props.reduxState.manufacturer,
    rating: props.reduxState.rating,
    date: props.reduxState.date,
    description: props.reduxState.description,
    favorite: true
  }

  // const handleSubmit = (e) => {
    // e.preventDefault()
    console.log(drinkInfo)

    var options = {
      method: 'POST',
      url: 'http://localhost:8080/drinks',
      data: drinkInfo
    };

    axios.request(options)
      .then(response => {
        console.log("My response", response);
      })
      .catch(error => {
        console.log("MyError:", error);
      })
}

  return (
    <div className = "addFancyDrink">
      <Container>
        <Row>
          <Col>
            <Card className={classes.root} aria-labelledby="cardEdit">
              <h2 id="transition-modal-title">
                Tell us about it
              </h2>
            <div className= "cardBackground">
              <div className="centerItems">
                {/* TYPE SELECTOR DROPDOWN */}
                <Selector  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/>
              </div>
                {/* NAME INPUT */}
               <InputName  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/>
                {/* MANUFACTURER INPUT */}
                <InputManufacturer  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/>
              <div className="centerItems">
                <ImageUpload />
              </div>
              <div className="centerItems">
                <br/>
                {/* STAR RATING INPUT */}
                <Rating  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/>
              </div>
              <div className="centerItems">
              <br/>
              {/* DATE SELECTOR INPUT */}
              <DatePicker  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/>
              </div>
                {/* COMMENT SECTION INPUT */}
              <MultiInput  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState}/>
                {/* FAVORITE SELECTION BUTTON */}
              <IconButton aria-label="add to favorites">
              <FavoriteIcon  reduxDispatch={props.reduxDispatch} reduxState ={props.reduxState} onClick = {console.log("this button")}/>
              </IconButton>
              <button onClick = { addDrinkToDatabase } >Log Drink</button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
  
}
