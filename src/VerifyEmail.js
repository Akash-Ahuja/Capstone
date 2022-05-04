import './verifyEmail.css'
/* import {useAuthValue} from './AuthContext'
import {useState, useEffect} from 'react'
import {auth} from './config/fire'
import {sendEmailVerification} from 'firebase/auth'
import {useNavigate} from 'react-router-dom */
import React, {useEffect, useState} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {auth, verifyEmail} from './config/fire';

function VerifyEmail() {

  //const {currentUser} = useAuthValue()
  //const[email,setEmail] =useState("");
  //const [time, setTime] = useState(60);
  const [user,loading,error]= useAuthState(auth);
  //const {timeActive, setTimeActive} = useAuthValue()
  const navigate = useNavigate();

/*   useEffect(() => {
    const interval = setInterval(() => {
      currentUser?.reload()
      .then(() => {
        if(currentUser?.emailVerified){
          clearInterval(interval)
          navigate('/')
        }
      })
      .catch((err) => {
        alert(err.message)
      })
    }, 1000)
  }, [navigate, currentUser]) */
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/verify-email");
  }, [user, loading]);
  
  /* useEffect(() => {
    let interval = null
    if(timeActive && time !== 0 ){
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    }else if(time === 0){
      setTimeActive(false)
      setTime(60)
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [timeActive, time, setTimeActive]) */

/*   const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
    .then(() => {
      setTimeActive(true)
    }).catch((err) => {
      alert(err.message)
    })
  } */

  return (
    <div className='center'>
      <div className='verifyEmail'>
        <h1>Verify your Email Address</h1>
        <p>
          <strong>A Verification email has been sent to:</strong><br/>
          <span>{user?.email}</span>
        </p>
        <span>Follow the instruction in the email to verify your account</span>       
        <button 
          onClick={verifyEmail}
        >Resend Email </button>
      </div>
    </div>
  )
}

export default VerifyEmail;