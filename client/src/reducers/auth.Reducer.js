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
      state = [];
      return state;
      break;
    default:
      return state;
  }
}