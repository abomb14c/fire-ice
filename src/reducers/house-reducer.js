const houseReducer = (state=[], action) => {
  switch (action.type) {
  case "ADD_HOUSES":
    return action.houseData;
  default: 
    return state;
  }
};

export default houseReducer;