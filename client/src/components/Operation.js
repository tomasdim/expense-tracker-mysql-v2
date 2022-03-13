import axios from "axios";
import React from "react";

const Operation = ({ operation }) => {
  const handleDelete = () => {
    axios.delete(`/operations/${operation.id}`);
    console.log("operacion eliminada");
  };
  return (
    <div>
      <ul>
        <li>
          <div>{operation.name}</div>
          <div>{operation.type}</div>
          <div>{operation.amount}</div>
          <div>{new Date(operation.createdAt).toDateString()}</div>
          <button onClick={handleDelete}>{operation.id}</button>
        </li>
      </ul>
    </div>
  );
};

export default Operation;
