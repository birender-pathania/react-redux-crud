import { UPDATE_USER } from './types';
import axios from 'axios';
export default function updateUser(user) {
  //console.log(person)
  return dispatch => {
     axios.put(`http://localhost/s2r/user/${user.user_id}`,{user})
     .then(res => {
      dispatch(updatePersonAsync(res.data));
    });

    
  }
}

function updatePersonAsync(user){
  return {
    type: UPDATE_USER,
    payload: user
  };
}
