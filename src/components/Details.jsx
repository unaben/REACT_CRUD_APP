import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchUserApi } from "../api/FetchUserApi";

const Details = () => {
  const [data, setData] = useState({});
  console.log("Read:", data);

  const { id } = useParams();

  useEffect(() => {
    fetchUserApi(id, setData);
  }, []);

  return (
    <div className="d-flex w-100 justify-content-center align-items-center bg-light vh-100">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>User Details</h3>
        <div className="mb-2">
          <strong>Name: {data.name}</strong>
        </div>
        <div className="mb-2">
          <strong>Email: {data.email}</strong>
        </div>
        <div className="mb-3">
          <strong>Phone: {data.phone}</strong>
        </div>
        <Link to={`/update/${id}`} className="btn btn-success">
          Edit
        </Link>
        <Link to="/" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Details;
