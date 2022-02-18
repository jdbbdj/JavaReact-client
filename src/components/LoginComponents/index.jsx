import React from "react";
import { Container, TextField, Button } from "@material-ui/core";
import "./LoginComponents.css";

const LoginComponents = () => {
  return (
    <Container className="loginCont">
      <form className="loginForm">
        <div>
          <label>Username</label>
          <TextField type="text" name="username" />
        </div>
        <div>
          <label>Password</label>
          <TextField type="password" name="passowrd" />
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </form>
    </Container>
  );
};

export default LoginComponents;
