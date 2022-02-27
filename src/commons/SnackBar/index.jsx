import React from "react";
import Alert from "@material-ui/lab/Alert";
import { useDispatch } from "react-redux";
import { Snackbar, Button, IconButton } from "@material-ui/core";
import {
  snackBarShowCall,
  snackBarHideCall,
} from "../../redux/actions/snackBarAction";

const SnackBar = ({ errorChecker, snackBarStatus, hasMessage }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(snackBarHideCall());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={snackBarStatus}
    >
      <Alert
        onClose={handleClose}
        severity={errorChecker ? "error" : "success"}
      >
        {hasMessage}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
