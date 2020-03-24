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
    props.reduxDispatch ({ type: "RATING_CHANGE", value: event.target.value })
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">How would you rate it?</InputLabel>
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
          <option  value={1}>1 Star: Worst of the Worst</option>
          <option value={2}>2 Stars: Awful</option>
          <option  value={3}>3 Stars: Bad</option>
          <option  value={4}>4 Stars: Not for Me</option>
          <option  value={5}>5 Stars: Just Ok</option>
          <option value={6}>6 Stars: Would Try Again</option>
          <option  value={7}>7 Stars: Good</option>
          <option  value={8}>8 Stars: Great</option>
          <option  value={9}>9 Stars: Incredible</option>
          <option  value={10}>10 Stars: Incredible</option>
        </Select>
      </FormControl>
    </div>
  );
}
