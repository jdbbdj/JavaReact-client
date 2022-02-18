import React, { useState } from "react";
import { Container, TextField, Button, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import "./LoginComponents.css";
import INITIAL_VALUES from "./initialValues";

const LoginComponents = () => {
  const [initialValues, setInitialValues] = useState(INITIAL_VALUES);
  const [snackBarStatus, setSnackBarStatus] = useState(false);
  const [hasLogin, setHasLogin] = useState(false);

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

      <Snackbar severity="error" open={snackBarStatus}>
        {hasLogin ? (
          <Alert severity="success" sx={{ width: "100%" }}>
            Success
          </Alert>
        ) : (
          <Alert severity="error" sx={{ width: "100%" }}>
            Error
          </Alert>
        )}
      </Snackbar>
    </Container>
  );
};

export default LoginComponents;
