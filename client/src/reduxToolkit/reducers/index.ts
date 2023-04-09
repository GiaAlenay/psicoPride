import { combineReducers } from '@reduxjs/toolkit';

// Importa aquí todos tus reducers
import userReducer from './user';

const rootReducer = combineReducers({
  // Agrega aquí tus reducers
  user: userReducer,
});

export default rootReducer;