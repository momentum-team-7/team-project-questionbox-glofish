import React, { useState } from 'react'
import QuestionDetail from './QuestionDetail.js'
import dummyData from '../dummyData.js'
import { Link } from 'react-router-dom'

function PageQuestion() {
    const [questionDetail, setQuestionDetail] = useState(dummyData[0])
    return (
        
        <div className='detail'>
            <h1>Question</h1>
            <QuestionDetail question={questionDetail} />
            <Link to='/'>Back</Link>
        </div>
    )
}


export default PageQuestion