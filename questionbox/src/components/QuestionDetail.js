import React, { useState, useEffect } from 'react'
import AnswerList from './Answerlist'
import AnswerQuestion from './AnswerQuestion'
// import { useParams } from 'react-router-dom'

export default function QuestionDetail ({ question, token }) {
  const [answers, setAnswers] = useState([])
  console.log(answers)
  
  const handleDone = (newAnswers) => {
    setAnswers([...answers, newAnswers])

  }
  useEffect(() => {
    setAnswers(question.answers)
  }, [question])
  return (
    <>
      <div className='question-info'>

        <p>this is question detail</p>
        <h2>{question.title}</h2>
        <p>{question.body}</p>
        <p>{question.date_created}</p>
        <p>{question.id}</p>

      </div>

      <div className='answer-list'>

       
        <AnswerList
          answers={answers}
        />
        <AnswerQuestion
          question={question.id}
          handleDone={handleDone}
          token={token}
        />
  
        
      </div>
    </>
  )
}

// found params = URLSearchParams(window.location.search) on MDN to be able to get the ID out of the question. Window contains all information the browser can give you, so typed window in the console, then looked down the list at location, and then found the id inside of the search. this let me get the id out of it
