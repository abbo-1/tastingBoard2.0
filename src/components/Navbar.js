import React from 'react';
// import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });
  
  export default function Navbar(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    console.log(props)
  
    const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    // KEEPING TRACK OF POSITION
    }

    const handleClick = (drinkChoice) => {
      console.log(drinkChoice);
      console.log(props)

      props.reduxDispatch({
        type: 'CHANGE_DRINKS',
        drinkChoice: drinkChoice
      });
    }
    
    return (
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab onClick = { () => handleClick("All") } label="All" />
          <Tab onClick = { () => handleClick("Wine") } label="Wine" />
          <Tab onClick = { () => handleClick("Beer") } label="Beer" />
          <Tab onClick = { () => handleClick("Liquor") }label="Liquor" />
          <Tab onClick = { () => handleClick("Cocktail") } label="Cocktail" />
          <Tab onClick = { () => handleClick("Favorites") } label="Favorites" />
          </Tabs>
      </Paper>
    );
  }

