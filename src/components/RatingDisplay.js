import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SimpleRating(props) {
  const [value, setValue] = React.useState(2);

  
  const ratingFromDatabase = props.drinkRating;
  console.log(ratingFromDatabase);

  const exchangeRatings = function () {
    const result = ratingFromDatabase  / 2;
    return result;
  }

  const findLabel = function () {
      let number = exchangeRatings();
        if (number === 0.5) {
        return (
            "Worst of the Worst"
            )
        }
         if (number === 1) {
        return (
            "Bad"
             )
        }
        if (number === 1.5) {
        return (
            "Poor"
            )
        }
        if (number === 2.0) {
        return (
                "Passable"
            )
        }
        if (number === 2.5) {
        return (
                "Ok"
             )
        }
        if (number === 3.0) {
        return (
            "Good"
            )
        }
        if (number === 3.5) {
        return (
            "Damn Good"
            )
        }
        if (number === 4.0) {
        return (
             "Great"
             )
        }
         if (number === 4.5) {
        return (
             "Love"
            )
        }
        if (number === 5.0) {
        return (
            "Perfection"
            )
        }
    }

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Rating: {findLabel()}</Typography>
        <Rating name="read-only" precision={0.5} value={exchangeRatings()} readOnly />
      </Box>
    </div>
  );
}
