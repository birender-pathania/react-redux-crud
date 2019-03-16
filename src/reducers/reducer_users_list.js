import { GET_USERS_LIST, ADD_PERSON, DELETE_USER, UPDATE_USER} from '../actions/types';

export default function(state=[], action) {

  switch (action.type) {
    case GET_USERS_LIST:
   // console.log(action.payload)
      return action.payload;
      case ADD_PERSON:
      return [...state, action.payload];
      case DELETE_USER:
      return state.filter(user => user.user_id !== action.payload.user_id);
      case UPDATE_USER:
      //console.log(state)
      //console.log(action)
      return state.map(user => {
        if(user.user_id === action.payload.user_id) {
          return action.payload;
        }
        return user;
      });

	default:
      return state;
  }

}
