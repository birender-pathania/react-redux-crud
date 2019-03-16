import { combineReducers } from 'redux';
import UserseReducer from './reducer_users_list';

const rootReducer = combineReducers({
  getUsers: UserseReducer,
});

export default rootReducer;
