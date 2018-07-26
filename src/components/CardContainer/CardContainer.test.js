import {mapStateToProps } from './CardContainer';

describe('mapStateToProps', () => {
  it('should return an object with the houses array', () => {

    const mockState = {
      houses: [{}, {}, {}],
      text: ''
    };

    const expected = {
      houses: [{}, {}, {}]
    };

  
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});
