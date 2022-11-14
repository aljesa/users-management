import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import "./App.css";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: userName, age: userAge, id: Math.random().toString()}];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={AddUserHandler}/>
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
