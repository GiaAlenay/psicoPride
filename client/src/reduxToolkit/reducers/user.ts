import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import axios  from 'axios';
import {UserAtributtes} from '../../interfaces'

interface User {
  id: number;
  name: string;
  email: string;
}
interface Response{
  status?:number;
  message?:string;
}

export interface UserGlobalState {
  users: User[];
  loadingUsers: boolean;
  errorGetUsers: boolean;
  responseCreateUser:Response;
  loadingCreateUser:boolean;
}

const initialState: UserGlobalState = {
  users: [],
  loadingUsers: false,
  errorGetUsers: false,
  responseCreateUser:{},
  loadingCreateUser:false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    createUserLoad: (state) => {
      state.loadingCreateUser = true;
    },
    creatUserSuccess: (state, action: PayloadAction<any>) => {
      state.responseCreateUser = action.payload;
      state.loadingCreateUser = false;
    },
    createUserError: (state, action: PayloadAction<any>) => {
      state.loadingCreateUser = false;
      state.responseCreateUser = action.payload;
    },
  },
});

export const { createUserLoad, creatUserSuccess, createUserError } = userSlice.actions;


export const createUser=(data:UserAtributtes):AppThunk=>async(dispatch)=>{
  dispatch(createUserLoad())
  try {
    const response = await axios.post('/usuarios',data);
    dispatch(creatUserSuccess({status:response.status,message:response.data.message}))
  } catch (error:any) {
    dispatch(createUserError({status:error.response.status ,message:error.response.data.message}))
  }
}

export default userSlice.reducer;