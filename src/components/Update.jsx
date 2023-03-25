import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchUserApi } from "../api/FetchUserApi";
import updateApi from "../api/UpdateApi";

const Update = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchUserApi(id, setData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleFormUpdate = async (e) => {
    e.preventDefault();
    const userToUpdate = {
      name: data.name,
      email: data.email,
      phone: data.phone,
    };
    updateApi(id, userToUpdate);
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update a User</h1>
        <form onSubmit={handleFormUpdate}>
          <div className="mb-2">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={data.name}
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
              value={data.email}
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
              value={data.phone}
              className="form-control"
              placeholder="Enter phone number..."
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-success">Update</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
