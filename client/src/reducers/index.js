import { combineReducers } from "redux";
import auth from "./auth.Reducer";
import errors from "./errorReducers";
import users from "./usersReducer";

const rootReducer = combineReducers({
  auth,
  users,
  errors,
});

export default rootReducer;
