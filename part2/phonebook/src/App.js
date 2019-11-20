import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");

  const handleChange = event => {
    setNewName(event.target.value);
  };

  const addPerson = event => {
    event.preventDefault();
    const names = persons.map(person => person.name);
    if (names.includes(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const personObject = { name: newName, id: persons.length };

    setPersons(persons.concat(personObject));
    setNewName("");
  };

  const listing = persons.map(person => {
    return <li key="person.id">{person.name}</li>;
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <form type="submit" onSubmit={addPerson}>
        <div>
          name: <input type="text" value={newName} onChange={handleChange} />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{listing}</ul>
    </div>
  );
};

export default App;
