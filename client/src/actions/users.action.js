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
    console.log("action LogIn", e);
  }
};
export const logOut = (data) => async (dispatch) => {
  try {
    dispatch({ type: "LOG_OUT", payload: data });
  } catch (e) {
    console.log("action LogOut", e);
  }
};
