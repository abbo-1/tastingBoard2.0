import React from 'react';
// import { connect } from 'react-redux';
// import store from '../store';

class Render  extends React.Component {
    constructor(props) {
        super(props);
        console.log("Here are your props", props);
}

// state = this.getCurrentStateFromStore()
    
//   getCurrentStateFromStore() {
//     return {
//       drinkChoice: store.getState().drinkChoice,
//     }
//  }
  
//   updateStateFromStore = () => {
//     const currentState = this.getCurrentStateFromStore();
//     this.setState(currentState)
//  }
  
//   componentDidMount() {
//     this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
// }
  
// componentWillUnmount() {
//     this.unsubscribeStore();
// }

// handleChoice(choice) {
//       this.props.dispatch({ type:'CHANGE_DRINKS', choice: choice})
// }

render() {
    console.log("Look here:", this.props)
         let drinkChoice = this.props.reduxState.drinkChoice
         if (drinkChoice === undefined) {
             drinkChoice = "all"
         }
         let information = []
         console.log("Drink Choice is", drinkChoice)
        switch(drinkChoice) {
          case "all":
            information = <p>These are all of your drinks</p>
            break;
          case "Wine":
            information = <p>This is your wine</p>
            break;
          case "Beer":
            information = <p>This is your beer</p>
            console.log("beer")
            break;
          case "Liquor":
            information = <p>This is your liquor</p>
            break;
          case "Cocktail":
            information = <p>These are your cocktails</p>
            break;
          case "Favorites":
            information = <p>These are your favorites</p>
          break;
        default :
        }
        return (
            <div>{information}</div>
        )
    }
}

// export default connect()(Render);
export default Render