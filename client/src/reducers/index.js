import { combineReducers } from "redux";
import allUsers from "./allUsersReducer";
import auth from "./auth.Reducer";
import errors from "./errorReducers";
import users from "./usersReducer";
import messages from "./messages.reducer";
import currentChat from "./currentChat.reducer"
import currentUsersChats from "./currentUsersChats.reducer";

const rootReducer = combineReducers({
  auth,
  users,
  errors,

  messages,
  currentChat,
  currentUsersChats,
  allUsers,

});

export default rootReducer;