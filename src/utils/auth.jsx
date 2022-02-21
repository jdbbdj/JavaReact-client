import { useDispatch } from "react-redux";
import { inversecredibilityUpdate } from "../redux/actions/UserActions";

const Auth = (credentials) => {
  RegisterSuccessfulLogin(credentials.username);
};

const RegisterSuccessfulLogin = (user) => {
  sessionStorage.setItem("authenticatedUser", user);
};

const AuthRemove = () => {
  sessionStorage.removeItem("authenticatedUser");
};

export { Auth, AuthRemove };
