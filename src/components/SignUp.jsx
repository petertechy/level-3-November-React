import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [studentList, setstudentList] = useState([]);

  const navigate = useNavigate()

  // const inputValue = (event) =>{
  //     console.log(event.target.value)
  // }

  const handleSubmit = () => {
    // console.log(firstname, lastname, email, password);
    let student = { firstname, lastname, email, password };
    console.log(student);
    setstudentList([...studentList, student]);
    console.log(studentList);
    navigate('/dashboard')
  };

  const handleDelete = (index) =>{
    console.log(index)
    studentList.splice(index, 1)
    setstudentList([...studentList]);
  }
  return (
    <>
      <div className="col-7 mx-auto rounded border shadow p-3 my-4">
        <h1>Sign Up</h1>
        <input
          onChange={(e) => setfirstname(e.target.value)}
          className="form-control mb-3"
          type="text"
          placeholder="first name"
        />
        <input
          onChange={(e) => setlastname(e.target.value)}
          className="form-control mb-3"
          type="text"
          placeholder="last name"
        />
        <input
          onChange={(e) => setemail(e.target.value)}
          className="form-control mb-3"
          type="text"
          placeholder="email"
        />
        <input
          onChange={(e) => setpassword(e.target.value)}
          className="form-control mb-3"
          type="text"
          placeholder="password"
        />
        <button onClick={handleSubmit} className="btn btn-success my-2">
          Sign Up
        </button>
      </div>

      <div className="mx-auto col-8 border rounded-3 my-4 p-3 ">
        {
            studentList.map((user, index)=>(
                <div key={index}>
                    <i>{index+1}</i>
                    <h4>{user.firstname}</h4>
                    <h4>{user.lastname}</h4>
                    <h4>{user.email}</h4>
                    <button>Edit</button>
                    <button onClick={()=>handleDelete(index)}>Delete</button>
                </div>
            ))
        }
      </div>
    </>
  );
};

export default SignUp;
