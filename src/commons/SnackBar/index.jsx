import React from "react";
import Alert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar, Button, IconButton } from "@material-ui/core";
import {
  snackBarShowCall,
  snackBarHideCall,
} from "../../redux/actions/snackBarAction";

const SnackBar = () => {
  const snackBarStatus = useSelector((state) => state.snackBarReducer.show);
  const errorChecker = useSelector((state) => state.snackBarReducer.error);
  const hasMessage = useSelector((state) => state.snackBarReducer.message);
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
        onClose={(e) => handleClose()}
        severity={errorChecker ? "error" : "success"}
      >
        {hasMessage}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
