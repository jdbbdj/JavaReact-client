import React from "react";
import { useParams } from "react-router-dom";
import TodoComponent from "../components/TodoComponent";

const Home = ({ ...props }) => {
  const { name } = useParams();

  return <TodoComponent name={name} />;
};

export default Home;
