import * as api from "../utils/apiClientService";

export const createOrg = (data, navigate) => async (dispatch) => {
  try {
    // console.log("action", data);
    const user = await api.createOrg(data);
    // console.log("from backend", user);
    dispatch({ type: "CREATE_ORG", payload: user });
    dispatch({ type: "LOADER", payload: true });
    navigate("/dashboard");
  } catch (e) {
    dispatch({ type: "ERROR", payload: e.response.data });
    console.log("createOrg", e);
  }
};

export const logIn = (data, navigate) => async (dispatch) => {
  try {
    // console.log("action", data);
    const user = await api.logIn(data);
    console.log("from backend", user);
    dispatch({ type: "LOG_IN", payload: user });
    dispatch({ type: "LOADER", payload: true });
    navigate("/dashboard");
  } catch (e) {
    console.log("Error action LogIn", e);
    dispatch({ type: "ERROR", payload: e.response.data });
  }
};

export const logOut = () => (dispatch) => {
  try {
    // console.log("lout");
    dispatch({ type: "LOG_OUT" });
  } catch (e) {
    console.log("action LogOut", e);
  }
};

export const addUserToOrganization = (data) => async (dispatch) => {
  try {
    // console.log("action add user", data);
    const response = await api.addUserToOrganization(data);
    // console.log(response);
    dispatch({ type: "ADD_USER_TO_ORG", payload: response });
  } catch (e) {
    dispatch({ type: "ERROR", payload: e.response.data });
    console.log("error action add user to org", e);
  }
};

export const addAdminToOrganization = (data) => async (dispatch) => {
  try {
    // console.log("action add admin", data);
    const response = await api.addAdminToOrganization(data);
    // console.log(data);
    dispatch({ type: "ADD_ADMIN_TO_ORG", payload: response });
  } catch (e) {
    console.log("error action add admin to org", e);
    dispatch({ type: "ERROR", payload: e.response.data });
  }
};

export const clearError = () => (dispatch) => {
  try {
    // console.log("adduser");
    dispatch({ type: "CLEAR_ERROR" });
  } catch (e) {
    console.log("action LogOut", e);
  }
};

export const clearCreateUser = () => (dispatch) => {
  try {
    dispatch({ type: "CLEAR_USER_RES" });
  } catch (e) {
    console.log("action LogOut", e);
  }
};

export const clearCreateAdmin = () => (dispatch) => {
  try {
    dispatch({ type: "CLEAR_ADMIN_RES" });
  } catch (e) {
    console.log("action LogOut", e);
  }
};
export const clearChangePass = () => (dispatch) => {
  try {
    dispatch({ type: "CLEAR_CHANGE_PASS" });
  } catch (e) {
    console.log("action LogOut", e);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    // console.log("form action get users: ");
    const users = await api.getUsers();
    // console.log("form action get NOT users: ", users.data);
    dispatch({ type: "GET_ALL_USERS", payload: users.data });
  } catch (e) {
    console.log("error get all users", e);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const response = await api.deleteUser(id);
    // console.log("from backend", response);
    //from response filter users
    response.status === 200 && dispatch({ type: "DELETE_USER", payload: id });
  } catch (e) {
    console.log("delete user", e);
  }
};

export const recommendUsers = () => async (dispatch) => {
  try {
    const { data } = await api.recommendUser();
    // console.log("recommended object", data);
    dispatch({ type: "RECOM_USERS", payload: data });
  } catch (e) {
    console.log("recommended user error", e);
  }
};

export const getOwnProfile = () => async (dispatch) => {
  try {
    // console.log("get own");
    const response = await api.getOwnProfile();
    // console.log(response);
    dispatch({ type: "GET_OWN_PROFILE", payload: response.data });
  } catch (e) {
    console.log(e);
  }
};

export const getOtherProfile = (id) => async (dispatch) => {
  try {
    // console.log("get other");
    const response = await api.getOtherProfile(id);
    // console.log("get other", response);
    dispatch({ type: "GET_OTHER_PROFILE", payload: response.data });
  } catch (e) {
    console.log(e);
  }
};

export const editUser = (data) => async (dispatch) => {
  try {
    // console.log("editUser", data);
    const response = await api.editUser(data);
    // console.log("from server", response);
    dispatch({ type: "EDIT_PROFILE", payload: response.data });
  } catch (e) {
    console.log(e);
  }
};

export const changePassword = (data) => async (dispatch) => {
  try {
    // console.log("changePass", data);
    const response = await api.changePassword(data);
    // console.log("from server", response);
    dispatch({ type: "CHANGE_PASSWORD", payload: response.data });
  } catch (e) {
    dispatch({ type: "ERROR", payload: e.response.data });
    console.log(e);
  }
};
