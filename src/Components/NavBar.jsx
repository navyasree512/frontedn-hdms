import React from "react";
import { NavLink,Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HailIcon from '@mui/icons-material/Hail';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import HomeIcon from '@mui/icons-material/Home';
import  AccountCircleIcon  from "@mui/icons-material/AccountCircle";
import {Tabs,Tab,Button} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';



function NavBar() {
  return (

    <div>

      <Box sx={{ pink: 1 }}>
        <AppBar position="static" sx={{ background: "		#FF69B4 " }}>
          <Toolbar>

            <nav>
              <table>

                <tr>

                  <td><HomeIcon fontSize="large" /></td>

                  <td> <NavLink to='/'><h3 style={{ color: 'white' }} class="ss"> Home </h3></NavLink></td>
                  <td style={{ padding: '25px' }}><NavLink to='/About'><h3 style={{ color: 'white' }}>About</h3></NavLink></td>
                </tr>

              </table>

            </nav>
            <Link className="btn btn-primary w-15" to="/Rigister">REGISTER</Link>
            <Link className="btn btn-primary w-15" to="/loginoptions" style={{ marginLeft: '10px' }}>LOGIN</Link>
           






            <AccountCircleIcon sx={{ marginLeft: "710px" }} fontSize="large" style={{ color: "white" }}></AccountCircleIcon>

          </Toolbar>

        </AppBar>
      </Box>
    </div>
  );
}
export default NavBar;
