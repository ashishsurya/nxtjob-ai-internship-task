import { configureStore } from '@reduxjs/toolkit';
import newJobDialogSliceReducer from './slices/dialogs/newJobDialogSlice';

export const store = configureStore({
  reducer: {
    newJobDialog: newJobDialogSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
