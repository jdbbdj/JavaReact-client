import React, { useState } from "react";
import { Container, TextField, Button, Snackbar } from "@material-ui/core";
import AlertTitle from "@material-ui/lab/AlertTitle";
import "./LoginComponents.css";
import INITIAL_VALUES from "./initialValues";
import { useNavigate } from "react-router-dom";

import { Auth as AuthService } from "../../utils/auth";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { credibilityUpdate } from "../../redux/actions/UserActions";
import {
  snackBarSuccessShowCall,
  snackBarFailShowCall,
} from "../../redux/actions/snackBarAction";
import loginValidator from "./loginValidator";

const LoginComponents = () => {
  const dispatch = useDispatch();

  const [initialValues, setInitialValues] = useState(INITIAL_VALUES);
  const navigate = useNavigate();

  const handleOnChange = (e, id) => {
    // create the new state and set it
    let setEvent;
    setEvent = e?.target.value;
    setInitialValues((prev) => ({
      ...prev,
      [id]: setEvent,
    }));
  };

  const loginClick = (values) => {
    if (values.username === "james" && values.password === "test") {
      AuthService(initialValues);
      dispatch(credibilityUpdate(initialValues.username));
      dispatch(snackBarSuccessShowCall("Success"));
      navigate(`/home/${initialValues.username}`);
    } else {
      dispatch(snackBarFailShowCall("Invalid Credentials"));
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validateOnChange: true,
    validationSchema: loginValidator,
    onSubmit: loginClick,
  });

  const { values, handleChange, handleSubmit, errors, touched, getFieldProps } =
    formik;

  return (
    <Container className="loginCont" onSubmit={handleSubmit}>
      <form className="loginForm">
        <div>
          <label>Username</label>
          <TextField
            type="text"
            name="username"
            id="username"
            {...getFieldProps("username")}
          />
          {touched.username && errors.username ? (
            <div style={{ color: "red" }}>{errors.username}</div>
          ) : null}
        </div>
        <div>
          <label>Password</label>
          <TextField
            type="password"
            name="password"
            id="password"
            {...getFieldProps("password")}
          />
          {touched.password && errors.password ? (
            <div style={{ color: "red" }}>{errors.password}</div>
          ) : null}
        </div>
        <div>
          <Button onClick={loginClick} type="submit">
            Login
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default LoginComponents;
