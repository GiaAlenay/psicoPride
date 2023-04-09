import { combineReducers } from '@reduxjs/toolkit';

// Importa aquí todos tus reducers
import userReducer from './user';
import sexoReducer from './sexo'
import genderReducer from './gender'

const rootReducer = combineReducers({
  // Agrega aquí tus reducers
  user: userReducer,
  sexo:sexoReducer,
  gender:genderReducer
});

export default rootReducer;