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
import { fetchUsername } from "../../redux/actions/UserActions";
import { useDispatch } from "react-redux";

import { todo_sampledata } from "../../utils/data";

const TodoComponent = ({ name }) => {
  const dispatch = useDispatch();
  const SAMPLE_DATA = todo_sampledata;

  const [todoData, setTodoData] = useState(SAMPLE_DATA);

  useEffect(() => {
    dispatch(fetchUsername());
  }, []);
  return (
    <div>
      <div>
        <Container>
          <Table style={{ border: "1px solid black" }}>
            <TableHead>
              <TableRow>
                <TableCell style={{ border: "1px solid black" }} colSpan={4}>
                  {name} ToDo List Table. You can go back to our homepage{" "}
                  <Link to="/">here</Link>
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
              {todoData.map((tasklet) => (
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
                  <TableCell colSpan={1}>
                    {tasklet.targetDate.toString()}
                  </TableCell>
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
