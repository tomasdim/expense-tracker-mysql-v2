import axios from "axios";
import React, { useState, useEffect } from "react";
import Tracker from "./Tracker";

const Home = () => {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    const fetchOperations = async () => {
      const res = await axios.get("/operations");
      setOperations(res.data);
    };
    fetchOperations();
  }, []);
  return (
    <div>
      <Tracker operations={operations} />
    </div>
  );
};

export default Home;
