import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 250,
    },
  },
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = event => {
    setValue(event.target.value);
    console.log(event.target.value)
    props.reduxDispatch ({ type: "DESCRIPTION_CHANGE", value: event.target.value })
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Any Comments?"
          multiline
          rows="5"
          variant="outlined"
          onChange={ handleChange }
        />
      </div>
    </form>
  );
}
