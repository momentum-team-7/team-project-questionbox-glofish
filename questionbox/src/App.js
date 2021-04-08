import React, { useState } from 'react'
import PageHome from './components/PageHome.js'
import PageQuestion from './components/PageQuestion.js'
import getUserProfiles from './userApis'
import PageUser from './components/PageUser.js';
import AskPage from './components/AskPage.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import { Layout } from './components/Layout.js';
import useLocalStorageState from 'use-local-storage-state'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import './App.css'
import { NavigationBar } from './components/NavigationBar.js'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


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
      <NavigationBar />
        <h1 className='header'>Welcome to Traverse!</h1>
        <br></br>
        <br></br>
        <h3 className='tagline-header'>A resource for travelers everywhere - ask, view, and save all of your   travel-related questions here!</h3>
      <Layout>
        <nav className='nav-bar'>
    
        </nav>
        <div className='top-nav-buttons'>
          {isLoggedIn ? (
            <>
 
            <Link to='/logOut' onClick={logOut}>
              <Button variant="primary" size="sm">Log Out</Button></Link>
            </>  
              ) : (
                <>
                  <Link to='/Register'>
                    <Button type='Button'>Register</Button>
                  </Link>
                  <Link to='/Login'>
                    <Button type='Button'>Log In</Button>
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
        <Route path='/userprofile'>
          <PageUser isLoggedIn={isLoggedIn} token={token} />
        </Route>

        <Route path='/'>
          {!isLoggedIn && <Redirect to='/login' />}
          <PageHome />
        </Route>


      </Switch>
      </Layout>

    </Router>
  )
}

export default App