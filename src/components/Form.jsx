import React from 'react'
import { useState } from 'react';
import validation from './validation';
import "./form.css";

export default function Form({ Login }) {

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: ""
  });


  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, errors, setErrors)
  }

  function handleSubmit(event) {
    event.preventDefault();
    Login(userData);

  }
  return (
    <div className = "formulario">
      <form className = "login" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" > Email </label>
          <input className= "email"type="text" name="username" value={userData.username} onChange={handleChange} ></input>
          <p className= "error">{errors.username}</p>
        </div>

        <div>
          <label htmlFor="password"> Password </label>
          <input className = "password" type="password" name="password" value={userData.password} onChange={handleChange}></input>
          <p className= "error">{errors.password}</p>
        </div>

        <button className ="submit" type='submit'> Submit</button>
      </form>
    </div>
  )
}

