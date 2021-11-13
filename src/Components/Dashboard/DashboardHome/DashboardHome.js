import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import MyOrders from "../My Orders/MyOrders";
import ManageOrders from "../ManageOrders/ManageOrders";
const DashboardHome = () => {
  const {user} = useAuth()
  const [userData,setUserData] =React.useState([])
const [loading,setLoading] = useState(true)
  const email =user.email

//load user
React.useEffect(() => {
  setLoading(true)
  axios.get(`http://localhost:5000/users/${email}`)
  .then(res=>{
    setUserData(res);
  }).finally(()=>setLoading(false))

}, []);

if(loading){
  return <h1>Loading....</h1>
}
console.log(userData?.userType);

  return (
    <div>
      {
        userData&& userData.userType ==='admin'? <ManageOrders></ManageOrders>
        :<MyOrders></MyOrders>
      }
      
     
    </div>
  );
};

export default DashboardHome;
