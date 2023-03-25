import Api from "../api/Contact";
import React from "react";

const FetchAllUsers = async (setContacts) => {
  try {
    const responce = await Api.get("/users");
    setContacts(responce.data);
  } catch (error) {
    console.error(error.message);
  }
  return <div>FetchAllUsers</div>;
};

export default FetchAllUsers;
