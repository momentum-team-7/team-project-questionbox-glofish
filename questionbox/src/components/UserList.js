import React, { useEffect, useState } from 'react'


export default function ListofProfiles({ userprofiles }) {
        
    return (
        <main>
            {userprofiles.map((getProfile, index) => {
        return (
            <div key={index}>
                getProfile.owner{getProfile.owner}
                id={getProfile.id}
                date_created={getProfile.date_created}
           </div> 
        )
    })}
       </main>
    )}