import { Grid, Box, Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ViewListIcon from "@material-ui/icons/ViewList";
import { styled, withStyles } from "@material-ui/styles";

import React from "react";

const CustomGrid = withStyles((theme) => ({
  root: {
    display: "flex",
    cursor: "pointer",
  },
}))(Grid);

const CustomBox = withStyles((theme) => ({
  root: {
    justifyContent: "space-around",
    display: "flex",
  },
}))(Box);

const ActionComponents = () => {
  return (
    <CustomBox container spacing={3}>
      <CustomGrid>
        <ViewListIcon />
      </CustomGrid>
      <CustomGrid>
        <EditIcon />
      </CustomGrid>
      <CustomGrid>
        <DeleteIcon />
      </CustomGrid>
    </CustomBox>
  );
};

export default ActionComponents;
