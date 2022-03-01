import React, { useState } from "react";
import { useFormik } from "formik";
import { dateFormatter } from "../../utils/helper";
import { useSelector } from "react-redux";
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
import { logsUpdate } from "../../redux/actions/UserActions";
const TodoListForm = ({ open, edit, modalData, toggleModal }) => {
  const dispatch = useDispatch();
  const logs = useSelector(userLogsSelector());
  const [initialValues, setInitialValues] = useState(
    edit ? modalData : { description: "hotdog", targetdate: "" }
  );
  const modalSubmit = (values) => {
    let newLogs;
    let finalLogs;
    logs.map((item) =>
      item.id === values.id
        ? (newLogs = logs.filter((item) => item.id != values.id))
        : console.log("YES")
    );
    finalLogs = [...newLogs, values];
    dispatch(logsUpdate(finalLogs));
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
  };

  const {
    values,
    setFieldValue,
    handleSubmit,
    handleChange,
    errors,
    touched,
    getFieldProps,
  } = formik;

  const handleOnChange = (event, id) => {
    setInitialValues((prev) => ({
      ...prev,
      [id]: event.target.value,
    }));
  };
  return (
    <CustomDialog open={open}>
      <h1
        style={{ cursor: "pointer", right: "15px", position: "absolute" }}
        onClick={handleClose}
      >
        X
      </h1>
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
    </CustomDialog>
  );
};

export default TodoListForm;
