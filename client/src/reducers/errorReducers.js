export default function error(state = "", action) {
  switch (action.type) {
    case "ERROR":
      // console.log("error reducer", action.payload);
      return action.payload;
    case "CLEAR_ERROR":
      state = "";
      return state;
    case "LOADER":
      // console.log("loader", action.payload);
      return action.payload;
    default:
      return state;
  }
}
