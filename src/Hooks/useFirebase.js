import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState, useEffect } from "react";
import firebaseInital from "../Firebase/firebaseInitialized";
import { confirmAlert } from "../utility";

firebaseInital();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();

  const provider = new GoogleAuthProvider();

  //signing with google

  const google = () => {
    signInWithPopup(auth, provider)
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  // create user using email and password

  const createUser = (email, password, navigate) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        confirmAlert("user Created");
        navigate("/");
        // alert("created");
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  //login with email and password
  const loginWithEmail = (email, password) => {
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        confirmAlert("logedin");
        // alert("login");
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  //log Out
  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //auth state Change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);

  return {
    google,
    user,
    logOut,
    createUser,
    loginWithEmail,
  };
};

export default useFirebase;
