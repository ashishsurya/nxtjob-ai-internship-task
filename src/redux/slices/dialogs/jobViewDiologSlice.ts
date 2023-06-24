import { createSlice } from '@reduxjs/toolkit';
import { ModalStateInterface } from './newJobDialogSlice';

const initialState: ModalStateInterface = {
  open: false,
};

export const jobViewDialogSlice = createSlice({
  name: 'job-view-dialog-slice',
  initialState,
  reducers: {
    openJobViewDialog: (state) => {
      state.open = true;
    },
    closeJobViewDialog: (state) => {
      state.open = false;
    },

    handleJobViewDialog: (state, action: { payload: boolean }) => {
      state.open = action.payload;
    },
  },
});

export const { closeJobViewDialog, openJobViewDialog, handleJobViewDialog } =
  jobViewDialogSlice.actions;

export default jobViewDialogSlice.reducer;
