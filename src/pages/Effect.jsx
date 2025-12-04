import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [num, setnum] = useState(0)
    const [myName, setmyName] = useState("Damola")
    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])

    useEffect(()=>{
        console.log("Use Effect Ran")

        return ()=>{
            console.log("Component Unmounted")
        }
    }, [num])
    
    
  return (
    <div className='mx-auto col-7 shadow p-3 my-4'>
        <h1 onClick={()=>setmyName("Emmanuel")}>Hello, {myName}</h1>
        <h1 onClick={()=>setnum(num+1)}>{num}</h1>

    </div>
  )
}

export default Effect