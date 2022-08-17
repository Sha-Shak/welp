export default function allUsers(state = [], action) {
  switch (action.type) {
    case "GET_ALL_USERS":
      console.log("get all user reducer: ", action.payload);
      state = action.payload;
      return state;
    default:
      return state;
  }
}
