import { DELETE_USER } from './types';
import axios from 'axios';

export default function deleteUser(user) {
 
  return dispatch => {
    axios.delete(`http://localhost/s2r/user/${user}`)
    .then(response =>{
     // console.log(response)
     dispatch(deleteUserAsync(response.data));
    });

  }
}

function deleteUserAsync(user){
  //console.log(person)
  return {
    type: DELETE_USER,
    payload: { user_id: user.result }
  };
}
