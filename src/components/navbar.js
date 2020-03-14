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

    // props.reduxDispatch({
    //     type: 'CHANGE_DRINKS',
    //     drinkChoice: this.state.drinkChoice
    //   });
    }

    const handleClick = (drinkChoice) => {
      console.log(drinkChoice);
      console.log(props)

      props.reduxDispatch({
        type: 'CHANGE_DRINKS',
        drinkChoice: drinkChoice
      });
    }
      // KEEPING TRACK OF POSITION

    // switch(action.type) {
    //     case "All": 
    //       return {console.log("drinks")}
    //     break;
    //     case "Wine":
    //       console.log("wine")
    //     break;
        

    //     default: 
    //   }
    // }

    // };
    // this.state = {drinkChoice: ''}

      // ReduxStore.dispatch({
    //   this.props.reduxDispatch({
    //     type: 'CHANGE_DRINKS',
    //     drinkChoice: this.state.drinkChoice,
    //   });
    // };
    
    return (
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" />
          <Tab onClick = { handleClick("Wine") } label="Wine" />
          <Tab label="Beer" />
          <Tab label="Liquor" />
          <Tab label="Cocktail" />
          <Tab label="Favorites" />
          </Tabs>
      </Paper>
    );
  }


  // export default connect()(Navbar);

            /* <Tab onClick = { () =>this.handleChoice("all") } label="All" />
          <Tab onClick = { () =>this.handleChoice("wine") } label="Wine" />
          <Tab onClick = { () =>this.handleChoice("beer") } label="Beer" />
          <Tab onClick = { () =>this.handleChoice("liquor") } label="Liquor" />
          <Tab onClick = { () =>this.handleChoice("cocktails") } label="Cocktail" />
          <Tab onClick = { () =>this.handleChoice("favorites") } label="Favorites" /> */

          /* <Tab drinkChoice={this.all} label="All" />
          <Tab drinkChoice={this.wine} label="Wine" />
          <Tab drinkChoice={this.beer} label="Beer" />
          <Tab drinkChoice={this.liquor} label="Liquor" />
          <Tab drinkChoice={this.cocktail} label="Cocktail" />
          <Tab drinkChoice={this.favorites} label="Favorites" /> */