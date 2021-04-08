import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser , setLoggedInUser] =useContext(UserContext);
    const history =useHistory();
    const location =useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName , email} = result.user;
                const signedInUser ={name:displayName, email}
                setLoggedInUser(signedInUser)
                history.replace(from)
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    return (
        <div>
            <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google Sign In</button>

        </div>
    );
};

export default Login;