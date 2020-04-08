import React from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
// import store from '../store';
import InfoCard from './Card.js'
import CardEdit from './CardEdit.js'

class Render  extends React.Component {

  constructor(props) {
        super(props);
        console.log("Here are your props", props);
  }
  

componentDidMount() {
    // call the drinks endpoint (via axios)
      let options = {
        method: 'GET',
        url: 'http://localhost:8080/drinks',
      };

    // let drinks = array of drinks
      let drinks =  {};
      console.log("this is",this);
    // axios request
      axios.request(options)
        .then( (response) => {
          console.log(response);
          this.setState({ drinks: response.data })
    })
    .catch(function (error) {
      console.log(error);
    });
}

  render() {
    // console.log("this.state is", this.state)
    let stateArray = [this.state]

    if (stateArray[0] == null) {
      console.log("returning with nothing")
      return <div></div>
    }

   let firstElement = stateArray[0]; 
  //  console.log("stateArray is", stateArray[0])
   let drinks = firstElement.drinks; 
  //  console.log("firstelement drinks is", firstElement.drinks)

  let drinkChoice = this.props.reduxState.drinkChoice
  console.log("drink choice is" , drinkChoice)

console.log("LOOK AT THIS what is drinks", drinks)
  let cardComponents = drinks.map((drink, index) =>{
    if (drink.type === drinkChoice || drinkChoice === 'All') {
      return (<InfoCard drinks={this.state.drinks} i ={ index } />)
    } 
    if (drinkChoice === 'Favorites' && drink.favorite === true) {
      return (<InfoCard drinks={this.state.drinks} i ={ index }/>)
    }
    else {
      return console.log("Nothing to report")
    }
  })

  console.log("between this")
  console.log(cardComponents)
  console.log("between and this")

  return (
      <div>
          <div>{cardComponents}</div>
      </div>
    )
  }
}

export default Render