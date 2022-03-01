import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Container,
  Button,
} from "@material-ui/core";
import ActionComponents from "../ActionComponents";
import { dateFormatter, dayFormatter } from "../../utils/helper";

const Todos = ({ handleGenerate, todoList, userName, toggleModal, modal }) => {
  const { generate, deleteReport, processing, edit } = modal;

  return (
    <Container>
      <Table style={{ border: "1px solid black" }}>
        <TableHead>
          <TableRow>
            <TableCell style={{ border: "1px solid black" }} colSpan={5}>
              {userName} here is your ToDo List Table. You can go back to our
              homepage here
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
          {todoList.length !== 0 ? (
            todoList?.map((tasklet) => (
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
                  {dayFormatter(tasklet.targetdate)}
                </TableCell>
                <TableCell colSpan={1}>
                  <ActionComponents
                    tasklet={tasklet}
                    userName={userName}
                    todoList={todoList}
                    toggleModal={toggleModal}
                    modal={modal}
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5}>No Records Found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Todos;
