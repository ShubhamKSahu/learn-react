import React from 'react';
import './child.css'

const ChildComp = ({ userDetail }) => {
    const { setUsername, setUserage } = userDetail;
  return (
    <form>
      <h3>User Details:</h3>
      <label htmlFor="username">Name</label>
      <input
        type="text"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="userage">Age</label>
      <input
        type="number"
        id="userage"
        onChange={(e) => setUserage(Number(e.target.value))}
      />
    </form>
  );
};

export default ChildComp;

