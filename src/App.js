import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  SignUp from './SignUp';
import  PublicForum from './PublicForum';
import AboutUs from './AboutUs';
import Footer from './Footer';
import PrivateRoute from './PrivateRoute'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase'
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
        <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
          <Navbar />
          <Routes>
            <Route exact path='/' element={
              <PrivateRoute>

              </PrivateRoute>
            }/>
            <Route path='/sign-up' component={SignUp} />
            <Route path='/public-forum' component={PublicForum} />
            <Route path='/about-us' component={AboutUs} />
           
          </Routes>
        </AuthProvider>
      <Footer />
      </Router>
    </>
  );
}

export default App;


