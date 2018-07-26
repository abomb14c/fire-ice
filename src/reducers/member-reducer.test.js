import memberReducer from './member-reducer';

describe('memberReducer', () => {
  it('should return the initial state', () => {

    const expected = [];

    const result = memberReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return allMembers on action.type of "ADD_HOUSES', () => {
    
    const expected = [{}, {}];

    const mockState = [];

    const mockAction = {
      type:"ADD_MEMBERS",
      allMembers: expected
    };

    const result = memberReducer(mockState, mockAction);

    expect(result).toEqual(expected);

  });
});