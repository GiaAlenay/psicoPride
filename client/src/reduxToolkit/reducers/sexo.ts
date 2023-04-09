import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import axios  from 'axios';

interface Sexo {
  id: number;
  name: string;
  createdAt?:Date;
  updatedAt?:Date;
}

export interface SexoState {
  data: Sexo[];
  loading: boolean;
  error: boolean;
}

const initialState: SexoState = {
  data: [],
  loading: false,
  error: false,
};

const sexoSlice = createSlice({
  name: 'sexo',
  initialState,
  reducers: {
    getSexoStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSexoSuccess: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    },
    getSexoError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { getSexoStart, getSexoSuccess, getSexoError } = sexoSlice.actions;

export const getSexos = (): AppThunk => async (dispatch) => {
  dispatch(getSexoStart());
  try {
    const response = await axios.get('http://localhost:3000/sexos');
    dispatch(getSexoSuccess(response.data));
  } catch (err) {
    dispatch(getSexoError());
  }
};

export default sexoSlice.reducer;