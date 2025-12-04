//Component - This is a function that returns JavaScript and XML and can be exported by default
//Interpolation - {}
// import "./App.css";
import style from "./App.module.css";
import Navbar from "./components/Navbar";
import Image from "./assets/image.avif"

function Interpolation() {
  let myName = "Fola Ayegbajeje";
  let myStyle = {
    h1: {
      color: "green",
      fontFamily: "cursive",
      fontSize: "4rem",
    },
    h3: {
      color: "green",
      fontSize: "3rem",
    },
  };
  return (
    <div>
      <Navbar/>
      <h1 className={style.text}>Hello {myName}</h1>
      <img width={300} src={Image} alt="This is an image" />
      <h2 style={{ color: "red", fontSize: "4rem" }}>Good Morning</h2>
      <h3 style={myStyle.h3}>Welcome to Soft Quest Incorporated</h3>


    </div>
  );
}

export default Interpolation;

// const App = () =>{

// }
