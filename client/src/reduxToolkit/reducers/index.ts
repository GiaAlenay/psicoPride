import { combineReducers } from '@reduxjs/toolkit';
// Importa aquí todos tus reducers
import userReducer from './user';
import sexoReducer from './sexo'
import genderReducer from './gender'
import orientacionReducer from './orientacion';
import chatReducer from './chat'
import BibliotecaReducer from './biblioteca'


const rootReducer = combineReducers({
  // Agrega aquí tus reducers
  user: userReducer,
  sexo:sexoReducer,
  gender:genderReducer,
  orientacion:orientacionReducer,
  chat:chatReducer,
  biblioteca:BibliotecaReducer
});

export default rootReducer;