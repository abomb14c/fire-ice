import {mapDispatchToProps } from './Card';
import {updateMembers} from '../../actions/index';

describe('mapDispatchToProps', () => {
  it('calls dispatch with an addMembers action when handleMembers is called', () => {
    
    const mockDispatch = jest.fn();

    const actionToDispatch = updateMembers([{}, {}, {}]);

    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.handleMembers([{}, {}, {}]);
   
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
