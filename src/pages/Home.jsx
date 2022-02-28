import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TodoComponent from "../components/TodoComponent";

const Home = ({ ...props }) => {
  const { name } = useParams();
  const [test, setTest] = useState(true);

  const handleClick = () => {
    setTest(false);
  };

  return <TodoComponent />;
};

export default Home;
