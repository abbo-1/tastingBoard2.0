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
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';

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

export default function CardEdit() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className = "addFancyDrink">
      <Card className={classes.root}>
      <h2 id="transition-modal-title">
              Tell us about your drink!
        </h2>
        <div className= "cardBackground">
        <div className="centerItems">
          <Selector className="centerItems"/>
        </div>
        <InputName />
        <InputManufacturer />
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
          <Rating />
        </div>
        <br/>
        <div className="centerItems">
          <DatePicker  className="centerItems"/>
        </div>
        <CardContent>
        <MultiInput />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
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
        <Submit />
       </CardActions>
       </div>
    </Card>
    </div>
  );
}
