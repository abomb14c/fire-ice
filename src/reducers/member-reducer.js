const memberReducer = (state=[], action) => {
  switch (action.type) {
  case "ADD_MEMBERS":
    return action.allMembers;
  default: 
    return state;
  }
};

export default memberReducer;