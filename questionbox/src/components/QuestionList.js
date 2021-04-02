import React from 'react'
import Question from './Question'
import '../App.css'

export default function QuestionList({ questions }) {
    return (
        <>
            {questions.map((question, index) => (
                <Question key={index} question={question} />
            ))}
        </>
    )
}