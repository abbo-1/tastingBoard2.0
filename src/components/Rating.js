import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
  0.5: 'Worst of the Worst',
  1: 'Bad',
  1.5: 'Poor',
  2: 'Passable',
  2.5: 'Ok',
  3: 'Good',
  3.5: 'Damn Good',
  4: 'Great',
  4.5: 'Love',
  5: 'Perfection',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

export default function HoverRating(props) {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        defaultValue={0}
        precision={0.5}
        size="large"
        onChange={(event, newValue) => {
          setValue(newValue);
          
          // THIS IS MY STUFF THAT ISNT WORKING
          console.log(event.target.value)
          props.reduxDispatch ({ type: "RATING_CHANGE", value: event.target.value 
        })
            // THIS IS MY STUFF THAT ISNT WORKING
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
  );
}
