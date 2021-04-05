import React, { useEffect, useState } from "react";
import UserList from './components/UserList.js';
import { Link } from 'react-router-dom'

export default function UserPage() {
const [userprofiles, setUserProfile] = useState([])

useEffect(() = {
    allUserProfiles().then((data) => setUserProfile(data))
}, [])

return (
    <div className='User-profile'>
        <h1>Username profile</h1>
        <UserProfile userprofiles={userprofiles} />
        <Link to='/'>Go Back</Link>
    </div>
)
}