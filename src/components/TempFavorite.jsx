import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';

export default function SwitchLabels(props) {
  const [state, setState] = React.useState({
    value: true
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log("favorite set to" + event.target.checked)
    props.reduxDispatch ({ type: "FAVORITE_CHANGE", value: event.target.checked })
  };

  return (
    <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
            <FormControlLabel
                control={
                    <Switch
                        checked={state.value}
                        onChange={handleChange}
                        name="value"
                        color="primary"
                    />
        }
        label="Favorite"
        labelPlacement="top"
      />
        </FormGroup>
    </FormControl>
  );
}
