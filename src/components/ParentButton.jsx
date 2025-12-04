import React from 'react'
import Button from './Button'
// import SignUp from './components/SignUp'

const ParentButton = () => {
  return (
    <div>
      <h1>Hello There</h1>
      <Button title="delete" style="btn btn-danger"/>
      <Button title="edit"  style="btn btn-warning"/>
      <Button title="submit"  style="btn btn-success"/>
      {/* <SignUp/> */}
    </div>
  )
}

export default ParentButton