import React, { useRef, useState } from "react";

const Ref = () => {
  let myHeader = useRef(null);
  const [myName, setmyName] = useState("")

  const changeHeader = () => {
    // console.log(myHeader.current.innerText);
    // myHeader.current.innerText = "Hello Emmanuel";
    // myHeader.current.style.color = "red";
    setmyName(myHeader.current.value)
    console.log(myHeader.current.value)
  };
  return (
    <div className="mx-auto col-7 rouned-4 border p-3 my-3">
      {myName && <h1 className="fs-5">
        Welcome, {myName}
      </h1>}
      <input
        ref={myHeader}
        className="form-control"
        type="text"
        placeholder="Enter your name"
      />
      <button className="btn btn-danger mt-2" onClick={changeHeader}>
        Change Header
      </button>
    </div>
  );
};

export default Ref;
