import React, { useState, useEffect } from 'react'
import QuestionList from './QuestionList.js'
import axios from 'axios'


function PageHome() {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        
        axios.get('http://swordtail.herokuapp.com/questions/?format=json').then((response) => {
          
          setQuestions(response.data)
        })
      }, [])
    return (
        <div className='homepage'>
            <h1>All Questions</h1>
            <QuestionList questions={questions} />
            
        </div>
    )
}


export default PageHome

// routed homepage that renders the question list from the API