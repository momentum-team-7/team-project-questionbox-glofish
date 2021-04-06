import React, { useEffect } from 'react'
import Answer from './Answer'
import '../App.css'

export default function AnswerList ({ answers }) {
  useEffect(() => {}, [answers])
  if (answers && answers.length > 0) {
    return (
      <>
        <h2>Answers</h2>
        {answers.map((answer, index) => (
          <Answer key={index} answer={answer} />
        ))}
      </>
    )
  } else if (answers && answers.length === 0) {
    return ("This Question hasn't been answered yet")
  } else {
    return ('Loading answers')
  }
}

// if answers exists and the answer array is empty return question hasn't been answered, otherwise return loading
