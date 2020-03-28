export default (state = { location: "unknown" }, action) => {
  switch (action.type) {
    case "SET_WEATHER": {
      console.log(action.data);
      return action.data;
    }

    default:
      return state;
  }
};
