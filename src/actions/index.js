
export const updateHouses = (houseData) => {
  return {
    type: 'ADD_HOUSES',
    houseData
  };
};

export const updateMembers = (allMembers) => {
  return {
    type:"ADD_MEMBERS",
    allMembers
  };
};