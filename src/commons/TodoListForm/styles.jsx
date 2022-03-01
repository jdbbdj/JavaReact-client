import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { Dialog, DialogActions } from "@material-ui/core";
import { Container, TextField, Button } from "@material-ui/core";

export const CustomDialog = withStyles((theme) => ({
  root: {},
}))(Dialog);

export const CustomContainer = withStyles((theme) => ({
  root: {
    padding: "40px",
    width: "200px",
    height: "300px",
    overflowX: "hidden",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
}))(Container);

export const CustomTextField = withStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}))(TextField);

export const CustomGrid = withStyles((theme) => ({
  root: {
    padding: "10px",
  },
}))(Grid);

export const CustomButton = withStyles((theme) => ({
  root: { marginLeft: "50px" },
}))(Button);
