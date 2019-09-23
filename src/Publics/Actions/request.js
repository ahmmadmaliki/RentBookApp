import axios from 'axios';

export const getRequest = () => {
  return {
    type: 'GET_REQUEST',
    payload: axios.get ('http://localhost:3030/bookrent/request'),
  };
};
export const updateRequest = (data,id) => {
  return {
    type: 'UPDATE_REQUEST',
    payload: axios.patch (`http://localhost:3030/bookrent/request?id=${id}`,data),
  };
};