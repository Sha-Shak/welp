export default function auth(state = [], action) {
  switch (action.type) {
    case "CREATE_ORG":
      const authUser = action.payload.headers.authorization;
      console.log("reducer auth create", action.payload.headers.authorization);
      localStorage.setItem("user", JSON.stringify(authUser));
      localStorage.setItem("data", JSON.stringify(action.payload.data));
      return action.payload;
    case "LOG_IN":
      console.log("reducer login", action.payload);
      const loggedInUser = action.payload.headers.authorization;
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      localStorage.setItem("data", JSON.stringify(action.payload.data));
      const user = action.payload.data;
      return (state = user);
    case "LOG_OUT":
      localStorage.clear();
    case "ADD_USER_TO_ORG":
      console.log("add user reduce", action.payload);
      return action.payload;
    case "ADD_ADMIN_TO_ORG":
      console.log("add admin reduce", action.payload);
      return action.payload;
    default:
      return state;
  }
}
