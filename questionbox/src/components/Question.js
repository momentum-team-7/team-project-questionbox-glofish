import React from 'react'
import { Link } from 'react-router-dom'
// import Answer from './Answers'
import '../App.css'

export default function Question({ question }) {
  console.log(question)
  return (
    <div>
      <Link to='/questiondetail'>Question</Link>
      <h1>{question.title}</h1>
    </div>
  )
}