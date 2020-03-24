import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  const onTextChange = (e) => {
      console.log(e.target.value)
      props.reduxDispatch ({ type: "MANUFACTURER_CHANGE", value: e.target.value })
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Who made it?" variant="outlined" onChange={ onTextChange } />
    </form>
  );
}