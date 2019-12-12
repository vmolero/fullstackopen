import React from "react";

const Persons = ({ filter = "", persons, handleDeleteClick }) => {
  const listing = persons
    .filter(person => {
      return person.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    })
    .map(person => {
      return (
        <li key={person.id}>
          {person.name} {person.number}{" "}
          <button onClick={handleDeleteClick(person.id)}>Delete</button>
        </li>
      );
    });
  return <ul>{listing}</ul>;
};

export default Persons;
