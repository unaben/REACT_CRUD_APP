import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import deleteApi from "../api/DeleteApi";
import fetchAllUsers from "../api/FetchAllUsers";
import Header from "./Header";

const Home = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchAllUsers(setContacts);
  }, []);

  const handleDelete = async (id) => {
    deleteApi(setContacts, contacts, id);
  };

  return (
    <div
      style={{ marginBottom: "2rem", padding: "1em" }}
      className="d-flex flex-column justify-content-center align-items-center bg-light min-vh-100"
    >
      <Header />
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success">
            Add +
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <Link
                    to={`/read/${contact.id}`}
                    className="btn btn-sm btn-info me-2"
                  >
                    Read
                  </Link>
                  <Link
                    to={`/update/${contact.id}`}
                    className="btn btn-sm btn-primary me-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
