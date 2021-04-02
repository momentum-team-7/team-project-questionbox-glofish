import React from 'react'

export default function QuestionDetail({question}) {
    return (
        <div>
            <p>this is question detail</p>
            <h2>{question.title}</h2>
            <p>{question.body}</p>
            <p>{question.date_created}</p>
            <p>{question.id}</p>

        </div>
    )
}