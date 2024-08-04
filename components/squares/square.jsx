import React from "react";

const Square = ({ id, name, toggle }) => {
  return (
    <div className="square" onClick={() => toggle(id, name)}>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default Square;
