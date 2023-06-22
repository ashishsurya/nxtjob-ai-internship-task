import { createSlice } from '@reduxjs/toolkit';

interface StatusSlice {
  status_arr: string[];
}

const initialState: StatusSlice = {
  status_arr: ['saved', 'applied', 'interviewing', 'offer', 'rejected'],
};

export const statusSlice = createSlice({
  name: 'status-slice',
  initialState,
  reducers: {
    addNewStatus: (state, action: { payload: { data: string } }) => {
      state.status_arr.push(action.payload.data);
    },
  },
});


export const { addNewStatus } = statusSlice.actions

export default statusSlice.reducer


