export default function users(state = {}, action) {
  switch (action.type) {
    case "ADD_USER_TO_ORG":
      // console.log("add user reduce", action.payload);
      return action.payload;
    case "ADD_ADMIN_TO_ORG":
      // console.log("add admin reduce", action.payload);
      return action.payload;
    case "CLEAR_USER_RES":
      console.log("clear user reduce");
      state = {};
      return state;
    case "CLEAR_ADMIN_RES":
      state = {};
      return state;
    case "GET_OWN_PROFILE":
      console.log("reduce", action.payload);
      return action.payload;
    case "GET_OTHER_PROFILE":
      console.log("other reduce", action.payload);
      return action.payload;
    case "EDIT_PROFILE":
      console.log("reduce edit profile", action.payload);
      return action.payload;
    default:
      return state;
  }
}
