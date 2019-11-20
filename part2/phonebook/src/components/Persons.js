import React from "react";

const Persons = ({ filter, persons }) => {
  const listing = persons
    .filter(person => {
      return person.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    })
    .map(person => {
      return (
        <li key={person.id}>
          {person.name} {person.number}
        </li>
      );
    });
  return <ul>{listing}</ul>;
};

export default Persons;
