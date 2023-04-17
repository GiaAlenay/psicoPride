import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import axios  from 'axios';

interface Gender {
  id: number;
  name: string;
  createdAt?:Date;
  updatedAt?:Date;
}

export interface GenderState {
  data: Gender[];
  loading: boolean;
  error: boolean;
}

const initialState: GenderState = {
  data: [],
  loading: false,
  error: false,
};

const genderSlice = createSlice({
  name: 'gender',
  initialState,
  reducers: {
    getGenderStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getGenderData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    },
    getGenderError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { getGenderStart, getGenderData, getGenderError } = genderSlice.actions;

export const getGenders = (): AppThunk => async (dispatch) => {
  dispatch(getGenderStart());
  try {
    const response = await axios.get('/generos');
    dispatch(getGenderData(response.data));
  } catch (err) {
    dispatch(getGenderError());
  }
};

export default genderSlice.reducer;