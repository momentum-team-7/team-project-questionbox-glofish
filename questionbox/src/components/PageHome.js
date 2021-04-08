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
            <br></br>
            <h1>Questions From Across the Transverse</h1>
            <br></br>
            <div className="Questions-all">
            <QuestionList questions={questions} />
            </div>
        </div>
    )
}


export default PageHome

// routed homepage that renders the question list from the API