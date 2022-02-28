import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Container,
  Modal,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { fetchUsername } from "../../redux/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import ActionComponents from "../ActionComponents";
import { testAction } from "../../redux/actions/UserActions";
import { todo_sampledata } from "../../utils/data";

const TodoComponent = ({ name }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userReducers.logs);
  const userName = useSelector((state) => state.userReducers.name);
  const [todoList, setTodoList] = useState(data);
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

  useEffect(() => {
    setTodoList(data);
    console.log("YES2");
  }, [data]);

  useEffect(() => {
    dispatch(fetchUsername(userName));
    console.log("YES1");
  }, []);

  const handleGenerate = () => {
    const newLogs = [todo_sampledata, ...todoList];
    console.log(newLogs);
    dispatch(testAction());
  };

  return (
    <div>
      <div>
        <Container>
          <Table style={{ border: "1px solid black" }}>
            <TableHead>
              <TableRow>
                <TableCell style={{ border: "1px solid black" }} colSpan={5}>
                  {userName} here is your ToDo List Table. You can go back to
                  our homepage <Link to="/">here</Link>
                  <Button onClick={handleGenerate}>Add Task Here</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ border: "1px solid black" }} colSpan={1}>
                  ID
                </TableCell>
                <TableCell style={{ border: "1px solid black" }} colSpan={2}>
                  Description
                </TableCell>
                <TableCell style={{ border: "1px solid black" }} colSpan={1}>
                  Target Date
                </TableCell>
                <TableCell style={{ border: "1px solid black" }} colSpan={1}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todoList.map((tasklet) => (
                <TableRow key={tasklet.id}>
                  <TableCell
                    style={{
                      backgroundColor: tasklet.done ? "#AABF67" : "#F7A6A4",
                    }}
                    colSpan={1}
                  >
                    {tasklet.id}
                  </TableCell>
                  <TableCell colSpan={2}>{tasklet.description}</TableCell>
                  <TableCell colSpan={1}>{Date(tasklet.targetdate)}</TableCell>
                  <TableCell colSpan={1}>
                    <ActionComponents />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Container>

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
