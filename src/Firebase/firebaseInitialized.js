import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInital =()=>{
    return initializeApp(firebaseConfig)
}
export default firebaseInital;