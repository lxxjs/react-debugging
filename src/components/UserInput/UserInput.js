import { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import "./UserInput.css";

const UserInput = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    const userData = {
      id: Math.random().toString(),
      username: enteredUsername,
      age: +enteredAge,
    };
    console.log(userData);
    props.onAddUser(userData);
    setUsername("");
    setAge("");
  };
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} />}
      <Card>
        <form className="userinput" onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={enteredUsername}
              onChange={usernameChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={enteredAge}
              onChange={ageChangeHandler}
              min="0"
              max="100"
            />
          </div>
          <button type="submit">Add User</button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
