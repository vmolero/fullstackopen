import React from "react";

const Total = ({ parts }) => {
  const exercises = parts.reduce((carry, part) => (carry += part.exercises), 0);
  return (
    <p>
      <b>Total of {exercises} exercises</b>
    </p>
  );
};

export default Total;
