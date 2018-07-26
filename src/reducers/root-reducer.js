import { combineReducers } from 'redux';
import houseReducer from './house-reducer';
import memberReducer from './member-reducer';

const rootReducer = combineReducers({
  houses:houseReducer,
  members: memberReducer
});


export default rootReducer;
