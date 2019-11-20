import React from "react";
import Course from "./components/Course";

const App = () => {
  const courses = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        { id: 1, name: "Fundamentals of React", exercises: 10 },
        { id: 2, name: "Using props to pass data", exercises: 7 },
        { id: 3, name: "Redux", exercises: 5 },
        { id: 4, name: "State of a component I", exercises: 14 },
        { id: 5, name: "State of a component II", exercises: 13 }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  const output = courses.map(course => {
    return <Course key={course.id} course={course} />;
  });

  return (
    <div>
      <h1>Web development curriculum</h1>
      {output}
    </div>
  );
};

export default App;
