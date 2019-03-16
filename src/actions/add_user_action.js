import { ADD_PERSON } from './types';
import axios from 'axios';

export default function addUserAction(user) {
 //console.log(user)
  return dispatch => {
    axios.post(`http://localhost/s2r/user`, {user})
    .then(res => {
      dispatch(addUserAsync(res.data));
    });
    
    
  }
}

function addUserAsync(user){
  return {
    type: ADD_PERSON,
    payload: user
  };
}
