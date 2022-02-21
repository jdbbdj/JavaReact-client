import { Auth as AuthChecker } from "../../utils/auth";
import { Route, Navigate } from "react-router-dom";

const AuthenticatedRoute = () => {
  return <>{AuthChecker ? { ...this.props.children } : <Navigate to="/" />}</>;
};

export default AuthenticatedRoute;
