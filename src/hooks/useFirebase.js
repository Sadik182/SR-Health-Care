import {signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect} from "react";
import auth from "../components/firebase/firebase.init";
// import initializeAuthentication from "../components/firebase/firebase.init";

// initializeAuthentication();


const useFirebase = () => {

  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  // const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  };

  const signInUsingEmailAndPassword = () => {
    return signInWithEmailAndPassword(auth)
  }

  const logOut = () => {
    signOut(auth)
    .then(() => {
        setUser({})
    })
}

// Observe User State Change or Not
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        
        }
      });
}, [])

  return {
    user,
    error,
    setUser,
    setError,
    signInUsingGoogle,
    signInUsingEmailAndPassword,
    logOut
  }
};

export default useFirebase;
