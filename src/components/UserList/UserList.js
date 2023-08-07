import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      <div className="userlist">
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.username} ({user.age} years old)
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default UserList;
