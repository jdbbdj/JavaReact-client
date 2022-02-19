import React, { useState } from "react";
import { Container, TextField, Button, Snackbar } from "@material-ui/core";
import AlertTitle from "@material-ui/lab/AlertTitle";
import "./LoginComponents.css";
import INITIAL_VALUES from "./initialValues";
import { useNavigate } from "react-router-dom";
import SnackBar from "../../commons/SnackBar";

const LoginComponents = () => {
  const [initialValues, setInitialValues] = useState(INITIAL_VALUES);
  const [snackBarStatus, setSnackBarStatus] = useState(false);
  const [hasLogin, setHasLogin] = useState(false);
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
      setSnackBarStatus(true);
      setHasLogin(true);
      navigate("/home");
    } else {
      setSnackBarStatus(true);
      setHasLogin(false);
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
      <SnackBar hasLogin={hasLogin} snackBarStatus={snackBarStatus} />
    </Container>
  );
};

export default LoginComponents;
