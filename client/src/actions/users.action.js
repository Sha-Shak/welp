export const trial = (data) => async (dispatch) => {
  try {
    console.log("action", data);
    dispatch({ type: "TRIAL", payload: data });
  } catch (e) {
    console.log(e);
  }
};
