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
  axios.get(`https://intense-shore-62067.herokuapp.com/users/${email}`)
  .then(res=>{
    setUserData(res.data);
    console.log("userdata",res.data);
  }).finally(()=>setLoading(false))

}, [email]);

if(loading){
  return <h1>Loading....</h1>
}
console.log(userData?.userType);
userData?.userType&& console.log(userData?.userType)
  return (
    <div>
      {
        userData?.email&& userData.userType !== 'admin'? <MyOrders></MyOrders>
        :<ManageOrders></ManageOrders>
      }
      
     
    </div>
  );
};

export default DashboardHome;
