import React from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
// import store from '../store';

class Render  extends React.Component {
    constructor(props) {
        super(props);
        console.log("Here are your props", props);

//     getDrinks = (e) => {
    //   var options = {
    //     method: 'GET',
    //     url: 'http://localhost:8080/drinks',
    // };

    // axios.request(options)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // }

}



  render() {

  // call the drinks endpoint (via axios)
  let options = {
      method: 'GET',
      url: 'http://localhost:8080/drinks',
  };

  axios.request(options)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  // let drinks = array of drinks
  let drinks =  [axios.request.response.data]
  console.log("it takes a small man to fall into a bottle")
  console.log( drinks )

   // let cardComponents = // array of Card (Card.js)
  // let cardComponents = []

   // loop through array of drinks
          // add to cardComponents

    // cardComponents has all the components to render




    console.log("Look here:", this.props)

         let drinkChoice = this.props.reduxState.drinkChoice
         if (drinkChoice === undefined) {
             drinkChoice = "all"
             callDrinks
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
            // <div> {cardComponents} </div>
        )
    }
}

// export default connect()(Render);
export default Render