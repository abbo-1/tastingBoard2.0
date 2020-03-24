import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers(props) {
  const classes = useStyles();

  const onDateSelection  = (e) => {
    console.log(e.target.value)
    props.reduxDispatch ({ type: "DATE_CHANGE", value: e.target.value })
}

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="When did you have it?"
        type="date"
        defaultValue="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange = { onDateSelection }
      />
    </form>
  );
}