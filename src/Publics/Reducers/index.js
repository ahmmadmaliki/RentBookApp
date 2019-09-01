import {combineReducers} from 'redux';

import book from './item';
import genres from './genres';
import users from './users';

const rootReducer = combineReducers ({
  book,
  genres,
  users
});

export default rootReducer;