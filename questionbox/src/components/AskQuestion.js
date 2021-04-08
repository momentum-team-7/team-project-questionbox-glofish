import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'react-bootstrap';

export default function AskQuestionForm() {
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')
  const token = '17bc521c4d39ed8a5794307ad5138daa85a161f9'

  const handleSubmit = (event) => {
    alert('Your Question was submitted:')
    
    axios
      .post(
      'http://swordtail.herokuapp.com/questions/',
        {
          title: title,
          body: body,
        },
        {
          headers: { Authorization: `Token ${token}`},
        }
      )
    event.preventDefault()
    setBody('')
    setTitle('')
  }
  return (
    <>
     <div className="form-group">
        <form onSubmit={(event)=> handleSubmit(event)}>
          <div className="question-title">
              <label htmlFor="question-title"></label>
              <input id="question-title"
              type="text"
              value={title}
              placeholder='Title'
              onChange={(event) => setTitle(event.target.value)}>
              </input>
          </div>
           <div className="question-body">
              <label htmlFor="question-body"></label>
               <textarea id="question-body"
              type="text" 
              value={body}
                    placeholder='Start typing...'
              onChange={(event) => setBody(event.target.value)}>
              </textarea>
               <br></br>
               <Button type="submit">Submit</Button>
          </div>
        </form>
        <br></br>
        <Link to='/'>
          <Button type='button'>Back to Home</Button>
        </Link>
      </div>
    </>
  )
}
