import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    let navigate = useNavigate()

    const submitUser = () =>{
        let userObj = {firstname, lastname, email, password}
        let url = "http://localhost:5500/register"
        console.log(userObj)

        axios.post(url,userObj)
        .then((response)=>{
            console.log(response)
            if(response.data.status){
              navigate("/signin")
            }else{
              console.log("Wrong Details")
            }
        })
        .catch((error)=>{
            console.log(error)
        })

    }
  return (
    <>
      <div>
        <input type="text" placeholder="first name" onChange={(e)=>setfirstname(e.target.value)} />
        <input type="text" placeholder="last name" onChange={(e)=>setlastname(e.target.value)}/>
        <input type="text" placeholder="email" onChange={(e)=>setemail(e.target.value)} />
        <input type="text" placeholder="password" onChange={(e)=>setpassword(e.target.value)} />
        <button onClick={submitUser}>Register</button>
      </div>
    </>
  );
};

export default Register;
