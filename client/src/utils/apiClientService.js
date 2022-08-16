import axios from "axios";
const url = "http://localhost:3001";

export const createOrg = (data) =>
  axios.post(`${url}/organization/create`, data);
export const logInOrg = (data) => axios.post(`${url}/login`, data);
