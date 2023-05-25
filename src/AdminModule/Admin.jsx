import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div>
        <div>

    
           
    <img src="adminimage.jpg" style={{width:"35%",height:"150px"}}></img>
    <img src="adminimage.jpg" style={{width:"35%",height:"150px"}}></img>
    <img src="adminimage.jpg" style={{width:"30%",height:"150px"}}></img>
        </div>
                <div style={{backgroundColor:"white"}}>
           
                    <Link className='btn btn-primary w-15' >Admin View</Link>
                    <Link className='btn btn-primary w-15' style={{marginLeft:"10px"}}>Doctor View</Link>

                    <Link className='btn btn-primary w-15' style={{marginLeft:"10px"}} to="/">Logout</Link>
                </div>
          

    </div>
  )
}

export default Admin