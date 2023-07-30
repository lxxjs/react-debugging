import UserItem from "./UserItem.js";
import Card from "../UI/Card/Card.js";

const UserList = (props) => {
  return (
    <Card>
      <div className="userlist">
        <ul>
          {props.users.map((user, mykey) => (
            <UserItem key={mykey} username={user.username} age={user.age} />
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default UserList;
