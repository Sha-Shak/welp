export default function users(state = [], action) {
  switch (action.type) {
    case "CREATE_ORG":
      console.log("reducer", action.payload);
      return action.payload;
    case "LOG_IN_ORG":
      console.log("reducer", action.payload);
      const user = action.payload.data;
      return (state = user);
    default:
      return state;
  }
}
