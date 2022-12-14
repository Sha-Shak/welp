import { combineReducers } from "redux";
import allUsers from "./allUsersReducer";
import auth from "./auth.Reducer";
import currentChat from "./currentChat.reducer";
import currentUsersChats from "./currentUsersChats.reducer";
import errors from "./errorReducers";
import loader from "./loader";
import messages from "./messages.reducer";
import searchInput from "./searchInput.reducer";
import users from "./usersReducer";

const rootReducer = combineReducers({
  auth,
  users,
  errors,
  messages,
  currentChat,
  currentUsersChats,
  allUsers,
  searchInput,
  loader,
});

export default rootReducer;
