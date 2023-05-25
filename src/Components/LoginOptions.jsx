import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';

 function LoginOptions() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open,setOpen]=useState(false);
 
  const handleClick =(e)=> {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <div>
        <center>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
       

        onClick={handleClick}
      >
      <h4>  SELECT LOGIN OPTION </h4>
      </Button>
      <center>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      <Link  to="/login">  <MenuItem onClick={handleClose}>AdminLogin</MenuItem></Link>
       <Link to="/farmarlogin"> <MenuItem onClick={handleClose}>DoctorLogin</MenuItem></Link>
       <Link to="/wholesalerlogin"> <MenuItem onClick={handleClose}>EmployeeLogin</MenuItem></Link>
      </Menu>
      </center>
      </center>
    </div>
  );
}
export default LoginOptions;