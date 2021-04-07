import React, { useEffect, useState } from "react";
import { getUserProfile } from "../userApis.js";
import { Link, useParams } from "react-router-dom";
import QuestionDetail from "./QuestionDetail.js";

export default function PageUser({ id }) {
  const [userProfile, setUserProfile] = useState({});
  const { profile } = useParams();
  console.log(id);
  useEffect(() => {
    setUserProfile(getUserProfile(id));
  }, [id]);

  // {
  //     answers: array,
  //     id: number,
  //     questions: [{}],
  //     username: string
  // }

  //Missing date: date_created

  console.log(userProfile);
  return userProfile ? (
    <>
      <h1 className="user-profile">{userProfile.username}'s Profile</h1>
      <li key={userProfile.id}>
        {/* Commment back in once date_created is resolved */}
        {/* <p>Member since:{userProfile.date_created}</p> */}
        {!!userProfile.questions &&
          userProfile.questions.map((question) => (
            <QuestionDetail question={question} />
          ))}
        <Link to="/">Go Back</Link>
      </li>
    </>
  ) : (
    <h2>Loading</h2>
  );
}
