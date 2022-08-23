export default function loader(state = false, action) {
  switch (action.type) {
    case "LOADER":
      console.log("loader", action.payload);
      return action.payload;
    default:
      return state;
  }
}
