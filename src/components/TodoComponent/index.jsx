import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { todo_sampledata } from "../../utils/data";

const TodoComponent = ({ name }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userReducers.logs);
  const userName = useSelector((state) => state.userReducers.name);
  const [todoList, setTodoList] = useState(data);

  useEffect(() => {}, []);

  useEffect(() => {
    setTodoList(todoList);
  }, [todoList]);

  return (
    <div>
      <div>
        <Container>
          <Table style={{ border: "1px solid black" }}>
            <TableHead>
              <TableRow>
                <TableCell style={{ border: "1px solid black" }} colSpan={4}>
                  {userName} here is your ToDo List Table. You can go back to
                  our homepage <Link to="/">here</Link>
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
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((tasklet) => (
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Container>
      </div>
    </div>
  );
};

export default TodoComponent;
