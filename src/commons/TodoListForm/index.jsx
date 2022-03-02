import React, { useState } from "react";
import { useFormik } from "formik";
import { dateFormatter } from "../../utils/helper";
import { useSelector } from "react-redux";
import DescriptionIcon from "@material-ui/icons/Description";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import WorkIcon from "@material-ui/icons/Work";
import TodayIcon from "@material-ui/icons/Today";
import moment from "moment";
import { userLogsSelector } from "../../redux/selectors/UserSelector";
import {
  CustomDialog,
  CustomContainer,
  CustomTextField,
  CustomGrid,
  CustomButton,
} from "./styles";
import todoValidator from "./todoValidator";
import { useDispatch } from "react-redux";
import { logsAppend, logsUpdate } from "../../redux/actions/UserActions";
const TodoListForm = ({ open, edit, modalData, toggleModal, view }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducers.name);
  const [initialValues, setInitialValues] = useState(
    edit ? modalData : { description: "", targetdate: "" }
  );
  const modalSubmit = (values) => {
    // logs.map((item) =>
    //   item.id === values.id
    //     ? (newLogs = logs.filter((item) => item.id != values.id))
    //     : console.log("YES")
    // );
    // finalLogs = [...newLogs, values];

    //dispatch(logsUpdate(finalLogs));
    const javaDate = moment(values.targetdate).format();
    let finalLogs;
    if (initialValues.id) {
      finalLogs = {
        ...values,
        id: initialValues.id,
        username: user,
        targetdate: javaDate,
        done: false,
      };
      dispatch(logsUpdate(user, finalLogs));
    } else {
      finalLogs = {
        ...values,
        id: initialValues.id,
        username: user,
        targetdate: javaDate,
        done: false,
      };
      dispatch(logsAppend(user, finalLogs));
    }

    handleClose();
  };
  const formik = useFormik({
    initialValues: initialValues,
    validateOnChange: true,
    validationSchema: todoValidator,
    onSubmit: modalSubmit,
  });

  const handleClose = () => {
    toggleModal("modalData", []);
    toggleModal("edit", false);
    toggleModal("generate", false);
    toggleModal("view", false);
  };

  const { values, handleSubmit, handleChange } = formik;
  return (
    <CustomDialog open={open}>
      <h1
        style={{ cursor: "pointer", right: "15px", position: "absolute" }}
        onClick={handleClose}
      >
        X
      </h1>
      {!view ? (
        <CustomContainer>
          <form className="loginForm" onSubmit={handleSubmit}>
            <CustomGrid>
              <label>Description</label>
              <CustomTextField
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
            </CustomGrid>

            <CustomGrid>
              <label>Password</label>
              <CustomTextField
                type="date"
                value={dateFormatter(values.targetdate)}
                name="targetdate"
                onChange={handleChange}
              />
            </CustomGrid>

            <CustomGrid>
              <CustomButton type="submit">Submit</CustomButton>
            </CustomGrid>
          </form>
        </CustomContainer>
      ) : (
        <CustomContainer>
          <CustomGrid>
            <CustomGrid>
              <DescriptionIcon />
              {modalData.description}
            </CustomGrid>
            <CustomGrid>
              <TodayIcon />
              {modalData.targetdate}
            </CustomGrid>
            <CustomGrid>
              {modalData.done ? <DoneAllIcon /> : <WorkIcon />}
            </CustomGrid>
          </CustomGrid>
        </CustomContainer>
      )}
    </CustomDialog>
  );
};

export default TodoListForm;
