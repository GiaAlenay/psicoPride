import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import axios  from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserState {
  data: User[];
  loading: boolean;
  error: boolean;
}

const initialState: UserState = {
  data: [],
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getUserSuccess: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    },
    getUserError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { getUserStart, getUserSuccess, getUserError } = userSlice.actions;

export const fetchUser = (): AppThunk => async (dispatch) => {
  dispatch(getUserStart());
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch(getUserSuccess(response.data));
  } catch (err) {
    dispatch(getUserError());
  }
};

export default userSlice.reducer;