import React, { useEffect, useState } from "react";
import { getUserProfile } from "../userApis.js";
import { Link } from 'react-router-dom';
import AnswerList from "./Answerlist.js";

export default function PageUser({id}) {
const [userProfile, setUserProfile] = useState({})
console.log(id)
    useEffect(() => {
        
        setUserProfile(getUserProfile(id)) 
}, [id])
console.log(userProfile.questions)
return (
    <div className='User-profile'>
        <h1>PageUser</h1>
        <p>{userProfile.id}</p>
      <p>{userProfile.username}</p>
        <p>{userProfile.date_created}</p>
        {/* {userProfile.questions.map(question =>
            <AnswerList answers={question.answers}/>
            )} */}
        <Link to='/'>Go Back</Link>
    </div>
)
}