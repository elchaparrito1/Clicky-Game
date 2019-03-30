import React from "react";
import "./Navbar.css";


const Navbar = props => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light default fixed-top">
        <ul className="col-xs-4 navbar-nav mx-auto">
            <li className="navbar-brand"><a  href="/">Lord of the Click</a></li>
            <li className="navbar-brand">{props.trueFalse}</li>
            <li className="navbar-brand">Score: {props.score} | Top Score: {props.topScore}</li>
        </ul>
        </nav>   
)
  

export default Navbar;