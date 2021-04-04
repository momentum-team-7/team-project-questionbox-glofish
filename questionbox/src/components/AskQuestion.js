import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AskQuestionForm() {
  const [text, setText] = useState('')
  const handleChange = event => {
    setText(event.target.value)
  }
  const handleSubmit = event => {
    alert('Your Question was submitted:')
    console.log(text)
    fetch('http://swordtail.herokuapp.com/questions/', {
      method: 'POST',
      body:JSON.stringify(text)
      
    }).then(function (response) {
      console.log(response)
      return response.json();
    })
    event.preventDefault()
  }
  return (
    <>
      <div>
        <h3>question form</h3>
        <input type='text' value={text} onChange={handleChange} />
        
        <button onClick={ handleSubmit }>Submit</button>
      <div>
        <Link to='/'>
          <button type='button'>Back to Home</button>
        </Link>
      </div>
      </div>
    </>
  )
}
