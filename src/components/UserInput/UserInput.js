import { useState } from "react";
import Card from "../UI/Card/Card";

import "./UserInput.css";

const UserInput = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      id: Math.random().toString(),
      username: username,
      age: +age,
    };
    console.log(userData);
    props.onAddUser(userData);
    setUsername("");
    setAge("");
  };
  return (
    <Card>
      <form className="userinput" onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
            min="0"
            max="100"
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default UserInput;
