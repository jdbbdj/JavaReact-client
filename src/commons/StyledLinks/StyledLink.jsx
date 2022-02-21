import { withStyles } from "@material-ui/styles";

import { Link } from "react-router-dom";

const CustomLink = withStyles((theme) => ({
  root: {
    color: "red",
  },
}))(Link);

export default CustomLink;
