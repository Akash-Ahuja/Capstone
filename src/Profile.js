import React, {useEffect, useState} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import "./profile.css";
import {auth, db, logout} from "./config/fire";
import {query, collection, getDocs, where} from "firebase/firestore";

function Profile(){

  const [user, loading, error]= useAuthState(auth);
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const fetchUserName = async () => {
    try{
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch(err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
     <div className="center">
      <div className="profile">
        <div className="profile__container">
          <h1>Profile</h1>
          Logged in as
          <div>{name}</div>
          <div>{user?.email}</div> 
          <br/>
          <div></div>
          <button className="profile__btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div> 
  );
}
export default Profile;
