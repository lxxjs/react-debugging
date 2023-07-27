import { useState } from "react";
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
    <form className="userinput" onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input value={username} onChange={usernameChangeHandler} />
      </div>
      <div>
        <label>Age (Years)</label>
        <input value={age} onChange={ageChangeHandler} />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserInput;
