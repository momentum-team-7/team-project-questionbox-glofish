import {useState} from 'react'
import PageHome from './components/PageHome.js'
import PageQuestion from './components/PageQuestion.js'
import AskPage from './components/AskPage.js'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <Router>
      <div className='app-container'>
        <h1 className='header'>Welcome to Traverse!</h1>
        <h2 className='tagline-header'>A resource for travelers everywhere - ask, view, and save all of your   travel-related questions here!</h2>
        <nav className='nav-bar'>
          <ul>
            <li>
              <Link to='/Login'>
                <button type='button'>Login</button>
              </Link>
            </li>
            <li>
              <Link to='/Register'>
                <button type='button'>Register</button>
              </Link>
            </li>
            <li>
              <Link to='/askquestion'>
                <button type='button'>Ask!</button>
              </Link>
            </li>
          </ul>
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
          <Route path='/askquestion'>
            <AskPage />
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
