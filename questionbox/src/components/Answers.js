import Question from './Question'
const Answers = ({ question_title, owner, body, date_created }) => {
    
    // const handleSubmit = (response) => {
    //     setResponse(true)
    // }
    return (
        <div>
            <h3>{question_title}</h3>
            <p>{date_created}</p>
            <p>{owner}</p>
            <p>{body}</p>
        </div>
         )   
}

export default Answers
