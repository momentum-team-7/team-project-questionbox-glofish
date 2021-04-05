import React, { useEffect, useState } from 'react'


export default function ListofProfiles({ userprofiles }) {
    // const [loading, setLoading] = useState([])

    // useEffect(() => {
    //     setLoading(true);
    //     setLoading(false);
    //     if (loading) {
    //         return <p>Data is loading...</p>;
    //     }
       
    //     })
        
          return (
              <main>
    {userprofiles.map((getProfile, index) => {
        return (
            <div key={index}>
                {getProfile.username}
           </div> 
        )
    })}
       </main>
    )}