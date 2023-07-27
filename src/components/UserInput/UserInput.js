import { useState } from "react";
import "./UserInput.css";

const UserInput = (props) => {
  const [isValid, setIsValid] = useState(false);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
    if (e.target.value !== "" && age !== "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
    if (e.target.value !== "" && username !== "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      id: Math.random().toString(),
      username: username,
      age: +age,
    };
    if (!isValid) {
      console.log("Invalid Input");
      setUsername("");
      setAge("");
      return;
    }
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
        <input
          type="number"
          value={age}
          onChange={ageChangeHandler}
          min="0"
          max="100"
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserInput;
