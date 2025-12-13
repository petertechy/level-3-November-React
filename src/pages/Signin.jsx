import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    let navigate = useNavigate()
    const handleSubmit = ()=>{
        let url = "http://localhost:5500/signin"
        let userInfo = {email, password}

        console.log(userInfo)

        axios.post(url,userInfo)
        .then((res)=>{
          console.log(res)
            if(res.data.status){
              localStorage.token = res.data.token
              // localStorage.setItem(token)
              navigate("/user-dashboard")
            }else{
              console.log("Wrong Details")
            }
        })
        .catch((error)=>{
          console.log("an error occurred", error)
        })
    }
  return (
    <div>
        <h1>Sign In</h1>
        <input type="text" placeholder='Email' onChange={(e)=>setemail(e.target.value)} />
        <input type="text" placeholder='Password'onChange={(e)=>setpassword(e.target.value)} />
        <button onClick={handleSubmit}>Sign In</button>
    </div>
  )
}

export default Signin