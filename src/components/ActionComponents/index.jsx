import { Grid, Box, Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ViewListIcon from "@material-ui/icons/ViewList";
import { withStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { logDelete } from "../../redux/actions/UserActions";

import React from "react";

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

const CustomBox = withStyles((theme) => ({
  root: {
    justifyContent: "space-around",
    display: "flex",
  },
}))(Box);

const ActionComponents = ({
  tasklet,
  todoList,
  userName,
  toggleModal,
  modal,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducers.name);
  const { targetdate, description, id, date } = tasklet;

  const handleDelete = (logId) => {
    dispatch(logDelete(user, logId));
  };

  const editTask = (tasklet) => {
    toggleModal("generate", true);
    toggleModal("edit", true);
    toggleModal("modalData", tasklet);
  };
  return (
    <CustomBox spacing={3}>
      <CustomGrid>
        <ViewListIcon className="actionIcons disabled" />
      </CustomGrid>
      <CustomGrid>
        <EditIcon onClick={(e) => editTask(tasklet)} className="actionIcons" />
      </CustomGrid>
      <CustomGrid>
        <DeleteIcon onClick={(e) => handleDelete(id)} className="actionIcons" />
      </CustomGrid>
    </CustomBox>
  );
};

export default ActionComponents;
