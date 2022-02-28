import React, { useEffect, useState } from "react";
import { Modal, Box, Typography } from "@material-ui/core";
import { fetchUsername } from "../../redux/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";

import { testAction } from "../../redux/actions/UserActions";
import { todo_sampledata } from "../../utils/data";
import { userLogsSelector } from "../../redux/selectors/UserSelector";
import Todos from "../Todos";
import axios from "axios";

const TodoComponent = () => {
  const dispatch = useDispatch();
  const logs = useSelector(userLogsSelector());
  const userName = useSelector((state) => state.userReducers.name);
  const [todoList, setTodoList] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const styledBox = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGenerate = () => {
    dispatch(testAction());
  };

  useEffect(() => {
    dispatch(fetchUsername(userName));
  }, []);

  useEffect(() => {
    setTodoList(logs);
  }, [logs]);

  console.log(todoList);

  return (
    <div>
      <div>
        <Todos
          handleGenerate={handleGenerate}
          userName={userName}
          todoList={todoList}
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styledBox}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default TodoComponent;
