import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  SignUp from './SignUp';
import  PublicForum from './PublicForum';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './config/fire'
import {AuthProvider} from './AuthContext'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <>
      <Router>
      <Navbar />
        <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
          <Routes>
            <Route path='/sign-up' element={<SignUp /> } />
            <Route path='/public-forum' element={<PublicForum />} />
            <Route path='/about-us' element={<AboutUs />} /> 
            <Route path ='/login' element={<Login />} />
           
          </Routes>
        </AuthProvider>
      <Footer />
      </Router>
    </>
  );
}

export default App;