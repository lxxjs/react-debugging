import UserItem from "./UserItem.js";

import "./UserList.css";

const UserList = (props) => {
  return (
    <div className="userlist">
      <ul>
        {props.users.map((user, mykey) => (
          <UserItem key={mykey} username={user.username} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
