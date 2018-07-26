import {updateHouses, updateMembers} from './index';

describe('action updateHouses', () => {
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

describe('updateMembers', () => {
  it('should have a type of ADD_MEMBERS', () => {
    
    const allMembers = [{}, {}, {}];
    const expectedAction = {
      type: 'ADD_MEMBERS',
      allMembers
    };

    const result = updateMembers(allMembers);

    expect(result).toEqual(expectedAction);
  });
});