import {mapStateToProps, mapDispatchToProps} from './App';
import { updateHouses } from '../../actions';

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

describe('mapDispatchToProps', () => {
  it('calls dispatch with an addHouses action when handleHouses is called', () => {
    
    const mockDispatch = jest.fn();

    const actionToDispatch = updateHouses([{}, {}, {}]);

    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.handleHouses([{}, {}, {}]);
   
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});

