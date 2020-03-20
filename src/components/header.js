import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// import AddButton from './AddButton.js'
import SideLogo from '../images/mainLogo.png'

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const renderCardEdit = () => {
  //   console.log("Card Edit");

  //   props.reduxDispatch({
  //     type: 'DISPLAY_CARDEDIT',
  //     cardEdit: cardEdit
  //   }); 
  // }
  

  return (
    <div className="header">
      {/* <AddButton  onClick = { () => renderCardEdit() }className="addDrinksButton"/> */}

      <Button className= "headerMenuButton" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Change Password</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

      <img src={SideLogo} class="sidelogo" alt="side logo"></img>

    </div>
  );
}