import axios from "axios";
const url = "http://localhost:3001";
axios.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("user");
    if (token) req.headers.Authorization = `Bearer ${JSON.parse(token).token}`;
    return req;
  },
  (e) => {
    return Promise.reject(e);
  }
);

export const createOrg = (data) =>
  axios.post(`${url}/organization/create`, data);

export const logIn = (data) => axios.post(`${url}/login`, data);
