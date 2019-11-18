import React from "react";
import Course from "./components/Course";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { id: "part1", name: "Fundamentals of React", exercises: 10 },
      { id: "part2", name: "Using props to pass data", exercises: 7 },
      { id: "part3", name: "Redux", exercises: 5 },
      { id: "part4", name: "State of a component I", exercises: 14 },
      { id: "part5", name: "State of a component II", exercises: 13 }
    ]
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
