import { combineReducers } from "redux";
import allUsers from "./allUsersReducer";
import auth from "./auth.Reducer";
import currentChat from "./currentChat.reducer";
import currentUsersChats from "./currentUsersChats.reducer";
import errors from "./errorReducers";
import messages from "./messages.reducer";
import users from "./usersReducer";
import searchInput from "./searchInput.reducer";

const rootReducer = combineReducers({
  auth,
  users,
  errors,
  messages,
  currentChat,
  currentUsersChats,
  allUsers,
  searchInput

});

export default rootReducer;
