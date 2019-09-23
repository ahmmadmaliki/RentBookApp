import axios from 'axios';

export const getDonation = () => {
  return {
    type: 'GET_DONATION',
    payload: axios.get ('http://localhost:3030/bookrent/donate'),
  };
};
export const updateDonation = (data,id) => {
  return {
    type: 'UPDATE_DONATION',
    payload: axios.patch (`http://localhost:3030/bookrent/donate?id=${id}`,data),
  };
};