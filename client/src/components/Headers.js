import React from "react";
import Axios from "axios";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./HeadersStyles.css"
const disp = () => {
  Axios.get("http://localhost:3000/").then((response) => {
    console.log(response);
  });
};

function Header() {
  return (
    <>
    <h1 className="heading">WELCOME TO THE TSF BANK</h1>
    <div className="header_container">
      <ul>
        <li >
          <Link to="/" className="nav-link">CUSTOMERS</Link>
        </li>
        <li >
          <Link to="/viewcustomer" className="nav-link">TRANSACTION HISTORY</Link>
        </li>
        <li >
          <Link to="/Transfer" className="nav-link">TRANSFER MONEY</Link>
        </li>
      </ul>
    </div>
    </>
  );
}

export default Header;
