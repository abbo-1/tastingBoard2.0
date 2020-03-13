import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

class Render  extends React.Component {

state = this.getCurrentStateFromStore()
    
  getCurrentStateFromStore() {
    return {
      drinkChoice: store.getState().choice,
    }
  }
  
  updateStateFromStore = () => {
    const currentState = this.getCurrentStateFromStore();
    this.setState(currentState)
  }
  
  componentDidMount() {
    this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
  }
  
  componentWillUnmount() {
    this.unsubscribeStore();
  }
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    handleChoice(choice) {
      this.props.dispatch({ type:'CHANGE_DRINKS', choice: choice})
    }

     render() {
         let drinkChoice = this.props.reduxState.choice
        switch(drinkChoice) {
          case "all":
            <p>This is all of your drinks</p>
            break;
          case "wine":
            <p>This is your wine</p>
            break;
          case "beer":
            <p>This is your beer</p>
            break;
          case "liquor":
            <p>This is your liquor</p>
            break;
          case "cocktail":
            <p>This is your cocktails</p>
            break;
          case "favorites":
            <p>These are your favorites</p>
          break;

export default connect()(Render);