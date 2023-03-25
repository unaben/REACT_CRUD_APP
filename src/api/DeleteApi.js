import Api from "../api/Contact";

const DeleteApi = async (setContacts, contacts, id) => {
  try {
    await Api.delete(`/users/${id}`);
    setContacts(contacts.filter((contact) => contact.id !== id));
  } catch (error) {
    console.error(error.message);
  }
};

export default DeleteApi;
