import {combineReducers} from 'redux';

import book from './item';
import genres from './genres';
import users from './users';
import donation from './donation';
import request from './request';

const rootReducer = combineReducers ({
  book,
  genres,
  users,
  donation,
  request
});

export default rootReducer;