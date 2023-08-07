import React from "react";
import { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";

const DUMMY_USERS = [
  {
    id: "u1",
    username: "Max",
    age: 31,
  },
  {
    id: "u2",
    username: "James",
    age: 22,
  },
];

function App() {
  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  return (
    <div>
      <UserInput onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
