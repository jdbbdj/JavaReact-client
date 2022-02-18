import React, { useState } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import "./LoginComponents.css";
import INITIAL_VALUES from "./initialValues";

const LoginComponents = () => {
  const [initialValues, setInitialValues] = useState(INITIAL_VALUES);

  const handleChange = (e) => {
    // create the new state and set it
    setInitialValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    e.preventDefault();
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
          <Button>Login</Button>
        </div>
      </form>
    </Container>
  );
};

export default LoginComponents;
