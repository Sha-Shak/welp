import { combineReducers } from "redux";
import allUsers from "./allUsersReducer";
import auth from "./auth.Reducer";
import errors from "./errorReducers";
import users from "./usersReducer";

const rootReducer = combineReducers({
  auth,
  users,
  errors,
  allUsers,
});

export default rootReducer;
