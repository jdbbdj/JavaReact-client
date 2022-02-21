import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark text-light justify-content-space-around">
          <div>
            <a href="/" className="navbar-brand">
              Todo List
            </a>
          </div>
          <ul className="navbar-nav ">
            <MenuItem
              component={Link}
              to={"/home/james"}
              className="navbar-link px-2"
            >
              Home
            </MenuItem>
            <MenuItem
              component={Link}
              to={"/others"}
              className="navbar-link px-2"
            >
              Others
            </MenuItem>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <MenuItem
              component={Link}
              to={"/logout"}
              className="navbar-link px-2"
            >
              Logout
            </MenuItem>
            <MenuItem
              component={Link}
              to={"/others"}
              className="navbar-link px-2"
              style={{ display: "none" }}
            >
              Login
            </MenuItem>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
