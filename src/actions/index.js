export const fakeAction = () => ({type: 'FAKE'});


export const updateHouses = (houseData) => {
  return {
    type: 'ADD_HOUSES',
    houseData
  };
};