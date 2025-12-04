import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/counterSlice'

const ContactUs = () => {
  const count = useSelector((state)=> state.counterSlice.count)

  console.log(count)
  let dispatch = useDispatch()

  return (
    <div>
        <h1>Contact Page</h1>
        <h1>Create Count: {count}</h1>
        <button onClick={()=>dispatch(increment())}>Increase Number</button>
        <button onClick={()=>dispatch(decrement())}>Decrease Number</button>
        <button onClick={()=>dispatch(incrementByAmount(10))}>Increase Number By 10</button>
    </div>
  )
}

export default ContactUs