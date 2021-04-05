import React, { useState, useEffect } from 'react'
import QuestionDetail from './QuestionDetail.js'
import axios from 'axios'
import { Link } from 'react-router-dom'

function PageQuestion() {
    const [questionDetail, setQuestionDetail] = useState({})
    useEffect(() => {
        console.log('api request')
        let params = new URLSearchParams(window.location.search);
        axios.get('http://swordtail.herokuapp.com/questions/?format=json').then((response) => {
          console.log('response', response)
          setQuestionDetail(response.data[params.get('id') - 1])
        })
      }, [])
      console.log('pageQuestion', questionDetail)
    return (
        
        <div className='detail'>
            <h1>Question</h1>
            <QuestionDetail question={questionDetail} />
            <Link to='/'>Back</Link>
        </div>
    )
}


export default PageQuestion

// -1 used because api is not set up to get 1 question at a time so index & id do not line up