export default function users(state = [], action) {
  switch (action.type) {
    case "TRIAL":
      console.log("reducer", action.payload);
      return action.payload;
    default:
      return state;
  }
}
