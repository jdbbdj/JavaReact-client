import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { AuthRemove } from "../../utils/auth";
import { inversecredibilityUpdate } from "../../redux/actions/UserActions";

const Header = () => {
  const dispatch = useDispatch();
  const userDetailsCred = useSelector((state) => state.userReducers.credible);

  const AuthRemoveState = () => {
    AuthRemove();
    dispatch(inversecredibilityUpdate());
  };

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
            <MenuItem component={Link} to={"/"} className="navbar-link px-2">
              Others
            </MenuItem>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {!userDetailsCred && <MenuItem>Login</MenuItem>}
            {userDetailsCred && (
              <MenuItem onClick={AuthRemoveState}>Logout</MenuItem>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
