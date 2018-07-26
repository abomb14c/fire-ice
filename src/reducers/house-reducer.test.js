import houseReducer from './house-reducer';

describe('houseReducer', () => {
  it('should return the initial state', () => {

    const expected = [];

    const result = houseReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return houseData on action.type of "ADD_HOUSES', () => {
    
    const expected = [{}, {}, {}];

    const mockState = [];

    const mockAction = {
      type:"ADD_HOUSES",
      houseData: expected
    };

    const result = houseReducer(mockState, mockAction);

    expect(result).toEqual(expected);

  });
});