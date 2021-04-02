import React, { useState } from 'react'
import QuestionList from './QuestionList.js'
import dummyData from '../dummyData.js'

function PageHome() {
    const [questions, setQuestion] = useState(dummyData)
    return (
        <div className='homepage'>
            <h1>All Questions</h1>
            <QuestionList questions={questions} />
            
        </div>
    )
}


export default PageHome