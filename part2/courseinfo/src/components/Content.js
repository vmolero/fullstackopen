import React from "react";
import Part from "./Part";
import Total from "./Total";

const Content = props => {
  const parts = props.parts.map(part => (
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  ));
  return (
    <>
      {parts}
      <Total parts={props.parts} />
    </>
  );
};

export default Content;
