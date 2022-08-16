import { combineReducers } from "redux";
import users from "./usersReducer";

const rootReducer = combineReducers({
  users,
});

export default rootReducer;
