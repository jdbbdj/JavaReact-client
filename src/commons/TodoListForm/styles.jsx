import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

const CustomGrid = withStyles((theme) => ({
  root: {
    display: "flex",
    cursor: "pointer",
    "&:hover": {
      color: "red",
    },

    "& disabled": {
      color: "gray !important",
      cursor: "not-allowed",
    },

    "& .actionIcons": {
      //bypassDesign
    },
  },
}))(Grid);

export default CustomGrid;
