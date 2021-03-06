import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = event => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    console.log(event.target.value)
    props.reduxDispatch ({ type: "DRINKTYPE_CHANGE", value: event.target.value })
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">What kind of drink is it?</InputLabel>
        <Select
          native
          value={state.type}
          onChange={handleChange}
          inputProps={{
            name: 'type',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="Select" value="" />
          <option  value={"Wine"}>Wine</option>
          <option value={"Beer"}>Beer</option>
          <option  value={"Liquor"}>Liquor</option>
          <option  value={"Cocktail"}>Cocktail</option>
        </Select>
      </FormControl>
    </div>
  );
}
