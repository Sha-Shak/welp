import { combineReducers } from "redux";
import auth from "./auth.Reducer";
import users from "./usersReducer";

const rootReducer = combineReducers({
  auth,
  users,
});

export default rootReducer;
