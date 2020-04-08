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


// componentDidMount() {
//   axios('http://localhost:8080/drinks')
//     .then(response => {
//       this.setState({ drinks: response.data })
//     })
//     .catch(function(error) {
//       console.log(error)
//     })
// }

// let cardComponents = // array of Card (Card.js)
// let cardComponents = [{ Card }]
   // loop through array of drinks
          // add to cardComponents

  render() {
    console.log("this.state is", this.state)
    // stateIsDrinks = this.state
    let stateArray = [this.state]

    if (stateArray[0] == null) {
      console.log("returning with nothing")
      return <div></div>
    }

   let firstElement = stateArray[0]; 
   console.log("stateArray is", stateArray[0])
   let drinks = firstElement.drinks; 
   console.log("firstelement drinks is", firstElement.drinks)
   
// -----------

    // console.log("the lizard king")
    // console.log(drinks);
        
  //  let cardComponents = [];
    //let myCard = { InfoCard }
  //  cardComponents.push(<InfoCard/>)
// cardComponents.push("<p>heyhey</p>")

  let drinkChoice = this.props.reduxState.drinkChoice
  
  console.log("drink choice is" , drinkChoice)

  // if (drinkChoice === undefined) {
  //   drinkChoice = "all"
  // }


  // const props = this.props

  // console.log("just drinks", drinks)


  // let drinkInfo = {
  //   type: this.state.drinks.type,
  //   name:  this.state.drinks.name,
  //   manufacturer: this.state.drinks.manufacturer,
  //   rating: this.state.drinks.rating,
  //   date: this.state.drinks.date,
  //   description: this.state.drinks.description,
  //   favorite: this.state.drinks.favorite
  // }

  // const { type, name, manufacturer, rating, date, description, favorite  } = this.state;
console.log("LOOK AT THIS", drinks)
  let cardComponents = drinks.map((drink) =>{
    if (drink.type === drinkChoice || drinkChoice === 'All') {
      return (<InfoCard drinks={this.state.drinks} />)
    } if (drinkChoice === 'Favorites' && drink.favorite === true) {
      return (<InfoCard drinks={this.state.drinks} />)
    }else {
      return console.log("Nothing to report")
    }})

    // if drink.type === drinkChoice
    // else return <div></div>;
      console.log("between this")
      console.log(cardComponents)
      console.log("between and this")
  // })



        // cardComponents.push()
  
  // cardComponents has all the components to render

//   let drinkChoice = this.props.reduxState.drinkChoice
// if (drinkChoice === undefined) {
//     drinkChoice = "all"
// }


  return (
      <div>

          <div>{cardComponents}</div>
      </div>
   )
  }
}

export default Render