import React, { useEffect, useState } from "react";
import { Modal, Box, Typography } from "@material-ui/core";
import { fetchUsername } from "../../redux/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { todo_sampledata } from "../../utils/data";
import { userLogsSelector } from "../../redux/selectors/UserSelector";
import Todos from "../Todos";
import TodoListForm from "../../commons/TodoListForm";

const TodoComponent = () => {
  const dispatch = useDispatch();
  const logs = useSelector(userLogsSelector());
  const userName = useSelector((state) => state.userReducers.name);

  const viewData = useSelector((state) => state.userReducers.logsdata);
  const [viewLogs, setViewLogs] = useState(viewData);
  const [todoList, setTodoList] = useState([]);
  const [modal, setModal] = useState({
    generate: false,
    deleteReport: false,
    processing: false,
    view: false,
    edit: false,
    modalData: [],
  });

  const handleOpen = () => {};

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

  const toggleModal = (id, value) => {
    setModal((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleClose = () => {};

  const handleOpenModal = () => {
    toggleModal("generate", true);
  };

  const handleGenerate = () => {
    handleOpen();
    const newReport = [todo_sampledata, ...todoList];
    setTodoList(newReport);
  };

  useEffect(() => {
    dispatch(fetchUsername(userName));
  }, []);

  useEffect(() => {
    setTodoList(logs);
    setViewLogs(viewData);
  }, [logs, viewData]);

  const { generate, deleteReport, processing, modalData, edit, view } = modal;
  const handleView = () => {
    toggleModal("generate", true);
    toggleModal("view", true);
    toggleModal("edit", false);
    toggleModal("modalData", viewLogs);
  };

  return (
    <div>
      <div>
        <Todos
          handleGenerate={handleOpenModal}
          userName={userName}
          todoList={todoList}
          toggleModal={toggleModal}
          modal={modal}
          viewLogs={viewLogs}
          handleView={handleView}
        />
        <Modal
          open={generate}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <TodoListForm
            open={generate}
            edit={edit}
            modalData={modalData}
            toggleModal={toggleModal}
            view={view}
          />
        </Modal>
      </div>
    </div>
  );
};

export default TodoComponent;
