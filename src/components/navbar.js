import React from 'react';
// import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });
  
  export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {/* <Tab onClick = { () =>this.handleChoice("all") } label="All" />
          <Tab onClick = { () =>this.handleChoice("wine") } label="Wine" />
          <Tab onClick = { () =>this.handleChoice("beer") } label="Beer" />
          <Tab onClick = { () =>this.handleChoice("liquor") } label="Liquor" />
          <Tab onClick = { () =>this.handleChoice("cocktails") } label="Cocktail" />
          <Tab onClick = { () =>this.handleChoice("favorites") } label="Favorites" /> */}
          <Tab label="All" />
          <Tab label="Wine" />
          <Tab label="Beer" />
          <Tab label="Liquor" />
          <Tab label="Cocktail" />
          <Tab label="Favorites" />
          </Tabs>
      </Paper>
    );
  }
  