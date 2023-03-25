import Api from "../api/Contact";

const CreateApi = async (userToCreate) => {
  try {
    await Api.post("/users", userToCreate);
  } catch (error) {
    console.error(error.message);
  }
};

export default CreateApi;
