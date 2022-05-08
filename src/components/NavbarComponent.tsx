import React from "react";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";

const title: string = "Navbar";

const NavbarComponent = () => {
  return (
    <nav>
      <h1 className="title">{title}</h1>
      <div className="navContents">
      <Link className="navButton" to="/one">
        Page One
      </Link>
      <Link className="navButton" to="/two">
        Page Two
      </Link>
      <Link className="navButton" to="/three">
        Page Three
      </Link>
      </div>
    </nav>
  );
};

export default NavbarComponent;
