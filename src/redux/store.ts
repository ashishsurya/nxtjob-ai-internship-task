import { configureStore } from '@reduxjs/toolkit';
import newJobDialogSliceReducer from './slices/dialogs/newJobDialogSlice';
import jobsReducer from './slices/jobs/jobsSlice';
import statusReducer from './slices/jobs/statusSlice';

export const store = configureStore({
  reducer: {
    newJobDialog: newJobDialogSliceReducer,
    jobs: jobsReducer,
    status: statusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
