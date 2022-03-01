import * as Yup from "yup";
import { fileNameReqex } from "../../utils/helper";
const todoValidator = Yup.object().shape({
  description: Yup.string(),
  targetdate: Yup.date(),
});

export default todoValidator;
