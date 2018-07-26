import {updateHouses} from './index';

describe('actions', () => {
  it('should have a type of ADD_HOUSES', () => {
    
    const houseData = [];
    const expectedAction = {
      type: 'ADD_HOUSES',
      houseData
    };

    const result = updateHouses(houseData);

    expect(result).toEqual(expectedAction);
  });
});