import React, { useEffect, useState } from "react";
import { getUserProfile } from "../userApis.js";
import { Link, useParams } from 'react-router-dom';
import QuestionDetail from "./QuestionDetail.js";

export default function PageUser({userProfiles, id}) {
    const [userProfile, setUserProfile] = useState({});
    const { profile } = useParams();
console.log(id)
    useEffect(() => {
        
        setUserProfile(getUserProfile(id)) 
}, [id])
console.log(userProfile.questions)
    return (
    <>
        <h1 className="user-profile">Your Profile</h1>
            {userProfiles && userProfiles.map((userProfile, id) => 
            <li key={userProfile.id}>                             
            <p>Member since:{userProfile.date_created}</p>
            <h2>Responses Given</h2>
            <QuestionDetail answers={userProfile.question.answers} />
            <Link to='/'>Go Back</Link>
            </li>   
            )}
</>

)
}