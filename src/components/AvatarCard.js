import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple, amber, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  amber: {
    color: theme.palette.getContrastText(amber[500]),
    backgroundColor: amber[500],
  },
  red: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
}));

export default function AvatarCard(props) {
    const classes = useStyles();

    const renderedDrinkType = props.drinkType;
    console.log(renderedDrinkType);

    function AvatarFinder () {
    if (renderedDrinkType === "Beer") {
        return (
        <Avatar className={classes.amber}>B</Avatar>
        )
    }
    if (renderedDrinkType === "Wine") {
        return (
            <Avatar className={classes.purple}>W</Avatar>
            )
    }
    if (renderedDrinkType === "Liquor") {
        return (
            <Avatar className={classes.orange}>L</Avatar>
            )
    }
    if (renderedDrinkType === "Cocktail") {
        return (
            <Avatar className={classes.red}>C</Avatar>
            )
    }
}

    return (
      <div className={classes.root}>
            {AvatarFinder()}
      </div>
    );
  }