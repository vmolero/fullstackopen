import React from "react";

const PersonForm = ({
  name,
  number,
  handleSubmit,
  handleNameChange,
  handleNumberChange
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          name:
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          number:
          <input type="text" value={number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
