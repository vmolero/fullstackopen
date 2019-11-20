import React from "react";

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <>
      <h2>Search</h2>
      <div>
        By name:
        <input type="text" value={filter} onChange={handleFilterChange} />
      </div>
    </>
  );
};

export default Filter;
