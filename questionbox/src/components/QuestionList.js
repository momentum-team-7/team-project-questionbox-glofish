import React from 'react'
import Question from './Question'
import '../App.css'

export default function QuestionList({ questions }) {
    
     if (questions.length > 0) {
        return (
            <>
                {questions.map((question, index) => (
                    <Question key={index} question={question} />
                ))}
            </>
        )
    } else {
        return("Loading questions")
    }
}