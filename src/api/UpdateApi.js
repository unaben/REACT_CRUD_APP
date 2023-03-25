import Api from "../api/Contact";

const UpdateApi = async (id, userToUpdate) => {
  try {
    await Api.put(`/users/${id}`, userToUpdate);
  } catch (error) {
    console.error(error.message);
  }
};

export default UpdateApi;
