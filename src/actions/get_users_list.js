import { GET_USERS_LIST } from './types';
import axios from 'axios';

export default function getUsersList() {
  return dispatch => {
     axios.get('http://localhost/s2r/users')
      .then(res => {

        const user = res.data.map(user => {
          return user;
        });
        dispatch(getUsersListAsync(user));
      })
      .catch(error=>{
        console.log(error.response);
             //throw(error.response);
          });
  }
}

function getUsersListAsync(user){
  //console.log(people)
  return {
    type: GET_USERS_LIST,
    payload: user
  };
}
