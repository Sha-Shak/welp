export default function users(state = {}, action) {
  switch (action.type) {
    case "ADD_USER_TO_ORG":
      console.log("add user reduce", action.payload);
      return action.payload;
    case "ADD_ADMIN_TO_ORG":
      console.log("add admin reduce", action.payload);
      return action.payload;
    case "CLEAR_USER_RES":
      state = "";
      return state;
    case "CLEAR_ADMIN_RES":
      state = "";
      return state;
    default:
      return state;
  }
}
