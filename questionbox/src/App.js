import React, { useState } from 'react'
import PageHome from './components/PageHome.js'
import PageQuestion from './components/PageQuestion.js'
import AskPage from './components/AskPage.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import useLocalStorageState from 'use-local-storage-state'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import './App.css'

function App () {
  const [username, setUsername] = useLocalStorageState('appUsername', '')
  const [token, setToken] = useLocalStorageState('appToken', '')

  function setAuth (username, token) {
    setUsername(username)
    setToken(token)
  }
  function logOut() {
    setUsername(null)
    setToken(null)
  }
  const isLoggedIn = username && token 

  return (
    
    <Router>
      <div className='app-container'>
        <h1 className='header'>Welcome to Traverse!</h1>
        <h2 className='tagline-header'>A resource for travelers everywhere - ask, view, and save all of your   travel-related questions here!</h2>
        <nav className='nav-bar'>
          <ul>
            <li>
              <Link to='/profile'>
                <button type='button'>Profile</button>
              </Link>
            </li>
            <li>
              <Link to='/askquestion'>
                <button type='button'>Ask!</button>
              </Link>
            </li>
          </ul>
        </nav>
        <div className='top-nav-buttons'>
          {isLoggedIn ? (
            <>

            <Link to='/logOut' onClick={logOut}>
              <button type='button'>Log Out</button></Link>
            </>  
              ) : (
                <>
                  <Link to='/Register'>
                    <button type='button'>Register</button>
                  </Link>
                  <Link to='/Login'>
                    <button type='button'>Log In</button>
                  </Link>
                </>
              )}
            </div>
      <Switch>
        <Route path='/login'>
          <Login setAuth={setAuth} isLoggedIn={isLoggedIn} token={token} />
        </Route>
        <Route path="/register">
            <Register setAuth={setAuth} isLoggedIn={isLoggedIn} />
          </Route>
        <Route path='/questiondetail/:id'>
          <PageQuestion isLoggedIn={isLoggedIn} token={token} />
        </Route>
        <Route path='/askquestion'>
          <AskPage isLoggedIn={isLoggedIn} token={token} />
        </Route>

        <Route path='/'>
          {!isLoggedIn && <Redirect to='/login' />}
          <PageHome />
        </Route>


      </Switch>

      </div>
    </Router>
  )
}

export default App


{/* <li>
              <Link to='/login'>
                <button type='button'>Login</button>
              </Link>
            </li> */}
            {/* <li>
              <Link to='/Register'>
                <button type='button'>Register</button>
              </Link>
            </li> */}
            // <li></li>