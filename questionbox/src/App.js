import {useState} from 'react'
import PageHome from './components/PageHome.js'
import PageQuestion from './components/PageQuestion.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import getUserProfiles from './userApis'
import './App.css';
import PageUser from './components/PageUser.js';

function App () {

  return (
      <Router>
        <div className='app-container'>
        <h1 className='header'>Welcome to Traverse!</h1>
        <h2 className='tagline-header'>A resource for travelers everywhere - ask, view, and save all of your  travel-related questions here!</h2>
        
        <nav className='nav-bar'>
        <button>Login</button>
        <button>Register</button>
        <button>Ask Question</button>
        </nav>

        <div className='side-nav-bar'>
           <ul>
                <li><button>Profile</button></li>
                <li><button>Users</button></li>
                <li><button>Questions</button></li>
            </ul>
        </div>
        <Switch>
        <Route path='/questiondetail'>
                <PageQuestion />
            </Route>
            <Route path='/cool'>
                dfhgfhhfgh
            </Route>
            <Route path="/userprofile">
                <PageUser id={2}/>
            </Route>
            <Route path='/'>
                <PageHome />
            </Route>
        </Switch>

       
        </div>
    </Router>
  )
}

export default App
