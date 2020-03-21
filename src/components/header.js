import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
        <AddFancyDrink />
        <img src={SideLogo} class="sidelogo" alt="side logo"></img>
          <Button color="inherit">Log Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}