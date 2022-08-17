export default function (state = {}, action) {
  switch (action.type) {
    case "ERROR":
      console.log("error reducer", action.payload);
      return action.payload;
    default:
      return state;
  }
}
