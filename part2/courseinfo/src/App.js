import React from "react";
import Course from "./components/Course";

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      { id: 1, name: "Fundamentals of React", exercises: 10 },
      { id: 2, name: "Using props to pass data", exercises: 7 },
      { id: 3, name: "Redux", exercises: 5 },
      { id: 4, name: "State of a component I", exercises: 14 },
      { id: 5, name: "State of a component II", exercises: 13 }
    ]
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
