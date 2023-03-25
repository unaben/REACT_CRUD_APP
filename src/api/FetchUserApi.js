import Api from "../api/Contact";

export const fetchUserApi = async (id, setData) => {
  try {
    const responce = await Api.get(`/users/${id}`);
    setData(responce.data);
  } catch (error) {
    console.error(error.message);
  }
};
