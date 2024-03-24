import { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import Table from "./Components/Table";

function App() {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || []
  );

  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const formAddHandler = (user) => {
    if (selectedUser) {
      const updatedUserData = userData.map((u) =>
        u.id === selectedUser.id ? user : u
      );
      setUserData(updatedUserData);
      setSelectedUser(null);
    } else {
      setUserData([user, ...userData]);
    }
  };

  const onDeleteHandler = (id) => {
    setUserData(userData.filter((user) => id !== user.id));
  };

  const onEditHandler = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
      <Form formAddHandler={formAddHandler} selectedUser={selectedUser} />
      <Table
        dataAboutUser={userData}
        onDeleteHandler={onDeleteHandler}
        onEditHandler={onEditHandler}
      />
    </>
  );
}

export default App;
