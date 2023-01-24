import React, { useEffect } from 'react';
import { useFirestoreCollection } from '@/hooks/useFirestoreCollection';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setGames, gamesLoading } from '@/store/slices/gamesSlice';
import { Link } from 'react-router-dom';

const Games = () => {
  const dispatch = useAppDispatch();

  const getGames = async () => {
    dispatch(gamesLoading());
    const games = await useFirestoreCollection('games');
    dispatch(setGames(games));
  }

  useEffect( () => {
    getGames();
  }, []);

  const games = useAppSelector(state => state.games.games);

  return (
    <>
      {games.map((game) => <div key={game.id}><Link to={game.id}> {game.name} </Link></div>)}
    </>
  );
};

export default Games;
