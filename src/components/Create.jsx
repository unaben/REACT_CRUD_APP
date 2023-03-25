import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import createApi from "../api/CreateApi";

const Create = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (user.name === "" || user.email === "" || user.phone === "") {
      return;
    } else {
      const userToCreate = {
        name: user.name,
        email: user.email,
        phone: user.phone,
      };
      createApi(userToCreate);
      setUser({
        name: "",
        email: "",
        phone: "",
      });
      navigate("/");
    }
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add a User</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-2">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={user.name}
              className="form-control"
              placeholder="Enter name..."
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={user.email}
              className="form-control"
              placeholder="Enter email..."
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={user.phone}
              className="form-control"
              placeholder="Enter phone number..."
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Create;
