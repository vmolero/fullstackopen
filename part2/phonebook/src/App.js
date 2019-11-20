import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas", number: "040-123456" },
    { id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
    { id: 3, name: "Dan Abramov", number: "12-43-234345" },
    { id: 4, name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
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

  const addPerson = event => {
    event.preventDefault();
    const names = persons.map(person => person.name);
    if (names.includes(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    };

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const listing = persons
    .filter(person => {
      return person.name.toLowerCase().indexOf(newFilter.toLowerCase()) > -1;
    })
    .map(person => {
      return (
        <li key={person.id}>
          {person.name} {person.number}
        </li>
      );
    });

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Search</h2>
      <div>
        By name:
        <input type="text" value={newFilter} onChange={handleFilterChange} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input type="text" value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:
          <input type="text" value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{listing}</ul>
    </div>
  );
};

export default App;
