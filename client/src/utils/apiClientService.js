import axios from "axios";
import { store } from "../index.js";
const url = process.env.SERVER_URL;

axios.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("user");
    if (token) req.headers.Authorization = `${JSON.parse(token)}`;
    return req;
  },
  (e) => {
    return Promise.reject(e);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (e) => {
    if (e.response.status === 401) {
      console.log("JWT expired. e response is: ", e.response);
      localStorage.clear();
      store.dispatch({ type: "CLEAR_AUTH", payload: e.response.data });
    }
    return Promise.reject(e);
  }
);

export const createOrg = (data) =>
  axios.post(`${url}/organization/create`, data);

export const logIn = (data) => axios.post(`${url}/login`, data);

export const addUserToOrganization = (data) =>
  axios.post(`${url}/organization/users`, data);

export const addAdminToOrganization = (data) =>
  axios.post(`${url}/organization/users`, data);

export const getUsers = () => axios.get(`${url}/organization/users`);

export const getCurrentUsersChats = () => axios.get(`${url}/chats`);

export const recommendUser = () => axios.get(`${url}/suggestion`);
export const getOwnProfile = () => axios.get(`${url}/user`);
export const getOtherProfile = (id) => axios.get(`${url}/user/${id}`);
export const deleteUser = (id) =>
  axios.delete(`${url}/organization/user/${id}`);
export const changePassword = (data) => axios.put(`${url}/password `, data);
export const editUser = (data) => axios.put(`${url}/user`, data);

export const createChat = (id) => axios.post(`${url}/chats`, { userId: id });

export const checkChat = (id) =>
  axios.post(`${url}/chat/check`, { userId: id });

export const getUserInfo = (id) => axios.get(`${url}/user/${id}`);

export const getChatRoom = (id) => axios.get(`${url}/chatroom/${id}`);

export const getChatMessages = (id) => axios.get(`${url}/chat/${id}`);

export const getRandomUser = () => axios.get(`${url}/random`);
