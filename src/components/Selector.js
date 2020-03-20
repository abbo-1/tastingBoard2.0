// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles(theme => ({
//   button: {
//     display: 'block',
//     marginTop: theme.spacing(2),
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }));

// export default function ControlledOpenSelect() {
//   const classes = useStyles();
//   const [drink, setDrink] = React.useState('');
//   const [open, setOpen] = React.useState(false);

//   const handleChange = event => {
//     setDrink(event.target.value);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   return (
//     <div>
//       <Button className={classes.button} onClick={handleOpen}>
//         Select Your Drink Type
//       </Button>
//       <FormControl className={classes.formControl}>
//         <InputLabel id="demo-controlled-open-select-label">Drink Type</InputLabel>
//         <Select
//           labelId="demo-controlled-open-select-label"
//           id="demo-controlled-open-select"
//           open={open}
//           onClose={handleClose}
//           onOpen={handleOpen}
//           value={drink}
//           onChange={handleChange}
//         >
//           <MenuItem value={"Wine"}>Wine</MenuItem>
//           <MenuItem value={"Beer"}>Beer</MenuItem>
//           <MenuItem value={"Liquor"}>Liquor</MenuItem>
//           <MenuItem value={"Cocktail"}>Cocktail</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }


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

export default function NativeSelects() {
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
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">What kind of drink is it?</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="Select" value="" />
          <option value={"Wine"}>Wine</option>
          <option value={"Beer"}>Beer</option>
          <option value={"Liquor"}>Liquor</option>
          <option value={"Cocktail"}>Cocktail</option>
        </Select>
      </FormControl>
    </div>
  );
}
