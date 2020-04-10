import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars(props) {
  const classes = useStyles();

//   const ifTrue = function() {
//     console.log("katk")
//     console.log(props)
//     console.log(props.closingModal)
//     if ( props.closingModal === true ) {
//       handleClick()
//     }
// }

// ifTrue()

  const [open, setOpen] = React.useState(false);

  function GrowTransition(props) {
    return <Grow {...props} />;
  }

// function checkIfTrue() {
//   if (props.closingModal === true) {
//     setOpen(true);
//     GrowTransition()
//   };
// }

// checkIfTrue()

//   const handleClick = () => {
//     setOpen(true);
//     GrowTransition()
//   };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <div className={classes.root}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open fail snackbar
      </Button> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
        Drink successfully added to your tasting board!
        </Alert>
      </Snackbar>
    </div>
  );
}


