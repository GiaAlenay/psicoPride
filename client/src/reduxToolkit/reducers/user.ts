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
    // getUserStart: (state) => {
    //   state.loadingUsers = true;
    //   state.errorGetUsers = false;
    // },
    // getUserSuccess: (state, action: PayloadAction<any>) => {
    //   state.users = action.payload;
    //   state.loadingUsers = false;
    //   state.errorGetUsers = false;
    // },
    // getUserError: (state) => {
    //   state.loadingUsers = false;
    //   state.errorGetUsers = true;
    // },
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

// export const fetchUser = (): AppThunk => async (dispatch) => {
//   dispatch(getUserStart());
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//     dispatch(getUserSuccess(response.data));
//   } catch (err) {
//     dispatch(getUserError());
//   }
// };

export const createUser=(data:UserAtributtes):AppThunk=>async(dispatch)=>{
  dispatch(createUserLoad())
  try {
    const response = await axios.post('http://localhost:3000/usuarios',data);
    dispatch(creatUserSuccess({status:response.status,message:response.data.message}))
  } catch (error:any) {
    dispatch(createUserError({status:error.response.status ,message:error.response.data.message}))
  }
}

export default userSlice.reducer;