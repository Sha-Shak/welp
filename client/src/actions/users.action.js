import * as api from "../utils/apiClientService";
export const createOrg = (data) => async (dispatch) => {
  try {
    console.log("action", data);
    const user = await api.createOrg(data);
    console.log("from backend", user);
    dispatch({ type: "CREATE_ORG", payload: user });
  } catch (e) {
    console.log("createOrg", e);
  }
};
export const logIn = (data) => async (dispatch) => {
  try {
    console.log("action", data);
    const user = await api.logIn(data);
    console.log("from backend", user);
    dispatch({ type: "LOG_IN", payload: user });
  } catch (e) {
    dispatch({ type: "ERROR", payload: e });
    console.log("Error action LogIn", e);
  }
};
export const logOut = (data) => (dispatch) => {
  try {
    dispatch({ type: "LOG_OUT", payload: data });
  } catch (e) {
    console.log("action LogOut", e);
  }
};
export const addUserToOrganization = (data) => async (dispatch) => {
  try {
    console.log("action add user", data);
    const response = await api.addUserToOrganization(data);
    console.log(data);
    dispatch({ type: "ADD_USER_TO_ORG", payload: response });
  } catch (e) {
    console.log("error action add user to org", e);
  }
};
export const addAdminToOrganization = (data) => async (dispatch) => {
  try {
    console.log("action add admin", data);
    const response = await api.addAdminToOrganization(data);
    console.log(data);
    dispatch({ type: "ADD_ADMIN_TO_ORG", payload: response });
  } catch (e) {
    console.log("error action add admin to org", e);
  }
};
