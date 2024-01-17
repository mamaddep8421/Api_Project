import axios from "axios";
const BASE_API = "https://farawin.iran.liara.run";
export const getUsers = () => {
  return axios.get(`${BASE_API}/api/user`);
};
