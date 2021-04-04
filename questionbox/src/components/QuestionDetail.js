import React from 'react'
import AnswerList from './Answerlist'
// import { useParams } from 'react-router-dom'

export default function QuestionDetail({question}) {
    // let id = URLSearchParams.get('id')
    console.log(window.location.search)
    let params = new URLSearchParams(window.location.search);
    console.log(params.get('id'))
    console.log(question)
   
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
            answers={question.answers}
        />
        </div>
        </>
    )
}