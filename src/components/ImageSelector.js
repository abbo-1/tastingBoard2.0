import React from 'react';
import liquorQuote from '../images/liquorQuote.png'
import beerQuote from '../images/beerQuote.png'
import wineQuote from '../images/wineQuote.png'
import cocktailQuote from '../images/cocktailQuote.png'

export default function ImageSelector(props) {

    const renderedDrinkType = props.drinkType;
    console.log(renderedDrinkType);

    function ImageFinder () {
        if (renderedDrinkType === "Beer") {
            return (
            <img src={beerQuote} className = "drinkImage"/>
            )
        }
        if (renderedDrinkType === "Wine") {
            return (
                <img src={wineQuote} className = "drinkImage"/>
                )
        }
        if (renderedDrinkType === "Liquor") {
            return (
                <img src={liquorQuote} className = "drinkImage" />
                )
        }
        if (renderedDrinkType === "Cocktail") {
            return (
                <img src={cocktailQuote} className = "drinkImage" />
                )
        }
    }



    return (
        <div className = "drinkImageHolder">
                {ImageFinder()}
        </div> 
    )
}