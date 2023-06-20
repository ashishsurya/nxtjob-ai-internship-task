import { createSlice } from '@reduxjs/toolkit';

interface NewJobDialogSlice {
  open: boolean;
}

const initialState: NewJobDialogSlice = {
  open: false,
};

export const newJobDialogSlice = createSlice({
  name: 'new-job-dialog-slice',
  initialState,
  reducers: {
    set: (state, action: { payload: boolean; type: string }) => {
      state.open = action.payload;
    },
  },
});

export const { set } = newJobDialogSlice.actions;

export default newJobDialogSlice.reducer;
