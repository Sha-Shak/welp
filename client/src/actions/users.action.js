import * as api from "../utils/apiClientService";
export const createOrg = (data) => async (dispatch) => {
  try {
    console.log("action", data);
    const user = await api.createOrg(data);
    console.log("from backend", user);
    dispatch({ type: "CREATE_ORG", payload: user });
  } catch (e) {
    console.log(e);
  }
};
export const logInOrg = (data) => async (dispatch) => {
  try {
    console.log("action", data);
    const user = await api.logInOrg(data);
    console.log("from backend", user);
    dispatch({ type: "LOG_IN_ORG", payload: user });
  } catch (e) {
    console.log(e);
  }
};
