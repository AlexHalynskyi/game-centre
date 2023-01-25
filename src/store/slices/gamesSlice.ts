import { createSlice } from '@reduxjs/toolkit';

interface IGame {
  name: string,
  description: string,
  id: string,
  icon: string,
  categoryIds: number[],
}

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    loading: 'idle',
    games: [] as IGame[],
  },
  reducers: {
    gamesLoading(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    setGames(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.games = action.payload
      }
    },
  },
});

export const { gamesLoading, setGames } = gamesSlice.actions;

export default gamesSlice.reducer;
