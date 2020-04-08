import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export default function Favorite(props) {

    const drinkTypeFavorite = props.favorite;
    console.log(drinkTypeFavorite);

    function ImageFinder () {
        if (drinkTypeFavorite === true) {
            return (
            <FavoriteIcon color="secondary"/>
            )
        }
        if (drinkTypeFavorite === false) {
            return (
                <FavoriteBorderIcon />
                )
        }
        if (drinkTypeFavorite === null) {
            return (
                <FavoriteBorderIcon />
                )
        }
    }



    return (
        <div className = "drinkImageHolder">
                {ImageFinder()}
        </div> 
    )
}