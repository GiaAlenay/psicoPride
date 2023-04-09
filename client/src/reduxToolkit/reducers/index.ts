import { combineReducers } from '@reduxjs/toolkit';

// Importa aquí todos tus reducers
import userReducer from './user';
import sexoReducer from './sexo'

const rootReducer = combineReducers({
  // Agrega aquí tus reducers
  user: userReducer,
  sexo:sexoReducer,
});

export default rootReducer;