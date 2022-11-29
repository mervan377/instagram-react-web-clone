import { getSuggestedProfiles, getUserInfo } from "firebase.js";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Sidebar() {

  const [user, setUser] = useState()

  useEffect(()=> {
    // getUserInfo().then(user=> {
    //   console.log("selam")
    // }).catch(err=> {
    //   console.log("err")
    // })
    getSuggestedProfiles().then(suggestionProfiles=> {
      setUser(suggestionProfiles)
    }).catch(err => {
      console.log("err")
    })
 
  }, [])


  return (
    <div className="w-[320px] bg-green-600">
      Mervan
      <p>Selam</p>
    </div>
  );
}
