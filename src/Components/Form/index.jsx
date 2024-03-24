import React, { useState, useEffect } from "react";

const Form = ({ formAddHandler, selectedUser }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (selectedUser) {
      setUserData(selectedUser);
    }
  }, [selectedUser]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      id: Date.now(),
    };
    formAddHandler(newUser);
    const updatedUserData = {};
    Object.keys(userData).forEach((key) => {
      updatedUserData[key] = "";
    });
    setUserData(updatedUserData);
  };

  const onChangeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const { firstName, lastName, email } = userData;

  return (
    <form action="" className="form" onSubmit={formSubmitHandler}>
      <input
        type="text"
        placeholder="FirstName"
        name="firstName"
        onChange={onChangeHandler}
        value={firstName}
      />
      <input
        type="text"
        placeholder="LastName"
        name="lastName"
        onChange={onChangeHandler}
        value={lastName}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={onChangeHandler}
        value={email}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
