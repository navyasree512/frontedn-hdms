import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PasswordIcon from '@mui/icons-material/Password';
import { InputGroup } from 'react-bootstrap';



export default function Rigister() {


const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);


const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};


const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};


const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};


const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
	
};


const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};


const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	<div className='container' style={{marginTop:"20px"}}>
		<div className='row'>
		<div className = "card col-md-5 offset-md-3 offset-md-3" style={{backgroundColor:"gold"}}>
	<div className="form">
	<div>
		<h1>Registration</h1>
	</div>

	
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
	<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
		
	  	
        <TextField
		
		
		  placeholder='Enter Name...'
          required
          id="outlined-required"
          label="Name"
          defaultValue=""
		  onChange={handleName}
		  className="input"
		value={name}
		style={{color:'white'}}
		  
        />
        </div>
		<div>
	
        <TextField
		  placeholder='Enter Email...'
          required
          id="outlined-required"
          label="Enter Mail"
          defaultValue=""
		  onChange={handleEmail}
		  className="input"
		value={email}
		style={{color:'white'}}
		  
        />
        </div>
        <div>
    	
			
        <TextField
		  placeholder='Enter password...'
          required
          id="outlined-required"
          label="Password"
          defaultValue=""
		  onChange={handlePassword}
		  className="input"
		value={password}
		  style={{color:'white'}}
		
        />
		<div>
		 <TextField
		  placeholder='Enter confirm password...'
          required
          id="outlined-required"
          label="confirm password"
          defaultValue=""
		  onChange={handlePassword}
		  className="input"
		value={password}
		  style={{color:'white'}}
		  
		
        />
		</div>

		
        </div>
		<div style={{backgroundColor:"white"}}>
		Select type : <input type="radio" name="farmer" value="farmer"/> Admin
		<input type="radio" name="farmer" value="farmer"/> Doctor
		<input type="radio" name="farmer" value="farmer"/> Employee
		</div>
		</Box>
		
		

		<button onClick={handleSubmit} className="btn" type="submit" style={{backgroundColor:'blue',color:'white'}}>
		Submit
		</button>

	</form>

	</div>
	</div> 
	</div>
	</div>
);
}
