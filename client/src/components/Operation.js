import React from "react";

const Operation = ({ operation }) => {
  return (
    <div>
      <ul>
        <li>
          <div>{operation.name}</div>
          <div>{operation.type}</div>
          <div>{operation.amount}</div>
          <div>{new Date(operation.createdAt).toDateString()}</div>
        </li>
      </ul>
    </div>
  );
};

export default Operation;
