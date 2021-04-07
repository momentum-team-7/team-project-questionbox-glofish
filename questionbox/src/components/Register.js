import React, { useState } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

export default function Register({ isLoggedIn, setAuth }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  if (isLoggedIn) {
    return <Redirect to='/' />
    }
    function handleSubmit(event) {
    event.preventDefault()
    axios
      .post('http://swordtail.herokuapp.com/auth/users/', {
          username,
          password,
      })
      .then((response) => {
        return axios 
          .post('http://swordtail.herokuapp.com/auth/token/login/', {
            username,
            password,
          })
          .then((data) => {
            if (data && data.data.auth_token) {
              setAuth(username, data.data.auth_token)
            }
          })
      })
  }
  return (
    <div>
    <h1>Register Here!</h1>
      <form onSubmit={handleSubmit}>
      <div>
        <label to='username'>Username:</label>
        <input 
        type='text'
        id='username'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        />
      </div>

      <div>
       <label>Password:</label>
        <input  
          type='password'
           id='password'
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          />
      </div>
      <button type='submit'>Register</button>
    </form>
    </div>
  )
}


