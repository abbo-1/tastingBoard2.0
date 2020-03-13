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

handleChoice(choice) {
      this.props.dispatch({ type:'CHANGE_DRINKS', choice: choice})
}

render() {
         let drinkChoice = this.props.reduxState.choice
         let information = []
        switch(drinkChoice) {
          case "all":
            information = <p>This is all of your drinks</p>
            break;
          case "wine":
            information = <p>This is your wine</p>
            break;
          case "beer":
            information = <p>This is your beer</p>
            console.log("beer")
            break;
          case "liquor":
            information = <p>This is your liquor</p>
            break;
          case "cocktail":
            information = <p>This is your cocktails</p>
            break;
          case "favorites":
            information = <p>These are your favorites</p>
          break;
        default :
        }
        return (
            <div>{information}</div>
        )
    }
}

export default connect()(Render);