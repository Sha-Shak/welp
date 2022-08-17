import { combineReducers } from "redux";
import auth from "./auth.Reducer";
import errors from "./errorReducers";
import users from "./usersReducer";
import messages from "./messages.reducer";
import currentChat from "./currentChat.reducer"

const rootReducer = combineReducers({
  auth,
  users,
  errors,
  messages,
  currentChat
});

export default rootReducer;
