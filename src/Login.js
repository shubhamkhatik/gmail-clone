import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css"
import {auth, provider} from "./firebase";
import {login} from "./features/userSlice"
import { useDispatch } from 'react-redux';


function Login() {
    const dispatch = useDispatch();
    const signIn= () => {
        auth.signInWithPopup(provider)
        .then(({user}) =>{
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photourl: user.photoURL
            }));
        })
        .catch(err => alert(err.message));

    };
    return (
        <div className= "login">
            <div className= "login__container">
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
                 alt="gmail logo"/>
                 <Button variant="contained" color="primary" onClick={signIn}>Log in</Button>

            </div>
            
        </div>
    )
}

export default Login;

