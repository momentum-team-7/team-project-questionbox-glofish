import {useState} from 'react'
import dataUser from './dataUser.json'
import dataQuestions from './dataQuestions'
import QuestionList from './components/QuestionList.js'
import './App.css';
import Answers from './components/Answers';
import answerdata from './dataAnswers'
import AnswerList from './components/Answerlist';


function App () {
  const [questions, setQuestions] = useState(dataQuestions);
//   window.user = dataUser;
//   window.questions = dataQuestions;
  return (
    <div className='app-container'>
      <h1 className='header'>Welcome to Traverse!</h1>
      <h2 className='tagline-header'>A resource for travelers everywhere - ask, search, and save all of you  travel-related questions here!</h2>
    
    <nav className='nav-bar'>
      <button>Login</button>
      <button>Register</button>
    </nav>

    <div className='side-nav-bar'>
      <button>Profile</button>
      <button>Users</button>
      <button>Questions</button>
    </div>

    <div>
      <h1 className='question-header'>All Questions</h1>
        <QuestionList questions={questions} />
        <h2 className='answer-header'>Responses from Other Travelers</h2>
        <AnswerList answerdata={answerdata} />
    </div>
    </div>
  )
}

export default App
