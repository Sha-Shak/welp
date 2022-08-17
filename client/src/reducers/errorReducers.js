export default function (state = {}, action) {
  switch (action.type) {
    case "ERROR":
      console.log("check error");
      console.log("error reducer", action.payload);
      return action.payload.message;
    default:
      return state;
  }
}
