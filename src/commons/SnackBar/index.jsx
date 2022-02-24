import React from "react";
import Alert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";

const SnackBar = ({ hasLogin, snackBarStatus, hasMessage }) => {
  return (
    <Snackbar severity="error" open={snackBarStatus}>
      {hasLogin ? (
        <Alert severity="success" sx={{ width: "100%" }}>
          Success
        </Alert>
      ) : (
        <Alert severity="error" sx={{ width: "100%" }}>
          {hasMessage}
        </Alert>
      )}
    </Snackbar>
  );
};

export default SnackBar;
