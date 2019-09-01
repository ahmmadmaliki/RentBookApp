import axios from 'axios';

export const getGenre = () => {
  return {
    type: 'GET_GENRE',
    payload: axios.get ('http://localhost:3030/bookrent/genre'),
  };
};