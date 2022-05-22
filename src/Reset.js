import React, {useEffect, useState} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {auth, sendPasswordRest} from './config/fire';
import "./react.css";

function Reset(){
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/profile");
    }, [user, loading]);

    return(
        <div className="reset">
            <div className="reset__container">
                <input
                    type="email"
                    className="reset__container"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <button
                    className="reset__btn"
                    onClick={() => sendPasswordRest(email)}
                >
                    Send password reset email
                </button>
                <div>
                    Don't have an account? <Link to="/sign-up">Sign Up</Link> now.
                </div>
            </div>
        </div>
    );
}
export default Reset;