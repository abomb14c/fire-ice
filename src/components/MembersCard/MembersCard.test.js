import {mapStateToProps } from './MembersCard';

describe('mapStateToProps', () => {
  it('should return an object with the members array', () => {

    const mockState = {
      members: [{}, {}, {}],
      text: ''
    };

    const expected = {
      members: [{}, {}, {}]
    };

  
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});
