import React, { useState } from 'react'
import axios from 'axios'

export default function AnswerQuestion ({question, handleDone, token}) {
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')
  // const token = '17bc521c4d39ed8a5794307ad5138daa85a161f9'

  const handleSubmit = (event) => {
    alert('Your Answer was submitted!')
    event.preventDefault()
    axios
      .post(
        'http://swordtail.herokuapp.com/answers/',
        {
          title: title,
          body: body,
          question: question
        },
        {
          headers: { Authorization: `Token ${token}` }
        }
      )
      .then((data) => {
        handleDone(data.data)
      setBody('')
      setTitle('')
        console.log(data)
        
      })
  }
  return (
    <div>
      <h3>Got an Answer? Submit it here!👇 </h3>
      <form onSubmit={(event)=> handleSubmit(event)}>
        <div className='answer-title'>
          <label htmlFor='answer-title'></label>
          <input id='answer-title'
            type='text'
            value={title}
            placeholder='Title'
              onChange={(event) => setTitle(event.target.value)}>
              </input>
          </div>
           <div className='answer-body'>
              <label htmlFor='answer-body'></label>
               <textarea id='answer-body'
               value={body}
              type='text'
                    placeholder='Start typing...'
              onChange={(event) => setBody(event.target.value)}>
              </textarea>
               <button type='submit'>Submit</button>
          </div>
        </form>
    </div>   
          

        
        
    )
  }

  // need to clear input field for answer & refresh page on click