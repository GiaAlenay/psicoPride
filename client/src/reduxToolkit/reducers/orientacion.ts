import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import axios  from 'axios';

interface Orientacion {
  id: number;
  name: string;
  flag:string;
  createdAt?:Date;
  updatedAt?:Date;
}

export interface OrientacionState {
  data: Orientacion[];
  loading: boolean;
  error: boolean;
}

const initialState: OrientacionState = {
  data: [],
  loading: false,
  error: false,
};

const orientacionSlice = createSlice({
  name: 'orientacion',
  initialState,
  reducers: {
    getOrientacionStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getOrientacionSuccess: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    },
    getOrientacionError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { getOrientacionStart, getOrientacionSuccess, getOrientacionError } = orientacionSlice.actions;

export const getOrientacions = (): AppThunk => async (dispatch) => {
  dispatch(getOrientacionStart());
  try {
    const response = await axios.get('/orientaciones');
    dispatch(getOrientacionSuccess(response.data));
  } catch (err) {
    dispatch(getOrientacionError());
  }
};

export default orientacionSlice.reducer;