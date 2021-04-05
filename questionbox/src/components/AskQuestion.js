import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function AskQuestionForm() {
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')
  const token = '17bc521c4d39ed8a5794307ad5138daa85a161f9'

  const handleSubmit = event => {
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
    // fetch('http://swordtail.herokuapp.com/questions/', {
    //   method: 'POST',
    //   title: JSON.stringify(title),
    //   body: JSON.stringify(text, title),
    //   headers: { Authorization: `Token ${token}` }
    // }).then(function (response) {
    //   console.log(response)
    //   console.log(JSON.stringify(title))
    //   return response.json();
    event.preventDefault()
  }
  return (
    <>
      <div>
        <h3>question form</h3>
        <form onSubmit={(event)=> handleSubmit(event)}>
                <div className="question-title">
                    <label htmlFor="question-title"></label>
                    <input id="question-title"
                    type="text"
                    placeholder='Title'
                    onChange={(event) => setTitle(event.target.value)}>
                    </input>
                </div>
                <div className="question-body">
                    <label htmlFor="question-body"></label>
                    <textarea id="question-body"
                    type="text" 
                    placeholder='Start typing...'
                    onChange={(event) => setBody(event.target.value)}>
                    </textarea>
                    <button type="submit">Ask!</button>
                </div>
        </form>
    
        {/* <form > 
          <input type='text' placeholder='Title' value={title} onChange={ event => setTitle(event.target.value)} />
          <br />
          <input type='text' placeholder='Start typing...' value={text} onChange={ event => setText(event.target.value)} />
          <button onClick={handleSubmit}>Submit</button>
          <div> */}
            <Link to='/'>
              <button type='button'>Back to Home</button>
            </Link>
          {/* </div>
        </form> */}
      </div>
    </>
  )
}
