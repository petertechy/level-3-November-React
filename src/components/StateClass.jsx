import React, { useState } from "react";
import { students } from "./utils/studentList";

const StateClass = () => {
  const [number, setnumber] = useState(10);
  const [myName, setmyName] = useState("Fola");

  // let number = 20
  // let myName = "Adeola"

  const changeName = () => {
    // myName = "Emmanuel"
    setmyName("Emmanuel");
    console.log(myName);
  };

  const increaseNumber = () => {
    // number++
    setnumber(number + 1);
    console.log(number);
  };
  return (
    <div>
      <h1>Hello there, {number}</h1>
      <h1>{myName}</h1>
      <button onClick={changeName}>Change Name</button>
      <button onClick={increaseNumber}>Increase Number</button>

      <div>
        {students.map((student) => (
          <div key={student.id}>
            <h1>{student.id}</h1>
            <h1>{student.name}</h1>
            <p>{student.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateClass;
