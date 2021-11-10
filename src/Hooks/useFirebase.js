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
  const [isLoading,setIsLoading]=useState(true)
  const auth = getAuth();

  const provider = new GoogleAuthProvider();


  //signing with google

  const google = () => {
    setIsLoading(true)
    signInWithPopup(auth, provider)
      .then((res) => {
        insertToDB(res?.user?.email,res?.user?.displayName)
        confirmAlert("Loged in Successfully");
        // history.push("/");
      
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(()=> setIsLoading(false));
  };

  // create user using email and password

  const createUser = async(email, password, name,history) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateUserName(name);
        insertToDB(email,name)
          confirmAlert("user Created");
          history.push("/");
        
 
      })
      .catch((error) => {
        const errorMessage = error.message;
      })
      .finally(()=> setIsLoading(false));
  };

  //login with email and password
  const loginWithEmail = (email, password,history,location) => {
    const { from } = location?.state || { from: { pathname: "/" } };
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        confirmAlert("logedin");
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
      })
      .finally(()=> setIsLoading(false));
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
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(()=> setIsLoading(false));
  };

  const insertToDB = (email,name)=>{
    const userData={
      name:name,
      email:email,
      userType: 'user'
    }
    axios.post('http://localhost:5000/addUser', userData)
    .then(res => {
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
      setIsLoading(false)
    });
    return () => unsubscribed;
  }, []);

  return {
    google,
    user,
    logOut,
    createUser,
    loginWithEmail,
    isLoading,
  };
};

export default useFirebase;
