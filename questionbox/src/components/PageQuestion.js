import React, { useState, useEffect } from 'react'
import QuestionDetail from './QuestionDetail.js'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

function PageQuestion({token}) {
    const [questionDetail, setQuestionDetail] = useState({})
    const { id } = useParams()
    useEffect(() => {
        
        let params = new URLSearchParams(window.location.search);
        axios.get(`http://swordtail.herokuapp.com/questions/${id}`).then((response) => {
          
          setQuestionDetail(response.data)
        })
      }, [])
      
    return (
        
        <div className='detail'>
            <h1>Question</h1>
            <QuestionDetail question={questionDetail} token={token} />
            <Link to='/'>Back</Link>
        </div>

        
    )
}


export default PageQuestion

// -1 used because api is not set up to get 1 question at a time so index & id do not line up. had to do a second get request because of the API is set up I think? params.get found on MDN to get the id out of the question in order to render just that question.