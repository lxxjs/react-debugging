import "./UserList.css";

const UserList = (props) => {
  return (
    <div className="userlist">
      <ui>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ui>
    </div>
  );
};

export default UserList;
