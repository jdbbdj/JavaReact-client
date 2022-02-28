import React from "react";
import CustomGrid from "./styles";
import { Dialog, DialogActions } from "@material-ui/core";
import { MuiDialogContent } from "@material-ui/styles";

const TodoListForm = ({ open }) => {
  return (
    <Dialog open={open}>
      <form>
        <input />
        <input />
        <input />
        <input />
        <input />
        <button>Submit</button>
      </form>
    </Dialog>
  );
};

export default TodoListForm;
