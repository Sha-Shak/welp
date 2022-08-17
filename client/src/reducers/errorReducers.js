export default function (state = "", action) {
  switch (action.type) {
    case "ERROR":
      console.log("error reducer", action.payload);
      return action.payload;
    case "CLEAR_ERROR":
      state = "";
      return state;
    default:
      return state;
  }
}
