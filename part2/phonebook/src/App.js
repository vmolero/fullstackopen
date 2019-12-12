import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";

import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [newMessage, setNewMessage] = useState({ type: "", text: "" });

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = event => {
    setNewFilter(event.target.value);
  };

  const showToast = (text, type = "success") => {
    setNewMessage({ type, text });
    setTimeout(() => {
      setNewMessage({ type: "", text: "" });
    }, 5000);
  };

  const handleDeleteClick = personId => event => {
    const person = persons.filter(person => person.id === personId).pop();
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .delete(personId)
        .then(() => {
          const filteredPersons = persons.filter(
            person => person.id !== personId
          );
          setPersons(filteredPersons);
          showToast(`Person ${person.name} deleted`);
        })
        .catch(err => {
          showToast(`Failed to delete person`, "error");
        });
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
        personService
          .update(person.id, person)
          .then(() => {
            setPersons(personsCopy);
            showToast(`Person ${person.name} updated`);
          })
          .catch(err => {
            showToast(
              `Failed to update person: ${err.response.data.error}`,
              "error"
            );
          });
      }
      setNewName("");
      setNewNumber("");
      return;
    }
    const personObject = {
      name: newName,
      number: newNumber
    };
    personService
      .create(personObject)
      .then(response => {
        const createdPerson = response.data;
        setPersons(persons.concat(createdPerson));
        setNewName("");
        setNewNumber("");
        showToast(`Person ${createdPerson.name} added`);
      })
      .catch(err => {
        showToast(`Failed to add person: ${err.response.data.error}`, "error");
      });
  };

  const hook = () => {
    personService.getAll().then(response => {
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={newMessage.text} type={newMessage.type} />
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
