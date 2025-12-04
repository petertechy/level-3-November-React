import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className="row">
        <div className="col-5">
          <h1 className={style.text}>Nav Bar</h1>
        </div>

        <div className="col-7">
          <ul className="d-flex gap-5 text-success fw-bold">
          <li><Link className="text-success" to="/">Home</Link></li>
          <li><Link className="text-success" to="/product-page">Product Redux</Link></li>
          <li><Link className="text-success" to="/contact">Contact</Link></li>
          <li><Link className="text-success" to="/about">About</Link></li>
          <li><Link className="text-success" to="/signup">Register</Link></li>
          <li><Link className="text-success" to="/effect">Effect</Link></li>
        </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
