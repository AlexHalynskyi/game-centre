import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/store/slices/userSlice';
import gamesReducer from '@/store/slices/gamesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    games: gamesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
