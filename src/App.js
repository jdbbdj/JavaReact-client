import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import InvalidUrl from "./commons/InvalidUrl";
import withParams from "./commons/withParams.jsx";
import Header from "./commons/Header";
import Footer from "./commons/Footer";
import Logout from "./commons/Logout";
import SnackBar from "./commons/SnackBar";
/* import AuthenticatedRoute from "./commons/AuthenticatedRoute"; */
import { Auth as AuthChecker } from "./utils/auth";
import { useSelector } from "react-redux";

function App() {
  const HomeParams = withParams(Home);
  const snackBarStatus = useSelector((state) => state.snackBarReducer.show);

  const errorChecker = useSelector((state) => state.snackBarReducer.error);

  const hasMessage = useSelector((state) => state.snackBarReducer.message);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          {AuthChecker ? (
            <Route path="/home/:name" element={<HomeParams />} />
          ) : (
            <Navigate to="/" />
          )}

          {AuthChecker ? (
            <Route path="/logout" element={<Logout />} />
          ) : (
            <Navigate to="/" />
          )}
          <Route path="*" element={<InvalidUrl />} />
        </Routes>
        <SnackBar
          errorChecker={errorChecker}
          snackBarStatus={snackBarStatus}
          hasMessage={hasMessage}
        />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
