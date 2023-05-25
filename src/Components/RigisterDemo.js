import { Typography ,Box,TextField,Button} from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function RigisterDemo() {

    const [inpust,setInpust] =useState({

        name:"",
        email:"",
        password:"",


    });

    const handleChange=(e)=>{
        setInpust((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inpust);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
	<Box
    display="flex" flexDirection={"column"} maxWidth={400} alignItems="center" justifyItems={"center"}
    margin="auto"
    marginTop={5}
    padding={3}
    borderRadius={5}
    boxShadow={"5px 5px 10px #ccc"}
      
      sx={{
       ":hover":{
        boxShadow:"10px 10px 20px #ccc",
       },
      }}
      
    >
         <Typography variant="h2" paddding={3} textAlign="center">
        Rigister
       </Typography>
       <TextField
       onChange={handleChange}
            name="name"
            value={inpust.name}
            type={'text'}
            variant="outlined"
            margin="normal"
            placeholder='Enter Name...'
            required
            />
             <TextField
              onChange={handleChange}
             name="email"
             value={inpust.email}
             type={'email'}
              variant="outlined"
          margin="normal"
		  placeholder='Enter Email...'
          required
          />
          <TextField 
             onChange={handleChange}
            name="password"
            value={inpust.password}
          type={'password'}
           variant="outlined"
          margin="normal"
           

           placeholder='Enter password...'
           required
           />
          <Button type="submit" sx={{ borderRadius:3}} variant="contained" color='warning'>Login</Button>
		</Box>
        </form>


    </div>
  )
}

export default RigisterDemo
		
           
        	
          
          
		  
       
      
          
            
		
		 
          
		  
       
		
	  	
       
       
       
    
      
        
		  
		
		
       

		
		
		

		

	