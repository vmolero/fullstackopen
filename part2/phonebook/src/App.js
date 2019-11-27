import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = event => {
    setNewFilter(event.target.value);
  };

  const handleDeleteClick = personId => event => {
    const person = persons.filter(person => person.id === personId).pop();
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.delete(personId);
    }
  };

  const addPerson = event => {
    event.preventDefault();
    const personsCopy = persons.map(x => x);
    const person = personsCopy.filter(person => person.name === newName).pop();
    if (person) {
      if (
        window.confirm(
          `${newName} is already added to phonebook. Update number?`
        )
      ) {
        person.number = newNumber;
        personService.update(person.id, person).then(() => {
          setPersons(personsCopy);
          setNewName("");
          setNewNumber("");
        });
      }
      return;
    }
    const personObject = {
      name: newName,
      number: newNumber
    };
    personService.create(personObject).then(() => {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    });
  };

  const hook = () => {
    personService.getAll().then(response => {
      setPersons(response.data);
    });
  };

  useEffect(hook, [persons]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        handleNameChange={handleNameChange}
        handleSubmit={addPerson}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        filter={newFilter}
        persons={persons}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default App;
