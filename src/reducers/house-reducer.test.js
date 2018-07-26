import houseReducer from './house-reducer';

describe('houseReducer', () => {
  it('should return the initial state', () => {

    // Setup
    const expected = [];

    // Execution
    const result = houseReducer(undefined, {});

    // Expectation
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