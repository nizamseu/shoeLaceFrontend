import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile ,
} from "firebase/auth";
import { useState, useEffect } from "react";
import firebaseInital from "../Firebase/firebaseInitialized";
import { confirmAlert } from "../utility";
import axios from 'axios';

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

  const createUser = async(email, password, name,history) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
      console.log(res,"res");
        updateUserName(name);
        insertToDB(email,name)
          confirmAlert("user Created");
          history.push("/");
        
 
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


const updateUserName =(name)=>{
  updateProfile(auth.currentUser, {
    displayName: name
  }).then(() => {

  }).catch((error) => {
   
  })
}

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

  const insertToDB = (email,name)=>{
    const userData={
      name:name,
      email:email,
      userType: 'user'
    }
    axios.post('http://localhost:5000/addUser', userData)
    .then(res => {
      console.log(res);
    });

  }


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
