const CountReducer = (preveState = {
  count: 0
}, action) => {
  let newState = { ...preveState };
  switch (action.type) {
    case "add":
      newState.count++;
      return newState;
    case "sub":
      newState.count--;
      return newState;
    default:
      return preveState;
  }
}

export default CountReducer