import { combineReducers } from "redux";
import auth from "./auth.Reducer";
import errors from "./errorReducers";
import users from "./usersReducer";
import messages from "./chat.reducer";

const rootReducer = combineReducers({
  auth,
  users,
  errors,
  messages
});

export default rootReducer;
