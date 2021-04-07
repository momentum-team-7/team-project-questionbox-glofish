import React, { useEffect, useState } from "react";
import { getUserProfile } from "../userApis.js";
import { Link } from 'react-router-dom';
import AnswerList from "./Answerlist.js";

export default function PageUser({userProfiles, id}) {
    const [userProfile, setUserProfile] = useState({});
console.log(id)
    useEffect(() => {
        
        setUserProfile(getUserProfile(id)) 
}, [id])
console.log(userProfile.questions)
    return (
            <div>
                {userProfiles && userProfiles.map((userProfile) => (
                    <li key={userProfile.id}>                             
                    <p>Member since: {userProfile.date_created}</p>
                    <h2 className="questions-answers">{userProfile.username} User Responses</h2>
                    <AnswerList answers={userProfile.answers}/>
                    <Link to='/'>Go Back</Link>
                    </li>
                ))}
            </div>
    )
}