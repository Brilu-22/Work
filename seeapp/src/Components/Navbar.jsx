import React from "react";
import "./navbar.scss";
import Logo from "./assets/nasalogo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        backgroundColor: "#333",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <NavLink to="/" exact activeClassName="active">
        <img
          src={Logo}
          alt="Logo"
          style={{ height: "3rem", marginRight: "1rem" }}
        />
      </NavLink>

      <NavLink
        to="/"
        exact
        activeClassName="active"
        style={{ textDecoration: "none", color: "#000", marginRight: "1rem" }}
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard"
        activeClassName="active"
        style={{ textDecoration: "none", color: "#000", marginRight: "1rem" }}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/new"
        activeClassName="active"
        style={{ textDecoration: "none", color: "#000", marginRight: "1rem" }}
      >
        New
      </NavLink>
    </div>
  );
};

export default Navbar;
