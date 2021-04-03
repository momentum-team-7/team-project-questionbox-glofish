import React from 'react'

// import Answer from './Answers'
import '../App.css'

export default function Answer({ answer }) {
  console.log(answer)
  return (
    <div>
      
      <h1>{answer.body}</h1>
    </div>
  )
}
