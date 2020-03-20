import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {useState} from 'react';

import Modal from 'react-modal';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

//   const  [myState, setMyState] =  useState({
//         show: true
//       });

//   const showModal = () => {
//       if (myState.show ) {
//         console.log("this button is amazing. changed state to false.")
//         // change state to not show
//         setMyState({show: false});
//         return null;
//       } else {
//         console.log("this button is not amazing. state change to true")
//             setMyState({show: true});
//             return <div>Hello Modal</div>;
//       }
    
// }

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddCircleIcon />}
        // onClick={ () => showModal() }
      >
        Add Drink
      </Button>
    </div>
  );
}