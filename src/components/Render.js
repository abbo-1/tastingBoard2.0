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
      let drinks =  [];
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
    
    console.log("this.state is",[this.state])
    let stateArray = [this.state]

    if (stateArray[0] == null) {
      console.log("returning with nothing")
      return <div></div>
    }

    // console.log("stateArray",stateArray);
  let firstElement = stateArray[0];
    // console.log("firstElement",firstElement)
   let  drinks = firstElement.drinks; 
    // console.log("the lizard king")
    // console.log(drinks);
        

  //  let cardComponents = [];
    //let myCard = { InfoCard }
  //  cardComponents.push(<InfoCard/>)
// cardComponents.push("<p>heyhey</p>")

  let drinkChoice = this.props.reduxState.drinkChoice

  // if (drinkChoice === undefined) {
  //   drinkChoice = "all"
  // }
  // console.log("fer" , drinkChoice)

  // const props = this.props

  // console.log("just drinks", drinks)

  // console.log("prps and drinks", props.drinks)

  // let drinkInfo = {
  //   type: props.drinks.type,
  //   name:  props.drinks.name,
  //   manufacturer: props.drinks.manufacturer,
  //   rating: props.drinks.rating,
  //   date: props.drinks.date,
  //   description: props.drinks.description,
  //   favorite: props.drinks.favorite
  // }
  // console.log("Modi Chow" , drinkInfo)


  let cardComponents = drinks.map((drink) =>{
    if (drink.type === drinkChoice) {
      // return (<InfoCard {this.props.drinkInfo} />)
            return (<InfoCard />)
    } else {
      return <div>Nothing to Report</div>
    }})


    // if drink.type === drinkChoice
    // else return <div></div>;
      console.log("between this")
      console.log(cardComponents)
      console.log("between and this")

  // })

/*
let drinkChoice = this.props.reduxState.drinkChoice
if (drinkChoice === undefined) {
  drinkChoice = "all"
let cardComponents = []
  console.log("Drink Choice is", drinkChoice)
  switch(drinkChoice) {
  case "all":
    cardComponents = <p>These are all of your drinks</p>
    break;
  case "Wine":
    cardComponents = <p>This is your wine</p>
    break;
  case "Beer":
    cardComponents = <p>This is your beer</p>
    break;
  case "Liquor":
    cardComponents = <p>This is your liquor</p>
    break;
  case "Cocktail":
    cardComponents = <p>These are your cocktails</p>
    break;
  case "Favorites":
    cardComponents = <p>These are your favorites</p>
  break;
  default :
  }
}
*/


        // cardComponents.push()
  
  // cardComponents has all the components to render

//   let drinkChoice = this.props.reduxState.drinkChoice
// if (drinkChoice === undefined) {
//     drinkChoice = "all"
// }


  return (
    //  <div> { InfoCard } </div>
      <div>
         <div> "hey" </div>
          <div>{cardComponents}</div>
        <div>hey2</div>
        </div>
   )
  }
}

export default Render