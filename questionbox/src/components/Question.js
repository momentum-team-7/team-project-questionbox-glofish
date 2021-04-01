import React, { useState } from 'react'
// import Answer from './Answers'
import '../App.css'

export default function Question({question_title, question_input, question_timestamp, question_id, question_description }) {
    return (
        <div>
          <h1>{question_title}</h1>
            <p>{question_input}</p>
            <p>{question_timestamp}</p>
            <p>{question_description}</p>
            <p>{question_id}</p>
        </div>
    )
}