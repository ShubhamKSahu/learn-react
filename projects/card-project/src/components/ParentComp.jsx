import React from 'react'
import ChildComp from './ChildComp'
import { useState } from 'react'

const ParentComp = () => {
    const [username, setUsername] = useState("");
    const [userage, setUserage] = useState(0);
  return (
    <div>
      <ChildComp userDetail={{setUsername, setUserage}}/>
      <p>User's name is : {username}</p>
      <p>User's age is : {userage}</p>
    </div>
  )
}

export default ParentComp;
