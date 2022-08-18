export default function allUsers(state = [], action) {
  switch (action.type) {
    case "GET_ALL_USERS":
      console.log("get all user reducer: ", action.payload);
      state = action.payload;
      return state;
    case "RECOM_USERS":
      console.log("get all recom user reducer: ", action.payload);
      state = action.payload;
      return state;
    case "DELETE_USER":
      console.log("delete reduce", action.payload);
      const deletedUser = action.payload;
      console.log("b4 deletion", state);
      const newUsers = state.filter((user) => {
        return user.id !== deletedUser;
      });
      console.log("after deletion", newUsers);
      return newUsers;
    default:
      return state;
  }
}
