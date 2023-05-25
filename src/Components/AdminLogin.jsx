import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
 import { Link  } from "react-router-dom";


export default function AdminLogin() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }

  function handleSubmit(event) {

    event.preventDefault();

  }

  return (
    <div className='container' style={{marginTop:"20px"}}>
        <center>
		<div className='row'>
		<div className = "card col-md-5 offset-md-3 offset-md-3" style={{backgroundColor:"gold"}}>

    <div className="Login">

      <Form onSubmit={handleSubmit}>

        <Form.Group size="lg" controlId="email">

          <Form.Label>Email</Form.Label>

          <Form.Control

            autoFocus

            type="email"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

          />

        </Form.Group>

        <Form.Group size="lg" controlId="password">

          <Form.Label>Password</Form.Label>

          <Form.Control

            type="password"

            value={password}

            onChange={(e) => setPassword(e.target.value)}

          />

        </Form.Group>

        <Link className="btn btn-primary" to="/admin" block size="lg" type="submit" disabled={!validateForm()}>

          Login

        </Link>
        <Link>
        
        </Link>

      </Form>
      </div>
      </div>
      </div>
      </center>

    </div>

  );
  }