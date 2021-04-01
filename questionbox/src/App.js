import {useState} from 'react'
import dataUser from './dataUser.json'
import dataQuestions from './dataQuestions.json'


function App () {
    window.user = dataUser;
    window.questions = dataQuestions;
    
    return (
        <div className='app-container'>
            <h1 className='header'>Welcome to Traverse!</h1>
            <h2 className='tagline-header'>A resource for travelers everywhere - ask, search, and save all of your travel-related questions here!</h2>
        <nav className='nav-bar'>
            <button>Login</button>
            <button>Register</button>
        </nav>

        <div className='side-nav-bar'>
            <button>Profile</button>
            <button>Users</button>
            <button>Questions</button>
        </div>

        </div>
    
    )
}   

export default App
