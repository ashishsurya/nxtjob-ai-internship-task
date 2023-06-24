import { configureStore } from '@reduxjs/toolkit';
import newJobDialogReducer from './slices/dialogs/newJobDialogSlice';
import jobsReducer from './slices/jobs/jobsSlice';
import statusReducer from './slices/jobs/statusSlice';
import jobViewDialogReducer from './slices/dialogs/jobViewDiologSlice';

export const store = configureStore({
  reducer: {
    newJobDialog: newJobDialogReducer,
    jobs: jobsReducer,
    status: statusReducer,
    jobViewDialog: jobViewDialogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
