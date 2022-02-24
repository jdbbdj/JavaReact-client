import React, { useState } from "react";
import { Container, TextField, Button, Snackbar } from "@material-ui/core";
import AlertTitle from "@material-ui/lab/AlertTitle";
import "./LoginComponents.css";
import INITIAL_VALUES from "./initialValues";
import { useNavigate } from "react-router-dom";

import { Auth as AuthService } from "../../utils/auth";

import { useDispatch } from "react-redux";
import { credibilityUpdate } from "../../redux/actions/UserActions";
import {
  snackBarSuccess,
  snackBarFailed,
  snackBarFailedMessage,
} from "../../redux/actions/snackBarAction";

const LoginComponents = () => {
  const dispatch = useDispatch();

  const [initialValues, setInitialValues] = useState(INITIAL_VALUES);
  const navigate = useNavigate();

  const handleChange = (e) => {
    // create the new state and set it
    setInitialValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    e.preventDefault();
  };

  const loginClick = () => {
    if (
      initialValues.username === "james" &&
      initialValues.password === "test"
    ) {
      AuthService(initialValues);
      dispatch(snackBarSuccess());
      dispatch(credibilityUpdate(initialValues.username));
      navigate(`/home/${initialValues.username}`);
    } else {
      dispatch(snackBarFailedMessage("Invalid Credentials"));
    }
  };

  return (
    <Container className="loginCont">
      <form className="loginForm">
        <div>
          <label>Username</label>
          <TextField
            type="text"
            name="username"
            value={initialValues.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <TextField
            type="password"
            name="password"
            value={initialValues.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <Button onClick={loginClick}>Login</Button>
        </div>
      </form>
    </Container>
  );
};

export default LoginComponents;
